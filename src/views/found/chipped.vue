<template>
  <div class="container" id="shop">
    <div class="main">合买</div>
    <router-view />
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "chipped",
  components: {
    navBar
  },
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
</style>