<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div class="main">
      <div class="content">
        <div class="head">
          <h3>哈哈哈哈哈哈哈我的我单位的味道是的风口浪尖</h3>
          <div class="text">
            <p>
              发布:
              <span>11月19日 12:44</span>
            </p>
            <p>共837字/193人阅读</p>
          </div>
        </div>
        <div class="con">
          <div class="left">
            <img src="../../assets/images/default.png" alt />
            <div>
              <div class="p1">
                <h3 class="sp">最佳大神推荐</h3>
              </div>
              <p class="p2">
                <span class="span1">近7中7</span>
              </p>
            </div>
          </div>
          <div class="right" ref="right">
            <div class="info" ref="guanzhu" @click="change">
              <van-icon class-prefix="icon" name="jiahao" />未关注
            </div>
            <div class="fensi">
              粉丝
              <span>1613</span>
            </div>
          </div>
        </div>
        <div class="wrap">
          <h3>推荐前瞻:</h3>
          <p class="title">暗室逢灯法撒旦所发生的是sdf是的是的是的是发送到</p>
          <div class="top">
            <div class="img">
              <img src="https://picsum.photos/640/320" />
              <h3>asd</h3>
            </div>
            <div class="text" @click="toast">
              <p>日职</p>
              <p>2019-01-01 11:11:11</p>
              <van-icon name="arrow-down" />
            </div>
            <div class="img">
              <img src="https://picsum.photos/640/320" />
              <h3>asd</h3>
            </div>
          </div>
        </div>

        <div class="time">
          <van-icon class-prefix="icon" name="suozi" />
          <p>支付后显示付费方案</p>
          <p>
            距离售卖截止剩余时间
            <span>06:03:02</span>
          </p>
        </div>
      </div>
      <div class="suggstion">
        <p>内容意见仅供参考,不代表平台意见,投注需谨慎</p>
        <p>如有疑问请联系我们</p>
      </div>
    </div>
    <div class="bottom">
      <div class="money">
        需支付:
        <span>58金币</span>
      </div>
      <div>
        <van-button type="danger">立即支付</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "planDetails",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title
    };
  },
  computed: {},
  watch: {},
  methods: {
    toast() {
      this.$toast({
        message: "支付后显示付费方案",
        
      });
    }
  },
  mounted() {
    // console.log(this.$route)
  }
};
</script>
<style lang="less" scoped>
.content {
  padding: 5px 0;
  background-color: #fff;
  .head {
    padding: 10px;
    border-bottom: 1px solid #eeeeee;
    h3 {
      font-weight: bold;
    }
    .text {
      padding: 10px 0;
      font-size: 12px;
      color: #777;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    .left {
      display: flex;
      align-items: center;
      font-size: 14px;
      img {
        width: 55px;
        margin-right: 15px;
      }
      p {
        margin-top: 4px;
      }
      .p1 {
        .sp {
          font-size: 14px;
          font-weight: bold;
        }
      }
      .p2 {
        font-size: 12px;
        color: white;

        .span1 {
          color: #f24a44;
          display: inline-block;
          height: 16px;
          border: 1px solid #f24a44;
          margin-left: 5px;
          border-radius: 8px;
          padding: 0 8px;
        }
      }
    }
    .right {
      .info {
        font-size: 14px;
        background-color: #f24a44;
        padding: 5px;
        color: white;
        padding: 5px;
        font-size: 12px;
      }
      /deep/ .icon-jiahao {
        font-size: 14px;
      }
      .fensi {
        padding: 8px 0;
        font-size: 12px;
        span {
          color: #f3dc12;
        }
      }
    }
  }
  .wrap {
    padding: 10px;
    h3 {
      font-size: 14px;
      font-weight: bold;
    }
    .title {
      text-indent: 35px;
      font-size: 14px;
      padding: 10px 0;
    }
    .top {
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      padding: 10px 15px;
      box-shadow: 0 0 5px #ccc;
      img {
        display: block;
        width: 50px;
        height: 50px;
        margin: auto;
      }
      h3 {
        font-size: 16px;
        padding: 5px 0;
      }
      .text {
        p {
          font-size: 13px;
          color: #999;
          padding: 5px 0;
        }
      }
      .van-icon {
        margin-top: 20px;
        color: #777;
      }
    }
  }
  .time {
    font-size: 14px;
    color: #777;
    text-align: center;
    /deep/ .icon-suozi {
      border-radius: 50%;
      background-color: #999;
      color: white;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    p {
      padding: 10px 0;
    }
  }
}
.suggstion {
  text-align: center;
  font-size: 12px;
  color: #777;
  p {
    padding: 10px;
  }
}
.bottom {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .money {
    padding: 0 10px;
    span {
      color: #f24a44;
    }
  }
}
</style>