<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div class="main">
      <div class="content">
        <div class="left">
          <img src="../../assets/images/default.png" alt="">
          <div >
            <p>发高赔单<span>发12单中9单</span></p>
            <p>总粉丝数 <span>1735</span></p>
          </div>
        </div>
        <div class="right">
          <div class="info">
            <div class="left">
              <p>近期</p>
              <p>连红</p>
            </div>
            <div class="right">
              <h3>4</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "redlist",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {
    // console.log(this.$route)
  }
};
</script>
<style lang="less" scoped>
.main{
  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      display: flex;
      align-items: center;
      img{
        width: 65px;
      }
      div{
        float: right;
      }
    }
    .right{
      .info{
        display: flex;
      }
    }
  }
}
</style>