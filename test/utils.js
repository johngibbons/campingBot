import jwt from 'jsonwebtoken';
import User from '../src/models/user';

/* eslint-disable import/prefer-default-export */
export async function createUserWithToken() {
  const validUser = {
    email: 'test@test.com',
    password: 'password',
    passwordConfirm: 'password'
  };
  const user = await User.create(validUser);
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: '1h'
  });

  return { user, token };
}

export function stringifyDates(obj) {
  return JSON.parse(JSON.stringify(obj));
}
