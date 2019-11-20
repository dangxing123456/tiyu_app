<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div class="main">
      <div class="box1">
        <div class="head">
          <div class="left">
            <img src="../../assets/images/default.png" alt />
            <div>
              <p class="p1">
                <span class="sp">张恩华</span>
              </p>
              <p
                class="p2"
              >哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            </div>
          </div>
          <div class="right">
            <div class="info" @click="change">{{content}}</div>
            <p>粉丝数:11295</p>
          </div>
        </div>
        <div class="center">
          <div class="title">
            擅长联赛:
            <span>英超</span>
            <span>西甲</span>
            <span>西亚</span>
          </div>
          <div class="con">
            <div>
              <p>
                历史最高
                <span class="num">6</span>连红
              </p>
            </div>
            <i class="ii"></i>
            <div>
              <p>
                <span class="p1">80%</span> 命中
              </p>
              <p>近5中4</p>
            </div>
            <i class="ii"></i>
            <div>
              <van-icon name="question-o" />
              <p class="p1">117%</p>
              <p>回报率</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="wrap" v-for="(item,index) in 10" :key="index" @click="detail">
          <div>哈哈哈哈哈哈哈哈哈哈哈或哈奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥</div>
          <div class="top">
            <div class="time">星期二</div>
            <div>伊拉克VS巴林</div>
            <div>
              <img src="https://picsum.photos/40/40" alt />
            </div>
          </div>
          <div class="bottom">
            <div>
              <span class="zu">竟足</span>
              <span class="wan">已完场</span>
              <span class="zhong">中1</span>
            </div>
            <div class="right">
              <van-icon name="eye" />12
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "celebrityRecord",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title,
      flag: false,
      content: "+关注"
    };
  },
  computed: {},
  watch: {},
  methods: {
    change() {
      this.flag = !this.flag;
      if (this.flag) {
        this.content = "已关注";
      } else {
        this.content = "+关注";
      }
    },
    detail(){
        this.$router.push({
            path:'/planDetails'
        })
    }
  },
  mounted() {
    // console.log(this.$route)
  }
};
</script>
<style lang="less" scoped>
.box1 {
  position: fixed;
  top: 0;
  width: 100%;
  margin-top: 46px;
  z-index: 99;
}
.content {
  margin-top: 215px;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f24a44;
  padding: 10px 10px;
  .left {
    display: flex;
    align-items: center;
    font-size: 14px;
    img {
      width: 55px;
      margin-right: 15px;
    }
    p {
      margin-top: 4px;
    }
    .p1 {
      .sp {
        font-size: 14px;
        color: white;
      }
    }
    .p2 {
      font-size: 12px;
      color: white;
      width: 185px;
      height: 50px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
  .right {
    color: #ffffff;
    font-size: 12px;
    .info {
      border: 1px solid white;
      padding: 5px;
      color: white;
      padding: 5px;
      text-align: center;
      width: 45px;
      margin: 0 auto;
    }
    p {
      padding: 10px;
    }
  }
}
.center {
  padding: 10px 10px 0 10px;
  font-size: 14px;
  background-color: #fff;
  .title {
    span {
      color: #f24a44;
      background-color: #ffc1c1;
      padding: 2px 5px;
    }
  }
  .con {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      width: 33%;
      text-align: center;
      .van-icon {
        float: right;
      }
      p {
        padding: 5px 0;
        .num {
          color: #f24a44;
        }
      }
      .p1 {
        color: #f24a44;
        font-size: 18px;
      }
    }
    .ii {
      display: inline-block;
      width: 1px;
      height: 60px;
      background-color: #ccc;
    }
  }
}
.wrap {
  background-color: #fff;
  font-size: 14px;
  padding: 10px;
  margin-top: 5px;
  border-bottom: 1px solid #cccccc;
  .top {
    background-color: #eeeeee;
    padding: 0 10px;
    margin: 10px 0;
    .time {
      color: #777;
    }
  }
  .top,
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .zu {
      color: #fff;
      background-color: #56c650;
      padding: 2px 3px;
    }
    .wan {
      border-left: 1px solid #777;
      border-right: 1px solid #777;
      padding: 0 10px;
    }
    .zhong {
      color: #f24a44;
    }
  }
  .bottom {
    font-size: 12px;
    .right {
      color: #777;
    }
    span {
      margin-left: 5px;
    }
    .zu {
      margin: 0;
    }
  }
}
</style>