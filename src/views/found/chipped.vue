<template>
  <div class="container" id="shop">
    <div class="main">
      <div class="content" @click="detail">
        <div class="cir">
          <p>竞彩足球</p>
          <van-circle
            v-model="currentRate"
            :rate="rate"
            size="60px"
            layer-color="#ebedf0"
            color="red"
            :stroke-width="80"
            :text="text"
          />
        </div>
        <div>
          <div class="wrap">
            <div class="admin">
              <div>
                <van-icon name="friends-o" />
              </div>
              <div>
                <p>用户</p>
                <p>355454as</p>
              </div>
            </div>
            <div>
              <span class="color">近5单中1</span>
            </div>
          </div>
          <div class="wrap1">
            <div>
              <p class="p1">总金额</p>
              <p>140.0元</p>
            </div>
            <div>
              <p class="p1">每份</p>
              <p>140.0元</p>
            </div>
            <div class="div1">
              <p class="p1">剩余</p>
              <p>140.0元</p>
            </div>
          </div>
        </div>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "chipped",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      rate: 50,
      currentRate: 0
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },
  watch: {},
  methods: {
    detail(){
      this.$router.push({
        path:'/chippedDetails'
      })
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  .cir{
    p{
      font-size: 14px;
      color: #777;
    }
  }
  .wrap,
  .wrap1,
  .admin {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .color{
      color: #f24a44;
    }
  }
  /deep/ .van-circle__text{
    color: #f24a44;
  }
  .wrap {
    font-size: 12px;
    border-bottom: 1px solid #eeeeee;
    .van-icon-friends-o {
      font-size: 24px;
      color: #777;
    }
  }
  .wrap1{
    div{
      font-size: 14px;
      text-align: center;
      border-left: 1px solid #eeeeee;
      padding: 0 10px;
      margin-top: 5px;
      p{
        padding: 5px;
      }
      .p1{
        color: #777;
      }
    }
    .div1{
      border-right: 1px solid #eeeeee;
    }
  }
  .van-icon{
    font-size: 18px;
    color: #cccccc;
  }
}
</style>