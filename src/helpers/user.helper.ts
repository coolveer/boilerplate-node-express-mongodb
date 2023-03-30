import { Response } from 'express';
import { JsonObject } from 'swagger-ui-express';
const { STATUS, RES_MSG } = require('../responses/const.responses');
import user from '../models/User';
import { makeid } from '../utils/helper.utils';
import { responseHelper } from '../responses';

class UserHelper {
  public data: JsonObject;

  async userSignUp(
    res: Response,
    payload: {
      name: string;
      email: string;
      password: string;
      wallet: string;
      //ss
    }
  ) {
    console.log('hehe');
    payload.wallet = makeid(32);
    const newUser = new user(payload);
    try {
      const savedUser = await newUser.save();
      this.data = {
        error: false,
        data: savedUser,
        message: RES_MSG.CREATEUSER,
        status: STATUS.SUCCESS
      };
      return responseHelper.success(res, this.data);
    } catch (err) {
      this.data = {
        error: true,
        data: {},
        message: RES_MSG.SERVER_ERROR,
        status: STATUS.INTERNALSERVER
      };
      return responseHelper.error(res, this.data);
    }
  }
}

export default new UserHelper();
