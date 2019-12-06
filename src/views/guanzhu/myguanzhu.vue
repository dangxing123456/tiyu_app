<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div class="main">
      <div class="content">
        <div class="left">
          <span>1</span>
          <img src="../../assets/images/default.png" alt />
          <div>
            <p class="p1">
              <span class="sp">小妹妹推个单</span>
            </p>
            <p class="p2">
              <span class="span1">4投4中</span>
            </p>
          </div>
        </div>
        <div class="right">
          <i></i>
            <span>已关注</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "hitlist",
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
.main {
  .content {
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .left {
      display: flex;
      align-items: center;
      font-size: 14px;
      img {
        width: 55px;
        margin-right: 10px;
        margin-left: 15px;
      }
      p {
        margin-top: 4px;
      }
      .p1 {
        .span1 {
          border: 1px solid #f24a44;
          border-radius: 15px;
          padding: 0 5px;
          color: #f24a44;
        }
      }
      .p2 {
        .span1 {
          color: #f24a44;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      span{
        display: inline-block;
        width: 60px;
        height: 30px;
        background-color: #cccccc;
        line-height: 30px;
        text-align: center;
       
      }
    i{
      display: inline-block;
      width: 1px;
      height: 30px;
      background-color: #eeeeee;
       margin-right: 10px;
    }
    }
  }
}
</style>