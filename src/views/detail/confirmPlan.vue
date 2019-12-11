<template>
  <div class="container" id="shop">
    <navBar :goback="true"></navBar>
    <div class="head">
      <div class="div1" @click="$router.push('/racefootball')">+添加/编辑赛事</div>
      <div >清空列表</div>
    </div>
    <div class="main">
      <div class="test" v-for="(item,index) in list" :key="index">
        <div class="left">
          <p class="first"></p>
          <p>
            <van-icon name="clear" />
          </p>
          <p></p>
        </div>
        <div class="right">
          <!-- <div class="div1">
            <span>[{{item.horder.substring(item.horder.length-2,item.horder.length-1)}}]{{item.hcn}}</span>
            <span>VS</span>
            <span>[{{item.aorder.substring(item.aorder.length-2,item.aorder.length-1)}}]{{item.acnAbbr}}</span>
          </div> -->
          <div class="tab">
            <div class="left1">
              <p class="p1">
                <span class="p1-first">0</span>
              </p>
              <p class="p2">
                <span class="p2-first">{{item.goalline}}</span>
              </p>
              <p class="p3">
                <span class="p3-first">其他</span>
              </p>
            </div>
            <div class="center">
              <div class="center">
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

              <div class="bot" @click="$router.push('/allplay/'+index)">
                <!-- <p :class="[a1[index].length>0  ? 'aa' : '' ]">未选择更多玩法</p> -->
                <ul>
                  <!-- <li v-for="(item,i) in item.footBallBet" :key="i" v-if="i>6 && ($store.state.selectResult[index][i]!=undefined || $store.state.selectResult[index][i]!='')">
                    <p></p>
                    {{item}}
                    </li> -->
                </ul>
              </div>
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
  data() {
    return {
      list:this.$store.state.result
    };
  },
  computed: {},
  watch: {},
  methods: {
    
    addColor(i, i2) {
      if (
        this.$store.state.selectResult[i][i2] == undefined ||
        this.$store.state.selectResult[i][i2] == ""
      ) {
        return "";
      } else {
        return "bgColor";
      }
    },

    push(index, i, val) {
      if (
        this.$store.state.selectResult[index][i] == undefined ||
        this.$store.state.selectResult[index][i] == ""
      ) {
        this.$set(this.$store.state.selectResult[index], i, val);
      } else {
        this.$set(this.$store.state.selectResult[index], i, "");
      }
    }
    
  },

  mounted() {
    
  },
  created() {}
};
</script>
<style lang="less" scoped>
.aa {
  display: none;
}
.bgColor {
  background-color: red !important;
  color: white !important;
  text-align: center !important;
}
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
      width: 88%;
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

            width: 70px;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 38px;
          }
          .p1-first {
            width: 20px;
            height: 30px;
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
            line-height: 30px;
          }
          .p2-first {
            width: 20px;
            height: 30px;
            line-height: 30px;
            background-color: rgb(100, 160, 240);
            color: white;
          }
        }
        .p3 {
          span {
            display: inline-block;
            height: 32px;
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
        ul {
          li {
            background-color: #fff;
            display: inline-block;
            height: 30px;
            width: 1.4rem;
            border: 0.02rem solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 30px;
            color: #4b4949;
          }
        }
        .bot {
          display: inline-block;
          width: 214px;

          border: 1px solid #eeeeee;
          text-align: center;
          line-height: 32px;
          background-color: #fff;
          ul {
            li {
              width: 69px;
            }
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