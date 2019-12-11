<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="head">
        <div @click="detail">
          <span class="img"></span>
          <span>连红榜</span>
        </div>
        <div class="deo" @click="detail1">
          <p>
            <van-icon class-prefix="icon" name="bangdan" />
          </p>
          <span>命中榜</span>
        </div>
        <div @click="detail2">
          <span class="img1"></span>
          <span>盈利榜</span>
        </div>
      </div>
      <div class="select">
        <van-tabs title-inactive-color="#333" title-active-color="#f24a44">
          <van-tab>
            <div slot="title">
              <van-dropdown-menu class="item" active-color="#ee0a24">
                <van-dropdown-item v-model="value1" :options="option1" @change="changeValue" />
                <van-dropdown-item v-model="value2" :options="option2" />
              </van-dropdown-menu>
            </div>
            <div class="content">
              <div
                class="con"
                @click="detailExpert"
                v-for="(item,index) in foogBallList"
                :key="index"
              >
                <div class="top">
                  <div class="left">
                    <img src="../../assets/images/default.png" alt />
                    <h3>{{item.userInfor.nickname}}</h3>
                  </div>
                  <div class="right">
                    <p>{{item.describeText}}</p>
                    <div>
                      <span class="span1">足</span>
                      <span class="span2">单关</span>
                      <span class="span3">4连红</span>
                      <span class="span4">起跟金额2元</span>
                      <span class="time">截止:{{item.endTime | formatDate}}</span>
                    </div>
                  </div>
                </div>
                <div class="bottom">
                  <div>
                    <p>
                      实力指数
                      <van-icon @click.stop="shiliPopup" name="question-o" />
                    </p>
                    <p class="money">870.0</p>
                  </div>
                  <div>
                    <p>跟单总额</p>
                    <p class="money">1440.0元</p>
                  </div>
                  <div>
                    <p>跟单人气</p>
                    <p class="money">67</p>
                  </div>
                  <div>
                    <van-button @click.stop="showPopup" type="danger">跟一单</van-button>
                  </div>
                </div>
                <van-popup position="bottom" v-model="show">
                  <div class="popup">
                    <div class="head">
                      <div>
                        <span class="peo">发单人：</span>
                        <span class="com">红单一生一世</span>
                      </div>
                      <div>
                        <span class="peo">投注方式</span>
                        <span class="com">2串1</span>
                      </div>
                    </div>
                    <div class="con">
                      <div>
                        <p class="money">8.0元</p>
                        <p class="text">自购</p>
                      </div>
                      <div>
                        <p class="money">2元</p>
                        <p class="text">起跟金额</p>
                      </div>
                      <div>
                        <p class="money">221人</p>
                        <p class="text">跟单人气</p>
                      </div>
                    </div>
                    <div class="wrap">
                      <div>
                        <p class="mon">
                          实付金额
                          <span>{{item.times}}</span>
                        </p>
                        <p class="yong">
                          佣金比例：
                          <span>10%</span>
                        </p>
                      </div>
                      <div>
                        <div class="num">
                          <p>投</p>
                          
                          <van-stepper :value="bei" @change="onChange" />
                          <p>倍</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div class="btn">
                      <van-button type="default" size="large">取消</van-button>
                      <van-button type="danger" size="large">确定</van-button>
                    </div>
                  </div>
                </van-popup>
              </div>
            </div>
          </van-tab>
          <van-tab title="关注专家">
            <div class="content">
              <div @click="detailExpert">
                <div class="top">
                  <div class="left">
                    <img src="../../assets/images/default.png" alt />
                    <h3>追命杀手</h3>
                  </div>
                  <div class="right">
                    <p>一场稳单的推荐一场稳单的推荐一场稳单的推荐一场稳单</p>
                    <div>
                      <span class="span1">足</span>
                      <span class="span2">单关</span>
                      <span class="span3">4连红</span>
                      <span class="span4">起跟金额2元</span>
                      <span class="time">截止: 11-07 21:49</span>
                    </div>
                  </div>
                </div>
                <div class="bottom">
                  <div>
                    <p>跟单人气</p>
                    <p class="money">870.0</p>
                  </div>
                  <div>
                    <p>跟单总额</p>
                    <p class="money">1440.0元</p>
                  </div>
                  <div>
                    <p>
                      命中率
                      <van-icon @click.stop="mingPopup" name="question-o" />
                    </p>
                    <p class="money">67%</p>
                  </div>
                  <div>
                    <van-button @click.stop="showPopup" type="danger">跟一单</van-button>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>

    <van-popup v-model="shiliShow" round>
      <div class="shili">
        <h3>实力专家指数</h3>
        <div class="wrap">
          <p>实力指数根据用户多项数据</p>
          <ul>
            <li>1.近30日发单4单</li>
            <li>2.近7日盈利率不低于1%</li>
            <li>3.近15日连红1单</li>
            <li>4.近7日命中率不低于40%</li>
            <li>5.近30日盈利率不低于1%</li>
          </ul>
          <p>计算出来的综合数值, 该数字越高,则此发单人整体能力越强,本周状态越好,更容易带领大家红单</p>
        </div>
        <div class="bot" @click="btn">
          <span>确认</span>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="mingShow" round>
      <div class="shili">
        <h3>实力专家指数</h3>
        <div class="wrap wrap1">
          <p>命中率统计的是发单人近7日的发单平均命中率</p>
        </div>
        <div class="bot" @click="btn1">
          <span>确认</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { format } from "../../common/js/mixin";
