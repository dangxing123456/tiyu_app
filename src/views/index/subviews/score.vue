<template>
  <div class="container" id="shop">
    <navBar :goback="false" :search="true" :stl="bg" />
    <div class="main">
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "score",
  components: {
    navBar
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
</style>