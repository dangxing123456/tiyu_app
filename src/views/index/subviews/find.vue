<template>
  <div class="container">
    <navBar :goback="false" :search="false" title>
      <!-- <van-button type="danger" size="mini" slot="right" @click="removeMessage">...</van-button> -->
      <div class="right" slot="right">
        <van-icon name="like-o" size="20px" />
        <span @click="dia">...</span>
      </div>
      <van-tabs
        class="menu"
        @click="OnClick"
        slot="title"
        background="#f24a44"
        color="white"
        title-active-color="white"
        title-inactive-color="rgb(240,240,240)"
      >
        <van-tab title="跟单"></van-tab>
        <van-tab title="推荐"></van-tab>
        <van-tab title="合买"></van-tab>
      </van-tabs>
    </navBar>

    <!-- <van-divider v-if="!list||list.length==0">暂无数据</van-divider> -->
    <div class="main" id="message">
      <router-view />
      <!-- <div class="list">
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="message-box">
            <h3>{{item.t}}</h3>
            <div class="con" v-html="item.c"></div>
            <div class="go" @click="$router.push(item.u)"></div>
          </div>
          <p>{{item.d}}</p>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "myguanzhu",
  components: {
    navBar
  },
  data() {
    return {
      list: []
    };
  },
  computed: {
    message() {
      return this.$store.state.message;
    }
  },
  watch: {
    message() {
      this.getList();
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    dia() {
      this.$dialog
        .alert({
          confirmButtonText: "我的关注",
          closeOnClickOverlay: true 
        })
        .then(() => {
          //点击确认按钮后的调用
          this.$router.push({
            path: "/myguanzhu"
          });
        });
    },
    OnClick(name, title) {
      if (title == "跟单") {
        this.$router.push({
          path: "/documentary"
        });
      } else if (title == "推荐") {
        this.$router.push({
          path: "/recommended"
        });
      } else {
        this.$router.push({
          path: "/chipped"
        });
      }
    },
    getList() {
      if (this.$METHOD.getStore("message")) {
        var message = this.$METHOD.getStore("message");
        this.list = JSON.parse(message);
      }
    },
    removeMessage() {
      this.$dialog
        .confirm({
          title: "提示",
          message: `是否清空消息列表？`
        })
        .then(() => {
          this.$METHOD.removeStore("message");
          this.list = [];
          this.$toast.success("消息列表已清空！");
        });
    }
  }
};
</script>
<style>
.van-dialog {
  top: 12%;
  width: 30%;
  left: 84%;
  font-size: 14px;
}
</style>
<style lang="less" scoped>
.menu {
  /deep/ [class*="van-hairline"]::after {
    border: none;
  }
}
.right {
  span {
    color: white;
    font-size: 28px;
  }
}
// #message {
//   display: flex;
//   flex-flow: column-reverse;
//   align-items: baseline;
// }
// .list {
//   padding: 15px;
//   width: 100%;
//   box-sizing: border-box;
//   .item {
//     .message-box {
//       background: rgba(255, 255, 255, 1);
//       box-shadow: 0px 0px 10px 0px rgba(24, 27, 45, 0.11);
//       border-radius: 5px;
//       padding: 0 15px;
//       h3 {
//         font-size: 15px;
//         font-weight: 500;
//         color: rgba(51, 51, 51, 1);
//         height: 40px;
//         line-height: 40px;
//         border-bottom: 1px solid rgba(240, 240, 240, 1);
//       }
//       .con {
//         font-size: 13px;
//         font-weight: 400;
//         color: rgba(153, 153, 153, 1);
//         line-height: 20px;
//         padding: 15px 0;
//       }
//       .go {
//         font-size: 13px;
//         font-weight: 500;
//         color: rgba(51, 51, 51, 1);
//         margin-top: 20px;
//       }
//     }
//     p {
//       width: 150px;
//       height: 20px;
//       line-height: 20px;
//       margin: 10px auto;
//       background: rgba(224, 224, 224, 1);
//       border-radius: 3px;
//       font-size: 13px;
//       font-weight: 500;
//       color: rgba(255, 255, 255, 1);
//       text-align: center;
//     }
//   }
// }
</style>

