<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="content">
        <div class="left">
          <img src="../../assets/images/default.png" alt />
          <div>
            <p class="p1">
              <span class="sp">发高赔单</span>
              <span class="span1">发12单中9单</span>
            </p>
            <p class="p2">
              <span>总粉丝数</span>
              <span class="span1">1735</span>
            </p>
          </div>
        </div>
        <div class="right" ref="right">
          <div class="info">
            <p>近期</p>
            <p>连红</p>
            <p>历史最高</p>
          </div>
          <div class="num">
            <span>7</span>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "commonRanking",
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.main {
  .content {
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