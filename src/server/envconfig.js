/**
 * 环境配置文件
 */
let baseURL;

if (process.env.NODE_ENV === "production") {
  // 干一些线上才要做的事情http://39.108.177.193:12000/sport/
  baseURL = "http://39.108.177.193:12000/sport/";
}
if (process.env.NODE_ENV === "development") {
  // 干一些测试时不可告人的事情
  // baseURL = "http://192.168.0.102:12000/sport/";
  baseURL = "/sport";
  // baseURL = "http://47.244.23.226/api/";`
}
export default { baseURL };
