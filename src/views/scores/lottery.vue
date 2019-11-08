<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="shuangse">
        <div class="head">
          <span>双色球</span>
          <span class="time">2019-11-05第2019127期</span>
        </div>
        <ul>
          <li>7</li>
          <li>5</li>
          <li>09</li>
          <li>15</li>
          <li>08</li>
          <li>06</li>
          <li class="last">04</li>
        </ul>
        <van-icon name="arrow" size="25px" color="#999" />
      </div>
      <div class="fucai">
        <div class="head">
          <span>福彩3D</span>
          <span class="time">2019-11-05第2019127期</span>
        </div>
        <ul>
          <li>7</li>
          <li>5</li>
          <li>09</li>
        </ul>
        <van-icon name="arrow" size="25px" color="#999" />
      </div>
      <div class="qilecai">
        <div class="head">
          <span>七乐彩</span>
          <span class="time">2019-11-05第2019127期</span>
        </div>
        <ul>
          <li>7</li>
          <li>5</li>
          <li>09</li>
          <li>15</li>
          <li>08</li>
          <li>06</li>
          <li>06</li>
          <li class="last">04</li>
        </ul>
        <van-icon name="arrow" size="25px" color="#999" />
      </div>
      <div class="daletou">
        <div class="head">
          <span>大乐透</span>
          <span class="time">2019-11-05第2019127期</span>
        </div>
        <ul>
          <li>7</li>
          <li>5</li>
          <li>09</li>
          <li>15</li>
          <li>08</li>
          <li class="last1">06</li>
          <li class="last">04</li>
        </ul>
        <van-icon name="arrow" size="25px" color="#999" />
      </div>
      <div class="pailiesan">
        <div class="head">
          <span>排列三</span>
          <span class="time">2019-11-05第2019127期</span>
        </div>
        <ul>
          <li>7</li>
          <li>5</li>
          <li>09</li>
        </ul>
        <van-icon name="arrow" size="25px" color="#999" />
      </div>
      <div class="pailiewu">
        <div class="head">
          <span>排列五</span>
          <span class="time">2019-11-05第2019127期</span>
        </div>
        <ul>
          <li>7</li>
          <li>5</li>
          <li>09</li>
          <li>09</li>
          <li>09</li>
        </ul>
        <van-icon name="arrow" size="25px" color="#999" />
      </div>
      <div class="qixingcai">
        <div class="head">
          <span>七星彩</span>
          <span class="time">2019-11-05第2019127期</span>
        </div>
        <ul>
          <li>7</li>
          <li>5</li>
          <li>09</li>
          <li>09</li>
          <li>09</li>
          <li>09</li>
          <li>09</li>
        </ul>
        <van-icon name="arrow" size="25px" color="#999" />
      </div>
      <div class="shengfucai">
        <div class="head">
          <span>胜负彩</span>
          <span class="time">2019-11-05第2019127期</span>
        </div>
        <ul class="over">
          <li>7</li>
          <li>5</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>7</li>
          <li>5</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
        </ul>
        <van-icon name="arrow" size="25px" color="#999" />
      </div>
      <div class="jinqiucai">
        <div class="head">
          <span>进球彩</span>
          <span class="time">2019-11-05第2019127期</span>
        </div>
        <ul class="over">
          <li>7</li>
          <li>5</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>7</li>
        </ul>
        <van-icon name="arrow" size="25px" color="#999" />
      </div>
      <div class="banchangcai">
        <div class="head">
          <span>半场彩</span>
          <span class="time">2019-11-05第2019127期</span>
        </div>
        <ul class="over">
          <li>7</li>
          <li>5</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>7</li>
          <li>9</li>
          <li>9</li>
          <li>9</li>
          <li>7</li>
        </ul>
        <van-icon name="arrow" size="25px" color="#999" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "score",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.container {
  .main {
    .shuangse,
    .fucai,
    .qilecai,
    .daletou,
    .pailiesan,
    .pailiewu,
    .qixingcai {
      padding: 5px 8px;
      background-color: #fff;
      border-bottom: 1px solid #eee;
      .head {
        .time {
          color: #999;
          font-size: 14px;
          margin-left: 15px;
        }
      }
      ul {
        display: inline-block;
        width: 90%;
        margin-top: 10px;
        li {
          float: left;
          display: inline-block;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: rgb(237, 65, 65);
          color: white;
          line-height: 25px;
          text-align: center;
          margin-left: 5px;
        }
        .last {
          background-color: rgb(20, 130, 230);
        }
        .last1 {
          background-color: rgb(20, 130, 230);
        }
      }
    }
    .shengfucai,
    .jinqiucai,
    .banchangcai {
      padding: 5px 8px;
      background-color: #fff;
      border-bottom: 1px solid #eee;
      .head {
        .time {
          color: #999;
          font-size: 14px;
          margin-left: 15px;
        }
      }
      ul {
        display: inline-block;
        width: 90%;
        margin-top: 10px;
        li {
          float: left;
          display: inline-block;
          width: 14px;
          height: 25px;
          background-color: rgb(250, 180, 5);
          color: white;
          line-height: 25px;
          text-align: center;
          margin-left: 2px;
        }
        .last {
          background-color: rgb(20, 130, 230);
        }
        .last1 {
          background-color: rgb(20, 130, 230);
        }
      }
    }
  }
}
</style>