<template>
  <div class="container" id="shop">
    <navBar :goback="true" title=""></navBar>
    <div class="main">
      <table class="tab2">
        <tr class="title">
          <th>昵称</th>
          <th>认购份数</th>
          <th>购买金额</th>
          <th>认购时间</th>
        </tr>
        <tr v-for="(item,index) in 5" :key="index">
          <td>昵称哈哈哈哈</td>
          <td>66</td>
          <td class="money">2.00</td>
          <td>-366048</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "subscribeDetails",
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
.tab2 {
  width: 100%;
  text-align: center;
  font-size: 12px;
  .title {
    color: #777777;
    background-color: #f8f8f8;
  }
  tr {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #eeeeee;
    td {
      width: 25%;
    }
    .money {
      color: red;
    }
  }
}
</style>