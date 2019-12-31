<template>
  <div class="container" id="shop">
    <div class="main">
      <div title="即时" class="instant">
        <p class="title" v-if="type==1&&count!=0">即时赛事{{count}}场</p>
        <p class="title" v-if="type==2&&count!=0">已完成比赛{{count}}场</p>
        <div class="con" v-for="(item,index) in list" :key="index" @click="detail(item)">
          <div class="head">
            <div class="left">
              <span class="nba">{{item.lcn}}</span>
            </div>
            <div class="right">
              <span>{{item.bdate}}</span>
              <span class="time">{{item.btime}}</span>
              <span class="last" v-if="type==1&& item.acore==''&&item.hcore==''">未开赛</span>
              <span class="last" v-if="type==1&& item.playStatus==1">第一节</span>
              <span class="last" v-if="type==1&& item.playStatus==2">第二节</span>
              <span class="last" v-if="type==1&& item.playStatus==3">第三节</span>
              <span class="last" v-if="type==1&& item.playStatus==4">第四节</span>
            </div>
          </div>
          <div class="top">
            <div class="img">
              <img :src="item.aIcon" />
              <h3>{{item.acn}}</h3>
            </div>
            <div class="text yanse" v-if="type==2">{{item.acore }}&nbsp;:&nbsp;{{item.hcore}}</div>
            <div class="text" v-if="type==1&& item.acore==''&&item.hcore=='' ">VS</div>
            <div
              class="text yanse"
              v-if="type==1&& item.acore!=''&&item.hcore!=''"
            >{{item.acore}}&nbsp;:&nbsp;{{item.hcore}}</div>
            <div class="img-right">
              <img :src="item.hIcon" />
              <h3>{{item.hcn}}</h3>
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
  props: {
    list: {
      type: Array
    },
    count: {
      type: Number,
      default() {
        return 0;
      }
    },
    type: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    show() {
      this.$router.push({
        path: "/matchFenxi"
      });
    },
    detail(item) {
      this.$router.push({
        name: "fenxinBasket",
        params: {
          data: {
            id: item.mId,
            acn: item.acn,
            hcn: item.hcn,
            hIcon: item.hIcon,
            aIcon: item.aIcon,
            playStatus: item.playStatus,
            bdate: item.bdate,
            btime: item.btime,
            acore: item.acore,
            hcore: item.hcore,
            type: this.type
          }
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  margin: 6px 0 6px 5px;
  font-size: 13px;
  color: #777;
}
.instant {
  .con {
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
    padding: 5px;
    .head {
      padding: 2px 7px;
      font-size: 12px;
      color: #777;
      .left {
        float: left;
        width: 110px;
        height: 14px;
        border-right: 1px solid #cccccc;
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

      width: 100%;
      .img-right {
        position: relative;
        width: 100px;
        img {
          display: block;
          width: 40px;
          height: 40px;
          margin: auto;
          margin-top: 5px;
        }
      }
      .img {
        position: relative;
        width: 100px;
        img {
          display: block;
          width: 40px;
          height: 40px;
          margin: auto;
          margin-top: 5px;
        }
      }

      h3 {
        font-size: 14px;
        padding: 5px 0;
        margin-top: 10px;
        color: #7d7e80;
      }
      .text {
        font-size: 20px;
        color: #777;
      }
      .yanse {
        color: red;
      }
    }
  }
}
</style>