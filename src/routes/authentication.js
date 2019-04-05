import { register, login } from '../controllers/authentication';

export default app => {
  app.route('/authenticate').post(login);

  app.route('/register').post(register);
};
