<template>
  <div class="container">
    <navBar />
    <div class="main">
      <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
      <van-tabs class="tab">
        <van-tab title="足球">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
            <div class="content" v-for="(item,index) in list" :key="index" v-if="item.winMoney">
              <div class="left">
                <van-icon
                  v-if="item.type==1"
                  class-prefix="icon"
                  name="football"
                  color="green"
                  size="45px"
                />
                <van-icon
                  v-if="item.type==2"
                  class-prefix="icon"
                  name="lanqiu"
                  color="blue"
                  size="45px"
                />
                <div>
                  <p>金额: {{item.times*item.buyWagers*2}}元</p>
                  <p class="time">{{item.bookTime | formatDate}}</p>
                </div>
              </div>
              <div class="right">
                <div>
                  <p v-if="item.winMoney" class="money">中奖:{{item.winMoney}}元</p>
                  <p class="type">已消费</p>
                </div>

                <van-icon name="arrow" size="30px" color="#ccc" />
              </div>
            </div>
          </van-list>
        </van-tab>
        <van-tab title="篮球">
          <div class="content" v-for="(item,index) in basketlist" :key="index" v-if="item.winMoney">
            <div class="left">
              <van-icon
                v-if="item.type==1"
                class-prefix="icon"
                name="football"
                color="green"
                size="45px"
              />
              <van-icon
                v-if="item.type==2"
                class-prefix="icon"
                name="lanqiu"
                color="blue"
                size="45px"
              />
              <div>
                <p>金额: {{item.times*item.buyWagers*2}}元</p>
                <p class="time">{{item.bookTime | formatDate}}</p>
              </div>
            </div>
            <div class="right">
              <div>
                <p v-if="item.winMoney" class="money">中奖:{{item.winMoney}}元</p>
                <p class="type">已消费</p>
              </div>

              <van-icon name="arrow" size="30px" color="#ccc" />
            </div>
          </div>
        </van-tab>
      </van-tabs>
      <!-- </van-pull-refresh> -->
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "qrcode",
  components: {
    navBar
  },
  data() {
    return {
      list: [],
      basketlist: [],
      isLoading: false, //下拉刷新
      pageIndex: 1, //页码
      loading: false,
      finished: false,
      loading1: false,
      finished1: false,
      pageIndex1: 1,
      page: 1
    };
  },
  methods: {
    onRefresh() {
      // 下拉调用此函数
      setTimeout(() => {
        this.$toast("刷新成功"); //弹出
        this.getList();
        this.getBasketList();
        this.isLoading = false;
      }, 500);
    },
    getList() {
      this.$SERVER
        .getUserFootBallOrders({
          userId: this.$store.state.userInfo.userId,
          pagenum: this.pageIndex,
          pagesize: 10
        })
        .then(res => {
          res.data.list.forEach(e => {
            e.type = 1;
          });
          this.list = [...this.list, ...res.data.list];
          this.list.type = 1;
          this.pageIndex++;
          this.loading = false;

          if (!res.data.hasNextPage) {
            this.finished = true;
          }
        });
    },
    getBasketList() {
      this.$SERVER
        .getUserBasketBallOrder({
          userId: this.$store.state.userInfo.userId,
          pagenum: this.page,
          pagesize: 10
        })
        .then(res => {
          res.data.list.forEach(e => {
            e.type = 2;
          });
          this.basketlist = [...this.basketlist, ...res.data.list];
          this.loading1 = false;
          this.page++;
          if (!res.data.hasNextPage) {
            this.finished1 = true;
          }
        });
    },
    getMon(activeNames) {}
  },
  created() {
    this.getList();
    this.getBasketList();
    console.log(this.basketlist);
  },

  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  }
};
</script>

<style lang="less" scoped>
.tab {
  width: 100%;
  background-color: white;
  /deep/ .van-tabs__nav--line {
    width: 35%;
    margin: 0 auto;

    .van-tab {
      border-radius: 0.3rem;
      background-color: #eeeeee;
      height: 25px;
      line-height: 25px;
      margin-top: 8px;
    }
    .van-tab--active {
      background-color: #f24a44;
      color: #ffffff;
    }
  }
}
.content {
  background-color: #fff;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
  p {
    padding: 4px 0;
    font-size: 14px;
  }
  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      padding: 0 10px;
      color: #777;
      .time {
        font-size: 12px;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: right;
    .money {
      font-size: 18px;
      color: #f24a44;
    }
    .type {
      font-size: 14px;
      color: #777;
    }
  }
}
</style>