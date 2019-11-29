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
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item v-for="(item,index) in dataRes" :key="index" :name="index">
          <div class="title" slot="title">
            <span>{{item[0].date}}</span>
            <span>{{item[0].num}}</span>
            <!-- <span>{{item.length}场</span> -->
            <span v-if="item[0].showStatus==1">可投注</span>
            <span v-if="item[0].showStatus==0">不可投注</span>
          </div>
          <div class="test" v-for="(item2,index1) in dataRes[index]" :key="index1">
            <div class="left">
              <p class="first">{{item2.num}}</p>
              <p>{{item2.lcnAbbr}}</p>
              <p>{{item2.time}}截止</p>
            </div>
            <div class="right">
              <div class="div1">
                <span>[{{item2.horder.substring(item2.horder.length-2,item2.horder.length-1)}}]{{item2.hcn}}</span>
                <span>VS</span>

                <span>[{{item2.aorder.substring(item2.aorder.length-2,item2.aorder.length-1)}}]{{item2.acnAbbr}}</span>
              </div>
              <div class="tab">
                <div class="left1">
                  <p class="p1">
                    <span class="p1-first">{{item2.footBallBet.odds_list.hhad.single}}</span>
                  </p>
                  <p class="p2">
                    <span class="p2-first">{{item2.footBallBet.odds_list.hhad.goalline}}</span>
                  </p>
                </div>
                <div class="center">
                  <ul class="a" ref="aa">
                    <li
                      :class="textList.includes(item2.footBallBet.odds_list.had.odds[item2.footBallBet.odds_list.had.odds.length-1].h) ? 'bgColor':'' "
                      @click="text($event)"
                    >
                      <span>胜</span>
                      {{item2.footBallBet.odds_list.had.odds[item2.footBallBet.odds_list.had.odds.length-1].h}}
                    </li>
                    <li
                      :class="textList.includes(item2.footBallBet.odds_list.had.odds[item2.footBallBet.odds_list.had.odds.length-1].d) ? 'bgColor':'' "
                      @click="text($event)"
                    >
                      <span>平</span>
                      {{item2.footBallBet.odds_list.had.odds[item2.footBallBet.odds_list.had.odds.length-1].d}}
                    </li>
                    <li
                      :class="textList.includes(item2.footBallBet.odds_list.had.odds[item2.footBallBet.odds_list.had.odds.length-1].a) ? 'bgColor':'' "
                      @click="text($event)"
                    >
                      <span>负</span>
                      {{item2.footBallBet.odds_list.had.odds[item2.footBallBet.odds_list.had.odds.length-1].a}}
                    </li>
                    <li
                      :class="textList.includes(item2.footBallBet.odds_list.hhad.odds[item2.footBallBet.odds_list.hhad.odds.length-1].h) ? 'bgColor':'' "
                      @click="text($event)"
                    >
                      <span>胜</span>
                      {{item2.footBallBet.odds_list.hhad.odds[item2.footBallBet.odds_list.hhad.odds.length-1].h}}
                    </li>
                    <li
                      :class="textList.includes(item2.footBallBet.odds_list.hhad.odds[item2.footBallBet.odds_list.hhad.odds.length-1].d) ? 'bgColor':'' "
                      @click="text($event)"
                    >
                      <span>平</span>
                      {{item2.footBallBet.odds_list.hhad.odds[item2.footBallBet.odds_list.hhad.odds.length-1].d}}
                    </li>
                    <li
                      :class="textList.includes(item2.footBallBet.odds_list.hhad.odds[item2.footBallBet.odds_list.hhad.odds.length-1].a) ? 'bgColor':'' "
                      @click="text($event)"
                    >
                      <span>负</span>
                      {{item2.footBallBet.odds_list.hhad.odds[item2.footBallBet.odds_list.hhad.odds.length-1].a}}
                    </li>
                  </ul>
                </div>
                <div class="right1">
                  <span ref="sp" @click="detailPlay(item2,index1)">全部玩法</span>
                </div>
              </div>
            </div>
          </div>
        </van-collapse-item>
      </van-collapse>
      <!-- 底部按钮 -->
      <div class="bot-btn">
        <div class="text">
          <p>至少选择1场比赛</p>
          <p class="pei">[页面赔率仅供参考,请以实体票为准]</p>
        </div>
        <div class="btn">
          <van-button type="default" size="large">清空</van-button>
          <van-button type="danger" size="large" @click="detailPlan">确定</van-button>
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
      </van-action-sheet>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import navBar from "@/components/navbar/navbar.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "racefootball",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      result: [1],
      i: 0,
      value1: 6,
      option1: [
        { text: "胜平负", value: 0 },
        { text: "让球胜平负", value: 1 },
        { text: "比分", value: 2 },
        { text: "总进球", value: 3 },
        { text: "半全场", value: 4 },
        { text: "混投2选1", value: 5 },
        { text: "混合过关", value: 6 },
        { text: "单关", value: 7 }
      ],
      show: false,
      actions: [],
      checked: true,
      activeNames: 0,
      changeColor: false,
      dataLen: [],
      dataRes: [],
      obj: { a: 1, b: 2, c: 3 },
      obj1: { a: 4, b: 5, c: 6 },
      box: [],
      res: [],
      arr: [],
      textList: []
    };
  },
  computed: {},
  watch: {
    box: function() {
      if (this.box.length > 0) {
        console.log(this.$refs);
        this.$refs.sp[this.i].innerHTML =
          "<span>已选" + this.box.length + "项</span>";
        this.$refs.sp[this.i].style.background = "red";
        this.$refs.sp[this.i].style.color = "white";
      } else {
        this.$refs.sp[this.i].innerHTML = "<span>全部玩法</span>";
        this.$refs.sp[this.i].style.background = "white";
        this.$refs.sp[this.i].style.color = "#4b4949";
      }
    }
  },
  created() {
    //获取足球信息
    this.$SERVER
      .getFootBall({
        pagenum: 1,
        pagesize: 10
      })
      .then(res => {
        this.dataLen = res.data.list;
        console.log(this.dataLen);
        //根据时间把数组进行分类
        var map = this.dataLen.reduce(
          (p, c) => [(p[c.date] = p[c.date] || []), p[c.date].push(c), p][2],
          {}
        );
        // 获取映射分类下的数组
        var result = Object.keys(map).map(i => map[i]);
        this.dataRes = result;
        console.log(result);
      });
    //下单
    this.$SERVER
      .footBallBookOrder({
        wagers: [["0_1", "1_1"], ["0_2", "1_2", "3_2"]],
        userId: "10089",
        times: 2,
        matchIds: ["123275", "123276"],
        bets: [[1.8, 3.5, 8]]
      })
      .then(res => {
        console.log(res);
      });
  },
  //vuex中取出state的值 使用映射
  computed: {
    ...mapState({
      a: "qq"
    }),
    ...mapGetters({
      tofo: "getToDo"
    })
  },
  mounted() {},
  methods: {
    //映射mapMutations中的clickTotal方法
    ...mapMutations({
      //修改state中的状态
      totalAlise: "clickTotal",
      //往vuex中存入状态
      set: "setValue"
    }),
    detailPlan() {
      this.$router.push({
        path: "/confirmPlan"
      });
    },
    detailPlay(item, i) {
      item.index = i;
      console.log(i);
      this.$store.state.listData = item;
      this.$router.push({
        path: "/allplay"
      });
    },
    alertMenu() {
      this.show = true;
    },
    change: function(e, index) {
      if (this.box.includes(e)) {
        this.box.splice(this.box.indexOf(e), 1);
      } else {
        this.box.push(e);
      } // 把点击的元素item放入box数组中
      console.log(this.box);
    },
    text(e) {
      // console.log(item.matchId);
      if (this.textList.indexOf(e.target.innerHTML) === -1) {
        this.textList.push(e.target.innerHTML);
      } else {
        this.textList.splice(this.textList.indexOf(e.target.innerHTML), 1);
      }
      this.textList = Array.from(new Set(this.textList));
      console.log(this.textList);
    }
  }
};
</script>
<style lang="less" scoped>
.bgc {
  color: white !important;
  background-color: red;
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
.title {
  color: #4b4949;
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
.bgColor {
  background-color: red;
  color: white !important;
  text-align: center !important;
}
.red {
  color: red !important;
}
</style>