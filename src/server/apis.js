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
  //篮球下注
  async basketBallBookOrder(params = {}) {
    return await this.axios("POST", "basketball/basketBallBookOrder  ", params);
  }
  //篮彩查询可以跟单的订单列表
  async getBasketBallCanFollowOrderList(params = {}) {
    return await this.axios(
      "POST",
      "basketball/getBasketBallCanFollowOrderList",
      params
    );
  }
  //篮彩跟单下注
  async basketBallFollowOrder(params = {}) {
    return await this.axios("POST", "basketball/basketBallFollowOrder", params);
  }
  //足彩查询自己下单历史记录
  async getUserFootBallOrders(params = {}) {
    return await this.axios("POST", "football/getUserFootBallOrders", params);
  }
  //篮彩查询自己下单历史记录
  async getUserBasketBallOrder(params = {}) {
    return await this.axios(
      "POST",
      "basketball/getUserBasketBallOrder",
      params
    );
  }
  //上传头像
  async uploadUserImage(params = {}) {
    return await this.axios("POST", "user/uploadUserImage", params);
  }

  async getMetchantInfor(params = {}) {
    return await this.axios("POST", "query/getMetchantInfor", params);
  }
  async getHotMatchs(params = {}) {
    return await this.axios("POST", "query/getHotMatchs", params);
  }
  async getTopPerson(params = {}) {
    return await this.axios("POST", "query/getTopPerson", params);
  }

  async getShootTop(params = {}) {
    return await this.axios("POST", "query/getShootTop", params);
  }
  async getWinTop(params = {}) {
    return await this.axios("POST", "query/getWinTop", params);
  }
  async updateAttention(params = {}) {
    return await this.axios("POST", "user/updateAttention", params);
  }
  async joinWinTop(params = {}) {
    return await this.axios("POST", "query/joinWinTop", params);
  }
  async getUserInfoByToken(params = {}) {
    return await this.axios("POST", "user/getUserInfoByToken", params);
  }
  
  

  
  
  //消费记录
  async getUserWalletExchangeHIstory(params = {}) {
    return await this.axios(
      "POST",
      "wallet/getUserWalletExchangeHIstory",
      params
    );
  }
}

export default new Api();
