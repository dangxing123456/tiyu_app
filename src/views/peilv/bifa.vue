<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="content">
        <h3>必发指数</h3>
        <div class="wrap">
          <table class="tab2">
            <tr class="title">
              <th></th>
              <th>必发单位</th>
              <th>必发指数</th>
              <th>欧赔平均</th>
              <th>庄家盈亏</th>
            </tr>
            <tr>
              <td>主胜</td>
              <td>2.08</td>
              <td>66</td>
              <td>2.00</td>
              <td>-366048</td>
            </tr>
            <tr>
              <td>平手</td>
              <td>2.08</td>
              <td>66</td>
              <td>2.00</td>
              <td>-366048</td>
            </tr>

            <tr>
              <td>客胜</td>
              <td>2.08</td>
              <td>66</td>
              <td>2.00</td>
              <td>-366048</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="top">
        <van-tabs title-active-color="#fff" title-inactive-color="#333333">
          <van-tab title="大额交易">
            <h3>交易数据</h3>
            <echarts :id="Yid" :echartObj="YechartObj"></echarts>
            <h3>成交分布</h3>
            <div class="mai">
              <p>
                <i></i> 买入
              </p>
              <p class="p1">
                <i></i> 卖出
              </p>
            </div>
            <echarts :id="Zid" :echartObj="ZechartObj"></echarts>
            <h3>成交明细</h3>
            <div class="tab1">
              <van-tabs title-active-color="#fff" title-inactive-color="#333333">
                <van-tab title="金额"></van-tab>
                <van-tab title="时间"></van-tab>
              </van-tabs>
            </div>
            <table class="tab2">
              <tr class="title">
                <th>成交额</th>
                <th>属性</th>
                <th>价位</th>
                <th>时间</th>
                <th>占比</th>
              </tr>
              <tr v-for="item in 10">
                <td>71045</td>
                <td>主/卖</td>
                <td>1.20</td>
                <td>2019-11-18 07:58</td>
                <td>35.26%</td>
              </tr>
            </table>
          </van-tab>
          <van-tab title="全部交易">
            <h3>交易数据</h3>
            <echarts :id="Yid1" :echartObj="YechartObj"></echarts>
            <h3>成交分布</h3>
            <echarts :id="Yid3" :echartObj="YechartObj1"></echarts>
          </van-tab>
          <van-tab title="买卖挂单">
            <h3>交易数据</h3>
            <div class="mai">
              <p>
                <i></i> 买入
              </p>
              <p class="p1">
                <i></i> 卖出
              </p>
            </div>
            <echarts :id="Zid1" :echartObj="ZechartObj"></echarts>
            <h3>成交走势</h3>
            <van-tabs title-active-color="#fff" title-inactive-color="#333333">
              <van-tab title="主胜">
                <echarts :id="Yid4" :echartObj="YechartObj3"></echarts>
              </van-tab>
              <van-tab title="平">
                <echarts :id="Yid5" :echartObj="YechartObj3"></echarts>
              </van-tab>
              <van-tab title="客胜">
                <echarts :id="Yid6" :echartObj="YechartObj3"></echarts>
              </van-tab>
            </van-tabs>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "@/components/echarts/echarts.vue";
