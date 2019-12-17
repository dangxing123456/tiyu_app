<template>
  <div class="container" id="shop">
    <navBar :goback="true" title>
      <div slot="title">
        <span>{{list.hcn}}</span>
        <span>VS</span>
        <span>{{list.acnAbbr}}</span>
      </div>
      <div class="right" slot="right">
        <span class="fenxi">分析</span>
      </div>
    </navBar>
    <div class="main">
      <h3>胜平负/让球</h3>
      <div class="first">
        <div class="left">
          <p class="p1">{{list.single}}</p>
          <p class="p2">{{list.goalline}}</p>
        </div>

        <div class="right">
          <ul>
            <li
              v-for="(item,i) in list.footBallBet"
              :key="i"
              v-if="i<6"
              :class="addColor(i)"
              @click="push(i,item)"
            >
              <span v-if="i==0 || i==3">胜</span>
              <span v-else-if="i==1 || i==3">平</span>
              <span v-else-if="i==2 || i==3">负</span>
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
      </div>
      <h3>总进球</h3>
      <div class="second">
        <div class="left">
          <p class="p1">总进球</p>
        </div>
        <div class="right">
          <ul>
            <li
              v-for="(item,i) in list.footBallBet"
              :key="i"
              v-if="i>=6 && i<14"
              :class="addColor(i)"
              @click="push(i,item)"
            >
              <p v-if="i==6">0球</p>
              <p v-else-if="i==7">1球</p>
              <p v-else-if="i==8">2球</p>
              <p v-else-if="i==9">3球</p>
              <p v-else-if="i==10">4球</p>
              <p v-else-if="i==11">5球</p>
              <p v-else-if="i==12">6球</p>
              <p v-else-if="i==13">7球</p>
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
      </div>
      <h3>半全场</h3>
      <div class="third">
        <div class="left">
          <p class="p1">半全场</p>
        </div>
        <div class="right">
          <ul>
            <li
              v-for="(item,i) in list.footBallBet"
              :key="i"
              v-if="i>=14 && i<23"
              :class="addColor(i)"
              @click="push(i,item)"
            >
              <p v-if="i==14">胜胜</p>
              <p v-else-if="i==15">胜平</p>
              <p v-else-if="i==16">胜负</p>
              <p v-else-if="i==17">平胜</p>
              <p v-else-if="i==18">平平</p>
              <p v-else-if="i==19">平负</p>
              <p v-else-if="i==20">负胜</p>
              <p v-else-if="i==21">负平</p>
              <p v-else-if="i==22">负负</p>
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
      </div>
      <h3>比分</h3>
      <div class="fourth">
        <div class="sheng">
          <div class="left">
            <p class="p1">胜</p>
          </div>
          <div class="right">
            <ul>
              <li
                v-for="(item,i) in list.footBallBet"
                :key="i"
                v-if="i>=23 && i<36"
                :class="addColor(i)"
                @click="push(i,item)"
              >
                <p v-if="i==23">1:0</p>
                <p v-else-if="i==24">2:0</p>
                <p v-else-if="i==25">2:1</p>
                <p v-else-if="i==26">3:0</p>
                <p v-else-if="i==27">3:1</p>
                <p v-else-if="i==28">3:2</p>
                <p v-else-if="i==29">4:0</p>
                <p v-else-if="i==30">4:1</p>
                <p v-else-if="i==31">4:2</p>
                <p v-else-if="i==32">5:0</p>
                <p v-else-if="i==33">5:1</p>
                <p v-else-if="i==34">5:2</p>
                <p v-else-if="i==35">胜其他</p>
                <p>{{item}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="ping">
          <div class="left">
            <p class="p1">平</p>
          </div>
          <div class="right">
            <ul>
              <li
                v-for="(item,i) in list.footBallBet"
                :key="i"
                v-if="i>=36 && i<41"
                :class="addColor(i)"
                @click="push(i,item)"
              >
                <p v-if="i==36">0:0</p>
                <p v-else-if="i==37">1:1</p>
                <p v-else-if="i==38">2:2</p>
                <p v-else-if="i==39">3:3</p>
                <p v-else-if="i==40">平其他</p>
                <p>{{item}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="fu">
          <div class="left bgc">
            <p class="p1">负</p>
          </div>
          <div class="right">
            <ul>
              <li
                v-for="(item,i) in list.footBallBet"
                :key="i"
                v-if="i>=41 && i<54"
                :class="addColor(i)"
                @click="push(i,item)"
              >
                <p v-if="i==41">0:1</p>
                <p v-else-if="i==42">0:2</p>
                <p v-else-if="i==43">1:2</p>
                <p v-else-if="i==44">0:3</p>
                <p v-else-if="i==45">1:3</p>
                <p v-else-if="i==46">2:3</p>
                <p v-else-if="i==47">0:4</p>
                <p v-else-if="i==48">1:4</p>
                <p v-else-if="i==49">2:4</p>
                <p v-else-if="i==50">0:5</p>
                <p v-else-if="i==51">1:5</p>
                <p v-else-if="i==52">2:5</p>
                <p v-else-if="i==53">负其他</p>
                <p>{{item}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="btn">
      <van-button type="default" size="large">取消</van-button>
      <van-button type="danger" size="large" @click="$router.go(-1)">确定</van-button>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
//引入vuex中 listData
import { mapState } from "vuex";
export default {
  name: "allplay",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      list: this.$store.state.result[this.$route.params.i],
      a: ""
    };
  },
  watch: {},
  methods: {
    push(i, val) {
      if (
        this.$store.state.selectResult[this.$route.params.i][i] == undefined ||
        this.$store.state.selectResult[this.$route.params.i][i] == ""
      ) {
        this.$set(this.$store.state.selectResult[this.$route.params.i], i, val);
        this.$set(this.$store.state.selectValue[this.$route.params.i], i, val);
      } else {
        this.$set(this.$store.state.selectResult[this.$route.params.i], i, "");
        this.$set(this.$store.state.selectValue[this.$route.params.i], i, "");
      }
    },
    addColor(i) {
      if (
        this.$store.state.selectResult[this.$route.params.i][i] == undefined ||
        this.$store.state.selectResult[this.$route.params.i][i] == ""
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
.fenxi {
  color: #ffffff;
  font-size: 14px;
}
.main {
  /deep/ .icon {
    font-size: 12px;
  }
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
        height: 35px;
        line-height: 35px;
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
          height: 35px;
          width: 32%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          line-height: 35px;
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
      height: 73px;
      line-height: 16px;
      background-color: rgb(118, 178, 235);
      p {
        height: 82px;
        width: 25px;
        text-align: center;
        font-size: 14px;
        margin: 0 auto;
        color: white;
        padding-top: 15px;
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 35px;
          width: 24%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          color: #4b4949;
          p {
            &:first-child {
              margin-top: 2.5px;
            }
          }
        }
      }
    }
  }
  .third {
    font-size: 12px;
    .left {
      float: left;
      width: 10%;
      height: 110px;
      line-height: 16px;
      background-color: rgb(240, 170, 120);
      p {
        height: 82px;
        width: 25px;
        text-align: center;
        font-size: 14px;
        margin: 0 auto;
        color: white;
        padding-top: 38px;
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 35px;
          width: 32%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          color: #4b4949;
          p {
            &:first-child {
              margin-top: 2.5px;
            }
          }
        }
      }
    }
  }
  .fourth {
    font-size: 12px;
    .sheng,
    .fu {
      .left {
        float: left;
        width: 10%;
        height: 110px;
        line-height: 122px;
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
            height: 35px;
            width: 19%;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;

            color: #4b4949;
            p {
              &:first-child {
                margin-top: 2.5px;
              }
            }
          }
        }
      }
    }
    .ping {
      .left {
        float: left;
        width: 10%;
        height: 36px;

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
            height: 35px;
            width: 19%;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;

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