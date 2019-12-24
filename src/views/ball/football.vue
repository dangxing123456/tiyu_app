<template>
  <div class="container" id="shop">
    <div class="main">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-tabs sticky :offset-top="85">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getlist">
            <van-tab title="即时" class="instant">
              <commonBall :list="list1" :count="count1"></commonBall>
            </van-tab>

            <van-tab title="完成" class="complete">
              <p class="title">已完成开赛{{count}}场</p>
              <div
                class="con"
                v-for="(item,i) in list"
                :key="i"
                v-if="item.scoreStatus=='Played'"
                @click="detail(item)"
              >
                <div class="head">
                  <span>{{item.num}} {{item.lcnAbbr}}</span>
                  <span class="time">{{item.time}}</span>
                </div>
                <div class="top">
                  <div class="img">
                    <div class="shoucang"></div>
                    <!-- <div class="icon">
                  <span>4</span>
                  <span class="sen">4</span>
                    </div>-->
                    <!-- <img src="https://picsum.photos/640/320" /> -->
                    <h3>{{item.hcn}}</h3>
                  </div>
                  <div class="text">
                    <p class="score">{{item.fsH}}:{{item.fsA}}</p>
                    <p>上半场{{item.htsH}}:{{item.htsA}}</p>
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
              </div>
            </van-tab>

            <!-- <van-tab title="赛程" class="complete">
            <commonBall></commonBall>
            </van-tab>-->
          </van-list>
        </van-tabs>
      </van-pull-refresh>
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
    return {
      list: [],
      count: 0,
      count1: 0,
      finished: false,
      loading: false,
      page: 1,
      isLoading: false,
      list1: []
    };
  },
  created() {},
  methods: {
    detail(item) {
      this.$router.push({
        name: "matchFenxi",
        params: {
         
          head: {
            id:item.id,
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
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.getlist();
      }, 500);
    },
    getlist() {
      this.$SERVER
        .getFootBallCurrentScore({
          pagenum: this.page,
          pagesize: 10
        })
        .then(res => {
          for (var i = 0; i < res.data.list.length; i++) {
            if (res.data.list[i].scoreStatus == "Played") {
              this.count++;
              this.list.push(res.data.list[i]);
            } else {
              this.count1++;
              this.list1.push(res.data.list[i]);
            }
          }

          this.loading = false;
          this.page++;
          // this.list = res.data.list;
          if (!res.data.hasNextPage) {
            this.finished = true;
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
  color: #999;
}
.complete {
  .con {
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
    padding: 5px;

    .head {
      padding: 2px 7px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #777;
      .rady {
        color: rgb(106, 177, 244);
      }
      .time {
        margin-right: 150px;
        display: inline-block;
        width: 60px;
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
      // padding: 0 15px 0px 15px;
      width: 100%;
      .img-right {
        position: relative;
        width: 150px;
        img {
          display: block;
          width: 50px;
          height: 50px;
          margin: auto;

          h3 {
            font-size: 14px;
          }
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
        width: 50px;
        padding: 0 10px;
        p {
          font-size: 12px;
          color: #999;
        }
        .score {
          font-size: 22px;
          color: red;
        }
      }
    }
  }
}
</style>