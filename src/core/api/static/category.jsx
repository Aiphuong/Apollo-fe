import BaseService from '../baseService/baseService';
import { CURRENT_ENV } from "../configs/env";
class CategoryService extends BaseService {

    getList = (params) => {
        return this.get(CURRENT_ENV.API.GET_CATEGORY, params);
      }
    }
    
export default new CategoryService(false, false);