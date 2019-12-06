<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div class="main">
      <van-cell-group>
        <van-field placeholder="方案宣言..." v-model="value" />
      </van-cell-group>
      <div class="content">
        <van-cell-group>
          <van-switch-cell v-model="checked" title="允许跟单" />
        </van-cell-group>
        <p>*关闭跟单后他人无法复制您的方案</p>
      </div>
      <div class="wrap" v-if="checked">
        <p>
          保障赔率
          <span>(中奖赔率小于等于保障赔率时,跟单用户无需支付费用)</span>
        </p>
        <p>
          <input type="text" v-model="bei" />倍
        </p>
      </div>
    </div>
    <div class="bottom">
      <div class="money">
        需支付:
        <span>58金币</span>
      </div>
      <div>
        <van-button type="danger" @click="confirmOrder">确认支付</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "confirmOrder",
  props: {},
  components: {
    navBar
  },
  data() {
    return {
      title: this.$route.meta.title,
      arrID: [], // 比赛的id
      arrData: [],
      checked: true,
      list: this.$store.state.replayData,
      value: "",
      bei: "1.7"
    };
  },
  computed: {},
  watch: {},
  methods: {
    confirmOrder() {
      console.log(this.$store.state.activeData);
      var arr = this.$store.state.activeData;
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
      console.log(arr);
      console.log(arr);
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
                      var oneWagerBet = (
                        Number(betfir) * Number(betsec)
                      ).toFixed(2);
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
      console.log(this.list);
      this.arrData = parse(arr, source).wagers;
      for (var i = 0; i < this.list.length; i++) {
        this.arrID.push(this.list[i].id);
      }
      console.log(this.arrID);
      console.log(this.$store.state.betData);
      console.log(this.arrData);
      this.$SERVER
        .footBallBookOrder({
          wagers: this.arrData,
          userId: "10089",
          times: 2,
          matchIds: this.arrID,
          bets: this.$store.state.betData,
          describeText: this.value,
          promiseBet: this.bei
        })
        .then(res => {
          //下单成功
          if (res.code == 200) {
            (this.arrData = []),
              (this.arrID = []),
              (this.$store.state.betData = []),
              (this.value = ""),
              (this.bei = "");
          }
        });
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
/deep/ .van-cell {
  font-size: 14px;
}
.content {
  margin: 15px 0;
  background-color: #fff;
  p {
    padding: 0px 20px;
    font-size: 12px;
    color: #777;
  }
}
.wrap {
  padding: 0px 20px;
  background-color: #fff;

  p {
    span {
      font-size: 12px;
      color: #777;
    }
  }
  input {
    display: inline-block;
    border-bottom: 1px solid black;
    width: 50px;
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