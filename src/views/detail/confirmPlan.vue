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
            <span>[1]墨尔本城</span>
            <span>VS</span>
            <span>[6]中央海岸水手</span>
          </div>
          <div class="tab">
            <div class="left1">
              <p class="p1">
                <span class="p1-first">0</span>
              </p>
              <p class="p2">
                <span class="p2-first">0</span>
              </p>
              <p class="p3">
                <span class="p3-first">其他</span>
              </p>
            </div>
            <div class="center">
              <div class="center">
                <ul>
                  <li v-for="(item,index) in list2" :key="index">{{item.score}}</li>
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
        <span>2注1倍</span>
        <span>
          共
          <span class="color">4.0元</span>
        </span>
        <span>
          [奖金范围：
          <span class="color">13068.42~15953.6</span> 元]
        </span>
      </div>
      <div class="con">
        <div @click="alertMenu">
          <span>4串1</span>
          <van-icon name="arrow-down" />
        </div>
        <div class="div1">
          <van-stepper v-model="value" />
          <p>倍</p>
        </div>
      </div>
      <div class="btn">
        <van-button type="default" size="large">发起合买</van-button>
        <van-button type="danger" size="large">确认下单</van-button>
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
      list: [1, 2, 3, 4],
      value: 1,
      show: false,
      actions: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    alertMenu() {
      this.show = true;
    },
    showAdd() {
      this.$router.push({ path: "/racefootball" });
    },
    //清空列表
    clears() {
      this.list.splice(0, this.list.length);
      this.$router.go(-1);
    },
    //删除列表
    remove(index) {
	  this.list.splice(index, 1);
	  console.log(this.list)
    }
  },
  mounted() {
    // console.log(this.$route)
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
  padding: 15px 10px;
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
      padding-bottom: 15px;
      font-size: 16px;
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
            height: 40px;
            width: 70px;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 40px;
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
            height: 40px;
            width: 70px;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 40px;
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
            height: 40px;
            width: 70px;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
          }
          .p3-first {
            width: 20px;
            background-color: #29e222;
            color: white;
          }
        }
      }
      .center {
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
            height: 43px;
            width: 70px;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 43px;
            color: #4b4949;
          }
        }
      }
      .right1 {
        color: #4b4949;
        span {
          display: inline-block;
          height: 122px;
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