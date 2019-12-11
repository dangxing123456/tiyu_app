<template>
  <div class="container" id="shop">
    <navBar :goback="true" title>
      <div class="right" slot="right">
        <span class="shai" @click="alertMenu">筛</span>
        <span>
          <img src="../../assets/images/shuaxin.png" alt />
        </span>
      </div>
      <van-dropdown-menu class="menu" slot="title">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </navBar>
    <div class="main">
      <div class="wrap" v-for="(item,index) in basketList" :key="index">
        <div class="title">
          <span>{{item.date}}</span>
          <span>{{item.num}}</span>
          <span v-if="item.showStatus==1">可投注</span>
          <span v-if="item.showStatus==0">不可投注</span>
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
            <div class="tab">
              <div class="left1">
                <p class="p1">
                  <span class="p1-first">0</span>
                </p>
                <p class="p2">
                  <span class="p2-first">让</span>
                </p>
              </div>
              <div class="center">
                <ul>
                  <li
                    :ref="'id'+index+'_0'"
                    @click="push('0','0',item.basketBallBet.odds_list.mnl[item.basketBallBet.odds_list.mnl.length-1].a,index)"
                  >
                    <span>胜</span>
                    <span>{{item.basketBallBet.odds_list.mnl[item.basketBallBet.odds_list.mnl.length-1].a}}</span>
                  </li>
                  <li
                    :ref="'id'+index+'_1'"
                    @click="push('0','1',item.basketBallBet.odds_list.mnl[item.basketBallBet.odds_list.mnl.length-1].h,index)"
                  >
                    <span>平</span>
                    <span>{{item.basketBallBet.odds_list.mnl[item.basketBallBet.odds_list.mnl.length-1].h}}</span>
                  </li>
                  <li
                    :ref="'id'+index+'_2'"
                    @click="push('1','2',item.basketBallBet.odds_list.hdc[item.basketBallBet.odds_list.hdc.length-1].a,index)"
                  >
                    <span>负</span>
                    <span>{{item.basketBallBet.odds_list.hdc[item.basketBallBet.odds_list.hdc.length-1].a}}</span>
                  </li>
                  <li
                    :ref="'id'+index+'_3'"
                    @click="push('1','3',item.basketBallBet.odds_list.hdc[item.basketBallBet.odds_list.hdc.length-1].h,index)"
                  >
                    <span>胜</span>
                    <span>{{item.basketBallBet.odds_list.hdc[item.basketBallBet.odds_list.hdc.length-1].h}}</span>
                  </li>
                </ul>
              </div>
              <div class="right1">
                <span ref="sp" @click="detailPlay(item,index)">全部比赛</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="bot-btn">
        <div class="text">
          <p>至少选择1场比赛</p>
          <p class="pei">[页面赔率仅供参考,请以实体票为准]</p>
        </div>
        <div class="btn">
          <van-button type="default" size="large">取消</van-button>
          <van-button type="danger" size="large">确定</van-button>
        </div>
      </div>
      <!-- 下拉菜单 -->
      <van-action-sheet v-model="show" :actions="actions">
        <div class="content">
          <div class="head">
            <h3>赛事筛选</h3>
            <span>清空</span>
          </div>
          <div class="wrapper">
            <ul>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
              <li>西甲(8)</li>
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
      </van-action-sheet>
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
      value1: 4,
      option1: [
        { text: "胜负", value: 0 },
        { text: "让分胜负", value: 1 },
        { text: "胜分差", value: 2 },
        { text: "大小分", value: 3 },
        { text: "混合过关", value: 4 },
        { text: "单关", value: 5 }
      ],
      show: false,
      actions: [],
      checked: true,
      activeNames: ["1"],
      changeColor: false,
      list: [
        { score: "胜1.54" },
        { score: "胜1.53" },
        { score: "胜1.52" },
        { score: "胜1.50" }
      ],
      basketList: [],
      a: []
    };
  },
  computed: {},
  watch: {},
  updated() {
    if (this.$store.state.bActiveData) {
      for (var i = 0; i < this.$store.state.bActiveData.length; i++) {
        if (this.$store.state.bActiveData[i] != undefined) {
          for (var j = 0; j < this.$store.state.bActiveData[i].length; j++) {
            if (this.$store.state.bActiveData[i][j] != undefined) {
              for (
                var k = 0;
                k < this.$store.state.bActiveData[i][j].length;
                k++
              ) {
                if (
                  this.$store.state.bActiveData[i][j][k] != undefined &&
                  this.$store.state.bActiveData[i][j][k] < 4
                ) {
                  this.$refs[
                    "id" + i + "_" + this.$store.state.bActiveData[i][j][k]
                  ][0].className = "bgColor";
                }
              }
            }
          }
        }
      }
    }
  },
  methods: {
    detailPlay(item, i) {
      item.index = i;
      this.$store.state.bListData = item;
      this.$router.push({
        path: "/allplayBasket"
      });
    },
    alertMenu() {
      this.show = true;
    },
    push(i1, i2, val, index) {
      if (this.$refs["id" + index + "_" + i2][0].className == "bgColor") {
        // 删除
        this.$refs["id" + index + "_" + i2][0].className = "";
        delete this.$store.state.bActiveData[index][i1][i2];
      } else {
        // 添加
        // console.log(this.a);
        this.a[index][i1][i2] = i2;
        if (!this.$store.state.bActiveData[index]) {
          this.$store.state.bActiveData[index] = [];
        }
        for (var i = 0; i < this.a[index].length; i++) {
          for (var j = 0; j < this.a[index][i].length; j++) {
            if (!this.$store.state.bActiveData[index][i]) {
              this.$store.state.bActiveData[index][i] = [];
            }
            if (this.a[index]) {
              this.$store.state.bActiveData[index][i][j] = this.a[index][i][j];
            }
          }
        }

        this.$refs["id" + index + "_" + i2][0].className = "bgColor";

        console.log(this.$store.state.bActiveData);
      }
    }
  },
  mounted() {},
  created() {
    this.$SERVER
      .getBasketBallMatch({
        pagenum: 1,
        pagesize: 10
      })
      .then(res => {
        if (res.code == 200) {
          this.basketList = res.data.list;

          for (var i = 0; i < this.basketList.length; i++) {
            this.a.push([[], [], [], []]);
          }
        }
      });
  }
};
</script>
<style lang="less" scoped>
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
      width: 31%;
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
.title {
  color: #4b4949;
  text-align: center;
}
.test {
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    width: 80%;
    font-size: 14px;
    .div1 {
      display: flex;
      justify-content: space-around;
      padding-bottom: 15px;
      font-size: 14px;
      color: #4b4949;
      .name {
        display: inline-block;
        width: 111px;
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
            width: 105px;
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
      font-size: 14px;
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
      font-size: 14px;
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
.bgColor {
  background-color: red;
  color: white !important;
  text-align: center !important;
}
</style>