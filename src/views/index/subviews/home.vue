<template>
  <div class="container">
    <div class="main">
      <van-swipe :autoplay="3000" class="banner">
        <van-swipe-item v-for="(image, index) in 4" :key="index">
          <img src="https://picsum.photos/640/320" />
        </van-swipe-item>
      </van-swipe>
      <div class="notice">
        <van-icon name="volume" class="icon" />
        <van-swipe :autoplay="3000" vertical class="notice-list" :show-indicators="false">
          <van-swipe-item v-for="(image, index) in 4" :key="index">123456789</van-swipe-item>
        </van-swipe>
      </div>
      <van-grid :column-num="2" class="menu">
        <van-grid-item>
          <img src="../../../assets/images/index1.png" />
        </van-grid-item>
        <van-grid-item>
          <img src="../../../assets/images/index2.png" />
        </van-grid-item>
      </van-grid>
      <div class="title">
        <h3>热门赛事</h3>
        <van-icon name="arrow" />
      </div>
      <van-swipe class="hot">
        <van-swipe-item v-for="(image, index) in 4" :key="index">
          <div class="top">
            <div class="img">
              <img src="https://picsum.photos/640/320" />
              <h3>asd</h3>
            </div>
            <div class="text">
              <p>日职</p>
              <p>2019-01-01 11:11:11</p>
            </div>
            <div class="img">
              <img src="https://picsum.photos/640/320" />
              <h3>asd</h3>
            </div>
          </div>
          <div class="info">
            <span>胜 1.70</span>
            <span>平 1.70</span>
            <span>负 1.70</span>
            <div class="btn">立即下注</div>
          </div>
        </van-swipe-item>
      </van-swipe>

      <div class="title">
        <h3>大神推单</h3>
        <van-icon name="arrow" />
      </div>
      <div class="user-list">
        <div class="item">
          <div class="top">
            <div class="avatar">
              <img src="https://picsum.photos/50/50" alt />
            </div>
            <div class="info">
              <div class="username">
                <h3>阿萨大阿萨大</h3>
                <p>
                  最高SP
                  <span>2.04</span>
                </p>
                <div class="date">截至11.11 05：05</div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <p>
              7日命中率
              <span>100%</span>
            </p>
            <div class="btn">跟一单</div>
          </div>
        </div>
      </div>
      
      <div class="title">
        <h3>精选推荐</h3>
        <van-icon name="arrow" />
      </div>

    </div>
  </div>
</template>
<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    navBar
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 230px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.notice {
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  .icon {
    flex-shrink: 0;
  }
  .notice-list {
    flex-grow: 1;
    height: 35px;
    line-height: 35px;
  }
}
.menu {
  img {
    width: 100%;
    height: auto;
  }
}
.title {
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background: #fff;
  h3 {
    font-size: 16px;
    font-weight: 500;
    padding-left: 8px;
    border-left: 5px solid #f24a44;
  }
  span {
    font-size: 12px;
    color: #ccc;
  }
}
.hot {
  background: #fff;
  padding-bottom: 30px;
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 10px 15px;
    img {
      display: block;
      width: 70px;
      height: 70px;
      margin: auto;
    }
    h3 {
      font-size: 16px;
      padding: 5px 0;
    }
    .text {
      p {
        font-size: 13px;
        color: #999;
        padding: 5px 0;
      }
    }
  }
  .info {
    height: 35px;
    line-height: 35px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    span {
      display: block;
      width: 60px;
      border: 1px solid #999;
      color: #666;
      margin-right: 10px;
      font-size: 14px;
    }
    .btn {
      flex-grow: 1;
      color: #fff;
      background: #e73736;
    }
  }
}
.user-list {
  background: #fff;
  padding: 15px;
  .top {
    display: flex;
    .avatar {
      margin-right: 10px;
      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .info {
      flex-grow: 1;
      .username {
        display: flex;
        h3 {
          font-size: 16px;
          color: #666;
          margin-right: 10px;
        }
        p {
          font-size: 14px;
          flex-grow: 1;
          span {
            color: #e73736;
          }
        }
        .date {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
    color: #999;
    span {
      color: #e73736;
    }
  }
  .btn {
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 3px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background: #e73736;
  }
}
</style>

