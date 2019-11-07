<template>
  <div class="container" id="shop">
    <navBar :goback="false" title class="tab">
      <van-tabs @click="onClick" slot="title">
        <van-tab title="比分"></van-tab>
        <van-tab title="开奖"></van-tab>
      </van-tabs>
    </navBar>
    <div class="main">
      <router-view />    
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
    return {};
  },
  created() {},
  methods: {
    onClick(name, title) {
     if(title=='比分'){
        this.$router.push({
        path: "/theScore"
      });
     }else{
       this.$router.push({
        path: "/lottery"
      });
     }
    }
  }
};
</script>
<style lang="less" scoped>
</style>