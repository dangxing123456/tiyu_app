<template>
  <div class="container">
    <navBar />
    <div class="main">
      jhgjhg
    </div>    
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "capitalFlow",
  components: {
    navBar
  },
  data() {
    return {
      list: [],
      page: 1,
      loading: false,
      finished: false
    };
  },
  methods: {
    getList(isClear) {
      if (isClear) {
        this.elList = [];
        this.page = 1;
      }
      this.$SERVER
        .money_log({
          page: this.page
        })
        .then(res => {
          this.loading = false;
          if (res.data.length == 0) {
            this.finished = true;
            return;
          }
          this.page++;
          this.list = [...this.list, ...res.data];
        });
    }
  }
};
</script>

<style lang="less" scoped>
.table {
  width: 90%;
  margin: 0 auto;
  th {
    font-size: 15px;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    padding: 10px 0;
  }
  td {
    font-size: 13px;
    font-weight: 500;
    padding: 10px 0;
  }
}
</style>