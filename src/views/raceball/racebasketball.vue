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
      <van-collapse v-model="activeNames">
        <van-collapse-item name="1">
          <div class="title" slot="title">
            <span>2019年11月8日</span>
            <span>星期五</span>
            <span>24场</span>
            <span>可投注</span>
          </div>
          <div class="test">
            <div class="left">
              <p class="first">001</p>
              <p>澳超</p>
              <p>16:19截止</p>
            </div>
            <div class="right">
              <div class="div1">
                <span class="name">[1]墨尔本城</span>
                <span class="name">[6]中央海岸水手</span>
                <span>-1.5</span>
              </div>
              <div class="tab">
                <div class="left1">
                  <p class="p1">
                    <span class="p1-first">0</span>
                  </p>
                  <p class="p2">
                    <span class="p2-first">0</span>
                  </p>
                </div>
                <div class="center">
                  <ul>
                    <li
                      :class="box.includes(item) ? 'bgColor':'' "
                      v-for="(item,index) in list"
                      :key="index"
                      @click="change(item)"
                    >{{item.score}}</li>
                  </ul>
                </div>
                <div class="right1">
                  <span ref="sp" @click="detailPlay">全部玩法</span>
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
        { text: "单关", value: 5 },
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
        { score: "胜1.50" },
      ],
      box: [],
      box1: [],
      box2: []
    };
  },
  computed: {},
  watch: {
    box: function() {
      if (this.box.length > 0) {
        this.$refs.sp.innerHTML = "<span>已选" + this.box.length + "项</span>";
        this.$refs.sp.style.background = "red";
        this.$refs.sp.style.color = "white";
      } else {
        this.$refs.sp.innerHTML = "<span>全部玩法</span>";
        this.$refs.sp.style.background = "white";
        this.$refs.sp.style.color = "#4b4949";
      }
    }
  },
  methods: {
    detailPlay() {
      this.$router.push({
        path: "/allplayBasket",
        query: {
          list: this.list,
          box: this.box
        }
      });
    },
    alertMenu() {
      this.show = true;
    },
    change: function(e) {
      if (this.box.includes(e)) {
        this.box.splice(this.box.indexOf(e), 1);
      } else {
        this.box.push(e);
      } // 把点击的元素item放入box数组中                    this.box.push(e);
      console.log(this.box.length);
    },
    change1: function(e) {
      if (this.box1.includes(e)) {
        this.box1.splice(this.box1.indexOf(e), 1);
      } else {
        this.box1.push(e);
      } // 把点击的元素item放入box数组中                    this.box.push(e);
      console.log(this.box1.length);
    },
    change2: function(e) {
      if (this.box2.includes(e)) {
        this.box2.splice(this.box2.indexOf(e), 1);
      } else {
        this.box2.push(e);
      } // 把点击的元素item放入box数组中                    this.box.push(e);
      console.log(this.box2.length);
    }
  },
  mounted() {}
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
}
.test {
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    width: 80%;
    .div1 {
      display: flex;
      justify-content: space-around;
      font-size: 17px;
      color: #4b4949;
      .name{
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
        ul {
          li {
            display: inline-block;
            height: 30px;
            width: 111px;
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
</style>