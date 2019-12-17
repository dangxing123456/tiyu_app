<template>
  <div class="container" id="shop">
    <navBar :goback="false" title="比分"></navBar>
    <div class="main">
      <van-tabs class="tab" @click="onClick">
        <van-tab title="足球"></van-tab>
        <van-tab title="篮球"></van-tab>
      </van-tabs>
    </div>
    <router-view />
  </div>
</template>

<script>
import navBar from "../../../components/navbar/navbar";
export default {
  name: "theScore",
  components: {
    navBar
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isChecked: this.value
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClick(name, title) {
      if (title == "足球") {
        this.$router.push({
          path: "/football"
        });
      } else {
        this.$router.push({
          path: "/basketball"
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.tab {
  width: 100%;
  background-color: white;
  /deep/ .van-tabs__nav--line {
    width: 35%;
    margin: 0 auto;

    .van-tab {
      border-radius: 0.3rem;
      background-color: #eeeeee;
      height: 25px;
      line-height: 25px;
      margin-top: 8px;
    }
    .van-tab--active {
      background-color: #f24a44;
      color: #ffffff;
    }
  }
}
</style>