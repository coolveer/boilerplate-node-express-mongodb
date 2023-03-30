import * as config from './config';
import { connect } from './connection';

(async () => {
  await config.initiate();
})();

import App from './app';
import UserController from './controllers/user.controller';

const app = new App([new UserController()]);

connect();

app.listen();
