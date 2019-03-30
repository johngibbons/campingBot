const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = mongoose.model('Users');

exports.register = async ({ body: { email, password } }, res) => {
  try {
    const BCRYPT_SALT_ROUNDS = 12;

    const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
    await new User({ email, password: hashedPassword });

    res.send();
  } catch (err) {
    res.send(err);
  }
};

exports.login = async ({ body: { email, password } }, res) => {
  try {
    const user = await User.findOne({ email });
    const correctPassword = await bcrypt.compare(password, user.password);
    if (correctPassword) {
      const token = jwt.sign({ id: user._id }, req.app.get('secretKey'), {
        expiresIn: '1h'
      });
      res.send({ user, token });
    } else {
      res.send('Username or password incorrect.');
    }
  } catch (err) {
    res.send('Username or password incorrect.');
  }
};
