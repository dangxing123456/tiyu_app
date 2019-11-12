<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="head">
        <div @click="detail">
          <span class="img"></span>
          <span>连红榜</span>
        </div>
        <div @click="detail1">
          <span class="img"></span>
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
      <div class="content">
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
            <p>实力指数<img src="../../assets/images/wenhao.png" alt=""></p>
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
            <van-button type="danger">跟一单</van-button>
          </div>
        </div>
      </div>
    </div>

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
      option2: [{ text: "竞足", value: "a" }, { text: "竞篮", value: "b" }]
    };
  },
  computed: {},
  watch: {},
  methods: {
    detail(){
      this.$router.push({
        path:'/redlist'
      })
    },
    detail1(){
      this.$router.push({
        path:'/hitlist'
      })
    },
    detail2(){
      this.$router.push({
        path:'/profitlist'
      })
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  padding: 10px 0px;
  .head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    padding: 7px 25px;
    div {
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