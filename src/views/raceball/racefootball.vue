<template>
  <div class="container" id="shop">
    <navBar :goback="true" title>
      <div class="right" slot="right">
        <span class="shai" @click="alertMenu">筛</span>
      </div>
      <van-dropdown-menu class="menu" slot="title">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </navBar>
    <div class="main">
      <van-collapse v-model="activeNames">
        <van-collapse-item :name="index" v-for="(i,index) in list" :key="index">
          <div class="title" slot="title">
            <span>{{i[0].date}} {{i[0].num.substr(0,2)}}</span>
            <span>{{i.length}}场</span>
            <span>可投注</span>
          </div>
          <div class="item" v-for="(j,index2) in i" :key="index2">
            <div class="test">
              <div class="left">
                <p class="first">{{j.num.substr(2,3)}}</p>
                <p>{{j.l_cn_abbr}}</p>
                <p>16:19截止</p>
              </div>
              <div class="right">
                <div class="div1">
                  <span>[{{j.h_order}}]{{j.hcnAbbr}}</span>
                  <span>VS</span>
                  <span>[{{j.a_order}}]{{j.lcnAbbr}}</span>
                </div>
                <div class="tab">
                  <div class="left1">
                    <p class="p1">
                      <span class="p1-first">0</span>
                    </p>
                    <p class="p2">
                      <span class="p2-first">{{j.footBallBet.odds_list.hhad.fixedodds}}</span>
                    </p>
                  </div>
                  <div class="center">
                    <ul>
                      <li class="bgColor" @click="change()">{{j.score}}</li>
                    </ul>
                  </div>
                  <div class="right1">
                    <span ref="sp" @click="detailPlay">全部玩法</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-collapse-item>
      </van-collapse>

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
      activeNames: [0],
      changeColor: false,
      list: []
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
  created() {
    this.$SERVER.getFootBallMatch().then(res => {
      console.log(res.data.list);
      let objArray = [];
      let j = 0;
      for (let i = 0; i < res.data.list.length; i++) {
        if (res.data.list[i].num.substr(2, 3) == 1 && i !== 0) {
          objArray.push(res.data.list.slice(j, i - 1));
          j = i;
        } else if (i == res.data.list.length - 1) {
          objArray.push(res.data.list.slice(j, res.data.list.length));
        }
      }
      this.list = objArray
      console.log(objArray);
    });
  },
  methods: {
    detailPlay() {
      this.$router.push({
        path: "/allplay",
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
      console.log(this.box);
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