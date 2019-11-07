<template>
  <div class="container" id="shop">
    <div class="main">
      <van-tabs @click="onClick">
        <van-tab title="足球"></van-tab>
        <van-tab title="篮球"></van-tab>
      </van-tabs>
    </div>
     <router-view/>
  </div>
</template>

<script>
export default {
  name: "theScore",
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
</style>