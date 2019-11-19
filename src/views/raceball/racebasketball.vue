<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title=title>
    </navBar>
    <div class="main">
     竞猜篮球
    </div>
   
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "racebasketball",
  components:{
    navBar
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