<template>
  <div class="container">
    <navBar :goback="false" title="我的"></navBar>
    <div class="main">
      <div class="top">
        <div class="avatar">
          <van-uploader
            :after-read="uploadAvatar"
            :accept="'image/*'"
            :max-count="1"
            class="avatar"
          >
            <img :src="$store.state.userInfo.avatar || user_img" />
          </van-uploader>
        </div>
        <div class="info">
          <p class="id">
            <span>ID</span>
            {{this.$store.state.userInfo.userid}}
          </p>
          <p>
            <van-icon name="contact" />
            {{this.$store.state.userInfo.nickname}}
          </p>
          <p>
            <van-icon name="orders-o" />
            {{this.$store.state.userInfo.mobile}}
          </p>
        </div>
        <van-icon name="setting-o" class="setting" @click="$router.push('/setting')" />
      </div>
      <div class="wallet-box">
        <div class="wallet">
          <div class="money">
            <van-icon name="card" class="ico" />
            <span>店内账本</span>
            <h4>￥0.00</h4>
          </div>
          <div class="btn-group">
            <van-button plain type="danger" size="small" block>清账</van-button>&nbsp;&nbsp;&nbsp;&nbsp;
            <van-button type="danger" size="small" block>储值</van-button>
          </div>
        </div>
      </div>
      <van-panel title="我的彩店" class="panel">
        <van-grid :column-num="3">
          <van-grid-item
            v-for="(item,i) in menu1"
            :key="i"
            :icon="item.icon"
            :text="item.name"
            :to="item.path"
            clickable
          >
            <van-icon :name="item.icon" :color="item.color" slot="icon" size="25px" class="ico" />
          </van-grid-item>
        </van-grid>
      </van-panel>
      <van-panel title="我的服务" class="panel">
        <van-grid :column-num="3">
          <van-grid-item
            v-for="(item,i) in menu2"
            :key="i"
            :icon="item.icon"
            :text="item.name"
            :to="item.path"
            clickable
          >
            <van-icon :name="item.icon" :color="item.color" slot="icon" size="25px" class="ico" />
          </van-grid-item>
        </van-grid>
      </van-panel>
    </div>
  </div>
</template>

<script>
import user_img from "@/assets/images/default.png";
import navBar from "../../../components/navbar/navbar";
export default {
  name: "mine",
  components: {
    navBar
  },
  data() {
    return {
      menu1: [
        {
          name: "店内账本",
          path: "/wallet",
          icon: "balance-list",
          color: "#e73736"
        },
        {
          name: "我的订单",
          path: "/orderRecord",
          icon: "todo-list",
          color: "#FFC107"
        },
        {
          name: "中奖记录",
          path: "/invitation",
          icon: "point-gift",
          color: "#2196F3"
        },
        {
          name: "实名认证",
          path: "/qrcode",
          icon: "manager",
          color: "#4CAF50"
        },
        { name: "彩店信息", path: "/kefu", icon: "shop", color: "#E91E63" }
      ],
      menu2: [
        { name: "订单推荐", path: "/wallet", icon: "star", color: "#4CAF50" },
        {
          name: "发单收益",
          path: "/orderRecord",
          icon: "gold-coin",
          color: "#E91E63"
        },
        {
          name: "跟单还款",
          path: "/invitation",
          icon: "card",
          color: "#e73736"
        },
        { name: "金币", path: "/qrcode", icon: "gold-coin", color: "#2196F3" }
      ],
      user_img: user_img
    };
  },
  created() {},
  mounted() {},
  methods: {
    uploadAvatar(file) {
      let formData = new FormData();
      formData.append("file", file.file);
      formData.append("userId", this.$store.state.userInfo.userid);
      this.$SERVER
        .uploadUserImage(formData)
        .then(res => {
          this.$store.state.userInfo.avatar = res.url;
          console.log(res);
        })
        .catch(err => {
          this.$toast.fail(err.msg);
        });
    }
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
  .avatar {
    margin-right: 15px;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
  .info {
    flex-grow: 1;
    width: 50%;
    .id {
      overflow: hidden; //超出的文本隐藏
      text-overflow: ellipsis; //溢出用省略号显示
      white-space: nowrap; //溢出不换行
    }
    p {
      color: #fff;
      font-size: 14px;
      .icon {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
  .setting {
    color: #fff;
    font-size: 25px;
  }
}
.wallet-box {
  padding: 15px;
  margin-top: -30px;
  .wallet {
    border-radius: 5px;
    background: #fff;
    padding: 20px 15px;
    .money {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .ico {
        color: #e73736;
        margin-right: 10px;
      }
      span {
        flex-grow: 1;
        font-size: 14px;
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
.panel {
  margin-top: 15px;
  .ico {
    margin-bottom: 10px;
  }
}
</style>

