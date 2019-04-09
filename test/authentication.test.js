/* eslint-env mocha */
import request from 'supertest';
import expect from 'expect';
import app from '../src/app';

describe('POST /register', () => {
  before(() => {
    process.env.TEST_SUITE = 'authentication-tests';
  });
  it('it should create a user if a valid user is sent', async () => {
    expect.assertions(3);
    const validUser = {
      email: 'test@test.com',
      password: 'password',
      passwordConfirm: 'password'
    };
    const response = await request(app)
      .post('/register')
      .send(validUser);
    expect(response.body).toMatchObject({ user: { email: 'test@test.com' } });
    expect(response.body).toHaveProperty('token');
    expect(response.body).not.toHaveProperty('user.password');
  });

  it('it should fail if user already exists', async () => {
    expect.assertions(3);
    const validUser = {
      email: 'test@test.com',
      password: 'password',
      passwordConfirm: 'password'
    };

    const response1 = await request(app)
      .post('/register')
      .send(validUser);
    expect(response1.body).toMatchObject({ user: { email: 'test@test.com' } });

    const response2 = await request(app)
      .post('/register')
      .send(validUser);

    expect(response2.body).toEqual({ error: 'Email is already registered' });
    expect(response2.status).toEqual(422);
  });
});

describe('POST /authenticate', () => {
  it('it should return authenticated user if exists', async () => {
    expect.assertions(3);
    const validUser = {
      email: 'test@test.com',
      password: 'password',
      passwordConfirm: 'password'
    };

    await request(app)
      .post('/register')
      .send(validUser);

    const response = await request(app)
      .post('/authenticate')
      .send({ email: validUser.email, password: validUser.password });

    expect(response.body).toMatchObject({ user: { email: 'test@test.com' } });
    expect(response.body).toHaveProperty('token');
    expect(response.body).not.toHaveProperty('user.password');
  });

  it('it should return unauthorized with correct error message if password incorrect', async () => {
    expect.assertions(2);
    const validUser = {
      email: 'test@test.com',
      password: 'password',
      passwordConfirm: 'password'
    };

    await request(app)
      .post('/register')
      .send(validUser);

    const response = await request(app)
      .post('/authenticate')
      .send({ email: validUser.email, password: 'wrongpassword' });

    expect(response.body).toEqual({ error: 'Username or password incorrect.' });
    expect(response.status).toEqual(401);
  });
});
