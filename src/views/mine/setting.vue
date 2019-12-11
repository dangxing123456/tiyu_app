<template>
  <div class="container">
    <navBar />
    <div class="main">
      <van-cell-group class="cell-group">
        <van-cell title="修改绑定手机" is-link to="/" />
        <van-cell title="修改密码" is-link to="/" />
      </van-cell-group>

      <van-cell-group class="cell-group">
        <van-cell title="退出" is-link @click="logout()" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "setting",
  components: {
    navBar
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$METHOD.removeStore("token")
      this.$toast.success("退出登录成功");
      this.$router.push('/')
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  background: #eee;
}
.cell-group {
  margin-top: 20px;
}
</style>