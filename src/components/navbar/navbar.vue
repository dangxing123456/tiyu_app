<template>
  <div style="position: relative">
    <div class="navbar" id="navbar" :class=" stl ? stl : ''">
      <div class="top" :style="'padding-top:'+ top +'px'"></div>
      <van-nav-bar @click-left="onClickLeft()" :z-index="999" :border="false">
        <template slot="title">
          <div class="title" v-if="!search">
            <span>{{title}}</span>
            <slot name="title"></slot>
          </div>
          <div class="search" v-else>
            <input type="text" v-model="value" placeholder="请输入搜索关键字"/>
          </div>
        </template>
        <template slot="left">
          <van-icon name="arrow-left" class="left" v-if="goback" />
          <div class="avatar" slot="left" v-else>
            <img :src="$store.state.userInfo.user_img || user_img" alt />
          </div>
        </template>
        <slot slot="right" name="right"></slot>
      </van-nav-bar>
    </div>
    <div class="navbar-empty" :style="'padding-top:'+ top +'px'" v-if="!stl"></div>
  </div>
</template>
<script>
import user_img from "@/assets/images/default.png";
export default {
  name: "navbar",
  data() {
    return {
      user_img: user_img,
      top: "",
      value: ""
    };
  },
  props: {
    title: {
      type: String,
      default() {
        return this.$route.meta.title;
      },
      required: false
    },
    goback: {
      type: Boolean,
      default() {
        return true;
      },
      required: false
    },
    search: {
      type: Boolean,
      default() {
        return false;
      },
      required: false
    },
    stl: {
      type: String,
      default() {
        return;
      },
      required: false
    }
  },
  components: {},
  mounted() {
    var systemType = this.$store.state.systemType;
    if (systemType == "android") {
      this.top = 25;
    }
    if (systemType == "ios") {
      this.top = 40;
    }
  },
  methods: {
    onClickLeft() {
      if (this.goback) {
        this.$router.go(-1);
      }
    },
    searchFn() {
      console.log("搜索");
    }
  }
};
</script>
<style lang="less">
.nobg .van-hairline--bottom::after {
  border-bottom-width: 0;
}
</style>

<style lang="less" scoped>
.navbar {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;
  background: #fff;
  .title {
    span {
      font-weight: bold;
    }
  }
  .left,
  .right {
    font-size: 20px;
  }
  .avatar {
    height: 46px;
    display: flex;
    align-items: center;
    img {
      display: block;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .search {
    height: 46px;
    display: flex;
    align-items: center;
    input {
      display: block;
      width: 100%;
      height: 32px;
      background: #fff;
      border-radius: 50px;
      border: 0;
      padding: 15px;
      box-sizing: border-box;
      font-size: 14px;
    }
  }
}
.navbar-empty {
  height: 46px;
}

/* 风格 */
.nobg {
  background: none;
  .title {
    color: #fff;
  }
  .left {
    color: #fff !important;
  }
}
</style>


