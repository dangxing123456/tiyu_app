<template>
  <div class="container">
    <div class="main">
      <van-swipe :autoplay="3000" class="banner">
        <van-swipe-item v-for="(image, index) in 4" :key="index">
          <img src="https://picsum.photos/640/320" />
        </van-swipe-item>
      </van-swipe>
      <div class="notice">
        <van-icon class="yin" class-prefix="icon" name="yinliang" />
        <van-swipe :autoplay="3000" vertical class="notice-list" :show-indicators="false">
          <van-swipe-item v-for="(image, index) in 4" :key="index">123456789</van-swipe-item>
        </van-swipe>
      </div>
      <van-grid :column-num="2" class="menu">
        <van-grid-item @click="detailFoot">
          <img src="../../../assets/images/index1.png" />
        </van-grid-item>
        <van-grid-item @click="detailBasket">
          <img src="../../../assets/images/index2.png" />
        </van-grid-item>
      </van-grid>
      <div class="title">
        <h3>最新赛事</h3>
      </div>
      <van-swipe class="hot">
        <van-swipe-item v-for="(image, index) in list" :key="index">
          <div class="top">
            <div class="img">
              <h3>asd</h3>
            </div>
            <div class="text">
              <p>日职</p>
              <p>2019-01-01 11:11:11</p>
            </div>
            <div class="img">
              <h3>asd</h3>
            </div>
          </div>
          <div class="info">
            <span>胜 1.70</span>
            <span>平 1.70</span>
            <span>负 1.70</span>
            <div class="btn">立即下注</div>
          </div>
        </van-swipe-item>
      </van-swipe>

      <div class="title">
        <h3>大神推单</h3>
        <van-icon name="arrow" @click="$router.push('/documentary')" />
      </div>
      <div class="user-list" @click="show">
        <div class="item">
          <div class="top">
            <div class="avatar">
              <img src="https://picsum.photos/50/50" alt />
            </div>
            <div class="info">
              <div class="username">
                <h3>阿萨大阿萨大</h3>
                <p>
                  最高SP
                  <span>2.04</span>
                </p>
                <div class="date">截至11.11 05：05</div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <p>
              7日命中率
              <span>100%</span>
            </p>
            <div class="btn" @click.stop="showPopup">跟一单</div>
          </div>
        </div>
      </div>

      <!-- <div class="title">
        <h3>精选推荐</h3>
        <van-icon name="arrow" />
      </div>
      <div class="wrapper" @click="detailPlan">
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
            <van-icon name="eye" />
            <span>315</span>
          </div>
        </div>
      </div>-->
      <van-popup position="bottom" v-model="show1">
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
    </div>
  </div>
</template>
<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "home",
  data() {
    return {
      show1: false,
      list:[],
      person:[]
    };
  },
  components: {
    navBar
  },
  created() {
   this.getList()
   this.getTopPerson()
  },
  mounted() {},
  methods: {
    getList(){
      this.$SERVER.getHotMatchs().then(res=>{
        this.list =  res.data
      })
    },
    getTopPerson(){
      this.$SERVER.getShootTop().then(res=>{
        this.person = res.data
      })
    },
    showPopup() {
      this.show1 = true;
    },
    show() {
      this.$router.push({
        path: "/ExpertsSuggest"
      });
    },
    detailPlan() {
      this.$router.push({
        path: "/planDetails"
      });
    },
    detailFoot() {
      this.$router.push({
        path: "/racefootball"
      });
    },
    detailBasket() {
      this.$router.push({
        path: "/racebasketball"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 230px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.notice {
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  .yin {
    color: red;
  }
  .icon {
    flex-shrink: 0;
  }
  .notice-list {
    flex-grow: 1;
    height: 35px;
    line-height: 35px;
  }
}
.menu {
  img {
    width: 100%;
    height: auto;
  }
}
.title {
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background: #fff;
  h3 {
    font-size: 16px;
    font-weight: 500;
    padding-left: 8px;
    border-left: 5px solid #f24a44;
  }
  span {
    font-size: 12px;
    color: #ccc;
  }
}
.hot {
  background: #fff;
  padding-bottom: 30px;
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 10px 15px;
    img {
      display: block;
      width: 70px;
      height: 70px;
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
  }
  .info {
    height: 35px;
    line-height: 35px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    span {
      display: block;
      width: 60px;
      border: 1px solid #999;
      color: #666;
      margin-right: 10px;
      font-size: 14px;
    }
    .btn {
      font-size: 16px;
      width: 100px;
      color: #fff;
      background: #e73736;
    }
  }
}
.user-list {
  background: #fff;
  padding: 15px;
  .top {
    display: flex;
    .avatar {
      margin-right: 10px;
      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .info {
      flex-grow: 1;
      .username {
        display: flex;
        h3 {
          font-size: 16px;
          color: #666;
          margin-right: 10px;
        }
        p {
          font-size: 14px;
          flex-grow: 1;
          span {
            color: #e73736;
          }
        }
        .date {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}
.wrapper {
  background: #fff;
  padding: 15px;
  margin-top: 10px;
  box-shadow: 0 0 5px #cccccc;
  width: 85%;
  margin: 0 auto;
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
      font-size: 16px;
      font-weight: 500;
    }
    .vspk {
      margin-top: 10px;
      padding: 5px 15px;
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
          margin-left: 20px;
        }
      }
      .right {
        span {
          color: rgb(185, 60, 74);
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
      display: flex;
      align-items: center;
    }
  }
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
    color: #999;
    span {
      color: #e73736;
    }
  }
  .btn {
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 3px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    background: #e73736;
  }
}
// 弹出层样式
.popup {
  .head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
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
</style>

