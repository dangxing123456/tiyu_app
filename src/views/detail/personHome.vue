<template>
  <div class="container">
    <navBar></navBar>
    <div class="main">
        <div class='head'>

        </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";

export default {
  name: "personHome",
  components: {
    navBar,
   
  },
  data() {
    return {
      list: [],
      finished: false,
      loading: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
     
    }
  }
};
</script>
<style lang="less" scoped>
.head{
    width:100%;
}
</style>