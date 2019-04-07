import request from 'supertest';
import app from '../app';
import User from '../models/user';

beforeEach(async () => {
  // reset Users prior to each test
  await User.deleteMany({});
});

describe('POST /register', () => {
  test('it should create a user if a valid user is sent', async () => {
    const validUser = {
      email: 'test@test.com',
      password: 'password',
      passwordConfirm: 'password'
    };
    const response = await request(app)
      .post('/register')
      .send(validUser);
    expect(response.body).toMatchObject({ user: { email: 'test@test.com' } });
  });
});
