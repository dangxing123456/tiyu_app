<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="shili">
        <h3>实力分析</h3>
        <div class="progress">
          <div class="sheng">
            <p class="p1">
              胜率
              <span>46%</span>
            </p>
            <p class="p2">
              胜率
              <span>54%</span>
            </p>
          </div>
          <van-progress
            :percentage="50"
            pivot-text
            pivot-color="#7232dd"
            track-color="blue"
            color="#f24a44"
            stroke-width="8px"
          />
        </div>
        <div class="list">
          <p>阿美尼亚</p>
          <ul>
            <li>
              <i></i> 阿说几句话就离开家就均进了解了解看就离开就离开京篮看见了空间来看京篮开奖离开家离开家离开家离开家昆仑决昆仑决
            </li>
            <li>
              <i></i> 阿说几句话就离开家就均进了解了解看就离开就离开京篮看见了空间来看京篮开奖离开家离开家离开家离开家昆仑决昆仑决
            </li>
            <li>
              <i></i> 阿说几句话就离开家就均进了解了解看就离开就离开京篮看见了空间来看京篮开奖离开家离开家离开家离开家昆仑决昆仑决
            </li>
          </ul>
        </div>
      </div>
      <div class="shuju">
        <h3>数据分析</h3>
        <div class="probox">
          <p class="title">欧赔</p>
          <div class="numbox">
            <div class="div1">
              <p>{{num}}%</p>
              <p>2.55</p>
            </div>
            <div class="div2">
              <p>{{num1}}%</p>
              <p>3.55</p>
            </div>
            <div class="div3">
              <p>{{num2}}%</p>
              <p>2.55</p>
            </div>
          </div>
          <div class="pro">
            <div :style="'width:'+num+'%;'" class="red"></div>
            <div :style="'width:'+num1+'%;'" class="yello"></div>
            <div :style="'width:'+num2+'%;'" class="blue"></div>
          </div>
        </div>
        <div class="list">
          <p>阿美尼亚</p>
          <ul>
            <li>
              <i></i> 阿说几句话就离开家就均进了解了解看就离开就离开京篮
            </li>
            <li>
              <i></i> 阿说几句话就离开家就均进了解了解看就离开就离开京篮
            </li>
            <li>
              <i></i> 阿说几句话就离开家就均进了解了解看就离开就离开京篮
            </li>
          </ul>
        </div>
      </div>
      <div class="wangji">
        <h3>往绩情况</h3>
        <div class="wrap">
          <p class="head">多德勒支</p>
          <table class="tab2">
            <tr class="title">
              <th>10场近况</th>
              <th>胜/平/负</th>
              <th>进/失</th>
            </tr>
            <tr>
              <td></td>
              <td>4/4/2</td>
              <td>17/11</td>
            </tr>
            <tr class="title">
              <th>排名往绩</th>
              <th>胜/平/负</th>
              <th>胜率</th>
            </tr>
            <tr>
              <td></td>
              <td>0/2/2</td>
              <td>0%</td>
            </tr>
            <tr class="title">
              <th>对阵往绩</th>
              <th>胜/平/负</th>
              <th>胜率</th>
            </tr>
            <tr>
              <td></td>
              <td>2/2/1</td>
              <td>40%</td>
            </tr>
          </table>
        </div>
        <div class="list">
          <p>阿美尼亚</p>
          <ul>
            <li>
              <i></i> 阿说几句话就离开家就均进了解了解
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "intelligence",
  components: {},
  props: {},
  data() {
    return {
      num: 30,
      num1: 20,
      num2: 50
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
.shili {
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
  /deep/ .van-progress {
    background-color: #1e90ff;
  }
  .progress {
    padding: 15px;
    .sheng {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      .p1 {
        span {
          color: #f24a44;
        }
      }
      .p2 {
        span {
          color: #1e90ff;
        }
      }
    }
  }
  .list {
    p {
      font-size: 16px;
      padding: 5px 15px;
    }
    ul {
      background-color: #f8f8f8;
      font-size: 14px;
      padding: 10px;
      li {
        line-height: 20px;
        i {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #00cd00;
          margin-bottom: 3px;
        }
      }
    }
  }
}
.shuju {
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
  .probox {
    border-bottom: 1px solid #eeeeee;
    padding: 15px;
    .title {
      padding: 10px 0;
    }
    .numbox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      p {
        padding: 3px 0;
      }
      .div1 {
        p {
          color: #f24a44;
        }
      }
      .div2 {
        p {
          color: #daa520;
        }
      }
      .div3 {
        p {
          color: #1e90ff;
        }
      }
    }

    .pro {
      margin: 0 auto;
      height: 8px;
      div {
        float: left;
      }
      .red {
        height: 100%;
        background: #f24a44;
        border-radius: 5px 0 0px 5px;
      }
      .yello {
        height: 100%;
        background: #daa520;
      }
      .blue {
        height: 100%;
        background-color: #1e90ff;
        border-radius: 0px 5px 5px 0px;
      }
    }
  }
  .list {
    p {
      font-size: 16px;
      padding: 5px 15px;
    }
    ul {
      background-color: #f8f8f8;
      font-size: 14px;
      padding: 10px;
      li {
        line-height: 20px;
        i {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #00cd00;
          margin-bottom: 3px;
        }
      }
    }
  }
}
.wangji {
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
  .wrap {
    .head {
      padding: 10px 10px;
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
  .list {
    p {
      font-size: 16px;
      padding: 5px 15px;
    }
    ul {
      background-color: #f8f8f8;
      font-size: 14px;
      padding: 10px;
      li {
        line-height: 20px;
        i {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #00cd00;
          margin-bottom: 3px;
        }
      }
    }
  }
}
</style>