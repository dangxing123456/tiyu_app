<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div class="instant">
      <div class="con">
        <div class="top">
          <div class="img">
            <img src="https://picsum.photos/640/320" />
            <h4>{{content.zhu}}</h4>
          </div>
          <div>
            <p class="text">
              <span>{{content.time}}</span>

              <span class="rady" v-if="content.scoreStatus=='Fixture'">未开始</span>
              <span class="rady" v-if="content.scoreStatus=='Playing'">进行中</span>
              <span class="rady" v-if="content.scoreStatus=='Played'">已完场</span>
            </p>

            <div class="text" v-if="content.scoreStatus=='Fixture'">VS</div>
            <div class="textScore" v-if="content.scoreStatus=='Playing'">
              <p class="score">{{content.fsH}}:{{content.fsA}}</p>
              <p>
                <span>上半场</span>
                <span>{{content.htsH}}:{{content.htsA}}</span>
              </p>
            </div>
            <div class="textScore" v-if="content.scoreStatus=='Played'">
              <p class="score">{{content.fsH}}:{{content.fsA}}</p>
              <p>
                <span>上半场</span>
                <span>{{content.htsH}}:{{content.htsA}}</span>
              </p>
            </div>
          </div>
          <div class="img-right">
            <img src="https://picsum.photos/640/320" />
            <h4>{{content.ke}}</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- <van-tabs
      v-model="active"
      @click="detail"
      title-inactive-color="#333333"
      title-active-color="#f24a44"
      sticky
    >
      <van-tab title="情报"></van-tab>
      <van-tab title="分析"></van-tab>
      <van-tab title="赔率"></van-tab>
      <van-tab title="方案"></van-tab>
    </van-tabs>-->

    <div class="main">
      <van-tabs v-model="active" sticky :offset-top="190">
        <van-tab title="分析">
          <div id="myChart" :style="{ height: '300px'}"></div>

          <h3>主队近10场比赛记录</h3>

          <p>{{total.win}}胜{{total.draw}}平{{total.lose}}负</p>
          <table class="tab2">
            <tr class="title">
              <th>赛事</th>
              <th>比赛日期</th>
              <th>主队</th>
              <th>比分</th>
              <th>客队</th>
              <th>半场</th>
            </tr>
            <tr v-for="(item,index) in list" :key="index">
              <td>{{item.l_cn_abbr}}</td>
              <td>{{item.date_cn}}</td>
              <td>{{item.h_cn}}</td>
              <td>{{item.half}}</td>
              <td>{{item.a_cn}}</td>
              <td>{{item.half}}</td>
            </tr>
          </table>
          <div id="myChart1" :style="{ height: '300px'}"></div>
          <h3>客队近10场比赛记录</h3>
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
          </table>
          <div id="myChart2" :style="{ height: '300px'}"></div>
          <h3>两队交锋近10场比赛记录</h3>
          <p>{{total2.win}}胜{{total2.draw}}平{{total2.lose}}负</p>
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
          </table>
        </van-tab>

        <van-tab title="客队">
          <div class="div">
            <div class="title">
              <h4>{{wrap.h.team_name_abbr}}射手</h4>
            </div>
            <div class="con" v-for="(item,index) in wrap.h.scorer" :key="index">
              <div class="head">
                <p>
                  <span>{{index}}</span>
                  <span>{{item.person_name}}</span>
                </p>
                <p>伤停: {{item.is_injury_suspension==0?'无':'有'}}</p>
              </div>
              <div class="content">
                <p>出场{{item.appearances}}次</p>
                <p>近{{item.goals}}球(占本队{{item.goal_ratio}}),助攻{{item.assists}}次(占本队{{item.assist_ratio}}),场均{{item.goal_avg}}球</p>
              </div>
            </div>
          </div>
          <div class="div">
            <div class="title">
              <h4>{{wrap.a.team_name_abbr}}射手</h4>
            </div>
            <div class="con" v-for="(item,index) in wrap.a.scorer" :key="index">
              <div class="head">
                <p>
                  <span>{{index}}</span>
                  <span>{{item.person_name}}</span>
                </p>
                <p>伤停: {{item.is_injury_suspension==0?'无':'有'}}</p>
              </div>
              <div class="content">
                <p>出场{{item.appearances}}次</p>
                <p>近{{item.goals}}球(占本队{{item.goal_ratio}}),助攻{{item.assists}}次(占本队{{item.assist_ratio}}),场均{{item.goal_avg}}球</p>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="两队交锋">内容 3</van-tab>
      </van-tabs>

      <!-- <router-view /> -->
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";

