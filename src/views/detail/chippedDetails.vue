<template>
  <div class="container" id="shop">
    <navBar :goback="true"></navBar>
    <div class="main">
      <div class="content">
        <div class="head">任选九(第2019158期)</div>
        <div class="wrap">
          <div class="top">
            <div class="first">
              <p>方案进度</p>
              <p class="right">编号：1700201</p>
            </div>
            <div class="scend">
              <div>
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
              <div class="div1 div2">
                <p class="p1">总金额</p>
                <p>140.0元</p>
              </div>
              <div class="div1">
                <p class="p1">佣金</p>
                <p>140.0元</p>
              </div>
              <div class="div1 last">
                <p class="p1">方案状态</p>
                <p>已满员</p>
              </div>
            </div>
          </div>
          <div class="center">
            <div>方案信息</div>
            <div>
              <span class="title">方案发起人:</span>
              <span>用户-5013sad</span>
              <span class="right">近5单中1</span>
            </div>
            <div>
              <span class="title">方案标题:</span>
              <span>任选九</span>
              <span>合买</span>
            </div>
            <div class="title">方案描述:</div>
            <div>
              <span class="title">已经购买:</span>
              <span>2份</span>
            </div>
            <div>
              <span class="title">中奖情况:</span>
              <span>已出票</span>
            </div>
            <div @click="detail">
              <span class="title">认购人数:</span>
              <span>2人,共2元</span>
              <van-icon name="arrow" />
            </div>
            <div>
              <span class="title">截止时间:</span>
              <span>2019-11-19 19:23</span>
            </div>
          </div>
          <div class="bottom">
            <div>
              <div>
                <span>投注内容</span>
                <span class="right">1注1倍</span>
              </div>
              <div class="con">3,2,5,5,2</div>
              <div>
                <p>开奖结果</p>
                <p class="con">暂未开奖</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "chippedDetails",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title,
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
              path:'/subscribeDetails'
          })
      }
  },
  mounted() {
    // console.log(this.$route)
  }
};
</script>
<style lang="less" scoped>
.content {
  .head {
    width: 100%;
    height: 30px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
  }
  .wrap {
    .top {
      padding: 5px;
      background-color: #fff;
      font-size: 14px;
      .first,
      .scend {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .first {
        border-bottom: 1px solid #eeeeee;
        .right{
            color: #777;
        }
      }
      .scend {
        padding: 5px 0;
        .div1 {
          text-align: center;
          border-right: 1px solid #eeeeee;
          width: 25%;
        }
        .div2 {
          border-left: 1px solid #eeeeee;
        }
        .last {
          border: none;
        }
        .p1{
            color: #777;
            margin-bottom: 5px;
        }
      }
    }
    .center {
      padding: 5px;
      margin-top: 10px;
      background-color: #fff;
      div {
        font-size: 14px;
        border-bottom: 1px solid #eeeeee;
        height: 30px;
        line-height: 30px;
        .right {
          float: right;
          color: #f24a44;
        }
        /deep/ .van-icon-arrow {
          float: right;
          font-size: 28px;
          color: #777;
        }
      }
      .title {
        color: #777;
      }
    }
    .bottom {
      padding: 5px;
      font-size: 14px;
      margin-top: 10px;
      background-color: #fff;
      .right {
        float: right;
        color: #777;
      }
      .con {
        color: #777;
        padding: 10px 0;
      }
    }
  }
}
</style>