<template>
  <div class="container">
    <navBar></navBar>
    <div class="head">
      <img src="@/assets/images/paihang.png" alt srcset />
    </div>
    <div class="main">
      <van-tabs v-model="active" sticky :offset-top="176" type="line">
        <van-tab title="连红榜">
          <div class="content" v-for='(item,index) in 10' :key='index'>
            <div class="first">
              <span>1</span>
            </div>
            <div class="info">
              <img src="@/assets/images/paihang.png" alt srcset />
              <span class="name">篮球操盘手</span>

              <span>5</span>
            </div>
            <div class="last">
              <p>7</p>
              <p>连红</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="胜率榜">
            <div class="content" v-for='(item,index) in 10' :key='index'>
            <div class="first">
              <span>1</span>
            </div>
            <div class="info">
              <img src="@/assets/images/paihang.png" alt srcset />
              <span class="name">篮球操盘手</span>

              <span>5</span>
            </div>
            <div class="last">
              <p>7</p>
              <p>连红</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="大神榜">
            <div class="content" v-for='(item,index) in 10' :key='index'>
            <div class="first">
              <span>1</span>
            </div>
            <div class="info">
              <img src="@/assets/images/paihang.png" alt srcset />
              <span class="name">篮球操盘手</span>

              <span>5</span>
            </div>
            <div class="last">
              <p>7</p>
              <p>连红</p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";

export default {
  name: "bang",
  components: {
    navBar
  },
  data() {
    return {
      list: [],
      active: 0
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.head {
  width: 100%;
  height: 130px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.main {
  background-color: #fff;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 5px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    .first {
      span {
        font-size: 14px;
        color: #777;
      }
    }
    .info {
      width: 60%;
      display: flex;
      align-items: center;
      .name {
        font-size: 14px;
        margin-left: 10px;
        color: #494949;
      }
      span {
        &:last-child {
          display: inline-block;
          width: 14px;
          height: 14px;
          color: #fff;
          background-color: red;
          font-size: 12px;
          border-radius: 50%;
          text-align: center;
          line-height: 14px;
          position: absolute;
          right: 264px;
          bottom: 11px;
        }
      }
    }
    .last {
      text-align: center;
      p {
        &:first-child {
          color: red;
          font-weight: bold;
        }
        &:last-child {
          font-size: 12px;
          color: red;
        }
      }
    }
  }
}
</style>