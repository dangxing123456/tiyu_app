<template>
  <div class="container" id="shop">
    <div class="main">
      <img width="100%" src="public/img/index1.png" alt />
      <van-tabs
        v-model="active"
        title-inactive-color="#333333"
        title-active-color="#f24a44"
        style="background-color: white"
      >
        <van-tab title="资深专家">
          <ul class="van-ul">
            <li class="van-li" v-for="(item) in 5">
              <img src="https://picsum.photos/50/50" alt />
              <div class="div">二狗子</div>
              <div class="div2">1中1</div>
            </li>
            <li class="van-li" @click="detail">
              <img src="https://picsum.photos/50/50" alt />
              <div class="div">更多</div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="盈利专家">
          <ul class="van-ul">
            <li class="van-li" v-for="(item) in 5">
              <img src="https://picsum.photos/50/50" alt />
              <div class="div">二狗子</div>
              <div class="div2">1中1</div>
            </li>
            <li class="van-li" @click="detail">
              <img src="https://picsum.photos/50/50" alt />
              <div class="div">更多</div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="连红专家">
          <ul class="van-ul">
            <li class="van-li" v-for="(item) in 5">
              <img src="https://picsum.photos/50/50" alt />
              <div class="div">二狗子</div>
              <div class="div2">1中1</div>
            </li>
            <li class="van-li" @click="detail">
              <img src="https://picsum.photos/50/50" alt />
              <div class="div">更多</div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="我的关注">
          <ul class="van-ul">
            <li class="van-li" v-for="(item) in 5">
              <img src="https://picsum.photos/50/50" alt />
              <div class="div">狗子</div>
              <div class="div2">1中1</div>
            </li>
            <li class="van-li" @click="detail">
              <img src="https://picsum.photos/50/50" alt />
              <div class="div">更多</div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
      <div class="select">
        <div>关注专家</div>
        <van-dropdown-menu class="item" @click="change">
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
      </div>
      <div class="title">
        <h3>精选推荐</h3>
      </div>
      <div class="wrapper" v-for="item in 10">
        <div class="wrapper-top">
          <div class="left">
            <img src="https://picsum.photos/50/50" alt />
            <div class="left-span">
              <span class="peo">CUBA才教练</span>
              <span class="dan">近7单中7单</span>
            </div>
          </div>
          <div class="right">
            <h3>100%</h3>
            <p>命中率</p>
          </div>
        </div>
        <div class="wrapper-center">
          <h3>冠军联赛 给我冲冲 rng牛逼 ig牛逼 fpx牛逼</h3>
          <div class="vspk">
            <div class="left">
              <span class="xingqi">星期三</span>
              <span class="zhandui">皇家马德里&nbsp;&nbsp;&nbsp;</span>VS
              <span>&nbsp;&nbsp;&nbsp;哈哈哈哈哈</span>
            </div>
            <div class="right">
              <van-icon class-prefix="icon" name="qian" />
              <span>58金币</span>
            </div>
          </div>
        </div>
        <div class="wrapper-bottom">
          <div class="time">
            <p>
              <span>竟足-发布：11-05 22:05</span> |
              <span>截止：11-05 22:05</span>
            </p>
          </div>
          <div class="num">
           <van-icon name="eye" />
            <span>315</span>
          </div>
        </div>
      </div>
      <div class="title">
        <h3>最热红人</h3>
      </div>
      <div class="linchang">
        <div class="con">
          <div class="head">
            <img src="https://picsum.photos/50/50" alt />
            <p>赢家之财神</p>
          </div>
          <div class="bot">
            <p>
              <span>50</span>%
            </p>
          </div>
        </div>
        <div class="con">
          <div class="head">
            <img src="https://picsum.photos/50/50" alt />
            <p>赢家之财神</p>
          </div>
          <div class="bot">
            <p>
              <span>50</span>%
            </p>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "recommended",
  props: {},
  data() {
    return {
      active: 2,
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部玩法", value: 0 },
        { text: "竞彩足球", value: 1 },
        { text: "竞彩篮球", value: 2 }
      ],
      option2: [{ text: "活动", value: "a" }, { text: "免费", value: "b" }],
      show: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    detail() {
      this.$router.push({
        path: "/experts"
      });
    },
    change(value) {
      console.log(1);
    }
  }
};
</script>
<style lang="less" scoped>
.van-ul {
  display: flex;
  width: 100%;
  margin-top: 0.2rem;
  background-color: white;
}

.van-ul .van-li {
  flex: 1;
  text-align: center;
  padding: 0.2rem 0 0.6rem 0;
}

.van-ul .van-li img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}

.van-ul .van-li .div {
  font-size: 0.3rem;
  line-height: 0.8rem;
}

.van-ul .van-li .div2 {
  width: 1rem;
  margin: 0 auto;
  color: #b93c4a;
  font-size: 0.2rem;
  border: 1px solid #b93c4a;
  border-radius: 0.1rem;
}
.select {
  background: #fff;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  .item {
    width: 55%;
  }
}
.title {
  display: flex;
  padding: 10px 15px 0 15px;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  h3 {
    font-size: 18px;
    font-weight: 500;
    padding-left: 8px;
    border-left: 5px solid #f24a44;
  }

  span {
    color: #ccc;
  }
}

.wrapper {
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
  .wrapper-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      img {
        width: 38px;
        height: 38px;
        border-radius: 50%;
      }

      .left-span {
        float: right;
        line-height: 38px;
        margin-left: 8px;

        .dan {
          padding: 3px;
          border: 1px solid rgb(121, 155, 151);
          border-radius: 15px;
          font-size: 12px;
          color: rgb(121, 155, 151);
        }
      }
    }

    .right {
      h3 {
        color: red;
      }

      p {
        color: rgb(185, 60, 74);
        font-size: 14px;
      }
    }
  }

  .wrapper-center {
    margin-top: 10px;

    h3 {
      font-size: 16px;
      font-weight: 500;
    }

    .vspk {
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: rgb(248, 248, 248);
      height: 30px;

      .left {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 80%;
        font-size: 14px;

        .xingqi {
          color: #999;
        }

        .zhandui {
          margin-left: 15px;
        }
      }

      .right {
        .icon-qian {
          font-size: 13px;
          color: #f24a44;
        }
        span {
          color: #f24a44;
          font-size: 14px;
        }
      }
    }
  }

  .wrapper-bottom {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #999;

    .num {
      display: flex;
      align-items: center;
    }
  }
}
.linchang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 7px;
  .con {
    width: 48%;
    text-align: center;
    box-shadow: 0 0 0.1rem #cccccc;
    .head {
      padding: 10px;
      img {
        border-radius: 50%;
      }
      p {
        font-size: 14px;
        padding: 5px;
      }
    }
  }
  .bot {
    padding: 8px;
    p {
      color: #f24a44;
      span {
        font-size: 25px;
      }
    }
  }
}
</style>