export default {
  name: "matchFenxi",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      title: "赛事分析",
      active: 0,
      list: [],
      list1: [],
      content: this.$route.params.head,
      total: {},
      total1: {},
      total2: {},
      wrap: {}
    };
  },
  computed: {},
  watch: {},
  methods: {
    // detail(name, title) {
    //   if (title == "情报") {
    //     this.$router.push({
    //       path: "/intelligence"
    //     });
    //   } else if (title == "分析") {
    //     this.$router.push({
    //       path: "/analysis"
    //     });
    //   } else if (title == "赔率") {
    //     this.$router.push({
    //       path: "/losspercent"
    //     });
    //   } else {
    //     this.$router.push({
    //       path: "/plan"
    //     });
    //   }
    // },
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
              { value: this.total.draw, name: "平" },
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
                  var colorList = ["red", "#1E90FF", "#90EE90"];
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
              { value: this.total1.draw, name: "平" },
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
                  var colorList = ["red", "#1E90FF", "#90EE90"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      });
    },
    drawBing2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "两队交锋近10场数据",
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
                formatter: "  {b|{b}}{per|{d}%}",

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
              { value: this.total2.win, name: "胜" },
              { value: this.total2.draw, name: "平" },
              { value: this.total2.lose, name: "负" }
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
                  var colorList = ["red", "#1E90FF", "#90EE90"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      });
    },
    getList() {
      this.$SERVER
        .getFootBallHistoryInfor({ matchId: this.$route.params.head.id })
        .then(res => {
          this.list = res.data.hhistoryInfor.result.data;
          this.list1 = res.data.ahistoryInfor.result.data;
          this.list2 = res.data.twoTeamMatchInfo.result.data;
          this.total = res.data.ahistoryInfor.result.total;
          this.total1 = res.data.hhistoryInfor.result.total;
          this.total2 = res.data.twoTeamMatchInfo.result.total;
          this.wrap = res.data.ftShooterInfor.result;
          console.log(this.wrap);
          this.$nextTick(function() {
            this.drawBing();
            this.drawBing1();
            this.drawBing2();
          });
        });
    }
  },
  created() {
    console.log(this.$route.params.head);
    this.getList();
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
#myChart,
#myChart1,
#myChart2 {
  width: 80%;
  margin: 0 auto;
}
.main {
  background-color: #fff;
  /deep/ .van-sticky--fixed {
    background-color: #fff;
    top: 169px;
  }
  h3 {
    font-size: 15px;
    font-weight: bold;
    // padding: 10px 0;
    border-left: 3px solid #f24a44;
    padding: 0 15px;
    margin: 10px 0;
  }
  .div {
    border-bottom: 1px solid #eee;
    .title {
      width: 100%;
      height: 35px;
      line-height: 35px;
      background-color: #87ceff;
      font-size: 14px;
      color: black;
      padding: 0 10px;
    }
    .con {
      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #eeeeee;
        font-size: 14px;
        padding: 6px 10px;
      }
      .content {
        font-size: 12px;
        padding: 5px 10px;
        p {
          padding: 3px 0;
        }
      }
    }
  }
}
.wrap {
  background-color: #fff;
  p {
    font-size: 14px;
    color: #f24a44;
    margin: 10px;
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
        width: 100%;
        font-size: 12px;
        color: #fff;

        .rady {
          color: rgb(255, 187, 0);
        }
        h3 {
          font-size: 35px;
        }
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