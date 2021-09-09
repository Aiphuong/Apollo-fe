import BaseService from '../baseService/baseService';
import { CURRENT_ENV } from "../configs/env";

class AuthService extends BaseService {

  clientLogin = (body) => {
    return this.post(CURRENT_ENV.API.AUTH, body);
  }

}

export default new AuthService().init("", false);
