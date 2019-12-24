<template>
  <div class="container" id="shop">
    <div class="main">
      <div title="即时" class="instant">
        <p class="title">即将开赛{{count}}场</p>
        <div class="con" v-for="(item,index) in list" :key="index" @click="detail(item)">
          <div class="head">
            <span>{{item.num}} {{item.lcnAbbr}}</span>
            <span>{{item.date}}</span>
            <span class="time">{{item.time}}</span>
            <span class="rady" v-if="item.scoreStatus=='Fixture'">未开始</span>
            <span class="rady" v-if="item.scoreStatus=='Playing'">进行中</span>
          </div>
          <div class="top">
            <div class="img">
              <!-- <div class="shoucang">
                <van-icon @click.stop="change" :style="{color:color}" name="star" size="28px" />
              </div>-->
              <!-- <div class="icon">
                <span>4</span>
                <span class="sen">4</span>
              </div>-->
              <!-- <img src="https://picsum.photos/640/320" /> -->
              <h3>{{item.hcn}}</h3>
            </div>

            <div class="text" v-if="item.scoreStatus=='Fixture'">VS</div>
            <div class="textScore" v-if="item.scoreStatus=='Playing'">
              <p class="score">{{item.fsH}}:{{item.fsA}}</p>
              <p>
                <span>上半场</span>
                <span>{{item.htsH}}:{{item.htsA}}</span>
              </p>
            </div>
            <div class="img-right">
              <!-- <img src="https://picsum.photos/640/320" /> -->
              <h3>{{item.acn}}</h3>
              <!-- <div class="icon">
                <span>4</span>
                <span class="sen">4</span>
              </div>-->
            </div>
          </div>
          <div class="bottom"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "score",
  components: {},
  props: {
    list: {
      type: Array
    },
    count: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {
      color: "#eee",
      flag: false
    };
  },
  created() {},
  methods: {
    detail(item) {
      this.$router.push({
        name: "matchFenxi",
        params: {
          head: {
            id: item.id,
            zhu: item.hcn,
            ke: item.acn,
            time: item.date + " " + item.time,
            fsH: item.fsH,
            fsA: item.fsA,
            htsH: item.htsH,
            htsA: item.htsA,
            scoreStatus: item.scoreStatus
          }
        }
      });
    },
    change() {
      this.flag = !this.flag;
      console.log(this.flag);
      if (this.flag) {
        this.color = "yellow";
      } else {
        this.color = "#eee";
      }
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
    border-bottom: 1px solid #eeeeee;
    padding: 5px;
    .head {
      padding: 2px 7px;
      font-size: 12px;
      color: rgb(160, 160, 160);
      .rady {
        color: rgb(106, 177, 244);
      }
      .time {
        margin-left: 15px;
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
      .textScore {
        p {
          font-size: 12px;
          color: #777;
          width: 100px;
        }
        .score {
          font-size: 18px;
          color: #f24a44;
        }
      }
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
        font-size: 14px;
        padding: 5px 0;
        margin-top: 10px;
      }
      .text {
        width: 90px;
        font-size: 16px;
        color: #999;
      }
    }
    .bottom {
      text-align: right;
      font-size: 12px;
      color: rgb(113, 0, 11);
    }
  }
}
</style>