<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div class="main">
      <div title="即时" class="instant">
        <div class="con">
          <div class="top">
            <div class="img">
              <img src="https://picsum.photos/640/320" />
              <h3>asd</h3>
            </div>
            <div class="text">
              <p>
                <span>11/14</span>
                <span>20:00</span>
                <span>未开始</span>
              </p>
              <h3>VS</h3>
            </div>
            <div class="img-right">
              <img src="https://picsum.photos/640/320" />
              <h3>asd</h3>
            </div>
          </div>
        </div>
      </div>
      <van-tabs
        v-model="active"
        @click="detail"
        title-inactive-color="#333333"
        title-active-color="#f24a44"
        sticky
      >
        <van-tab title="分析"></van-tab>
        <van-tab title="亚赔"></van-tab>
        <van-tab title="欧赔"></van-tab>
        <van-tab title="大小"></van-tab>
      </van-tabs>
      <router-view />
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";

export default {
  name: "fenxinBasket",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      title: "赛事分析",
      active: 0
    };
  },
  computed: {},
  watch: {},
  methods: {
    detail(name, title) {
      if (title == "分析") {
        this.$router.push({
          path: "/analysisBasket"
        });
      } else if (title == "亚赔") {
        this.$router.push({
          path: "/yapeiBasket"
        });
      } else if (title == "欧赔") {
        this.$router.push({
          path: "/oupeiBasket"
        });
      } else {
        this.$router.push({
          path: "/daxiaoBasket"
        });
      }
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      console.log(scrollTop);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="less" scoped>
.instant {
  .con {
    background-color: #fff;
    padding: 10px 0;
    .head {
      .time {
        margin-left: 10px;
        display: inline-block;
        width: 50px;
        height: 20px;
        background-color: rgb(240, 240, 240);
        text-align: center;
        border-radius: 10px;
        line-height: 20px;
      }
    }
    .top {
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      padding: 12px 15px 0px 15px;
      width: 90%;
      .img-right {
        position: relative;
        width: 150px;
        img {
          display: block;
          width: 50px;
          height: 50px;
          margin: auto;
        }
      }
      .img {
        position: relative;
        width: 150px;
        img {
          display: block;
          width: 50px;
          height: 50px;
          margin: auto;
        }
      }

      .text {
        padding-bottom: 30px;
        width: 44%;
        p {
          font-size: 12px;
        }
        h3 {
          font-size: 35px;
        }
      }
    }
  }
}
</style>