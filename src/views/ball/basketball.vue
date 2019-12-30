<template>
  <div class="container" id="shop">
    <div class="main">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-tabs sticky :offset-top="85">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
            <van-tab title="即时" class="instant">
              <commonBasketBall :list="list1" :type="1" :count="count1"></commonBasketBall>
            </van-tab>
            <van-tab title="完成" class="complete">
              <commonBasketBall :list="list" :count="count" :type="2"></commonBasketBall>
            </van-tab>
            <!-- <van-tab title="赛程" class="wrap">
            <commonBasketBall ></commonBasketBall>
            </van-tab>-->
          </van-list>
        </van-tabs>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import commonBasketBall from "../../components/commonBall/commonBasketball";
export default {
  name: "score",
  components: {
    commonBasketBall
  },
  data() {
    return {
      list: [],
      list1: [],
      loading: false,
      finished: false,
      page: 1,
      count: 0,
      count1: 0,
      isLoading: false
    };
  },
  created() {
    // this.getList();

    window.setInterval(() => {
      var that = this;
      setTimeout(function() {
        that.getList();
      }, 0);
    }, 30000);
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.getList();
      }, 500);
    },
    getList() {
      this.$SERVER
        .getBasketBallCurrentScore({ pagenum: this.page, pagesize: 10 })
        .then(res => {
          for (var i = 0; i < res.data.list.length; i++) {
            if (res.data.list[i].playStatus == -1) {
              this.count++;
              this.list.push(res.data.list[i]);
            } else {
              this.count1++;
              this.list1.push(res.data.list[i]);
            }
          }
          this.loading = false;
          this.page++;
          // this.list = res.data.list;
          if (!res.data.hasNextPage) {
            this.finished = true;
          }

          //
        });
    }
  }
};
</script>
<style lang="less" scoped>
</style>