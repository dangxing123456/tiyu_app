<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div class="main">
      <van-tabs title-inactive-color="#333333" title-active-color="#f24a44">
        <van-tab title="资深专家">
          <commonExperts :show="show"></commonExperts>
        </van-tab>
        <van-tab title="盈利专家">
          <commonExperts :show1="show1"></commonExperts>
        </van-tab>
        <van-tab title="连红专家">
          <commonExperts :show2="show2"></commonExperts>
        </van-tab>
        <van-tab title="我的关注">
          <div class="wrap">
            <h3 class="hh">您关注的专家发布的新推荐</h3>
            <div class="wrapper" v-for="(item,index) in 10" :key="index" @click="detail">
              <div class="wrapper-top">
                <div class="left">
                  <img src="https://picsum.photos/50/50" alt />
                  <div class="left-span">
                    <span class="peo">CUBA才教练</span>
                    <span class="dan">近7单中7单</span>
                  </div>
                </div>
                <div class="right">
                  <h3>100%</h3>
                  <p>命中率</p>
                </div>
              </div>
              <div class="wrapper-center">
                <h3>冠军联赛 给我冲冲 rng牛逼 ig牛逼 fpx牛逼</h3>
                <div class="vspk">
                  <div class="left">
                    <span class="xingqi">星期三</span>
                    <span class="zhandui">皇家马德里&nbsp;&nbsp;&nbsp;</span>VS
                    <span>&nbsp;&nbsp;&nbsp;哈哈哈哈哈</span>
                  </div>
                  <div class="right">
                    <van-icon class-prefix="icon" name="qian" />
                    <span>58金币</span>
                  </div>
                </div>
              </div>
              <div class="wrapper-bottom">
                <div class="time">
                  <p>
                    <span>竟足-发布：11-05 22:05</span> |
                    <span>截止：11-05 22:05</span>
                  </p>
                </div>
                <div class="num">
                  <img src="../../assets/images/num.png" alt />
                  <span>315</span>
                </div>
              </div>
            </div>
            <h3 class="hh">您关注的专家</h3>
            <commonExperts :show="show"></commonExperts>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
import commonExperts from "../../components/commonBall/commonExperts";
export default {
  name: "experts",
  props: {},
  components: {
    navBar,
    commonExperts
  },
  data() {
    return {
      title: this.$route.meta.title,
      flag: false,
      content: "+关注",
      bg_color: "red",
      show: false,
      show1: true,
      show2: true
    };
  },
  computed: {},
  watch: {},
  methods: {
    change() {
      this.flag = !this.flag;
      if (this.flag) {
        this.content = "已关注";
        this.bg_color = "#777";
      } else {
        this.content = "+关注";
        this.bg_color = "red";
      }
    },
    detail() {
      this.$router.push({
        path: "/planDetails"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  .text {
    width: 65px;
    color: #f24a44;
    span {
      font-size: 25px;
    }
  }
  .center {
    // width: 60%;
  }
  div {
    font-size: 14px;
    img {
      border-radius: 50%;
    }
    p {
      padding: 5px 0;
    }
    .p1 {
      font-size: 12px;
      .span1 {
        border: 1px solid #63b8ff;
        color: #63b8ff;
        display: inline-block;
        height: 16px;
        line-height: 16px;
        width: 70px;
        text-align: center;
        border-radius: 8px;
      }
      .span2 {
        color: #ffffff;
        background-color: #f24a44;
        display: inline-block;
        height: 16px;
        line-height: 16px;
        width: 40px;
        text-align: center;
        border-radius: 8px;
      }
    }
    .p2,
    .p3 {
      .span2 {
        color: #f24a44;
      }
    }
    .p4 {
      .span1 {
        background-color: #eee;
      }
    }
  }
  .right {
    span {
      display: inline-block;
      width: 65px;
      height: 25px;
      background-color: red;
      border-radius: 3px;
      text-align: center;
      line-height: 25px;
      color: #fff;
    }
  }
}
.wrap {
  padding: 8px;
  .hh {
    font-size: 16px;
    font-weight: bold;
    // padding: 10px 0;
    border-left: 3px solid #f24a44;
    padding: 0 15px;
  }
  .wrapper {
    margin-top: 18px;
    padding: 6px;
    box-shadow: 0 0 5px #cccccc;
    .wrapper-top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        img {
          width: 38px;
          height: 38px;
          border-radius: 50%;
        }

        .left-span {
          float: right;
          line-height: 38px;
          margin-left: 8px;
          font-size: 14px;
          .dan {
            padding: 3px;
            border: 1px solid rgb(121, 155, 151);
            border-radius: 15px;
            font-size: 12px;
            color: rgb(121, 155, 151);
          }
        }
      }

      .right {
        h3 {
          color: red;
        }

        p {
          color: rgb(185, 60, 74);
          font-size: 14px;
        }
      }
    }

    .wrapper-center {
      margin-top: 10px;

      h3 {
        font-size: 15px;
        font-weight: 500;
      }

      .vspk {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: rgb(248, 248, 248);
        height: 30px;

        .left {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 80%;
          font-size: 14px;

          .xingqi {
            color: #999;
          }

          .zhandui {
            margin-left: 15px;
          }
        }

        .right {
          .icon-qian {
            font-size: 13px;
            color: #f24a44;
          }
          span {
            color: #f24a44;
            font-size: 14px;
          }
        }
      }
    }

    .wrapper-bottom {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: #999;

      .num {
      }
    }
  }
}
</style>