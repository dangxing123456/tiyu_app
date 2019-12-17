<template>
  <div class="container" id="shop">
    <div class="main">
      <van-tabs>
        <van-tab title="即时" class="instant">
          <commonBall></commonBall>
        </van-tab>
        <van-tab title="完成" class="complete">
          <p class="title">即将开赛18场</p>
          <div class="con">
            <div class="head">
              <span>周三001 日职乙</span>
              <span class="time">18:00</span>
            </div>
            <div class="top">
              <div class="img">
                <div class="shoucang"></div>
                <div class="icon">
                  <span>4</span>
                  <span class="sen">4</span>
                </div>
                <img src="https://picsum.photos/640/320" />
                <h3>asd</h3>
              </div>
              <div class="text">
                <p class="score">0:2</p>
                <p>上半场 0:1</p>
              </div>
              <div class="img-right">
                <img src="https://picsum.photos/640/320" />
                <h3>asd</h3>
                <div class="icon">
                  <span>4</span>
                  <span class="sen">4</span>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="赛程" class="complete">
          <commonBall></commonBall>
        </van-tab>
        <van-tab title="关注">
          <commonBall></commonBall>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import commonBall from "../../components/commonBall/commonBall";
export default {
  name: "score",
  components: {
    commonBall
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.title {
  margin: 6px 0 6px 5px;
  font-size: 13px;
  color: #999;
}
.complete {
  .con {
    background-color: #fff;
    border-bottom: 2px solid rgb(243, 243, 243);
    padding: 5px;
    height: 140px;
    .head {
      padding: 2px 7px;
      font-size: 12px;
      color: rgb(160, 160, 160);
      .rady {
        color: rgb(106, 177, 244);
      }
      .time {
        margin-left: 60px;
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
        .icon {
          width: 35px;
          position: absolute;
          top: -14px;
          right: 11px;
          span {
            display: inline-block;
            width: 14px;
            height: 20px;
            background-color: rgb(234, 231, 113);
            font-size: 14px;
          }
          .sen {
            background-color: rgb(221, 125, 122);
          }
        }
      }
      .img {
        position: relative;
        width: 150px;
        .shoucang {
          float: left;
          margin-top: 35px;
          width: 30px;
        }
        img {
          display: block;
          width: 50px;
          height: 50px;
          margin: auto;
        }
        .icon {
          width: 35px;
          position: absolute;
          top: -14px;
          left: 25px;
          span {
            display: inline-block;
            width: 14px;
            height: 20px;
            background-color: rgb(234, 231, 113);
            font-size: 14px;
          }
          .sen {
            background-color: rgb(221, 125, 122);
          }
        }
      }

      h3 {
        font-size: 16px;
        padding: 5px 0;
        margin-top: 10px;
      }
      .text {
        width: 50px;
        p {
          font-size: 13px;
          color: #999;
        }
        .score {
          font-size: 30px;
          color: red;
        }
      }
    }
  }
}
</style>