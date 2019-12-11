<template>
  <div class="container" id="shop">
    <navBar :goback="true" title>
      <div class="right" slot="right">
        <!-- <span class="shai">筛</span> -->
        <span>
          <img src="../../assets/images/shuaxin.png" alt />
        </span>
      </div>
      <!-- <van-dropdown-menu class="menu" slot="title">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>-->
    </navBar>

    <div class="main">
      <div class="wrap" v-for="(item,index) in $store.state.result" :key="index">
        <div class="title">
          <span>{{item.date}}</span>
          <span>{{item.num}}</span>
        </div>
        <div class="test">
          <div class="left">
            <p class="first">{{item.num}}</p>
            <p>{{item.lcnAbbr}}</p>
            <p>{{item.time}}截止</p>
          </div>
          <div class="right">
            <div class="div1">
              <span>{{item.hcn}}</span>
              <span>VS</span>

              <span>{{item.acnAbbr}}</span>
            </div>
            <div class="tab" v-if="item.footBallBet">
              <div class="left1">
                <p class="p1">
                  <span class="p1-first">{{item.single}}</span>
                </p>
                <p class="p2">
                  <span class="p2-first">{{item.goalline}}</span>
                </p>
              </div>
              <div class="center" v-if="item.footBallBet">
                <ul>
                  <li
                    v-for="(item,i) in item.footBallBet"
                    :key="i"
                    v-if="i<6"
                    :class="addColor(index,i)"
                    @click="push(index,i,item)"
                  >
                    <span v-if="i==0 || i==3">胜</span>
                    <span v-else-if="i==1 || i==3">平</span>
                    <span v-else-if="i==2 || i==3">负</span>
                    <span>{{item}}</span>
                  </li>
                </ul>
              </div>
              <div class="right1">
                <span ref="sp" @click="$router.push('/allplay/'+index)">全部比赛</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="bot-btn">
        <div class="text">
          <p>至少选择{{this.$store.state.replayData.length}}场比赛</p>
          <p class="pei">[页面赔率仅供参考,请以实体票为准]</p>
        </div>
        <div class="btn">
          <van-button type="default" size="large">清空</van-button>
          <van-button type="danger" size="large" @click="$router.push('/confirmPlan')">确定</van-button>
        </div>
      </div>
      <!-- 下拉菜单 -->
      <!-- <van-action-sheet v-model="show" :actions="actions">
        <div class="content">
          <div class="head">
            <h3>赛事筛选</h3>
            <span>清空</span>
          </div>
          <div class="wrapper">
            <ul>
              <li v-for="(item,index) in 8" :key="index">西甲(8)</li>
            </ul>
          </div>
          <div class="senf">
            <h3>赔率筛选</h3>
          </div>
          <div class="bottom">
            <div class="radio">
              <van-checkbox v-model="checked">赔率小于:</van-checkbox>
              <input type="text" value="1.5" />
            </div>
            <div class="con">
              <div>
                <p>赔率筛选范围：</p>
              </div>
              <div>
                <p>足球 胜平负/让球胜平负</p>
                <p>篮球 胜负/让分胜负</p>
              </div>
            </div>
          </div>
          <div class="btn">
            <van-button type="default" size="large">取消</van-button>
            <van-button type="danger" size="large">确定</van-button>
          </div>
        </div>
      </van-action-sheet>-->
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "racefootball",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      a: ""
    };
  },
  mounted() {},
  methods: {
    init() {
      var that = this;
      that.$SERVER
        .getFootBall({
          pagenum: 1,
          pagesize: 10
        })
        .then(res => {
          if (res.code == 200) {
            console.log(res.data.list);
            for (var i = 0; i < res.data.list.length; i++) {
              this.$store.state.selectResult.push([[], [], [], [], []]);
              this.$store.state.selectValue.push([[], [], [], [], []]);
            }
            res.data.list.forEach(e => {
              var a;
              var b;
              var c;
              if (!e.footBallBet.odds_list.had) {
                a = "";
                b = "";
                c = "";
              } else {
                a =
                  e.footBallBet.odds_list.had.odds[
                    e.footBallBet.odds_list.had.odds.length - 1
                  ].h;
                b =
                  e.footBallBet.odds_list.had.odds[
                    e.footBallBet.odds_list.had.odds.length - 1
                  ].d;
                c =
                  e.footBallBet.odds_list.had.odds[
                    e.footBallBet.odds_list.had.odds.length - 1
                  ].a;
              }
              this.$store.state.result.push({
                date: e.date,
                num: e.num,
                lcnAbbr: e.lcnAbbr,
                time: e.time,
                hcn: e.hcn,
                acnAbbr: e.acnAbbr,
                goalline: e.footBallBet.odds_list.hhad.goalline,
                footBallBet: [
                  a,
                  b,
                  c,
                  e.footBallBet.odds_list.hhad.odds[
                    e.footBallBet.odds_list.hhad.odds.length - 1
                  ].h,
                  e.footBallBet.odds_list.hhad.odds[
                    e.footBallBet.odds_list.hhad.odds.length - 1
                  ].d,
                  e.footBallBet.odds_list.hhad.odds[
                    e.footBallBet.odds_list.hhad.odds.length - 1
                  ].a,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s0,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s1,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s2,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s3,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s4,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s5,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s6,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s7,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].hh,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].hd,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].ha,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].dh,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].dd,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].da,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].ah,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].ad,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].aa,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0100,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0200,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0201,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0300,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0301,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0302,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0400,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0401,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0402,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0500,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0501,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0502,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].h1,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0000,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0101,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0202,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0303,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].d1,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0001,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0002,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0102,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0003,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0103,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0203,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0004,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0104,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0204,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0005,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0105,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0205,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].a1
                ]
              });
            });

            console.log(this.$store.state.result);
          }
        });
    },
    addColor(i, i2) {
      if (i2 < 3) {
        if (this.$store.state.selectResult[i][0] != undefined) {
          if (
            this.$store.state.selectResult[i][0][i2] == undefined ||
            this.$store.state.selectResult[i][0][i2] == ""
          ) {
            return "";
          } else {
            return "bgColor";
          }
        }
      } else if (i2 >= 3 && i2 < 6) {
        if (this.$store.state.selectResult[i][1] != undefined) {
          if (
            this.$store.state.selectResult[i][1][i2] == undefined ||
            this.$store.state.selectResult[i][1][i2] == ""
          ) {
            return "";
          } else {
            return "bgColor";
          }
        }
      }
    },
    push(index, i, val) {
      if (i >= 0 && i < 3) {
        this.a = 0;
      } else {
        this.a = 1;
      }
      if (
        this.$store.state.selectResult[index][this.a][i] == undefined ||
        this.$store.state.selectResult[index][this.a][i] == ""
      ) {
        this.$set(this.$store.state.selectResult[index][this.a], i, val);
        this.$set(this.$store.state.selectValue[index][this.a], i, val);
      } else {
        this.$set(this.$store.state.selectResult[index][this.a], i, "");
        this.$set(this.$store.state.selectValue[index][this.a], i, "");
      }

      console.log(this.$store.state.selectResult);
    }
  },
  created() {
    this.init();
  }
};
</script>
<style lang="less" scoped>
.bgColor {
  background-color: red;
  color: white !important;
  text-align: center !important;
}
// 修改vant ui内置样式
.menu {
  background: none;
  /deep/ .van-dropdown-menu__title {
    color: white;
  }
  /deep/ .van-dropdown-item__content {
    padding: 0 5px 5px 3px;
    margin: 0 auto;
    .van-cell {
      width: 23%;
      float: left;
      display: flex;
      justify-content: space-between;
      border: 1px solid #cccccc;
      text-align: center;
      padding: 0.2rem 0;
      margin-left: 5px;
      margin-top: 5px;
    }
  }
  /deep/ .van-cell__value {
    display: none;
  }
  /deep/ .van-dropdown-item__option--active {
    border: 1px solid red !important;
    color: red;
  }
}

