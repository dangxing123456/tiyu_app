<template>
  <div class="container">
    <div class="main">
    </div>
  </div>
</template>

<script>
import user_img from "@/assets/images/default.png";
export default {
  name: "mine",
  components:{
    grade
  },
  data() {
    return {
      menu: [
        { name: "我的钱包", path: "/wallet", icon: "mine1" },
        { name: "抢单记录", path: "/orderRecord", icon: "mine2" },
        { name: "邀请好友", path: "/invitation", icon: "mine3" },
        { name: "二维码管理", path: "/qrcode", icon: "mine4" },
        { name: "在线客服", path: "/kefu", icon: "mine5" },
        { name: "设置", path: "/setting", icon: "mine6" }
      ],
      user_img: user_img
    };
  },
  created() {    
  },
  mounted() {},
  methods: {
    uploadAvatar(file) {
      let formData = new FormData();
      formData.append("file", file.file);
      formData.append("token", this.$store.state.token);
      console.log(file);
      this.$SERVER
        .uploadfile(formData)
        .then(res => {
          this.$SERVER
            .faceup({
              user_img: res.data.face
            })
            .then(res2 => {
              this.$toast.success(res.msg);
              this.$store.state.userInfo.user_img = res.data.face;
            });
        })
        .catch(err => {
          this.$toast.fail(err.msg);
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>

