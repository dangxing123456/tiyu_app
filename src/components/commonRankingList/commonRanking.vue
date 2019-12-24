<template>
  <div class="content">
    <div class="left">
      <img :src=" data.icon ||user_img" />
      <div>
        <p class="p1">
          <span class="sp">{{data.nickname}}</span>
          <span class="span1" v-if="type==1">发{{data.buyWagers}}单中{{data.winWagers}}单</span>
          <span class="span1" v-else>发{{data.totalCount}}单中{{data.winCount}}单</span>
        </p>
        <p class="p2">
          <span>总粉丝数</span>
          <span class="span1">{{data.fensiCount}}</span>
        </p>
      </div>
    </div>
    <div class="right" ref="right" v-if="type==1">
      <div class="info">
        <p>近期</p>
        <p>连红</p>
        <p>历史最高{{data.winCount}}</p>
      </div>
      <div class="num">
        <span>{{data.winCount}}</span>
      </div>
    </div>
    <div class="right" v-else-if="type==2">
      <div class="info">
        <h3>{{data.winRate*100}}%</h3>
        <h4>命中率</h4>
      </div>
    </div>
    <div class="right" v-else-if="type==3">
      <div class="info">
        <h3>{{data.winRate*100}}%</h3>
        <h4>均盈利</h4>
      </div>
    </div>
  </div>
</template>

<script>
import user_img from "@/assets/images/default.png";
export default {
  name: "commonRanking",
  props: {
    data: {
      type: Object
    },
    type: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {
      user_img: user_img
    };
  }
};
</script>
<style lang="less" scoped>
.main {
  .content {
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .left {
      display: flex;
      align-items: center;
      font-size: 14px;
      img {
        width: 55px;
        height: 55px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 15px;
      }
      p {
        margin-top: 4px;
      }
      .p1 {
        .sp {
          font-weight: 600;
        }
        .span1 {
          border: 1px solid #f24a44;
          border-radius: 15px;
          padding: 0 5px;
          color: #f24a44;
        }
      }
      .p2 {
        .span1 {
          color: #f24a44;
        }
      }
    }
    .right {
      position: relative;
      color: #f24a44;
      .info {
        font-size: 14px;
      }
      .num {
        position: absolute;
        top: 0;
        left: 30px;
        font-size: 35px;
      }
    }
  }
}
</style>