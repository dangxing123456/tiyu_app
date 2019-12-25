<template>
  <div class="container">
    <navBar />
    <div class="top">
      <p class="money">￥{{$store.state.userInfo.coin}}</p>
    </div>
    <div class="wallet-box">
      <div class="wallet">
        <div class="money">
          <p>
            可用余额:
            <span>{{sum}}元</span>
          </p>
          <!-- <p>
            冻结资金:
            <span>0.07元</span>
            <van-icon name="warning-o" size="18px" @click="show()" />
          </p>-->
        </div>
      </div>
    </div>

    <div class="main">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
        <div class="content" v-for="(item,index) in list" :key="index">
          <div class="wrap">
            <div class="time">
              <span>{{$METHOD.format(item.time/1000,'MM-dd hh:mm')}}</span>
            </div>
            <div class="text">
              <p class="mon">{{item.coin}}</p>

              <p v-if="item.currentBalance">账户余额:{{item.currentBalance}}</p>
              <p class="type">余额支付,订单[{{item.forId}}],支付{{item.coin}}元</p>
            </div>
            <div class="bot">
              <span>类型:{{item.remark}}</span>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "wallet",
  components: {
    navBar
  },
  data() {
    return {
      finished: false,
      loading: false,
      list: [],
      page: 1,
      sum: 0
    };
  },
  methods: {
    getList() {
      this.$SERVER
        .getUserWalletExchangeHIstory({
          userId: this.$store.state.userInfo.userId,
          pagenum: this.page,
          pagesize: 10
        })
        .then(res => {
          this.list = [...this.list, ...res.data.list];
          this.loading = false;
          this.page++;
          if (!res.data.hasNextPage) {
            this.finished = true;
          }
        });
    },
    withdraw() {
      this.loading = true;
    },
    show() {
      var message = (
        <div>
          <p>冻结状态</p>
          <p>1.下单后至店主未出票前,下单金额为冻结状态;</p>
          <p>2.店主未处理的提款金额,为冻结状态</p>
        </div>
      );
      this.$toast({
        message: message
      });
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f24a44;
  padding: 15px 15px 35px;
  p {
    font-size: 30px;
    color: #fff;
  }
}
.wallet-box {
  padding: 15px;
  margin-top: -42px;
  .wallet {
    border-radius: 50px;
    background: #fff;
    padding: 15px 15px;
    .money {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;

      span {
        color: #f24a44;
      }
    }
  }
  .btn-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
}
.content {
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    background: #fff;
    padding: 5px;
    color: #777;
    border-bottom: 1px solid #eeeeee;
    .time {
      width: 15%;
    }
    .text {
      width: 54%;
      .mon {
        color: #f24a44;
      }
    }
    .bot {
      width: 24%;
    }
    div {
      .type {
        font-size: 12px;
        color: #ccc;
      }

      p {
        margin-top: 5px;
      }
    }
  }
}
</style>