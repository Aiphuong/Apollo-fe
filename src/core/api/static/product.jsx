import BaseService from '../baseService/baseService';
import { CURRENT_ENV } from "../configs/env";
class ProductService extends BaseService {
    getList = (params) => {
        return this.get(CURRENT_ENV.API.GET_PRODUCT, params);
      }
    }
    
export default new ProductService(false, false);