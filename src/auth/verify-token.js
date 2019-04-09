import jwt from 'jsonwebtoken';

async function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token)
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  try {
    const decoded = await jwt.verify(token, req.app.get('secretKey'));
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res
      .status(401)
      .send({ auth: false, message: 'Failed to authenticate token.' });
  }
}
export default verifyToken;
