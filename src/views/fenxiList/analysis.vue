<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="jifen">
        <h3>积分排名</h3>
        <div class="jifen-wrap">
          <div class="left">
            <img src="../../assets/images/default.png" />
            <span>乌兹别克</span>
          </div>
          <div class="right">
            <span>排名:85</span>
          </div>
        </div>
        <div class="jifen-wrap">
          <div class="left">
            <img src="../../assets/images/default.png" />
            <span>乌兹别克</span>
          </div>
          <div class="right">
            <span>排名:85</span>
          </div>
        </div>
      </div>
      <div class="jiaofen">
        <h3>积分排名</h3>
        <div class="jiaofen-wrap">
          <div class="head">
            <span>亚洲杯</span>
            <span>球会友谊</span>
            <span>亚洲预选</span>
          </div>
        </div>
        <div class="table">
          <table class="tab1">
            <tr class="title">
              <th>近6场</th>
              <th>胜平负</th>
              <th>胜率</th>
              <th>大球率</th>
              <th>赢盘率</th>
              <th>单率</th>
            </tr>
            <tr>
              <td>乌兹别克</td>
              <td>3/0/3</td>
              <td>50%</td>
              <td>67%</td>
              <td>40%</td>
              <td>50%</td>
            </tr>
          </table>
          <table class="tab2">
            <tr class="title">
              <th>日期</th>
              <th>赛事</th>
              <th>主队</th>
              <th>VS</th>
              <th>客队</th>
              <th>盘路</th>
            </tr>
            <tr>
              <td>2015/01/18</td>
              <td>亚洲杯</td>
              <td>乌兹别克</td>
              <td>3:1</td>
              <td>沙特阿拉</td>
              <td>0.25赢</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="bisai">
        <h3>近期比赛</h3>
        <div class="head">
          <img src="../../assets/images/default.png" />
          <span>乌兹别克</span>
        </div>
        <div class="con">
          <div>
            <span>近21场交锋</span>
            <span class="span1">13胜</span>
            <span class="span2">5平</span>
            <span class="span3">3负</span>
          </div>
          <div>
            <span>全场</span>
            <span>主场</span>
          </div>
        </div>
        <div class="wrap">
          <span>亚洲杯</span>
          <span>球会友谊</span>
          <span>亚洲预选</span>
          <span>国际友谊</span>
          <span>中国杯</span>
        </div>
        <div class="win">
          <van-tabs>
            <van-tab title="标签 1">
              <div slot="title">
                <i></i> 输赢
              </div>
              <echarts :echartObj="echartObj"></echarts>
            </van-tab>
            <van-tab title="标签 2">
              <div slot="title">
                <i></i> 单双
              </div>
              <echarts :echartObj="echartObj"></echarts>
            </van-tab>
            <van-tab title="标签 3">
              <div slot="title">
                <i></i> 大小
              </div>
              <echarts :echartObj="echartObj"></echarts>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "@/components/echarts/echarts.vue";
export default {
  name: "analysis",
  components: {
    echarts
  },
  props: {},
  data() {
    return {
      echartObj: {
        title: {
          text: ""
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.jifen {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 0;
  h3 {
    font-size: 16px;
    font-weight: bold;
    // padding: 10px 0;
    border-left: 3px solid #f24a44;
    padding: 0 15px;
  }
  .jifen-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eeeeee;
    .left {
      display: flex;
      align-items: center;
      font-size: 14px;
      img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
    }
    .right {
      font-size: 12px;
    }
  }
}
.jiaofen {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 0;
  h3 {
    font-size: 16px;
    font-weight: bold;
    // padding: 10px 0;
    border-left: 3px solid #f24a44;
    padding: 0 15px;
  }
  .head {
    padding: 10px;
    span {
      border: 1px solid #f24a44;
      border-radius: 5px;
      padding: 3px 5px;
      font-size: 12px;
      margin-left: 15px;
      color: #f24a44;
    }
  }
  .table {
    .tab1 {
      width: 100%;
      text-align: center;
      font-size: 12px;
      .title {
        background-color: #f8f8f8;
        color: #777777;
      }
      tr {
        height: 30px;
        line-height: 30px;
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
  }
}
.bisai {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 0;
  h3 {
    font-size: 16px;
    font-weight: bold;
    // padding: 10px 0;
    border-left: 3px solid #f24a44;
    padding: 0 15px;
  }
  .head {
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    img {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
  }
  .con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    padding: 10px;
    div {
      .span1 {
        color: #f24a44;
      }
      .span2 {
        color: #3385ff;
      }
      .span3 {
        color: #90ee90;
      }
    }
  }
  .wrap {
    padding: 10px;
    span {
      border: 1px solid #f24a44;
      border-radius: 5px;
      padding: 3px 5px;
      font-size: 12px;
      margin-left: 5px;
      color: #f24a44;
    }
  }
  .win {
    /deep/ .van-tabs__line {
      display: none;
    }
    /deep/ .van-tabs--line .van-tabs__wrap {
      padding: 0 68px;
    }
    /deep/ .van-tab i {
      display: inline-block;
      width: 8px;
      height: 8px;
      border: 1px solid #777777;
      border-radius: 50%;
      box-sizing: border-box;
    }
    /deep/ .van-tab--active i {
      background-color: #f24a44;
      border: none;
    }
  }
}
</style>