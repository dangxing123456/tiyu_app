<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="head">
        <van-tabs
          v-model="active"
          title-inactive-color="#333333"
          title-active-color="#f24a44"
          @click="OnClick"
          swipeable
        >
          <van-tab title="欧赔">
            <router-view />
          </van-tab>
          <van-tab title="亚赔">
            <router-view />
          </van-tab>
          <van-tab title="凯利">
            <router-view />
          </van-tab>
          <van-tab title="必发">
            <router-view />
          </van-tab>
          <van-tab title="大小球">
            <router-view />
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "losspercent",
  components: {},
  props: {},
  data() {
    return {
      active: 1
    };
  },
  computed: {},
  watch: {},
  methods: {
    OnClick(name, title) {
      if (title == "欧赔") {
        this.$router.push({
          path: "/oupei"
        });
      } else if (title == "亚赔") {
        this.$router.push({
          path: "/yapei"
        });
      } else if (title == "凯利") {
        this.$router.push({
          path: "/kaili"
        });
      } else if (title == "必发") {
        this.$router.push({
          path: "/bifa"
        });
      } else {
        this.$router.push({
          path: "/daxiao"
        });
      }
    }
  },
  mounted() {
    // console.log(this.$route)
  }
};
</script>
<style lang="less" scoped>
.head {
  /deep/ .van-tab {
    flex-basis: 20% !important;
  }
  /deep/ .van-tabs__line {
    display: none;
  }
  /deep/ .van-tabs__nav {
    background-color: #f8f8f8;
  }
}
</style>