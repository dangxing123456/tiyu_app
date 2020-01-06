<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div title="即时" class="instant">
      <div class="con">
        <div class="top">
          <div class="img">
            <img :src="content.aIcon" />
            <h4>{{content.acn}}</h4>
          </div>
          <div class="text">
            <p class="text">
              <span>{{content.bdate}}</span>
              <span>{{content.btime}}</span>
              <span class="last" v-if="content.type==1&& content.acore==''&&content.hcore==''">未开赛</span>
              <span class="last" v-if="content.type==1&& content.playStatus==1">第一节</span>
              <span class="last" v-if="content.type==1&& content.playStatus==2">第二节</span>
              <span class="last" v-if="content.type==1&& content.playStatus==3">第三节</span>
              <span class="last" v-if="content.type==1&& content.playStatus==4">第四节</span>
              <span class="last" v-if="content.type==2">已完场</span>
            </p>

            <div
              class="text yanse"
              v-if="content.type==1&& content.acore!=''&&content.hcore!=''"
            >{{content.acore}}&nbsp;:&nbsp;{{content.hcore}}</div>
            <div
              class="text yanse"
              v-if="content.type=='2'"
            >{{content.acore}}&nbsp;:&nbsp;{{content.hcore}}</div>
          </div>

          <div class="img-right">
            <img :src="content.hIcon" />
            <h4>{{content.hcn}}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <van-tabs v-model="active" sticky :offset-top="190">
        <div class="wrap">
          <van-tab title="分析">
            <div id="myChart" :style="{ height: '300px'}"></div>
            <h3>主队近10场比赛记录({{total.win}}胜{{total.lose}}负)</h3>
            <table class="tab2">
              <tr class="title">
                <th>赛事</th>
                <th>时间</th>
                <th>场地</th>
                <th>比分</th>
                <th>对手</th>
                <th>主胜</th>
                <th>主负</th>
                <th>胜</th>
                <th>负</th>
              </tr>
              <tr v-for="(item,index) in amatchInfor" :key="index">
                <td>{{item.l_cn_abbr}}</td>
                <td>{{item.date_cn}}</td>
                <td>{{item.is_home=='0'?'客':'主'}}</td>
                <td>{{item.fs_B}}-{{item.fs_A}}</td>
                <td>{{item.h_cn}}</td>
                <td>{{item.h}}</td>
                <td>{{item.a}}</td>
                <td>{{item.team_rs=='win'?'胜':''}}</td>
                <td>{{item.team_rs=='lose'?'负':''}}</td>
              </tr>
            </table>
            <h3>客队近10场比赛记录({{total1.win}}胜{{total1.lose}}负)</h3>
            <div id="myChart1" :style="{ height: '300px'}"></div>

            <table class="tab2">
              <tr class="title">
                <th>赛事</th>
                <th>时间</th>
                <th>场地</th>
                <th>比分</th>
                <th>对手</th>
                <th>主胜</th>
                <th>主负</th>
                <th>胜</th>
                <th>负</th>
              </tr>
              <tr v-for="(item,index) in hmatchInfor" :key="index">
                <td>{{item.l_cn_abbr}}</td>
                <td>{{item.date_cn}}</td>
                <td>{{item.is_home=='0'?'客':'主'}}</td>
                <td>{{item.fs_B}}-{{item.fs_A}}</td>
                <td>{{item.h_cn}}</td>
                <td>{{item.h}}</td>
                <td>{{item.a}}</td>
                <td>{{item.team_rs=='win'?'胜':''}}</td>
                <td>{{item.team_rs=='lose'?'负':''}}</td>
              </tr>
            </table>
          </van-tab>
          <!-- <h3>客队近10场比赛记录</h3>
          <p>{{total1.win}}胜{{total1.draw}}平{{total1.lose}}负</p>
          <table class="tab2">
            <tr class="title">
              <th>赛事</th>
              <th>比赛日期</th>
              <th>主队</th>
              <th>比分</th>
              <th>客队</th>
              <th>半场</th>
            </tr>
            <tr v-for="(item,index) in list1" :key="index">
              <td>{{item.l_cn_abbr}}</td>
              <td>{{item.date_cn}}</td>
              <td>{{item.h_cn}}</td>
              <td>{{item.half}}</td>
              <td>{{item.a_cn}}</td>
              <td>{{item.half}}</td>
            </tr>
          </table>-->
        </div>
      </van-tabs>
      <!-- <van-tabs
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
      <router-view />-->
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
      active: 0,
      content: this.$route.params.data,
      matchTeam: [],
      hmatchInfor: [],
      amatchInfor: [],
      total: {},
      total1: {}
    };
  },
  computed: {},
  watch: {},
  methods: {
    drawBing() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "主队近10场数据",
          x: "center",
          textStyle: {
            //文字颜色
            color: "#777",

            fontSize: 14
          }
        },
        tooltip: {
          trigger: "item",
          formatter: " {b} : {c} ({d}%)"
        },
        dataset: {},
        legend: {
          show: false
        },
        yAxis: [
          {
            show: false
          }
        ],
        xAxis: {
          type: "category",
          show: false
        },
        series: [
          {
            // name: "交易量",
            type: "pie",
            radius: "40%",
            center: ["50%", "60%"],
            label: {
              normal: {
                formatter: "  {b|{b}：} {per|{d}%}\n  ",

                borderRadius: 4,

                rich: {
                  a: {},

                  b: {
                    fontSize: 12
                  },
                  per: {}
                }
              }
            },
            data: [
              { value: this.total.win, name: "胜" },
              { value: this.total.lose, name: "负" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                color: function(params) {
                  //自定义颜色
                  var colorList = ["red", "#1E90FF"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      });
    },
    drawBing1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "客队近10场数据",
          x: "center",
          textStyle: {
            //文字颜色
            color: "#777",

            fontSize: 14
          }
        },
        tooltip: {
          trigger: "item",
          formatter: " {b} : {c} ({d}%)"
        },
        dataset: {},
        legend: {
          show: false
        },
        yAxis: [
          {
            show: false
          }
        ],
        xAxis: {
          type: "category",
          show: false
        },
        series: [
          {
            // name: "交易量",
            type: "pie",
            radius: "40%",
            center: ["50%", "60%"],
            label: {
              normal: {
                formatter: "  {b|{b}：} {per|{d}%}\n  ",

                borderRadius: 4,

                rich: {
                  a: {},

                  b: {
                    fontSize: 12
                  },
                  per: {}
                }
              }
            },
            data: [
              { value: this.total1.win, name: "胜" },
              { value: this.total1.lose, name: "负" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                color: function(params) {
                  //自定义颜色
                  var colorList = ["red", "#1E90FF"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      });
    },
    // detail(name, title) {
    //   if (title == "分析") {
    //     this.$router.push({
    //       path: "/analysisBasket"
    //     });
    //   } else if (title == "亚赔") {
    //     this.$router.push({
    //       path: "/yapeiBasket"
    //     });
    //   } else if (title == "欧赔") {
    //     this.$router.push({
    //       path: "/oupeiBasket"
    //     });
    //   } else {
    //     this.$router.push({
    //       path: "/daxiaoBasket"
    //     });
    //   }
    // },
    getList() {
      this.$SERVER
        .getBasketballHistoryInfor({
          mid: parseInt(this.$route.params.data.id)
        })
        .then(res => {
          this.matchTeam = res.data.matchTeam.result.data;
          this.hmatchInfor = res.data.hmatchInfor.result.data;
          this.amatchInfor = res.data.amatchInfor.result.data;
          this.total = res.data.amatchInfor.result.total;
          this.total1 = res.data.hmatchInfor.result.total;
          this.$nextTick(function() {
            this.drawBing();
            this.drawBing1();
          });
        });
    }
  },
  mounted() {},
  created() {
    this.getList();
    console.log(this.$route.params.data);
  }
};
</script>
<style lang="less" scoped>
#myChart,
#myChart1 {
  width: 80%;
  margin: 0 auto;
}
.main {
  background-color: #fff;
  /deep/ .van-sticky--fixed {
    top: 169px;
  }
}
.wrap {
  background-color: #fff;
  p {
    font-size: 14px;
    color: #f24a44;
    margin: 10px;
  }
  h3 {
    font-size: 15px;
    font-weight: bold;
    // padding: 10px 0;
    border-left: 3px solid #f24a44;
    padding: 0 15px;
    margin: 10px 0;
  }
}

.tab2 {
  width: 97%;
  text-align: center;
  font-size: 12px;
  margin: 0 auto;
  background-color: #fff;
  .title {
    color: #777777;
    background-color: #f8f8f8;
  }
  tr {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #eee;
  }
}
.instant {
  .con {
    background-image: url("../../assets/images/title.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 145px;
    background-size: 100%;

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
      padding: 30px 15px 0px 15px;
      width: 90%;
      h4 {
        margin-top: 15px;
        color: #fff;
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
        padding-bottom: 10px;
        text-align: center;
        font-size: 12px;
        color: #fff;
        .last {
          color: rgb(255, 187, 0);
        }
        .h3 {
          font-size: 35px;
        }
      }
      .yanse {
        font-size: 20px;
        color: red;
      }
      .textScore {
        color: #fff;
        p {
          font-size: 12px;
        }
        .score {
          font-size: 25px;
        }
      }
    }
  }
}
</style>