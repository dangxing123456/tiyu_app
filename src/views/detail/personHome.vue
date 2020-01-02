<template>
  <div class="container">
    <navBar></navBar>
    <div class="head">
      <img :src="personList.icon" alt />
      <span>{{personList.nickname}}</span>
    </div>
    <div class="main">
      <div class="content">
        <div>
          <p>
            <van-icon name="sign" color="red" size="24px" />
          </p>
          <p class="p2">近7天</p>
        </div>
        <div>
          <p class="p1">{{personList.canFlowCount}}</p>
          <p class="p2">方案</p>
        </div>
        <div>
          <p class="p1">{{personList.hotOrder}}</p>
          <p class="p2">红单</p>
        </div>
        <div class="bot">
          <p class="p1">{{personList.winTotalMoney}}</p>
          <p class="p2">奖金</p>
        </div>
      </div>
      <van-tabs>
        <van-tab title="竞彩足球">
          <div class="wrap" v-for="(item,i) in list " :key="i">
            <p class="title">{{$METHOD.format(item.bookTime/1000,'MM-dd hh:mm')}}</p>
            <div class="con">
              <div class="text">{{item.describeText}}</div>
              <div class="tab">
                <span class="bao">{{item.promiseBet}}</span>
                <table border="1">
                  <tr class="type">
                    <th>类型</th>
                    <th>消费金额</th>
                    <th>单倍金额</th>
                    <th></th>
                  </tr>
                  <tr class="mon">
                    <td v-if="item.type=='1'">竞彩足球</td>
                    <td v-if="item.type=='2'">竞彩篮球</td>
                    <td>{{item.times*item.buyWagers*2}}元</td>
                    <td>{{item.buyWagers*2}}元</td>
                    <td>
                      <van-button type="danger" size="mini" @click="showPopup(item)">跟单</van-button>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="time">
                <div>
                  <van-icon
                    name="fire"
                    size="12px"
                    v-for="(item,index) in shouDan(item)"
                    :key="index"
                    color="red"
                  />
                </div>

                <p>截止时间：{{$METHOD.format(item.endTime/1000,'MM-dd hh:mm')}}</p>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="竞彩篮球">
          <div class="wrap" v-for="(item,i) in list1 " :key="i">
            <p class="title">{{$METHOD.format(item.bookTime/1000,'MM-dd hh:mm')}}</p>
            <div class="con">
              <div class="text">{{item.describeText}}</div>
              <div class="tab">
                <span class="bao">{{item.promiseBet}}</span>
                <table border="1">
                  <tr class="type">
                    <th>类型</th>
                    <th>消费金额</th>
                    <th>单倍金额</th>
                    <th></th>
                  </tr>
                  <tr class="mon">
                    <td v-if="item.type=='1'">竞彩足球</td>
                    <td v-if="item.type=='2'">竞彩篮球</td>
                    <td>{{item.times*item.buyWagers*2}}元</td>
                    <td>{{item.buyWagers*2}}元</td>
                    <td>
                      <van-button type="danger" size="mini" @click="showPopup(item)">跟单</van-button>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="time">
                <div>
                  <van-icon
                    name="fire"
                    size="12px"
                    v-for="(item,index) in shouDan(item)"
                    :key="index"
                    color="red"
                  />
                </div>

                <p>截止时间：{{$METHOD.format(item.endTime/1000,'MM-dd hh:mm')}}</p>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <popup ref="pop" v-model="currentValue"></popup>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
import popup from "@/components/popup/popup";
export default {
  name: "personHome",
  components: {
    navBar,
    popup
  },
  data() {
    return {
      show1: false,
       currentValue: false,
      list: [],
      list1: [],
      finished: false,
      loading: false,
      userinfo: {},
      personList: {}
    };
  },
  created() {
    this.getList();
    this.getBasketList();
    this.getPerson();
  },
  methods: {
    showPopup(item) {
      this.show1 = true;
      this.currentValue = true;
      this.$refs.pop.show = true;
      this.$refs.pop.list = item;
    },
    getPerson() {
      this.$SERVER
        .getUserByUserId({
          userId: this.$route.params.i
        })
        .then(res => {
          this.personList = res.data;
          console.log(this.personList);
        })
        .catch(err => {});
    },
    shouDan(item) {
      var a = 0;
      if (item.flowCount >= 1 && item.flowCount <= 5) {
        a = 1;
      } else if (item.flowCount > 5 && item.flowCount <= 50) {
        a = 2;
      } else if (item.flowCount > 50 && item.flowCount <= 200) {
        a = 3;
      } else if (item.flowCount > 200 && item.flowCount <= 500) {
        a = 4;
      } else if (item.flowCount > 500) {
        a = 5;
      }
      return a;
    },
    getList() {
      this.$SERVER
        .getBasketBallCanFollowOrderList({
          userId: this.$route.params.i
        })
        .then(res => {
          this.list1 = res.data.list;
        })
        .catch(err => {});
    },
    getBasketList() {
      // this.userinfo = this.$route.params.userinfo;

      this.$SERVER
        .getFootBallCanFollowOrderList({
          userId: this.$route.params.i
        })
        .then(res => {
          this.list = res.data.list;
        })
        .catch(err => {});
    }
  }
};
</script>
<style lang="less" scoped>
.head {
  width: 100%;

  background-color: #f24a44;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  span {
    margin-left: 15px;
    color: white;
  }
}
.content {
  display: flex;
  align-content: center;
  justify-content: space-around;
  background-color: #fff;
  padding: 10px;
  div {
    text-align: center;
    .p1 {
      font-size: 18px;
      font-weight: bold;
      height: 29px;
    }
    .p2 {
      font-size: 14px;
      color: #777;
    }
  }
  .bot {
    .p1 {
      color: red;
    }
  }
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
    position: relative;
    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      color: #777;
      padding: 5px 0;
    }
    .tab {
      .bao {
        position: absolute;
        /* top: 15px; */
        right: 10px;
        /* top: 0px; */
        margin-top: -5px;
        display: inline-block;
        font-size: 12px;
        width: 34px;
        height: 15px;
        text-align: center;
        line-height: 15px;
        background-color: #87cefa;
        color: white;
        border-radius: 2px;
      }
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
        }
      }
    }
    .time {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 5px;
      p {
        font-size: 12px;
        color: #777;
      }
    }
  }
}
</style>