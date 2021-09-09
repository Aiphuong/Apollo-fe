import BaseService from '../baseService/baseService';
import { CURRENT_ENV } from "../configs/env";
class SliderService extends BaseService {
    getList = (params) => {
        return this.get(CURRENT_ENV.API.GET_SLIDER, params);
      }
    }
    
export default new SliderService(false, false);