export default {
  name: "bifa",
  components: {
    echarts
  },
  props: {},
  data() {
    return {
      Yid: "Yecharts",
      Yid1: "Yecharts1",
      Yid2: "Yecharts2",
      Yid3: "Yecharts3",
      Yid4: "Yecharts4",
      Yid5: "Yecharts5",
      Yid6: "Yecharts6",
      Zid: "Zecharts",
      Zid1: "Zecharts1",
      ZechartObj: {
        title: {},
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "2015", "2016"],
          source: [
            {
              product: "主胜",
              "2015": 4,
              "2016": 5
            },
            { product: "平手", "2015": 1, "2016": 3 },
            { product: "客胜", "2015": 8, "2016": 5 }
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: { type: "category", show: true },
        yAxis: {
          min: 0,
          max: 10,
          splitNumber: 5,
          axisLabel: {
            show: true,
            interval: "auto",

            formatter: "{value} 万"

            // formatter: function(value) {
            //   var texts = [];
            //   if (value === 1 || value === "1") {
            //     texts.push("赢");
            //   } else if (value === 2 || value === "2") {
            //     texts.push("平");
            //   } else if (value === 3 || value === "3") {
            //     texts.push("输");
            //   }
            //   return texts;
            // }
          },
          show: true
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar", barWidth: 20 }, { type: "bar", barWidth: 20 }]
      },
      YechartObj: {
        title: {
          text: "33605港元",
          x: "center",
          textStyle: {
            //文字颜色
            color: "#777",

            fontSize: 14
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
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
            name: "交易量",
            type: "pie",
            radius: "40%",
            center: ["50%", "60%"],
            label: {
              normal: {
                formatter: "  {b|{b}：}{per|{d}%} \n{hr|}\n {c}{hr|} ",

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
              { value: 335, name: "平手" },
              { value: 310, name: "主胜" },
              { value: 234, name: "客胜" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      YechartObj1: {
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        dataset: {},
        legend: {
          data: ["主胜", "平手", "客胜"],
          show: "true"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          show: "true",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          min: 0,
          max: 500,
          splitNumber: 5,
          axisLabel: {
            show: true,
            interval: "auto"

            // formatter: function(value) {
            //   var texts = [];
            //   if (value === 1 || value === "1") {
            //     texts.push("赢");
            //   } else if (value === 2 || value === "2") {
            //     texts.push("平");
            //   } else if (value === 3 || value === "3") {
            //     texts.push("输");
            //   }
            //   return texts;
            // }
          },
          show: true
        },
        series: [
          {
            name: "主胜",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "平手",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "客胜",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      },
      YechartObj3: {
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        dataset: {},
        legend: {
          data: ["挂买", "挂卖"],
          show: "true"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          show: "true",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          min: 0,
          max: 500,
          splitNumber: 5,
          axisLabel: {
            show: true,
            interval: "auto"

            // formatter: function(value) {
            //   var texts = [];
            //   if (value === 1 || value === "1") {
            //     texts.push("赢");
            //   } else if (value === 2 || value === "2") {
            //     texts.push("平");
            //   } else if (value === 3 || value === "3") {
            //     texts.push("输");
            //   }
            //   return texts;
            // }
          },
          show: true
        },
        series: [
          {
            name: "挂买",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "挂卖",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      },
      YechartObj2: {
        title: {
          text: "33605港元",
          x: "center",
          textStyle: {
            //文字颜色
            color: "#777",

            fontSize: 14
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
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
            name: "交易量",
            type: "pie",
            radius: "40%",
            center: ["50%", "60%"],
            label: {
              normal: {
                formatter: "  {b|{b}：}{per|{d}%} \n{hr|}\n {c}{hr|} ",

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
              { value: 335, name: "平手" },
              { value: 310, name: "主胜" },
              { value: 150, name: "客胜" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {
    // console.log(this.$route)
  }
};
</script>
<style lang="less" scoped>
.content {
  background-color: #fff;
  h3 {
    font-size: 14px;
    font-weight: bold;
    // padding: 10px 0;
    border-left: 3px solid #f24a44;
    padding: 0 15px;
    margin-top: 10px;
  }
  .wrap {
    .tab2 {
      width: 100%;
      text-align: center;
      font-size: 12px;
      .title {
        color: #777777;
        background-color: #f8f8f8;
      }
      tr {
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
.top {
  background-color: #fff;
  margin-top: 10px;
  /deep/ .van-tabs__wrap {
    padding: 10px 70px;
  }
  /deep/ .van-tabs__line {
    display: none;
  }
  /deep/ .van-tab--active {
    background-color: #f24a44;
  }
  /deep/ .van-tab {
    height: 30px;
    line-height: 30px;
  }
  /deep/ .van-tabs__nav--line {
    height: 0;
    padding-bottom: 30px;
  }
  h3 {
    font-size: 14px;
    font-weight: bold;
    padding: 0 15px;
    border-left: 3px solid #f24a44;
    margin: 15px 0;
  }
  .tab1 {
    /deep/ .van-tabs__wrap {
      padding: 10px 110px;
    }
  }
  .tab2 {
    width: 100%;
    text-align: center;
    font-size: 12px;
    .title {
      color: #777777;
      background-color: #f8f8f8;
    }
    tr {
      height: 30px;
      line-height: 30px;
    }
  }
  .mai {
    float: right;
    font-size: 12px;
    color: #777777;
    padding: 0 10px;
    p {
      i {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: red;
        margin-bottom: 2px;
        background-color: #777777;
      }
    }
    .p1 {
      i {
        background-color: #fff;
      }
    }
  }
}
</style>