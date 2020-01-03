<template>
  <div class="container" id="shop">
    <navBar :goback="true" title>
      <div slot="title">
        <span>{{list.acn}}</span>
        <span>VS</span>
        <span>{{list.hcn}}</span>
      </div>
    </navBar>
    <div class="main">
      <h3>主队让分{{list.fen}}</h3>
      <div class="first">
        <div class="left">
          <p class="p1">0</p>
          <p class="p2">让</p>
        </div>
        <div class="right">
          <ul>
            <li
              v-for="(item,i) in list.basketBallBet"
              :key="i"
              v-if="i<4"
              :class="addColor(i)"
              @click="push(i,item)"
            >
              <span v-if="i==0 || i==2">客胜</span>
              <span v-else-if="i==1 || i==3">主胜</span>

              <span>{{item}}</span>
            </li>
          </ul>
        </div>
      </div>
      <h3>预设总分{{list.sum}}</h3>
      <div class="second">
        <div class="left">
          <p class="p1">大小分</p>
        </div>
        <div class="right">
          <ul>
            <li
              v-for="(item,i) in list.basketBallBet"
              :key="i"
              v-if="i>=4 && i<6"
              :class="addColor(i)"
              @click="push(i,item)"
            >
              <span v-if="i==4">大分</span>
              <span v-else-if="i==5">小分</span>
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
      </div>
      <h3>胜分差</h3>
      <div class="third" :class="list.single=='1'&&$store.state.boolBask==true?'bor':''">
        <div class="left">
          <p class="p1">客胜</p>
          <p class="p2">主胜</p>
        </div>
        <div class="right">
          <ul>
            <li
              v-for="(item,i) in list.basketBallBet"
              :key="i"
              v-if="i>=6 && i<18"
              :class="addColor(i)"
              @click="push(i,item)"
            >
              <p v-if="i==6">客胜(1-5)</p>
              <p v-else-if="i==7">客胜(6-10)</p>
              <p v-else-if="i==8">客胜(11-15)</p>
              <p v-else-if="i==9">客胜(16-20)</p>
              <p v-else-if="i==10">客胜(21-25)</p>
              <p v-else-if="i==11">客胜(26+)</p>
              <p v-else-if="i==12">主胜(1-5)</p>
              <p v-else-if="i==13">主胜(6-10)</p>
              <p v-else-if="i==14">主胜(11-15)</p>
              <p v-else-if="i==15">主胜(16-20)</p>
              <p v-else-if="i==16">主胜(21-25)</p>
              <p v-else-if="i==17">主胜(26+)</p>
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="btn">
      <van-button type="default" size="large" @click="$router.go(-1)">取消</van-button>
      <van-button type="danger" size="large" @click="confirm">确定</van-button>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "allplayBasket",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      list: this.$store.state.basketResult[this.$route.params.i],
      a: "",
      flag: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    confirm() {
      this.$store.state.bFlag = this.flag;
      console.log(this.$store.state.bFlag);
      this.$router.push('/racebasketball');
    },
    detail() {
      this.$router.push({
        path: "/fenxinBasket"
      });
    },
    push(ii, val) {
      if (
        this.$store.state.basketSelectResult[this.$route.params.i][ii] ==
          undefined ||
        this.$store.state.basketSelectResult[this.$route.params.i][ii] == ""
      ) {
        this.$set(
          this.$store.state.basketSelectResult[this.$route.params.i],
          ii,
          val
        );
        this.$set(
          this.$store.state.basketSelectValue[this.$route.params.i],
          ii,
          val
        );
      } else {
        this.$set(
          this.$store.state.basketSelectResult[this.$route.params.i],
          ii,
          ""
        );
        this.$set(
          this.$store.state.basketSelectValue[this.$route.params.i],
          ii,
          ""
        );
      }
      var arr = JSON.parse(
        JSON.stringify(this.$store.state.basketSelectResult)
      );
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
          if (arr[i][j] == "" || arr[i][j] == undefined) {
            arr[i].splice(j, 1);
            j--;
          }
        }
      }

      for (var i = 0; i < arr.length; i++) {
        if (arr[i].length == 0) {
          arr.splice(i, 1);
          i--;
        }
      }
      this.$store.state.basketSumcount = arr.length;

      if (this.$store.state.basketSumcount == 1) {
        if (
          this.$store.state.basketResult[this.$route.params.i].single == 1 &&
          ii >= 6 &&
          ii < 18
        ) {
          for (let i = 6; i < 18; i++) {

            if (
              this.$store.state.basketSelectResult[this.$route.params.i][ii] !=
                undefined ||
              this.$store.state.basketSelectResult[this.$route.params.i][ii] !=
                ""
            ) {
              this.flag = true;
              break;
            }
            var arrs = JSON.parse(
              JSON.stringify(
                this.$store.state.basketSelectResult[
                  this.$route.params.i
                ].slice(6, 18)
              )
            );
            for (var i = 0; i < arrs.length; i++) {
              if (arrs[i].length == 0) {
                arrs.splice(i, 1);
                i--;
              }
            }
            if (arrs.length == 0) {
              this.flag = false;
            }
          }
        }
      }
    },
    addColor(i) {
      if (
        this.$store.state.basketSelectResult[this.$route.params.i][i] ==
          undefined ||
        this.$store.state.basketSelectResult[this.$route.params.i][i] == ""
      ) {
        return "";
      } else {
        return "bgColor";
      }
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.bor {
  border: 1px solid orange !important;
}
.fenxi {
  color: #ffffff;
  font-size: 14px;
}
.main {
  padding: 0 15px;
  h3 {
    font-size: 16px;
    padding: 15px 0;
    display: inline-block;
  }
  .first {
    font-size: 12px;
    .left {
      float: left;
      width: 10%;
      p {
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #ffffff;
      }
      .p1 {
        background-color: rgb(207, 207, 207);
      }
      .p2 {
        background-color: rgb(230, 55, 55);
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 40px;
          width: 49%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          line-height: 40px;
          color: #4b4949;
        }
      }
    }
  }
  .second {
    font-size: 12px;
    .left {
      float: left;
      width: 10%;
      height: 50px;
      background-color: rgb(118, 178, 235);
      p {
        height: 50px;
        width: 0.5rem;
        text-align: center;
        font-size: 13px;
        margin: 0 auto;
        color: white;
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 50px;
          width: 49%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          line-height: 50px;
          color: #4b4949;
        }
      }
    }
  }
  .third {
    font-size: 12px;
    height: 155px;
    .left {
      float: left;
      width: 10%;
      p {
        height: 1.5rem;
        text-align: center;
        border: 0.02rem solid #ffffff;
        writing-mode: vertical-lr;
        width: 34px;
        /* text-align: center; */

        line-height: 34px;
        color: #ffffff;
      }
      .p1 {
        background-color: #ec9893;
      }
      .p2 {
        background-color: #76b2eb;
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 36px;
          width: 32.5%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          font-size: 12px;
          color: #4b4949;
          p {
            margin-top: 2px;
          }
        }
      }
    }
  }
  .fourth {
    .sheng,
    .fu {
      .left {
        float: left;
        width: 10%;
        height: 125px;
        line-height: 125px;
        background-color: rgb(236, 152, 147);

        p {
          text-align: center;
          font-size: 14px;
          margin: 0 auto;
          color: white;
        }
      }
      .bgc {
        background-color: rgb(130, 235, 72);
      }
      .right {
        width: 90%;
        float: left;
        ul {
          li {
            display: inline-block;
            height: 40px;
            width: 19%;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 40px;
            color: #4b4949;
          }
        }
      }
    }
    .ping {
      .left {
        float: left;
        width: 10%;
        height: 40px;
        line-height: 40px;
        background-color: rgb(115, 175, 245);
        p {
          text-align: center;
          font-size: 14px;
          margin: 0 auto;
          color: white;
        }
      }
      .right {
        width: 90%;
        float: left;
        ul {
          li {
            display: inline-block;
            height: 40px;
            width: 19%;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 40px;
            color: #4b4949;
          }
        }
      }
    }
  }
}
.bgColor {
  background-color: red;
  color: white !important;
  text-align: center !important;
}
.btn {
  display: flex;
  width: 100%;
}
</style>