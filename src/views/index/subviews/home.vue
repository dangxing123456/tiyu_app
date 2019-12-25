<template>
  <div class="container">
    <div class="main">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-swipe :autoplay="3000" class="banner">
          <van-swipe-item v-for="(img, index) in imgList" :key="index">
            <img :src="img.url" />
          </van-swipe-item>
        </van-swipe>
        <!-- <div class="notice">
        <van-icon class="yin" class-prefix="icon" name="yinliang" />
        <van-swipe :autoplay="3000" vertical class="notice-list" :show-indicators="false">
          <van-swipe-item v-for="(image, index) in 4" :key="index">123456789</van-swipe-item>
        </van-swipe>
        </div>-->
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
        <div
          class="hot"
          v-for="(image, index) in list"
          :key="index"
          v-if="image.footBallBet"
          @click="go(image)"
        >
          <div class="top">
            <div class="img">
              <img :src="image.hIcon" />
              <h3>{{image.hcn}}</h3>
            </div>
            <div class="text">
              <p>{{image.lcnAbbr}}</p>
              <p>{{image.date}} {{image.time}}</p>
            </div>
            <div class="img">
              <img :src="image.aIcon" />
              <h3>{{image.acnAbbr}}</h3>
            </div>
          </div>
          <!-- <div class="info"> -->
          <!-- <span>胜 {{image.footBallBet.odds_list.had.odds[image.footBallBet.odds_list.had.odds.length-1].h}}</span>
            <span>平 {{image.footBallBet.odds_list.had.odds[image.footBallBet.odds_list.had.odds.length-1].d}}</span>
          <span>负 {{image.footBallBet.odds_list.had.odds[image.footBallBet.odds_list.had.odds.length-1].a}}</span>-->
          <!-- <div class="btn">立即下注</div> -->
          <!-- </div> -->
        </div>

        <div class="title">
          <h3>大神推单</h3>
          <!-- <van-icon name="arrow" @click="$router.push('/documentary')" /> -->
        </div>
        <div class="user-list" v-for="(item,index) in person" :key="index">
          <div class="item">
            <div class="top">
              <div class="avatar">
                <img :src="item.icon || user_img" alt />
                <!-- <img :src="$store.state.userInfo.icon " /> -->
              </div>
              <div class="info">
                <div class="username">
                  <p>{{item.nickname}}
                  </p>
                  <div class="date">截至{{$METHOD.format(item.endTime/1000,'MM-dd hh:mm')}}</div>
            <div class="bottom">
              <div class="btn" @click.stop="showPopup(item)">跟一单</div>
            </div>
                </div>
              </div>
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
      </van-pull-refresh>
    </div>
    <popup ref="pop" v-model="currentValue"></popup>
  </div>
</template>
<script>
import user_img from "../../../assets/images/default.png";

import popup from "../../../components/popup/popup";
export default {
  name: "home",
  data() {
    return {
      show1: false,
      list: [],
      person: [],
      currentValue: false,
      imgList: [],
      user_img: user_img,
      isLoading: false
    };
  },
  components: {
    popup
  },
  created() {
    this.getList();
    this.getTopPerson();
    this.getImg();
  },
  mounted() {},
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.getList();
        this.getTopPerson();
        this.getImg();
        this.isLoading = false;
      }, 500);
    },
    getImg() {
      this.$SERVER.getSlideShowImags().then(res => {
        this.imgList = res.data.list;
      });
    },
    getList() {
      this.$SERVER
        .getHotMatchs({
          pagenum: 1,
          pagesize: 10
        })
        .then(res => {
          this.list = res.data.list;
        });
    },
    getTopPerson() {
      this.$SERVER.getTopPerson().then(res => {
        this.person = res.data.list;

        for (var i = 0; i < this.person.length; i++) {
          this.person[i].type = 1;
          var userInfor = {
            nickname: this.person[i].nickname
          };
          this.person[i].userInfor = userInfor;
          this.person[i].id = this.person[i].orderId;
        }
      });
    },
    showPopup(item) {
      this.show1 = true;
      this.currentValue = true;
      this.$refs.pop.show = true;
      this.$refs.pop.list = item;
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
    },
    go(item) {
      if (item.type == 1) {
        this.$router.push({
          name: "matchFenxi",
          params: {
            head: {
              id: item.id,
              zhu: item.hcn,
              ke: item.acn,
              hIcon: item.hIcon,
              aIcon: item.aIcon,
              time: item.date + " " + item.time,
              fsH: item.fsH,
              fsA: item.fsA,
              htsH: item.htsH,
              htsA: item.htsA,
              scoreStatus: item.scoreStatus
            }
          }
        });
      } else {
        this.$router.push({
          name: "fenxinBasket",
          params: {
            data: {
              id: item.mId,
              acn: item.acn,
              hcn: item.hcn,
              hIcon: item.hIcon,
              aIcon: item.aIcon,
              playStatus: item.playStatus,
              bdate: item.bdate,
              btime: item.btime,
              acore: item.acore,
              hcore: item.hcore,
              type: this.type
            }
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    // object-fit: cover;
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
    width: 80%;
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

  border-bottom: 1px solid #eee;
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 5px 15px;
    img {
      display: block;
      width: 30px;
      height: 30px;
      margin: auto;
      flex-grow: 1;
    }

    h3 {
      font-size: 14px;
      padding: 5px 0;
    }
    .text {
      flex-grow: 1;
      width: 0;
      p {
        font-size: 12px;
        color: #777;
        padding: 5px 0;
      }
    }
    .img {
      width: 100px;
    }
  }
  .info {
    height: 35px;
    line-height: 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    span {
      display: block;
      width: 80px;
      border: 1px solid #777;
      color: #777;
      margin-right: 10px;
      font-size: 12px;
    }
    .btn {
      font-size: 14px;
      width: 70px;
      color: #fff;
      background: #e73736;
    }
  }
}
.user-list {
  background: #fff;
  padding: 10px 20px;
  border-bottom: 1px solid #eeeeee;
  .top {
    display: flex;
    .avatar {
      margin-right: 10px;
      margin-left: 20px;
      img {
        width: 30px;
        height: 30px;
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
          color: #777;
          margin-right: 10px;
        }
        p {
          font-size: 14px;
          width: 75px;
          line-height: 30px;
          span {
            color: #e73736;
          }
        }
        .date {
          font-size: 12px;
          line-height: 30px;
          color: #777;
          float: right;
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
  margin-left: 10px;
  p {
    font-size: 14px;
    color: #777;
    // color: #e73736;
  }
  .btn {
    width: 70px;
    height: 30px;
    line-height: 30px;
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

