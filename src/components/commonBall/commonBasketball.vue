<template>
  <div class="container" id="shop">
    <div class="main">
      <div title="即时" class="instant" @click="show">
        <p class="title">即将开赛18场</p>
        <div class="con">
          <div class="head">
            <div class="left">
              <span>304</span>
              <span class="nba">NBA</span>
            </div>
            <div class="right">
              <span>11-07</span>
              <span class="time">08:30</span>
              <span class="last">第三节 05:23</span>
            </div>
          </div>
          <div class="top">
            <div class="img">
              <img src="https://picsum.photos/640/320" />
              <h3>asd</h3>
            </div>
            <div class="text yanse">90&nbsp;:&nbsp;97</div>
            <div class="img-right">
              <img src="https://picsum.photos/640/320" />
              <h3>asd</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "score",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    show() {
      this.$router.push({
        path: "/matchFenxi"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  margin: 6px 0 6px 5px;
  font-size: 13px;
  color: #999;
}
.instant {
  .con {
    background-color: #fff;
    border-bottom: 2px solid rgb(243, 243, 243);
    padding: 5px;
    .head {
      padding: 2px 7px;
      font-size: 12px;
      color: rgb(160, 160, 160);
      .left {
        float: left;
        width: 70px;
        height: 14px;
        border-right: 1px solid rgb(160, 160, 160);
        margin-top: 5px;
        .nba {
          margin-left: 10px;
        }
      }
      .right {
        float: left;
        padding-left: 0.3rem;
        .time {
          display: inline-block;
          width: 50px;
          height: 20px;
          background-color: rgb(240, 240, 240);
          text-align: center;
          border-radius: 10px;
          line-height: 20px;
        }
        span {
          margin-left: 3px;
        }
        .last {
          font-size: 12px;
          color: rgb(205, 165, 105);
        }
        .last1 {
          color: rgb(95, 145, 230);
        }
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
        width: 100px;
        img {
          display: block;
          width: 50px;
          height: 50px;
          margin: auto;
        }
      }
      .img {
        position: relative;
        width: 100px;
        img {
          display: block;
          width: 50px;
          height: 50px;
          margin: auto;
        }
      }

      h3 {
        font-size: 16px;
        padding: 5px 0;
        margin-top: 10px;
      }
      .text {
        font-size: 20px;
        color: #999;
      }
      .yanse {
        color: red;
      }
    }
  }
}
</style>