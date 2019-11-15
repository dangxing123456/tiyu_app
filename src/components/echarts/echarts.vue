
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
    console.log(this.echartObj);
    let _this = this;
    window.onresize = function() {
      _this.myChart.resize();
    };
  },
  methods: {
    loadEchart() {
      this.myChart = Echarts.init(document.getElementById(this.id));
      this.myChart.setOption({
        title: {
          text: this.echartObj.title.text
        },
        tooltip: {
         trigger:this.echartObj.tooltip.trigger,
         axisPointer:this.echartObj.tooltip.axisPointer,
         formatter:this.echartObj.tooltip.formatter
        },
        legend: {
          data:this.echartObj.tooltip.data
        },
        xAxis: {
          data: this.echartObj.xAxis.data
        },
        yAxis: {
          min: this.echartObj.yAxis.min,
          max: this.echartObj.yAxis.max,
          splitNumber:this.echartObj.yAxis.splitNumber,
          axisLabel :this.echartObj.yAxis.axisLabel,
          show:this.echartObj.yAxis.show
         
        },
        series: this.echartObj.series
      });
    }
  }
};
</script>
 
<style lang="less" scoped>
#echarts1,#echarts2,#echarts3,#pei,#pei1,#pei2,#ya{
  width: 80%;
  height: 200px;
  margin: 0 auto;
}
</style>
