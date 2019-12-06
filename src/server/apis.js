import Axios from "./axios";

class Api extends Axios {
  /**
   * 获取商品数据
   * @param {Object} params typeid
   */
  async login(params = {}) {
    return await this.axios("POST", "sport/user/login", params);
  }  
  async getFootBallMatch(params = {}) {
    return await this.axios("POST", "sport/football/getFootBallMatch", params);
  }  


  
}

export default new Api();