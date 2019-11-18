
<template>
  <div class="echarts">
    <div :id="id"></div>
  </div>
</template>
 
<script>
import Echarts from "echarts";
export default {
  data() {
    return {
      myChart: {}
    };
  },
  props: ["echartObj", "id"],
  created() {
    this.$nextTick(() => {
      this.loadEchart();
    });
  },
  mounted() {
    let _this = this;
    setTimeout(() => {
      this.loadEchart();
    }, 1000);
    return
    window.onresize = function() {
      _this.myChart.resize();
    };
  },
  methods: {
    loadEchart() {
      this.myChart = Echarts.init(document.getElementById(this.id));
      this.myChart.setOption(
          {
          title: {
            text: this.echartObj.title.text,
            x: this.echartObj.title.x,
            textStyle: this.echartObj.title.textStyle
          },
          tooltip: {
            trigger: this.echartObj.tooltip.trigger,
            axisPointer: this.echartObj.tooltip.axisPointer,
            formatter: this.echartObj.tooltip.formatter
          },
          dataset: {
            dimensions: this.echartObj.dataset.dimensions,
            source: this.echartObj.dataset.source
          },
          legend: {
            data: this.echartObj.legend.data,
            show: this.echartObj.legend.show
          },
          grid: this.echartObj.grid,
          xAxis: {
            data: this.echartObj.xAxis.data,
            // axisLine: this.echartObj.xAxis.axisLine,
            show: this.echartObj.xAxis.show,
            type: this.echartObj.xAxis.type
          },
          yAxis: {
            min: this.echartObj.yAxis.min,
            max: this.echartObj.yAxis.max,
            splitNumber: this.echartObj.yAxis.splitNumber,
            axisLabel: this.echartObj.yAxis.axisLabel,
            show: this.echartObj.yAxis.show
          },
          series: this.echartObj.series
        }
      );
    }
  }
};
</script>
 
<style lang="less" scoped>
#echarts1,
#echarts2,
#echarts3,
#pei,
#pei1,
#pei2,
#ya,
#da {
  width: 80%;
  height: 200px;
  margin: 0 auto;
}
#Yecharts,
#Yecharts1,
#Yecharts2,
#Yecharts3,
#Yecharts4,
#Yecharts5,
#Yecharts6,
#Zecharts,
#Zecharts1 {
  width: 100%;
  height: 230px;
}
</style>
