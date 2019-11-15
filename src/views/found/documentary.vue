<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="head">
        <div @click="detail">
          <span class="img"></span>
          <span>连红榜</span>
        </div>
        <div class="deo" @click="detail1">
          <p><van-icon class-prefix="icon" name="bangdan" /></p>
          <span>命中榜</span>
        </div>
        <div @click="detail2">
          <span class="img1"></span>
          <span>盈利榜</span>
        </div>
      </div>
      <div class="select">
        <van-dropdown-menu class="item">
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <div>关注专家</div>
      </div>
      <div class="zhuanjia" v-if="show">

      </div>
      <div class="content">
        <div @click="detailExpert">
          <div class="top">
            <div class="left">
              <img src="../../assets/images/default.png" alt />
              <h3>追命杀手</h3>
            </div>
            <div class="right">
              <p>一场稳单的推荐一场稳单的推荐一场稳单的推荐一场稳单的推荐一场稳单的推荐</p>
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
              <p>
                实力指数
                <img src="../../assets/images/wenhao.png" alt />
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
        </div>
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
              <span>20元</span>
            </p>
            <p class="yong">
              佣金比例：
              <span>10%</span>
            </p>
          </div>
          <div>
            <div class="num">
              <p>投</p>
              <van-stepper value="10" bind:change="onChange" />
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
    <router-view />
  </div>
</template>

<script>
export default {
  name: "documentary",
  props: {},
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [{ text: "按实力", value: 0 }, { text: "按人气", value: 1 }],
      option2: [{ text: "竞足", value: "a" }, { text: "竞篮", value: "b" }],
      show: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    showPopup() {
      this.show = true;
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
  }
};
</script>
<style lang="less" scoped>
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
      .mon{
        span{
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
    .deo{
      p{
       i{
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
    background: #fff;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      width: 55%;
    }
  }
  .content {
    padding: 10px 0px;
    background-color: #fff;
    border-bottom: 1px solid #cccccc;
    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #cccccc;
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
      .right {
        padding-right: 8px;
        p {
          font-size: 14px;
          height: 80px;
          color: rgb(50, 50, 50);
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 10px 0 10px;
      div {
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