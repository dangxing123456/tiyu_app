<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div class="head">
      <div class="div1" @click="showAdd">+添加/编辑赛事</div>
      <div @click="clears">清空列表</div>
    </div>
    <div class="main">
      <div class="test" v-for="(item,index) in list" :key="index">
        <div class="left">
          <p class="first"></p>
          <p>
            <van-icon name="clear" @click="remove(index)" />
          </p>
          <p></p>
        </div>
        <div class="right">
          <div class="div1">
            <span>[{{item.horder.substring(item.horder.length-2,item.horder.length-1)}}]{{item.hcn}}</span>
            <span>VS</span>
            <span>[{{item.aorder.substring(item.aorder.length-2,item.aorder.length-1)}}]{{item.acnAbbr}}</span>
          </div>
          <div class="tab">
            <div class="left1">
              <p class="p1">
                <span class="p1-first">0</span>
              </p>
              <p class="p2">
                <span class="p2-first">{{item.footBallBet.odds_list.hhad.goalline}}</span>
              </p>
              <p class="p3">
                <span class="p3-first">其他</span>
              </p>
            </div>
            <div class="center">
              <div class="center">
                <ul>
                  <li @click="get($event)">
                    <span>胜</span>
                    {{item.footBallBet.odds_list.had.odds[item.footBallBet.odds_list.had.odds.length-1].h}}
                  </li>
                  <li>
                    <span>平</span>
                    {{item.footBallBet.odds_list.had.odds[item.footBallBet.odds_list.had.odds.length-1].d}}
                  </li>
                  <li>
                    <span>负</span>
                    {{item.footBallBet.odds_list.had.odds[item.footBallBet.odds_list.had.odds.length-1].a}}
                  </li>
                  <li>
                    <span>胜</span>
                    {{item.footBallBet.odds_list.hhad.odds[item.footBallBet.odds_list.hhad.odds.length-1].h}}
                  </li>
                  <li>
                    <span>平</span>
                    {{item.footBallBet.odds_list.hhad.odds[item.footBallBet.odds_list.hhad.odds.length-1].d}}
                  </li>
                  <li>
                    <span>负</span>
                    {{item.footBallBet.odds_list.hhad.odds[item.footBallBet.odds_list.hhad.odds.length-1].a}}
                  </li>
                </ul>
              </div>
              <div class="bot">未选择其他玩法</div>
            </div>
            <div class="right1">
              <span>胆</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bot-btn">
      <div class="text">
        <span>{{zhu}}注{{this.$store.state.value}}倍</span>
        <span>
          共
          <span class="color">{{money*this.$store.state.value}}元</span>
        </span>
        <span>
          [奖金范围：
          <span class="color">{{maxBonus*this.$store.state.value}}</span> 元]
        </span>
      </div>
      <div class="con">
        <div @click="alertMenu">
          <span>4串1</span>
          <van-icon name="arrow-down" />
        </div>
        <div class="div1">
          <van-stepper @change="change(value)" v-model="value" />
          <p>倍</p>
        </div>
      </div>
      <div class="btn">
        <van-button type="default" size="large">发起合买</van-button>
        <van-button type="danger" size="large" @click="next">下一步</van-button>
      </div>
    </div>
    <van-action-sheet v-model="show">
      <div class="content">
        <div class="head-bot">
          <h3>标准过关</h3>
        </div>
        <div class="wrapper">
          <ul>
            <li>2串1</li>
            <li>3串1</li>
            <li>3串1</li>
            <li>3串1</li>
          </ul>
        </div>
        <div class="senf">
          <h3>组合过关</h3>
        </div>
        <div class="bottom">
          <ul>
            <li>2串1</li>
            <li>3串1</li>
            <li>3串1</li>
            <li>3串1</li>
          </ul>
        </div>
        <div class="btn">
          <van-button type="default" size="large">取消</van-button>
          <van-button type="danger" size="large">确定</van-button>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "confirmPlan",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title,
      list2: [
        { score: "胜1.54" },
        { score: "胜1.54" },
        { score: "胜1.54" },
        { score: "胜1.54" },
        { score: "胜1.54" },
        { score: "胜1.54" }
      ],
      list: this.$store.state.replayData,
      value: this.$store.state.value,
      show: false,
      actions: [],
      zhu: "",
      money: "",
      maxBonus: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    get($event) {
      console.log($event);
    },
    change(value) {
      console.log(value);
      this.$store.state.value = value;
    },
    alertMenu() {
      this.show = true;
    },
    showAdd() {
      this.$router.push({ path: "/racefootball" });
    },
    //清空列表
    clears() {
      this.$store.state.replayData.splice(
        0,
        this.$store.state.replayData.length
      );
      this.$router.go(-1);
    },
    //删除列表
    remove(index) {
      this.list.splice(index, 1);
      console.log(this.list);
    },
    //下一步
    next() {
      this.$router.push({
        path: "/confirmOrder"
      });
    }
  },
  mounted() {
    // console.log(this.$route)
  },
  created() {
    console.log(this.$store.state.replayData);
    console.log(this.$store.state.activeData);

    for (var i = 0; i < this.$store.state.activeData.length; i++) {
      for (var j = 0; j < this.$store.state.activeData[i].length; j++) {
        console.log(this.$store.state.activeData[i][j]);
        console.log(this.$store.state.activeData[i][j].every("undefined"));
        for (var k = 0; k < this.$store.state.activeData[i][j].length; k++) {}
      }
    }
    const arr = [];

    var a = JSON.parse(JSON.stringify(this.$store.state.activeData));
    arr.push(...a);
    console.log(arr);
    // 去掉数组为empty
    for (var i = 0; i < arr.length; i++) {
      if (!arr[i]) {
        arr.splice(i, 1);
        i--;
      }
    }
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        if (!arr[i][j]) {
          arr[i].splice(j, 1);
          j--;
        }
      }
    }
    //   去掉索引为empty
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        for (var k = 0; k < arr[i][j].length; k++) {
          if (!arr[i][j][k]) {
            arr[i][j].splice(k, 1);
            k--;
          }
        }
      }
    }
    //   为每一项添加索引
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j]) {
          for (var k = 0; k < arr[i][j].length; k++) {
            // console.log(arr[i][j][k]);
            if (arr[i][j]) {
              arr[i][j][k] = i + "_" + arr[i][j][k];
              if (arr[i][j][k] == i + "_undefined") {
                arr[i][j].splice(k, 1);
                k--;
              }
            }
          }
        }
      }
    }
    console.log(a);
    console.log(this.$store.state.activeData);
    // console.log(arr);

    var gate = ["2_1"];

    function arrcl(arr, n, z) {
      var r = [];
      fn([], arr, n);
      return r;

      function fn(t, a, n) {
        if (n === 0 || (z && r.length == z)) {
          return (r[r.length] = t);
        }
        for (var i = 0, l = a.length - n; i <= l; i++) {
          if (!z || r.length < z) {
            var b = t.slice();
            b.push(a[i]);
            fn(b, a.slice(i + 1), n - 1);
          }
        }
      }
    }

    function arral(A2, fn) {
      var n = 0,
        codes = [],
        code = [],
        isTest = typeof fn == "function",
        stop;
      each(A2, n);

      function each(A2, n) {
        if (stop || n >= A2.length) {
          if (isTest && false === fn(code)) {
            stop = true;
          } else {
            codes.push(code.slice());
            code.length = n - 1;
          }
        } else {
          var cur = A2[n];
          for (var i = 0, j = cur.length; i < j; i++) {
            code.push(cur[i]);
            each(A2, n + 1);
          }
          if (n) {
            code.length = n - 1;
          }
        }
      }

      return codes;
    }

    function GetVotetype(typevote) {
      switch (typevote) {
        case "1_1":
          return "1";
        case "2_1":
          return "2";
        case "2_3":
          return "1 2";
        case "3_1":
          return "3";
        case "3_3":
          return "2";
        case "3_4":
          return "2 3";
        case "3_7":
          return "1 2 3";
        case "4_1":
          return "4";
        case "4_2":
          return "2";
        case "4_4":
          return "3";
        case "4_5":
          return "3 4";
        case "4_6":
          return "2";
        case "4_11":
          return "2 3 4";
        case "4_15":
          return "1 2 3 4";
        case "5_1":
          return "5";
        case "5_2":
          return "2";
        case "5_5":
          return "4";
        case "5_6":
          return "4 5";
        case "5_10":
          return "2";
        case "5_16":
          return "3 4 5";
        case "5_20":
          return "2 3";
        case "5_26":
          return "2 3 4 5";
        case "5_31":
          return "1 2 3 4 5";
        case "6_1":
          return "6";
        case "6_2":
          return "2";
        case "6_6":
          return "5";
        case "6_7":
          return "5 6";
        case "6_15":
          return "2";
        case "6_20":
          return "3";
        case "6_22":
          return "4 5 6";
        case "6_35":
          return "2 3";
        case "6_42":
          return "3 4 5 6";
        case "6_50":
          return "2 3 4";
        case "6_57":
          return "2 3 4 5 6";
        case "6_63":
          return "1 2 3 4 5 6";
        case "7_1":
          return "7";
        case "7_7":
          return "6";
        case "7_8":
          return "6 7";
        case "7_21":
          return "5";
        case "7_35":
          return "4";
        case "7_120":
          return "2 3 4 5 6 7";
        case "8_1":
          return "8";
        case "8_8":
          return "7";
        case "8_9":
          return "7 8";
        case "8_28":
          return "6";
        case "8_56":
          return "5";
        case "8_70":
          return "4";
        case "8_247":
          return "2 3 4 5 6 7 8";
        case "9_1":
          return "9";
        case "10_1":
          return "10";
        case "11_1":
          return "11";
        case "12_1":
          return "12";
        case "13_1":
          return "13";
        case "14_1":
          return "14";
        case "15_1":
          return "15";
        default:
          if (typevote.indexOf("二关") > -1) return "2";
          if (typevote.indexOf("三关") > -1) return "3";
          else return "0";
      }
    }
    var source = this.$store.state.betData;
    console.log(this.$store.state.betData);
    function parse(data, source) {
      //取几串几 ，二维数组的行(如[1,2,3]2串1，组合为[[1,2],[1,3],[2,3]])

      var bisai = [];
      var wagers = 0;
      var result = {};
      var totalBet = 0;

      for (var ii = 0, ll = gate.length; ii < ll; ii++) {
        var chuanType = gate[ii];
        var matchArr = chuanType.split("_"); //几串几
        var matheCount = matchArr[0]; //2串1 的2
        var combArr = arrcl(data, matheCount);

        for (var i1 = 0, l1 = combArr.length; i1 < l1; i1++) {
          var colComArr = arral(combArr[i1]);
          for (var i2 = 0, l2 = colComArr.length; i2 < l2; i2++) {
            var gateway = GetVotetype(chuanType);
            var gatArr = gateway.split(" ");
            for (var i3 = 0, l3 = gatArr.length; i3 < l3; i3++) {
              var res = arrcl(colComArr[i2], gatArr[i3]);
              for (var i4 = 0, l4 = res.length; i4 < l4; i4++) {
                var wagerArr = arral(res[i4]);
                for (let v in wagerArr) {
                  bisai[bisai.length] = wagerArr[v];
                  var first = wagerArr[v][0];
                  var firArr = first.split("_");
                  var betfir = source[firArr[0]][firArr[1]];
                  if (chuanType != "1_1") {
                    var second = wagerArr[v][1];
                    var secArr = second.split("_");
                    var betsec = source[secArr[0]][secArr[1]];
                    var oneWagerBet = (Number(betfir) * Number(betsec)).toFixed(
                      2
                    );
                    totalBet =
                      Number(totalBet.toFixed(2)) + Number(oneWagerBet);
                  } else {
                    totalBet = Number(totalBet.toFixed(2)) + Number(betfir);
                  }
                  wagers++;
                }
              }
            }
          }
        }
      }
      result["wagerCount"] = wagers;
      result["payMoney"] = 2 * wagers;
      result["maxBonus"] = 2 * totalBet.toFixed(2);
      result["wagers"] = bisai;
      return result;
    }
    //订单数据数据格式【{"wager":[],"bet":[],"matchIds":["000","001"],"times":2,"userId":""}】
    function bookOrder(wagers) {
      var bisaiArr = wagers.wagers;
      // for()
    }

    console.info(parse(arr, source));
    console.log(source);
    this.zhu = parse(arr, source).wagerCount;
    this.money = parse(arr, source).payMoney;
    this.maxBonus = parse(arr, source).maxBonus;
    console.log(this.$store.state.activeData);
  }
};
</script>
<style lang="less" scoped>
.main {
  padding-bottom: 130px;
}
.head {
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: #fff;
  font-size: 14px;
  div {
    width: 50%;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .div1 {
    border-right: 1px solid #eeeeee;
  }
}
.test {
  padding: 10px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  border-bottom: 1px solid #eeeeee;
  .right {
    width: 80%;
    .div1 {
      display: flex;
      justify-content: space-around;
      padding-bottom: 10px;
      font-size: 14px;
      color: #4b4949;
    }
    .tab {
      display: flex;
      width: 5.45rem;
      .left1 {
        float: left;
        color: #4b4949;
        .p1 {
          span {
            display: inline-block;
            height: 38px;
            width: 70px;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 38px;
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
            height: 38px;
            width: 70px;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 38px;
          }
          .p2-first {
            width: 20px;
            background-color: rgb(100, 160, 240);
            color: white;
          }
        }
        .p3 {
          span {
            display: inline-block;
            height: 38px;
            border: 0.02rem solid #eeeeee;
            float: left;
            text-align: center;
            width: 0.4rem;
            background-color: #29e222;
            color: white;
            writing-mode: tb-rl;
            line-height: 0.4rem;
          }
        }
      }
      .center {
        font-size: 12px;
        .bot {
          display: inline-block;
          width: 214px;
          height: 32px;
          border: 1px solid #eeeeee;
          text-align: center;
          line-height: 32px;
          background-color: #fff;
        }

        ul {
          li {
            background-color: #fff;
            display: inline-block;
            height: 40px;
            width: 1.4rem;
            border: 0.02rem solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 40px;
            color: #4b4949;
          }
        }
      }
      .right1 {
        color: #4b4949;
        span {
          display: inline-block;
          height: 118px;
          width: 31px;
          border: 1px solid #eeeeee;
          line-height: 32px;
          text-align: center;
          writing-mode: tb-rl;
          background-color: #fff;
        }
      }
    }
  }
  .left {
    text-align: center;
    .first {
      padding-bottom: 20px;
      font-size: 16px;
      color: #4b4949;
    }
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
    padding: 10px 0px;
    font-size: 12px;
    .pei {
      color: rgb(158, 150, 145);
      padding-top: 5px;
    }
    .color {
      color: #f24a44;
    }
  }
  .con {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    div {
      width: 50%;
      text-align: center;
      height: 45px;
      line-height: 45px;
      margin: 0;
      /deep/ .van-icon-arrow-down {
        float: right;
        margin: 15px;
      }
    }
    .div1 {
      border-left: 1px solid #eeeeee;
      display: flex;
      font-size: 14px;
      p {
        margin-left: 25px;
      }
    }
    /deep/ .van-stepper {
      margin-left: 25px;
    }
  }
  .btn {
    display: flex;
    width: 100%;
  }
}
.content {
  background-color: #eeeeee;
  .head-bot {
    padding: 8px 10px;
  }
  .wrapper,
  .bottom {
    font-size: 14px;
    background-color: #fff;
    padding: 10px 5px;
    ul {
      display: flex;
      flex-flow: wrap;
      justify-content: space-around;
      li {
        display: inline-block;
        width: 70px;
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
  }
  .btn {
    display: flex;
    justify-content: space-between;
  }
}
</style>