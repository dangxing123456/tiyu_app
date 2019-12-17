<template>
  <div class="container">
    <navBar />
    <div class="main">
      <div>
        <span>店主姓名</span>
        <span>******</span>
      </div>
      <div>
        <span>店面手机</span>
        <span>******</span>
      </div>
      <div>
        <span>店面QQ</span>
        <span>******</span>
      </div>
      <div>
        <span>店面地址</span>
        <span>******</span>
      </div>
      <div>
        <span>彩店邀请码</span>
        <span>54359</span>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "kefu",
  components: {
    navBar
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    withdraw() {
      this.loading = true;
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  div {
    padding: 10px;
    border-bottom: 1px solid #eeeeee;
    font-size: 14px;
    color: #777;
  }
}
</style>