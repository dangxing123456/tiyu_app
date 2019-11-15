<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div class="main">
      <commonRanking></commonRanking>
    </div>
    <router-view />
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
import commonRanking from "@/components/commonRankingList/commonRanking.vue";
export default {
  name: "redlist",
  components: {
    navBar,
    commonRanking
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title,
    };
  },
  computed: {},
  watch: {
  
  },
  methods: {},
  mounted() {
    // console.log(this.$route)
      //  this.$refs.right.innerHTML="<h3>100%</h3><p>命中率</p>"
  }
};
</script>
<style lang="less" scoped>

</style>