.main {
  padding-bottom: 120px;

  .title {
    color: #4b4949;
    text-align: center;
    margin-top: 10px;
  }
  .test {
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    font-size: 14px;
    .right {
      font-size: 14px;
      width: 80%;
      .div1 {
        display: flex;
        justify-content: space-around;
        padding-bottom: 15px;

        color: #4b4949;
        span {
          display: inline-block;
          width: 33%;
          text-align: center;
        }
      }
      .tab {
        .left1 {
          float: left;
          color: #4b4949;
          .p1 {
            span {
              display: inline-block;
              height: 30px;
              width: 70px;
              border: 1px solid #eeeeee;
              float: left;
              text-align: center;
              line-height: 30px;
            }
            .p1-first {
              width: 20px;
              background-color: rgb(204, 204, 204);
              color: white;
            }
          }
          .p2 {
            span {
              display: inline-block;
              height: 30px;
              width: 70px;
              border: 1px solid #eeeeee;
              float: left;
              text-align: center;
              line-height: 30px;
            }
            .p2-first {
              width: 20px;
              background-color: rgb(100, 160, 240);
              color: white;
            }
          }
        }
        .center {
          font-size: 12px;
          ul {
            li {
              display: inline-block;
              height: 30px;
              width: 70px;
              border: 1px solid #eeeeee;
              float: left;
              text-align: center;
              line-height: 30px;
              color: #4b4949;
            }
          }
        }
        .right1 {
          color: #4b4949;
          span {
            display: inline-block;
            height: 62px;
            width: 31px;
            border: 1px solid #eeeeee;
            line-height: 30px;
            font-size: 14px;
          }
        }
      }
    }
    .left {
      text-align: center;
      font-size: 12px;
      .first {
        padding-bottom: 20px;

        color: #4b4949;
      }
    }
  }
  .right .shai {
    display: inline-block;
    text-align: center;
    line-height: 20px;
    border: 1px solid #ffffff;
    background-color: #f24a44;
    color: #ffffff;
    width: 20px;
    height: 20px;
    font-size: 14px;
    border-radius: 5px;
  }
  .content {
    background-color: #eeeeee;
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 10px;
      h3 {
        font-size: 16px;
      }
      span {
        font-size: 14px;
        color: #f24a44;
      }
    }
    .wrapper {
      background-color: #fff;
      padding: 10px 5px;
      ul {
        display: flex;
        flex-flow: wrap;
        justify-content: space-around;
        li {
          display: inline-block;
          width: 100px;
          height: 35px;
          border: 1px solid #d6d6d6;
          text-align: center;
          line-height: 35px;
          margin-top: 10px;
        }
      }
    }
    .senf {
      padding: 8px 10px;
      h3 {
        font-size: 16px;
      }
    }
    .bottom {
      background-color: #fff;
      padding: 8px 10px;
      .radio {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        input {
          display: inline-block;
          width: 50px;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
        }
      }
      .con {
        width: 75%;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        padding-top: 10px;
        color: #4b4949;
      }
    }
    .btn {
      display: flex;
      justify-content: space-between;
    }
  }
  .bot-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    .text {
      width: 100%;
      background-color: rgb(250, 235, 275);
      text-align: center;
      padding: 5px 0px;
      font-size: 14px;
      .pei {
        color: rgb(158, 150, 145);
        padding-top: 5px;
      }
    }
    .btn {
      display: flex;
      width: 100%;
    }
  }

  .red {
    color: red !important;
  }
}
</style>