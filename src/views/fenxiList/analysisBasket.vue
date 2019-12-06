<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="paiming">
        <h3>本赛季赛前积分排名</h3>
        <div class="con">
          <div class="left">
            <img src="../../assets/images/default.png" />
            <span>乌兹别克</span>
          </div>
          <span class="right">
            <span>排名:85</span>
          </span>
        </div>
        <table class="tab2" v-for="(item,index) in 2" :key="index">
          <tr class="title">
            <th>全场</th>
            <th>赛</th>
            <th>胜</th>
            <th>负</th>
            <th>得</th>
            <th>失</th>
            <th>净</th>
            <th>胜率</th>
            <th>排名</th>
          </tr>
          <tr v-for="(item,index) in 4" :key="index">
            <td>总</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>78.1</td>
            <td>66.3</td>
            <td>11.7</td>
            <td>40.0%</td>
            <td>7</td>
          </tr>
        </table>
      </div>
      <div class="duiwang">
        <h3>对赛往绩</h3>
        <div class="head">
          <p class="p1">
            <span>夏季联赛</span>
            <span>NBA</span>
          </p>
          <p class="p2">
            <span>近10场</span>
            <span>近20场</span>
            <span>全部</span>
          </p>
        </div>
        <table class="tab2">
          <tr class="title">
            <th>日期</th>
            <th>赛事</th>
            <th>主队</th>
            <th>VS</th>
            <th>客队</th>
            <th>让分胜负</th>
          </tr>
          <tr v-for="(item,index) in 4" :key="index">
            <td>2019/04/06</td>
            <td>NBA</td>
            <td>菲尼克斯</td>
            <td>133:126</td>
            <td>新奥尼良</td>
            <td>-2.5赢</td>
          </tr>
        </table>
        <div class="bot">
          <p>近10场对赛,新奥尔良5胜5负</p>
          <div class="lv">
            <p>
              胜率
              <span>50%</span>
            </p>
            <p>
              让分胜率
              <span>50%</span>
            </p>
            <p>
              大球率
              <span>50%</span>
            </p>
          </div>
        </div>
      </div>
      <div class="jinqi" v-for="(item,index) in 2" :key="index">
        <h3>近期往绩</h3>
        <div class="head">
          <p class="p1">
            <span>夏季联赛</span>
            <span>NBA</span>
          </p>
          <p class="p2">
            <span>近10场</span>
            <span>近20场</span>
            <span>全部</span>
          </p>
        </div>
        <table class="tab2">
          <tr class="title">
            <th>日期</th>
            <th>赛事</th>
            <th>主队</th>
            <th>VS</th>
            <th>客队</th>
            <th>让分胜负</th>
          </tr>
          <tr v-for="(item,index) in 4" :key="index">
            <td>2019/04/06</td>
            <td>NBA</td>
            <td>菲尼克斯</td>
            <td>133:126</td>
            <td>新奥尼良</td>
            <td>-2.5赢</td>
          </tr>
        </table>
        <div class="bot">
          <p>近10场对赛,新奥尔良5胜5负</p>
          <div class="lv">
            <p>
              胜率
              <span>50%</span>
            </p>
            <p>
              让分胜率
              <span>50%</span>
            </p>
            <p>
              大球率
              <span>50%</span>
            </p>
          </div>
        </div>
      </div>
      <div class="rangfen" v-for="(item,index) in 2" :key="index">
        <h3>让分胜负对比</h3>
        <div class="con">
          <div class="left">
            <img src="../../assets/images/default.png" />
            <span>乌兹别克</span>
          </div>
          <span class="right">
            <span>近10场</span>
            <span>近20场</span>
          </span>
        </div>
        <table class="tab2">
          <tr class="title">
            <th>全场</th>
            <th>场次</th>
            <th>胜</th>
            <th>负</th>
            <th>胜率</th>
            <th>让分胜率</th>
          </tr>
          <tr v-for="(item,index) in 4" :key="index">
            <td>总</td>
            <td>10</td>
            <td>5</td>
            <td>5</td>
            <td>50%</td>
            <td>50%</td>
          </tr>
        </table>
        <div class="bot-tab">
          <p>客队历史相同让分胜负对比</p>
          <table class="tab2">
            <tr class="title">
              <th>日期</th>
              <th>赛事</th>
              <th>胜负</th>
              <th>主客</th>
              <th>比分</th>
              <th>对手</th>
              <th>让分胜负</th>
            </tr>
            <tr v-for="(item,index) in 4" :key="index">
              <td>2019-09-04</td>
              <td>友谊赛</td>
              <td>赢</td>
              <td>客</td>
              <td>66:70</td>
              <td>有力卡斯</td>
              <td>1.0赢</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="zongfen">
        <h3>总分大小对比</h3>
        <div class="con">
          <div class="left">
            <img src="../../assets/images/default.png" />
            <span>乌兹别克</span>
          </div>
          <span class="right">
            <span>近10场</span>
            <span>近20场</span>
          </span>
        </div>
        <table class="tab2" v-for="(item,index) in 2" :key="index">
          <tr class="title">
            <th>全场</th>
            <th>场次</th>
            <th>胜</th>
            <th>负</th>
            <th>胜率</th>
            <th>让分胜率</th>
          </tr>
          <tr v-for="(item,index) in 4" :key="index">
            <td>总</td>
            <td>10</td>
            <td>5</td>
            <td>5</td>
            <td>50%</td>
            <td>50%</td>
          </tr>
        </table>
      </div>
      <div class="shide">
        <h3>失得对比</h3>
        <div v-for="item in 2">
          <div class="con">
            <div class="left">
              <img src="../../assets/images/default.png" />
              <span>乌兹别克</span>
            </div>
            <span class="right">
              <span>近10场</span>
              <span>近20场</span>
            </span>
          </div>
          <table class="tab2">
            <tr class="title">
              <th>场次</th>
              <th>
                <p>第一节</p>
                <p>得&nbsp;&nbsp;&nbsp;失</p>
              </th>
              <th>
                <p>第一节</p>
                <p>得&nbsp;&nbsp;&nbsp;失</p>
              </th>
              <th>
                <p>第一节</p>
                <p>得&nbsp;&nbsp;&nbsp;失</p>
              </th>
              <th>
                <p>第一节</p>
                <p>得&nbsp;&nbsp;&nbsp;失</p>
              </th>
              <th>
                <p>第一节</p>
                <p>得&nbsp;&nbsp;&nbsp;失</p>
              </th>
              <th>
                <p>第一节</p>
                <p>得&nbsp;&nbsp;&nbsp;失</p>
              </th>
            </tr>

            <tr v-for="(item,index) in 4" :key="index">
              <td>
                <span>总</span>&nbsp;&nbsp;
                <span>10</span>
              </td>
              <td>
                <span>得</span>&nbsp;&nbsp;
                <span>失</span>
              </td>
              <td>
                <span>得</span>&nbsp;&nbsp;
                <span>失</span>
              </td>
              <td>
                <span>得</span>&nbsp;&nbsp;
                <span>失</span>
              </td>
              <td>
                <span>得</span>&nbsp;&nbsp;
                <span>失</span>
              </td>
              <td>
                <span>得</span>&nbsp;&nbsp;
                <span>失</span>
              </td>
              <td>
                <span>得</span>&nbsp;&nbsp;
                <span>失</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="zongfen">
        <h3>总分统计</h3>
        <div v-for="(item,index) in 2" :key="index">
          <div class="con">
            <div class="left">
              <img src="../../assets/images/default.png" />
              <span>乌兹别克</span>
            </div>
            <span class="right">
              <span>近10场</span>
              <span>近20场</span>
            </span>
          </div>
          <table class="tab2">
            <tr class="title">
              <th>
                <p>场次</p>
              </th>
              <th>
                <p>230</p>
              </th>
              <th>
                <p>160</p>
                <p>-</p>
                <p>170</p>
              </th>
              <th>
                <p>160</p>
                <p>-</p>
                <p>170</p>
              </th>
              <th>
                <p>160</p>
                <p>-</p>
                <p>170</p>
              </th>
              <th>
                <p>160</p>
                <p>-</p>
                <p>170</p>
              </th>
              <th>
                <p>160</p>
                <p>-</p>
                <p>170</p>
              </th>
              <th>
                <p>160</p>
                <p>-</p>
                <p>170</p>
              </th>
              <th>
                <p>160</p>
                <p>-</p>
                <p>170</p>
              </th>
              <th>
                <p>230+</p>
              </th>
            </tr>
            <tr v-for="(item,index) in 4" :key="index">
              <td>
                <span>总</span>&nbsp;&nbsp;
                <span>10</span>
              </td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="shengfen">
        <h3>胜分差统计</h3>
        <div v-for="(item,index) in 2" :key="index">
          <div class="con">
            <div class="left">
              <img src="../../assets/images/default.png" />
              <span>乌兹别克</span>
            </div>
            <span class="right">
              <span>近10场</span>
              <span>近20场</span>
            </span>
          </div>
          <table class="tab2">
            <tr class="title">
              <th>场次</th>
              <th>
                <p>胜</p>
                <p>1-5</p>
              </th>
              <th>
                <p>胜</p>
                <p>1-5</p>
              </th>
              <th>
                <p>胜</p>
                <p>1-5</p>
              </th>
              <th>
                <p>胜</p>
                <p>1-5</p>
              </th>
              <th>
                <p>胜</p>
                <p>1-5</p>
              </th>
              <th>
                <p>胜</p>
                <p>1-5</p>
              </th>
            </tr>
            <tr v-for="(item,index) in 4" :key="index">
              <td>总</td>
              <td>10</td>
              <td>5</td>
              <td>5</td>
              <td>50%</td>
              <td>50%</td>
              <td>50%</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="jishu">
        <h3>技术统计</h3>
        <div v-for="(item,index) in 2" :key="index">
          <div class="con">
            <div class="left">
              <img src="../../assets/images/default.png" />
              <span>乌兹别克</span>
            </div>
            <span class="right">
              <span>近10场</span>
              <span>近20场</span>
            </span>
          </div>
          <table class="tab2">
            <tr class="title">
              <th>场次</th>
              <th>
                <p>投篮</p>
                <p>命中率</p>
              </th>
              <th>
                <p>三分</p>
                <p>命中率</p>
              </th>
              <th>
                <p>平均</p>
                <p>篮板</p>
              </th>
              <th>
                <p>平均</p>
                <p>助攻</p>
              </th>
              <th>
                <p>平均</p>
                <p>抢断</p>
              </th>
              <th>
                <p>平均</p>
                <p>失误</p>
              </th>
            </tr>
            <tr v-for="(item,index) in 4" :key="index">
              <td>总</td>
              <td>10</td>
              <td>5</td>
              <td>5</td>
              <td>50%</td>
              <td>50%</td>
              <td>50%</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="weilai">
        <h3>未来赛事</h3>
        <div v-for="(item,index) in 2" :key="index">
          <div class="con">
            <div class="left">
              <img src="../../assets/images/default.png" />
              <span>乌兹别克</span>
            </div>
          </div>
          <table class="tab2">
            <tr class="title">
              <th>日期</th>
              <th>赛事</th>
              <th>主队</th>
              <th>VS</th>
              <th>客队</th>
              <th>让分胜负</th>
            </tr>
            <tr v-for="(item,index) in 4" :key="index">
              <td>2019/04/06</td>
              <td>NBA</td>
              <td>菲尼克斯</td>
              <td>133:126</td>
              <td>新奥尼良</td>
              <td>-2.5赢</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="yuji">
        <h3>预计阵容</h3>
        <div v-for="(item,index) in 2" :key="index">
          <div class="con">
            <div class="left">
              <img src="../../assets/images/default.png" />
              <span>乌兹别克</span>
            </div>
          </div>
          <table class="tab2">
            <tr class="title">
              <th>正选</th>
              <th>后备</th>
            </tr>
            <tr v-for="(item,index) in 4" :key="index">
              <td>7史宾奴尼斯</td>
              <td>7史宾奴尼斯</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "analysisBasket",
  components: {},
  props: {},
  data() {
    return {
      title: this.$route.meta.title
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
h3 {
  font-size: 16px;
  font-weight: bold;
  // padding: 10px 0;
  border-left: 3px solid #f24a44;
  padding: 0 15px;
}
.tab2 {
  width: 100%;
  text-align: center;
  font-size: 12px;
  border-bottom: 1px solid #eeeeee;
  .title {
    color: #777777;
    background-color: #f8f8f8;
  }
  tr {
    height: 30px;
    line-height: 30px;
    th {
      display: table-cell;
      vertical-align: middle;
    }
  }
}
.bot {
  padding: 10px 10px 0 10px;
  font-size: 12px;
  .lv {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span {
      color: #f24a44;
    }
  }
}
.con {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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
.paiming {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 0;
}
.duiwang,
.jinqi,
.shide {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 0;
  .head {
    padding: 10px;
    .p1 {
      span {
        border: 1px solid #f24a44;
        border-radius: 5px;
        padding: 3px 5px;
        font-size: 12px;
        margin-left: 15px;
        color: #f24a44;
      }
    }
    .p2 {
      margin-top: 10px;
      span {
        padding: 3px 5px;
        font-size: 12px;
        margin-left: 15px;
        color: #f24a44;
      }
    }
  }
}
.rangfen,
.zongfen,
.shengfen,
.jishu,
.weilai,
.yuji {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 0;

  .con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
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
  .tab2 {
    width: 100%;
    text-align: center;
    font-size: 12px;
    border-bottom: 1px solid #eeeeee;
    .title {
      color: #777777;
      background-color: #f8f8f8;
    }
    tr {
      height: 30px;
      line-height: 30px;
    }
  }
  .bot-tab {
    p {
      font-size: 12px;
      padding: 10px;
    }
  }
}
.zongfen {
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 0;
}
</style>