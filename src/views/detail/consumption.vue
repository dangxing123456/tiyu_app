<template>
  <div class="container">
    <navBar></navBar>
    <div class="main">
      <div class="head">
        <img :src="$route.params.icon" alt />
        <div>
          <p>{{$route.params.nickname}}</p>
          <p>{{$METHOD.format($route.params.bookTime/1000,'MM-dd hh:mm')}}</p>
        </div>
      </div>
      <div class="wrap">
        <div class="con">
          <div class="text" v-if="$route.params.ballType=='zc'">{{zorderDesc.describeText}}</div>
          <div class="text" v-else>{{lorderDesc.describeText}}</div>
          <div class="tab">
            <table border="1">
              <tr class="type">
                <th>类型</th>
                <th>消费金额</th>
                <th>单倍金额</th>
                <th>奖金</th>
              </tr>
              <tr class="mon">
                <td>
                  <p v-if="$route.params.ballType=='zc'">竞彩足球</p>
                  <p v-else>竞彩篮球</p>
                </td>
                <td v-if="$route.params.ballType=='zc'">{{zcOrder.times*zcOrder.buyWagers*2}}</td>
                <td v-else>{{lcOrder.times*lcOrder.buyWagers*2}}</td>
                <td v-if="$route.params.ballType=='zc'">{{zcOrder.buyWagers*2}}</td>
                <td v-else>{{lcOrder.buyWagers*2}}</td>
                <td class="mey" v-if="$route.params.ballType=='zc'">{{zcOrder.winMoney}}</td>
                <td v-else>{{lcOrder.winMoney}}</td>
              </tr>
            </table>
          </div>

          <div class="time">
            <div>
              <p>
                <van-icon name="bill" />消费成功
              </p>
            </div>

            <p
              v-if="$route.params.ballType=='zc'"
            >截止时间：{{$METHOD.format(zcOrder.endTime/1000,'MM-dd hh:mm')}}</p>
            <p v-else>截止时间：{{$METHOD.format(lcOrder.endTime/1000,'MM-dd hh:mm')}}</p>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="title">
          <div class="left">
            <h4>消费内容</h4>
            <span v-if="$route.params.ballType=='zc'">保{{zorderDesc.promiseBet}}</span>
            <span v-else>保{{lorderDesc.promiseBet}}</span>
          </div>
          <div class="right" v-if="$route.params.ballType=='zc'">
            <span v-for="(item,i) in gate" :key="i">{{item}}</span>
          </div>
          <div class="right" v-if="$route.params.ballType=='lc'">
            <span v-for="(item,i) in lgate" :key="i">{{item}}</span>
          </div>
        </div>
        <div class="tab" v-if="$route.params.ballType=='zc'">
          <table border="1">
            <tr class="type">
              <th>场次</th>
              <th>主队/客队</th>
              <th>玩法</th>
              <th>选项</th>
              <th>赛果</th>
            </tr>
            <tr class="mon" v-for="(item,i) in zcontent" :key="i">
              <td>
                <p>{{item.num}}</p>
              </td>
              <td>
                <p>{{item.hCnAbbr}}</p>
                <p>2:2(0:1)</p>
                <p>{{item.aCnAbbr}}</p>
              </td>
              <td>让球(-1)</td>
              <td class="color mey">
                <p>[负]</p>
                <p>(1.44)</p>
              </td>
              <td class="mey">负</td>
            </tr>
          </table>
          <div class="info" v-if="dataTime<time">比赛开赛后公开</div>

          <p class="prompt">*页面显示盘口及赔率,奖金计算请以实体票样为准</p>
        </div>
        <div class="tab" v-else>
          <table border="1">
            <tr class="type">
              <th>场次</th>
              <th>主队/客队</th>
              <th>玩法</th>
              <th>选项</th>
              <th>赛果</th>
            </tr>
            <tr class="mon" v-for="(item,i) in lcontent" :key="i">
              <td>
                <p>{{item.num}}</p>
              </td>
              <td>
                <p>{{item.hCnAbbr}}</p>
                <p>2:2(0:1)</p>
                <p>{{item.aCnAbbr}}</p>
              </td>
              <td>让球(-1)</td>
              <td class="color mey">
                <p>[负]</p>
                <p>(1.44)</p>
              </td>
              <td class="mey">负</td>
            </tr>
          </table>

          <p class="prompt">*页面显示盘口及赔率,奖金计算请以实体票样为准</p>
        </div>
      </div>
      <div class="documentary">
        <div class="title">
          <div class="left">
            <h4>跟单用户</h4>
          </div>
        </div>
        <div class="tab">
          <table>
            <tr class="type">
              <th>跟单排名</th>
              <th>用户名</th>
              <th width="50%">跟单金额</th>
            </tr>
            <tr
              class="mon"
              v-for="(item,i) in flowerList"
              :key="i"
              v-if="$route.params.ballType=='zc'"
            >
              <td>
                <span>{{i+1}}</span>

                <img :src="item.icon" alt />
              </td>
              <td>{{item.nickname}}</td>
              <td>{{item.totalMoney}}</td>
            </tr>
            <tr class="mon" v-for="(item,i) in lFlowerList" :key="i" v-else>
              <td>
                <span>{{index+1}}</span>

                <img :src="item.icon" alt />
              </td>
              <td>{{item.nickname}}</td>
              <td>{{item.totalMoney}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="bot" v-if="dataTime>time">
      <p
        v-if="$route.params.ballType=='zc'"
      >截止时间：{{$METHOD.format(zcOrder.endTime/1000,'MM-dd hh:mm')}}</p>
      <p v-else>截止时间：{{$METHOD.format(lcOrder.endTime/1000,'MM-dd hh:mm')}}</p>
      <van-button type="danger" size="large" @click="showPopup">我要跟单</van-button>
    </div>
    <popup ref="pop" v-model="currentValue"></popup>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
import popup from "@/components/popup/popup.vue";
export default {
  name: "consumption",
  props: {},
  components: {
    navBar,
    popup
  },
  data() {
    return {
      list: [],
      finished: false,
      loading: false,
      zorderDesc: {},
      zcontent: [],
      zcOrder: {},
      lorderDesc: {},
      lcontent: [],
      lcOrder: {},
      flowerList: [],
      lFlowerList: [],
      gate: [],
      lgate: [],
      time: "",
      dataTime: new Date().getTime(),
      show1: false,
      currentValue: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    showPopup() {
      var item = {};
      var userInfor = {
        nickname: this.$route.params.nickname
      };
      if (this.$route.params.ballType == "zc") {
        item = {
          type: 1,
          userInfor: userInfor,
          id: this.$route.params.orderId,
          buyWagers: this.zcOrder.buyWagers,
          times: this.zcOrder.times,
          flowCount: this.zcOrder.flowCount
        };
      } else {
        item = {
          type: 2,
          userInfor: userInfor,
          id: this.$route.params.orderId,
          buyWagers: this.lcOrder.buyWagers,
          times: this.lcOrder.times,
          flowCount: this.lcOrder.flowCount
        };
      }

      this.show1 = true;
      this.currentValue = true;
      this.$refs.pop.show = true;
      this.$refs.pop.list = item;
    },
    getList() {
      this.$SERVER
        .getFocusOfDetail({
          orderId: this.$route.params.orderId,
          ballType: this.$route.params.ballType
        })
        .then(res => {
          if (this.$route.params.ballType == "zc") {
            this.flowerList = res.data.zcFlowers;
            this.zcOrder = res.data.zcOrder;
            this.time = this.zcOrder.endTime;
            if (this.dataTime > this.time) {
              this.zorderDesc = JSON.parse(res.data.zcOrder.orderDesc);

              this.gate = this.zorderDesc.gates;
              this.zorderDesc.matchs.forEach(e => {
                this.zcontent.push({
                  aCnAbbr: e.aCnAbbr,
                  hCnAbbr: e.hCnAbbr,
                  num: e.num
                });
              });
            }
          }
          if (this.$route.params.ballType == "lc") {
            this.lFlowerList = res.data.lcFlowers;
            this.lcOrder = res.data.lcOrder;
            if (res.data.lcOrder.length > 0) {
              this.lorderDesc = JSON.parse(res.data.lcOrder.orderDesc);
              this.lgate = this.lorderDesc.gates;
              this.lorderDesc.matchs.forEach(e => {
                this.lcontent.push({
                  aCnAbbr: e.aCnAbbr,
                  hCnAbbr: e.hCnAbbr,
                  num: e.num
                });
              });
            }
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.head {
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  div {
    margin-left: 10px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  p {
    &:first-child {
      font-size: 14px;
      color: #494949;
    }
  }
  p {
    &:last-child {
      font-size: 12px;
      color: #777;
    }
  }
}
.info {
  text-align: center;
  font-size: 13px;
  background-color: #ffefd5;
  color: #ffb90f;
  padding: 10px;
}
.wrap {
  .title {
    color: #777;
    font-size: 13px;
    padding: 5px;
  }
  .con {
    background-color: #fff;
    padding: 10px 10px;
    .text {
      font-size: 14px;
      color: #777;
      padding: 5px 0;
    }
    .tab {
      table {
        width: 100%;
        text-align: center;
        font-size: 14px;
        .type {
          height: 25px;
          background-color: #f8f8f8;
          line-height: 25px;
          color: #777;
        }
        .mon {
          height: 35px;
          line-height: 35px;
          border-bottom: 1px solid #eee;
          .mey {
            color: red;
          }
        }
      }
    }
    .time {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 5px;
      div {
        p {
          font-size: 0.24rem;

          width: 73px;
          height: 20px;
          background-color: #87cefa;
          color: #fff;
          line-height: 20px;
          text-align: center;
        }
      }
      p {
        font-size: 12px;
        color: #777;
      }
    }
  }
}
.content {
  width: 100%;
  background-color: #fff;
  margin-top: 10px;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    .left {
      display: flex;
      align-items: center;
      h4 {
        font-size: 14px;
        font-weight: bold;
        border-left: 3px solid red;
        padding-left: 10px;
      }
      span {
        font-size: 12px;
        width: 35px;
        height: 17px;
        background-color: #87cefa;
        color: #fff;
        text-align: center;
        line-height: 17px;
        border-radius: 2px;
        margin-left: 5px;
      }
    }
    .right {
      font-size: 13px;
      color: #87cefa;
    }
  }
  .tab {
    table {
      width: 100%;
      text-align: center;
      font-size: 14px;
      .type {
        height: 25px;
        background-color: #f8f8f8;
        line-height: 25px;
        color: #777;
      }
      .mon {
        // height: 35px;
        // line-height: 35px;
        border-bottom: 1px solid #eee;
        td {
          vertical-align: middle;

          text-align: center;
          color: #777;
          font-size: 12px;
          padding: 5px 0;
        }
        .mey {
          color: red;
        }
        .color {
          background-color: #ffb5c5;
        }
      }
    }
    .prompt {
      font-size: 12px;
      color: #777;
      padding: 3px 5px;
    }
  }
}
.documentary {
  background-color: #fff;
  margin-top: 10px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    .left {
      display: flex;
      align-items: center;
      h4 {
        font-size: 14px;
        font-weight: bold;
        border-left: 3px solid red;
        padding-left: 10px;
      }
      span {
        font-size: 12px;
        width: 35px;
        height: 17px;
        background-color: #87cefa;
        color: #fff;
        text-align: center;
        line-height: 17px;
        border-radius: 2px;
        margin-left: 5px;
      }
    }
    .right {
      font-size: 13px;
      color: #87cefa;
    }
  }
  .tab {
    table {
      width: 100%;
      text-align: center;
      font-size: 14px;
      .type {
        height: 25px;
        // background-color: #f8f8f8;
        line-height: 25px;
        color: #777;
      }
      .mon {
        height: 35px;
        line-height: 35px;

        td {
          vertical-align: middle;

          text-align: center;
        }
        .mey {
          color: red;
        }
      }
    }
    img {
      width: 20px;
      height: 20px;
      object-fit: cover;
      margin-left: 15px;
    }
  }
}
.bot {
  text-align: center;
  p {
    color: #777;
    font-size: 12px;
    padding: 10px 0;
  }
  /deep/ .van-button--large {
    width: 96%;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
  }
}
</style>