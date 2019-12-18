<template>
  <div class="container">
    <navBar >
    </navBar>
    <div class="main">
      <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="getList"
>
     <commonRanking v-for="(item,i) in list" :key="i" :data="item" :type="2"></commonRanking>
      </van-list>
    </div>
  
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
import commonRanking from "@/components/commonRankingList/commonRanking.vue";
export default {
  name: "hitlist",
  components:{
    navBar,
    commonRanking
  },
  data() {
    return {
      list:[],
      finished: false,
      loading:false

    };
  },
  created(){
    this.getList()
  },
  methods: {
    getList(){
      this.$SERVER.getShootTop().then(res=>{
        this.loading = false
        this.list = res.data.list
        if(!res.data.hasNextPage){
          this.finished = true
        }
      })
    }
  },
};
</script>
<style lang="less" scoped>
</style>