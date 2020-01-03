<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title"></navBar>
    <div class="main">
      <van-cell-group>
        <van-field v-model="value" rows="1" autosize type="textarea" placeholder="方案宣言..." />
      </van-cell-group>
      <div class="content">
        <van-cell-group>
          <van-switch-cell v-model="checked" title="允许跟单" />
        </van-cell-group>
        <p>*关闭跟单后他人无法复制您的方案</p>
      </div>
      <div class="wrap" v-if="checked">
        <p>
          保障赔率
          <span>(中奖赔率小于等于保障赔率时,跟单用户无需支付费用)</span>
        </p>
        <p>
          <input type="text" v-model="bei" />倍
        </p>
      </div>
    </div>
    <div class="bottom">
      <div class="money">
        需支付:
        <span>{{$store.state.money*this.$store.state.value}}元</span>
      </div>
      <div>
        <van-button type="danger" @click="confirmOrder" :loading="loading">确认支付</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "confirmOrder",
  props: {},
  components: {
    navBar
  },
  data() {
    return {
      title: this.$route.meta.title,
      arrData: [],
      checked: true,
      value: "",
      bei: "1.7",
      loading: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    confirmOrder() {
      if (this.checked == false) {
        this.bei = "";
      }
      this.loading = true;
      this.$SERVER
        .footBallBookOrder({
          wagers: this.$store.state.wagers,
          userId: this.$store.state.userInfo.userId,
          times: this.$store.state.value,
          matchIds: this.$store.state.footId,
          bets: this.$store.state.betArr,
          describeText: this.value,
          promiseBet: this.bei,
          gates: this.$store.state.gate
        })
        .then(res => {
          //下单成功
          if (res.code == 200) {
            this.loading = false;
            this.$router.push("/orderRecord");
            this.$toast.success("下单成功");
            this.$store.state.value = 1;
            for (var i = 0; i < this.$store.state.selectResult.length; i++) {
              this.$store.state.selectResult[i] = [];
              this.$store.state.money = 0;
            }
          }
        });
    }
  },
  created() {
    console.log(this.$store.state.arr.join(","));

    for (var i = 0; i < this.$store.state.betArr.length; i++) {
      if (!this.$store.state.betArr[i]) {
        this.$store.state.betArr.splice(i, 1);
        i--;
      }
    }
    for (var i = 0; i < this.$store.state.footId.length; i++) {
      if (!this.$store.state.footId[i]) {
        this.$store.state.footId.splice(i, 1);
        i--;
      }
    }
  }
};
</script>
<style lang="less" scoped>
/deep/ .van-cell {
  font-size: 14px;
}
.content {
  margin: 15px 0;
  background-color: #fff;
  p {
    padding: 0px 20px;
    font-size: 12px;
    color: #777;
  }
}
.wrap {
  padding: 0px 20px;
  background-color: #fff;

  p {
    span {
      font-size: 12px;
      color: #777;
    }
  }
  input {
    display: inline-block;
    border-bottom: 1px solid black;
    width: 50px;
  }
}
.bottom {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .money {
    padding: 0 10px;
    span {
      color: #f24a44;
    }
  }
}
</style>