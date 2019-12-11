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
  //短信校验
  async checknum(params = {}) {
    return await this.axios("POST", "user/checknum", params);
  }
  //充值密码
  async resetPassword(params = {}) {
    return await this.axios("POST", "user/resetPassword", params);
  }
  //校验用户是否注册
  async checkUserInfor(params = {}) {
    return await this.axios("POST", "user/checkUserInfor", params);
  }
  //足彩跟单列表查询
  async getFootBallCanFollowOrderList(params = {}) {
    return await this.axios(
      "POST",
      "football/getFootBallCanFollowOrderList",
      params
    );
  }
  //足球跟单
  async footBallFollowOrder(params = {}) {
    return await this.axios("POST", "football/footBallFollowOrder", params);
  }
  //获取篮彩比赛列表
  async getBasketBallMatch(params = {}) {
    return await this.axios("POST", "basketball/getBasketBallMatch", params);
  }
}

export default new Api();
