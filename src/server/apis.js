import Axios from "./axios";

class Api extends Axios {
  /**
   * 获取足球数据
   * @param {Object} params typeid
   */
  async getFootBall(params = {}) {
    // return await this.axios("POST", "football/getFootBallMatch", {});
    return await this.axios("POST", "football/getFootBallMatch", params);
  }
  /**
   * 发送足球数据
   * @param {Object} params typeid
   */
  async footBallBookOrder(params = {}) {
    // return await this.axios("POST", "football/getFootBallMatch", {});
    return await this.axios("POST", "football/footBallBookOrder", params);
  }
}

export default new Api();
