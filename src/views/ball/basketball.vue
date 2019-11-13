<template>
  <div class="container" id="shop">
    <div class="main">
      <van-tabs>
        <van-tab title="即时" class="instant">
          <commonBasketBall></commonBasketBall>
        </van-tab>
        <van-tab title="完成" class="complete">
          <commonBasketBall></commonBasketBall>
        </van-tab>
        <van-tab title="赛程" class="wrap">
          <commonBasketBall></commonBasketBall>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import commonBasketBall from "../../components/commonBall/commonBasketball";
export default {
  name: "score",
  components: {
    commonBasketBall
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="less" scoped>
</style>