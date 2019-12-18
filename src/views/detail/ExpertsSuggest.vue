<template>
  <div class="container" id="shop">
    <navBar :goback="true" :title="title">
      <div class="right" slot="right">
        <van-icon class-prefix="icon" name="share" />
      </div>
    </navBar>
    <div class="main">
      <div class="content">
        <div class="left">
          <img :src="userinfo.icon" alt />
          <div>
            <p class="p1">
              <span class="sp">{{userinfo.nickname}}</span>
            </p>
            <p class="p2">
              <span>砖粉</span>
              <span class="span1">658</span>
            </p>
          </div>
        </div>
        <div class="right" ref="right">
          <div class="info"  @click="follow">
           <span v-if="isFans==0">+关注</span>
           <span v-else>已关注</span>
          </div>
        </div>
      </div>
      <!-- <div class="tab">
        <van-tabs>
          <van-tab title="7天">
            <div class="tab-top">
              <p class="p1">165%</p>
              <p class="p2">近7天均盈利</p>
            </div>
            <div class="tab-bot">
              <div>
                <p class="p1">165%</p>
                <p class="p2">近7天均盈利</p>
              </div>
              <i></i>
              <div>
                <p class="p1">165%</p>
                <p class="p2">近7天命中率</p>
              </div>
              <i></i>
              <div>
                <p class="p1">165%</p>
                <p class="p2">近7天连红</p>
              </div>
            </div>
          </van-tab>
          <van-tab title="30天">
            <div class="tab-top">
              <p class="p1">165%</p>
              <p class="p2">近30天命中</p>
            </div>
            <div class="tab-bot">
              <div>
                <p class="p1">165%</p>
                <p class="p2">近30天发单</p>
              </div>
              <i></i>
              <div>
                <p class="p1">165%</p>
                <p class="p2">近30天连红</p>
              </div>
              <i></i>
              <div>
                <p class="p1">165%</p>
                <p class="p2">历史最高连红</p>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div> -->
      <div class="wrapper">
        <div class="head">
          <div class="left">
            <i></i>
            <span class="zu">足</span>
            <span>单关</span>
          </div>
          <div class="right">
            <span>最高SP已隐藏</span>
          </div>
        </div>
        <div class="top">
          <p>这场必中单, 自购2000元,跟上就是赚,可投重注</p>
        </div>
        <div class="list">
          <div>
            <p class="p1">佣金</p>
            <p class="p2">近30天发单</p>
          </div>
          <i></i>
          <div>
            <p class="p1">自购金额</p>
            <p class="p2">近30天连红</p>
          </div>
          <i></i>
          <div>
            <p class="p1">起限%</p>
            <p class="p2">历史最高连红</p>
          </div>
          <i></i>
          <div>
            <p class="p1">跟单人气</p>
            <p class="p2">历史最高连红</p>
          </div>
        </div>
        <div class="wrapper-bot">
          <p>
            <van-icon class-prefix="icon" name="suozi" />截止可见：11-13 21:50
          </p>
          <van-button type="danger" size="large">跟一单</van-button>
        </div>
      </div>
      <div class="info">
        <div class="head">
          <i></i>
          <span>近30日方案</span>
        </div>
        <div class="info-list">
          <div class="top">
            <div class="left">
              <span class="zu">足</span>
              <span>2串1</span>
              <span>最高SP2.76</span>
            </div>
            <div class="right">
              <span>11-11 21:50已截止</span>
            </div>
          </div>
          <div class="con">
            <div>
              <p class="p1">自购金额</p>
              <p class="p2">2.0</p>
            </div>
            <i class="ii"></i>
            <div>
              <p class="p1">跟单总额</p>
              <p class="p2">0元</p>
            </div>
            <i class="ii"></i>
            <div>
              <p class="p1">跟单人气</p>
              <p class="renqi">0</p>
            </div>
            <i class="ii"></i>
            <div>
              <van-icon class-prefix="icon" name="yizhongjiang" font-size="50px" color="#f24a44" />
              <van-icon
                v-if="false"
                class-prefix="icon"
                name="weizhongjiang"
                font-size="50px"
                color="#f24a44"
              />
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
  name: "ExpertsSuggest",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      title: this.$route.meta.title,
      isFans: 0,
      content: "+关注",
      userinfo:{}
    };
  },
  created(){
    this.getBasketList()
  },
  methods: {
    follow(){
      this.$SERVER.updateAttention({
        userId:this.$route.params.userInfo.userId,
        fansuserId:this.$store.state.userInfo.userId
      }).then(res=>{
        this.isFans = !this.isFans
      })
    },
    
    getBasketList() {
      this.userinfo = this.$route.params.userinfo
      if(this.$route.params.type=="a"){
      this.$SERVER
        .getFootBallCanFollowOrderList({
          id:this.$route.params.id,
          userId:this.$store.state.userInfo.userId
        })
        .then(res => {
          this.data = res.data;
        })
        .catch(err => {});
      }else{
              this.$SERVER
        .getBasketBallCanFollowOrderList({
          id:this.$route.params.id,
          userId:this.$store.state.userInfo.userId
        })
        .then(res => {
          this.data = res.data;
        })
        .catch(err => {});
      }

    },
  },
};
</script>
<style lang="less" scoped>
.wrapper-bot {
  /deep/ .van-button--large {
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
  }
}
.tab {
  width: 100%;
  background-color: white;
  /deep/ .van-tabs__nav--line {
    width: 40%;
    margin: 0 auto;

    .van-tab {
      border-radius: 0.3rem;
      background: none;
      height: 25px;
      line-height: 25px;
      margin-top: 8px;
      color: #333333;
    }
    .van-tab--active {
      background-color: #f24a44;
      color: #ffffff;
    }
    .van-tabs__line {
      background: none;
    }
  }
  .tab-top {
    padding: 5px 0;
    border: 1px solid #eeeeee;
    text-align: center;
    .p1 {
      font-size: 25px;
      color: #f24a44;
    }
    .p2 {
      font-size: 12px;
      color: #777777;
      margin-top: 5px;
    }
  }
  .tab-bot {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    width: 100%;
    div {
      text-align: center;
      width: 33%;
      .p1 {
        font-size: 14px;
        color: #f24a44;
      }
      .p2 {
        font-size: 12px;
        color: #777777;
        margin-top: 5px;
      }
      i {
        display: inline-block;
        width: 5px;
        height: 15px;
        background-color: #777777;
      }
    }
    i {
      display: inline-block;
      width: 2px;
      height: 15px;
      background-color: #eeeeee;
    }
  }
}
.navbar .right[data-v-685b8cc8] {
  color: white;
}
.icon-jiahao {
  font-size: 10px;
  margin-right: 8px;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f24a44;
  padding: 10px 10px;
  .left {
    display: flex;
    align-items: center;
    font-size: 14px;
    img {
      width: 55px;
      margin-right: 15px;
    }
    p {
      margin-top: 4px;
    }
    .p1 {
      .sp {
        font-size: 14px;
        color: white;
      }
    }
    .p2 {
      font-size: 12px;
      color: white;

      .span1 {
        color: #f3dc12;
        margin-left: 5px;
      }
    }
  }
  .right {
    .info {
      font-size: 14px;
      border: 1px solid white;
      padding: 5px;
      color: white;
      padding: 5px;
      font-size: 12px;
    }
  }
}
.wrapper {
  background-color: white;
  margin-top: 5px;
  .head {
    padding: 5px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 15px;
    .left {
      i {
        display: inline-block;
        width: 4px;
        height: 14px;
        background-color: #f24a44;
      }
      .zu {
        background-color: #56c650;
        color: white;
        border-radius: 3px;
        padding: 2px;
        font-size: 12px;
      }
    }
    .right {
      color: #777;
    }
  }
  .top {
    width: 100%;

    border-bottom: 1px solid #eeeeee;
    border-top: 1px solid #eeeeee;
    padding: 5px 5px;
    p {
      padding-left: 25px;
      font-size: 12px;
      color: #777777;
    }
  }
  .list {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    div {
      text-align: center;
      width: 33%;
      .p1 {
        font-size: 14px;
        color: #777777;
      }
      .p2 {
        font-size: 12px;
        color: #f24a44;
        margin-top: 5px;
      }
    }
    i {
      display: inline-block;
      width: 2px;
      height: 15px;
      background-color: #eeeeee;
    }
  }
  .wrapper-bot {
    padding: 5px;
    text-align: center;
    p {
      font-size: 12px;
      color: #f3dc12;
    }
  }
}
.info {
  .head {
    padding: 5px;
    font-size: 14px;
    .ii {
      display: inline-block;
      width: 4px;
      height: 14px;
      background-color: #f24a44;
    }
  }
  .info-list {
    .top {
      padding: 5px 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      border-bottom: 1px solid #eeeeee;
      .left {
        .zu {
          background-color: #56c650;
          color: white;
          border-radius: 3px;
          padding: 2px;
          font-size: 12px;
        }
      }
    }
    .con {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
      padding: 5px;
      width: 100%;
      border-bottom: 1px solid #eeeeee;
      /deep/ .icon {
        font-size: 50px;
      }
      div {
        text-align: center;
        width: 33%;
        p {
          font-size: 14px;
          color: #777777;
        }
        .p2 {
          margin-top: 5px;
        }
        img {
          width: 60px;
        }
        .renqi {
          color: #f24a44;
        }
      }
      .ii {
        display: inline-block;
        width: 2px;
        height: 25px;
        background-color: #eeeeee;
      }
    }
  }
}
</style>