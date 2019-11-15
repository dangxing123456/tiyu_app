<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="content">
        <h3>凯利指数</h3>
        <div class="wrap">
          <div class="head">
            <p class="p1">公司</p>
            <p class="p2">赔率指数</p>
            <p class="p3">返利</p>
          </div>
          <div class="div1">
            <div class="left">
              <span>平均</span>
            </div>
            <div class="right">
              <div>
                <p>即时</p>
                <p>初赔</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
              <div>
                <p>3.10</p>
                <p>2.56</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "kaili",
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
.content {
  background-color: #fff;
  h3 {
    font-size: 14px;
    font-weight: bold;
    // padding: 10px 0;
    border-left: 3px solid #f24a44;
    padding: 0 15px;
    margin-top: 10px;
  }
  .wrap {
    padding: 10px 0;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0;
      border: 1px solid #eeeeee;
      border-bottom: none;
      .p1 {
        width: 20%;
        text-align: center;
      }
      .p2 {
        width: 80%;
        text-align: center;
      }
      .p3 {
        width: 13%;
        text-align: center;
      }
    }
    .div1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 55px;
      font-size: 13px;
      border: 1px solid #eeeeee;
      .left {
        width: 20%;
        height: 100%;
        line-height: 55px;
        text-align: center;
        border-right: 1px solid #eeeeee;
      }
      .right {
        padding: 0 10px;
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>