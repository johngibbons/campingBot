import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export const register = async (req, res) => {
  const {
    body: { email, password }
  } = req;
  try {
    await User.init();
    const BCRYPT_SALT_ROUNDS = 12;

    const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
    const user = await User.create({ email, password: hashedPassword });
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1h'
    });

    // remove the password from the response object
    const userObj = await user.toObject();

    res.status(201).send({ user: userObj, token });
  } catch (err) {
    if (err.errmsg && err.errmsg.includes('duplicate key error')) {
      res.status(422).send({ error: 'Email is already registered' });
    } else {
      res
        .status(500)
        .send({ error: 'Internal server error. Please try again.' });
    }
  }
};

export const login = async (req, res) => {
  const {
    body: { email, password }
  } = req;

  try {
    // we need the password for authentication
    const user = await User.findOne({ email })
      .select('+password')
      .exec();
    const userWithPw = user.toObject({ transform: false });
    if (!user) {
      res.status(401).send({ error: 'Username or password incorrect.' });
      return;
    }
    const correctPassword = await bcrypt.compare(password, userWithPw.password);
    if (correctPassword) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: '1h'
      });

      // remove the password from the response object
      const userObj = user.toObject();

      res.send({ user: userObj, token });
    } else {
      res.status(401).send({ error: 'Username or password incorrect.' });
    }
  } catch (err) {
    res.status(500).send({ error: 'Internal server error. Please try again.' });
  }
};
