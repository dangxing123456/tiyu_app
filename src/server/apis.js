/* eslint-disable no-dupe-class-members */
import Axios from "./axios";

class Api extends Axios {
  /**
   * 获取足球数据
   * @param {Object} params typeid
   */
  async getFootBall(params = {}) {
    return await this.axios("POST", "football/getFootBallMatch", params);
  }
  /**
   * 发送足球数据
   * @param {Object} params typeid
   */
  async footBallBookOrder(params = {}) {
    return await this.axios("POST", "football/footBallBookOrder", params);
  }
  //短信
  async sendchecknum(params = {}) {
    return await this.axios("POST", "user/sendchecknum", params);
  }
  //注册
  async register(params = {}) {
    return await this.axios("POST", "user/register", params);
  }
  //登录
  async login(params = {}) {
    return await this.axios("POST", "user/login", params);
  }
}

export default new Api();
