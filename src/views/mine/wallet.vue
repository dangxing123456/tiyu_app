<template>
  <div class="container">
    <navBar />
    <div class="main">
      <div class="top">
        <p class="money">￥0.00</p>
      </div>
      <div class="wallet-box">
        <div class="wallet">
          <div class="money">
            <p>
              可用余额:
              <span>0.07元</span>
            </p>
            <p>
              冻结资金:
              <span>0.07元</span>
              <van-icon name="warning-o" size="18px" @click="show()" />
            </p>
          </div>
        </div>
      </div>

      <div class="content">
        <p>2019-12-16</p>
        <div class="wrap">
          <div>
            <span>15:31</span>
          </div>
          <div>
            <p>-2.0</p>
            <p>账户余额:0.07</p>
            <p class="type">余额支付,订单[322990751],支付2元</p>
          </div>
          <div>
            <span>类型:代购出票</span>
          </div>
        </div>
      </div>
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
      loading: false
    };
  },
  methods: {
    getList() {
      this.$SERVER
        .getUserWalletExchangeHIstory({
          userId: this.$store.state.userInfo.userid,
          pagenum: 1,
          pagesize: 10
        })
        .then(res => {
          console.log(res.data);
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
  created() {
    this.getList();
  }
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
    padding: 10px;
    color: #777;
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