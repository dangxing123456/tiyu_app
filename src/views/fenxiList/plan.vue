<template>
  <div class="container" id="shop">
    <div class="main">
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
        </div>
        <div class="wrapper-bottom">
          <div class="time">
            <p>
              <span>发布：11-05 22:05</span> |
              <van-icon name="eye" />
              <span>315</span>
            </p>
          </div>
          <div class="num">
            <van-icon class-prefix="icon" name="qian" />58金币
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "plan ",
  components: {},
  props: {},
  data() {
    return {};
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
.main {
  padding: 10px 0;
  .wrapper {
    background: #fff;
    border-bottom: 1px solid #eeeeee;
    padding: 15px;
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
            border: 1px solid #63b8ff;
            border-radius: 15px;
            font-size: 12px;
            color: #63b8ff;
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
        padding: 10px 0;
      }
    }
    .wrapper-bottom {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #999;
      .num {
        color: #f24a44;
        .icon-qian {
          font-size: 14px;
        }
      }
    }
  }
}
</style>