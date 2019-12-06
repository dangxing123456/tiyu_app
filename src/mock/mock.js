import Mock from 'mockjs';

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
 Mock.setup({
    timeout: '200 - 400'
})

const vCode = '123456';

function getVerificatCode (prarms) {
    const prarmsObj = JSON.parse(prarms.body);
    return Object.assign(prarmsObj, {vCode: vCode});
}

function loginFun (prarms) {
    return {
        "code": "200",
        "data": {
            "userId": "T27VZZLAIY6X1911111150021",
            "nickname": "打豆豆",
            "registTime": 1573440509000,
            "sex": 1,
            "mobile": "18302988038",
            "status": 1,
            "token": "7BI5GNK0JTRB1911111200032"
        }
    }
    
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/getVerificatCode', 'post', getVerificatCode); // 获取验证码
Mock.mock('/sport/user/login', 'post', loginFun); //登录