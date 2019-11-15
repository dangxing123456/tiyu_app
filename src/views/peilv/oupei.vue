<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="content">
        <div class="head">
          <h3>欧赔指数</h3>
          <van-tabs title-active-color="#fff" title-inactive-color="#333333">
            <van-tab title="主胜">
              <echarts :id="id3" :echartObj="echartObj3"></echarts>
            </van-tab>
            <van-tab title="平">
              <echarts :id="id4" :echartObj="echartObj3"></echarts>
            </van-tab>
            <van-tab title="客胜">
              <echarts :id="id5" :echartObj="echartObj3"></echarts>
            </van-tab>
          </van-tabs>
        </div>
        <div class="table">
          <div class="div1">
            <div class="left">
              <span>最高</span>
            </div>
            <div class="right">
              <div>
                <p>即时</p>
                <p>初赔</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
            </div>
          </div>
          <div class="div1 bor">
            <div class="left">
              <span>最低</span>
            </div>
            <div class="right">
              <div>
                <p>即时</p>
                <p>初赔</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
            </div>
          </div>
          <div class="div1">
            <div class="left">
              <span>平均</span>
            </div>
            <div class="right">
              <div>
                <p>即时</p>
                <p>初赔</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
            </div>
          </div>
        </div>
        <div class="wrap">
          <div class="head">
            <p class="p1">公司</p>
            <p class="p2">赔率指数</p>
          </div>
          <div class="div1">
            <div class="left">
              <span>平均</span>
            </div>
            <div class="right">
              <div>
                <p>即时</p>
                <p>初赔</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "@/components/echarts/echarts.vue";
export default {
  name: "oupei",
  components: {
    echarts
  },
  props: {},
  data() {
    return {
      id3: "pei",
      id4: "pei1",
      id5: "pei2",
      echartObj3: {
        title: {
          text: ""
        },
        legend: {
          data: ["10BET"]
        },
        tooltip: {
          formatter: function(params) {
            var res = params[0].name + "<br/>输赢：";
            var texts = "";
            console.log(params[0].value);
            if (params[0].value === 1 || params[0].value === "1") {
              texts = "赢";
            } else if (params[0].value === 2 || params[0].value === "2") {
              texts = "平";
            } else if (params[0].value === 3 || params[0].value === "3") {
              texts = "负";
            }
            res = res + texts;
            return res;
          },
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {
          min: 1,
          max: 3,
          splitNumber: 1,
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
            name: "10BET",
            type: "line",
            stack: "总量",
            data: [1, 1, 2, 3, 2, 1],
            smooth: true
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
  .head {
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
    h3 {
      float: left;
      font-size: 14px;
      font-weight: bold;
      // padding: 10px 0;
      border-left: 3px solid #f24a44;
      padding: 0 15px;
      margin-top: 10px;
    }
  }
  .table {
    .div1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 55px;
      font-size: 13px;
      border: 1px solid #eeeeee;
      .left {
        width: 20%;
        height: 100%;
        line-height: 55px;
        text-align: center;
        border-right: 1px solid #eeeeee;
      }
      .right {
        padding: 0 10px;
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          margin-top: 5px;
        }
      }
    }
    .bor {
      border: none;
    }
  }
  .wrap {
    padding: 10px 0;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
      border: 1px solid #eeeeee;
      border-bottom: none;
      .p1 {
        width: 20%;
        text-align: center;
      }
      .p2 {
        width: 80%;
        text-align: center;
      }
    }
    .div1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 55px;
      font-size: 13px;
      border: 1px solid #eeeeee;
      .left {
        width: 20%;
        height: 100%;
        line-height: 55px;
        text-align: center;
        border-right: 1px solid #eeeeee;
      }
      .right {
        padding: 0 10px;
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>