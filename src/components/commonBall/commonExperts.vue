<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="content" v-for="(item,index) in 10" :key="index" @click="detail">
        <div>
          <img src="https://picsum.photos/50/50" alt />
          <p>张恩华</p>
        </div>
        <div class="center">
          <p class="p1">
            <span class="span1">近7场中6场</span>
            <span class="span2">3连红</span>
          </p>
          <p class="p2">
            <span class="span1">近7场</span>
            <span class="span2">86%</span>
          </p>
          <p class="p3">
            <span>均回报</span>
            <span class="span2">113%</span>
          </p>
          <p class="p4">
            <span>擅长联赛</span>
            <span class="span1">英超</span>
            <span class="span1">西甲</span>
            <span class="span1">亚冠</span>
          </p>
        </div>
        <div class="text">
          <div v-if="show1">
            <p>
              <span>170</span> %
            </p>
            <p>均回报</p>
          </div>
          <div v-if="show2">
            <p>
              <span>10</span> 连红
            </p>
            <p>最高连红</p>
          </div>
        </div>
        <div class="right" ref="guanzhu" @click.stop="change">
          <span :style="{backgroundColor:bg_color}">{{content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonBasketBall from "../../components/commonBall/commonBasketball";
export default {
  name: "score",
  components: {
    commonBasketBall
  },
  props: ["show", "show1", "show2"],
  data() {
    return {
      title: this.$route.meta.title,
      flag: false,
      content: "+关注",
      bg_color: "red"
    };
  },
  computed: {},
  watch: {},
  mounted() {
   
  },
  methods: {
    change() {
      this.flag = !this.flag;
      if (this.flag) {
        this.content = "已关注";
        this.bg_color = "#777";
      } else {
        this.content = "+关注";
        this.bg_color = "red";
      }
    },
    detail(){
      this.$router.push({
        path:'/celebrityRecord'
      })
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  .text {
    width: 65px;
    color: #f24a44;
    span {
      font-size: 25px;
    }
  }
  .center {
    // width: 60%;
  }
  div {
    font-size: 14px;
    img {
      border-radius: 50%;
    }
    p {
      padding: 5px 0;
    }
    .p1 {
      font-size: 12px;
      .span1 {
        border: 1px solid #63b8ff;
        color: #63b8ff;
        display: inline-block;
        height: 16px;
        line-height: 16px;
        width: 70px;
        text-align: center;
        border-radius: 8px;
      }
      .span2 {
        color: #ffffff;
        background-color: #f24a44;
        display: inline-block;
        height: 16px;
        line-height: 16px;
        width: 40px;
        text-align: center;
        border-radius: 8px;
      }
    }
    .p2,
    .p3 {
      .span2 {
        color: #f24a44;
      }
    }
    .p4 {
      .span1 {
        background-color: #eee;
      }
    }
  }
  .right {
    span {
      display: inline-block;
      width: 65px;
      height: 25px;
      background-color: red;
      border-radius: 3px;
      text-align: center;
      line-height: 25px;
      color: #fff;
    }
  }
}
</style>