export default {
  name: "documentary",
  props: {},
  data() {
    return {
      value1: 0,
      value2: "a",
      bei: 10,
      mon: 20,
      option1: [{ text: "按实力", value: 0 }, { text: "按人气", value: 1 }],
      option2: [{ text: "竞足", value: "a" }, { text: "竞篮", value: "b" }],
      show: false,
      shiliShow: false,
      mingShow: false,
      foogBallList: []
    };
  },
  computed: {},
  watch: {},
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return MM + "-" + d + " " + h + ":" + m;
    }
  },
  methods: {
    //获取跟单列表
    getList() {
      this.$SERVER
        .getFootBallCanFollowOrderList({})
        .then(res => {
          this.foogBallList = res.data.list;
          console.log(res);
        })
        .catch(err => {});
    },
    onChange(value) {
      this.mon = value * 2;
    },
    changeValue(value) {
      console.log(value);
    },
    showPopup() {
      this.show = true;
    },
    shiliPopup() {
      this.shiliShow = true;
    },
    mingPopup() {
      this.mingShow = true;
    },
    btn() {
      this.shiliShow = false;
    },
    btn1() {
      this.mingShow = false;
    },
    detail() {
      this.$router.push({
        path: "/redlist"
      });
    },
    detail1() {
      this.$router.push({
        path: "/hitlist"
      });
    },
    detail2() {
      this.$router.push({
        path: "/profitlist"
      });
    },
    detailExpert() {
      this.$router.push({
        path: "/ExpertsSuggest"
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>
<style lang="less" scoped>
.select {
  /deep/ .van-tabs__line {
    display: none;
  }
}
.shili {
  width: 280px;
  font-size: 14px;
  h3 {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  ul li {
    padding: 10px 0;
    color: #f24a44;
  }
  .wrap {
    height: 250px;
    overflow-y: scroll;
    padding: 5px 21px;
  }
  .wrap1 {
    height: 60px;
  }
  .bot {
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: #f24a44;
    border-top: 1px solid #eeeeee;
  }
}
// 弹出层样式
.popup {
  .head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .peo {
      font-size: 12px;
    }
    .com {
      font-size: 14px;
    }
  }
  .con {
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      width: 33%;
      text-align: center;
      border: 1px solid #eeeeee;
      border-top: none;
      padding: 5px 0;
      .money {
        font-size: 14px;
      }
      .text {
        font-size: 12px;
        margin-top: 8px;
      }
    }
  }
  .wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
    div {
      font-size: 14px;
      .yong {
        margin-top: 8px;
      }
      .mon {
        span {
          color: #f24a44;
        }
      }
    }
    .num {
      display: flex;
      align-items: center;
    }
  }
  .btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.main {
  padding: 10px 0px;
  .head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    padding: 7px 25px;
    .deo {
      p {
        i {
          color: red;
          font-size: 35px;
        }
      }
    }
    div {
      text-align: center;
      .img {
        display: block;
        width: 30px;
        height: 30px;
        text-align: center;
        margin: 0 auto;
        background-image: url("../../assets/images/jiangbei.png");
        background-repeat: no-repeat;
        padding-bottom: 6px;
      }
      .img1 {
        display: block;
        width: 30px;
        height: 30px;
        text-align: center;
        margin: 0 auto;
        background-image: url("../../assets/images/yingli.png");
        background-repeat: no-repeat;
        padding-bottom: 6px;
      }
    }
  }
  .select {
  }
  .content {
    .con {
      border-bottom: 1px solid #cccccc;
    }
    padding: 10px 0px;
    background-color: #fff;

    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #cccccc;
      padding-top: 10px;
      .left {
        width: 35%;
        text-align: center;
        h3 {
          font-size: 16px;
          font-weight: 500;
        }
        img {
          width: 50px;
          display: inline;
          margin: 0 auto;
          padding-bottom: 15px;
        }
      }
      .left1 {
        width: 20%;
      }
      .right {
        padding-right: 8px;
        p {
          font-size: 14px;
          height: 80px;
          color: rgb(50, 50, 50);
          width: 290px;
        }
        div {
          padding-bottom: 10px;
          span {
            font-size: 12px;
          }
          .span1 {
            display: inline-block;
            width: 14px;
            height: 16px;
            background-color: rgb(86, 198, 80);
            color: white;
            line-height: 16px;
            text-align: center;
            border-radius: 5px;
          }
          .span2 {
            display: inline-block;
            height: 16px;
            width: 28px;
            border: 1px solid rgb(167, 177, 129);
            color: rgb(167, 177, 129);
            line-height: 16px;
            text-align: center;
            border-radius: 5px;
          }
          .span3 {
            display: inline-block;
            height: 16px;
            border: 1px solid rgb(162, 133, 135);
            color: rgb(162, 133, 135);
            line-height: 16px;
            text-align: center;
            border-radius: 5px;
            padding: 0 2px;
          }
          .span4 {
            display: inline-block;
            height: 16px;
            border: 1px solid rgb(128, 149, 171);
            color: rgb(128, 149, 171);
            line-height: 16px;
            text-align: center;
            border-radius: 5px;
            padding: 0 2px;
          }
          .time {
            font-size: 14px;
            color: black;
          }
        }
      }
    }
    .bottom {
      /deep/ .van-icon-question-o {
        color: #ffd700;
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      div {
        width: 25%;
        text-align: center;
        p {
          font-size: 14px;
          color: #999;
        }
        .money {
          font-size: 16px;
          margin-top: 5px;
          color: rgb(220, 60, 80);
        }
      }
    }
  }
}
</style>