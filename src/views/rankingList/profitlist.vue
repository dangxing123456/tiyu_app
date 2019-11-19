<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title=title>
    </navBar>
    <div class="main">
    <commonRanking></commonRanking>
    </div>

  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
import commonRanking from "@/components/commonRankingList/commonRanking.vue";
export default {
  name: "profitlist",
  components:{
    navBar,
    commonRanking
  },
  props: {
   
  },
  data() {
    return {
      title:this.$route.meta.title
    };
  },
  computed: {
    
  },
  watch: {},
  methods: {

  },
  mounted(){
    // console.log(this.$route)
  }
};
</script>
<style lang="less" scoped>
</style>