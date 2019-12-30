<template>
  <div class="container" id="shop">
    <navBar title>
      <van-search
        v-model="keyword"
        placeholder="请输入搜索关键词"
        shape="round"
        left-icon
        class="search"
        slot="title"
      ></van-search>
      <div class="right" slot="right">
        <span @click="search()">搜索</span>
      </div>
    </navBar>
    <div class="main">
      <div>
        <p class="head">热门搜索</p>
        <div class="con">
          <div v-for="(item,index) in list" :key="index" @click="detail(item.userId)">
            <img :src="item.icon" alt />
            <span>{{item.nickname}}</span>
          </div>
        </div>
      </div>
      <div class="send">
        <p class="head">搜索记录</p>
        <div class="con">
          <div v-for="(item,index) in list" :key="index">
            <img :src="item.icon" alt />
            <span>{{item.nickname}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../../components/navbar/navbar";
export default {
  name: "search",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      keyword: "",
      list: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    detail(id) {
      this.$router.push("/personHome/" + id);
    },
    search() {
      this.$SERVER
        .getSeachUser({ pagenum: 1, pagesize: 10, nickname: this.keyword })
        .then(res => {
          console.log(res.data);

          // this.$router.push('/personHome/'+)
        });
    },
    getSearch() {
      this.$SERVER.getSeachUser({ pagenum: 1, pagesize: 10 }).then(res => {
        this.list = res.data.list;
      });
    }
  },
  created() {
    this.getSearch();
  }
};
</script>
<style lang="less" scoped>
/deep/ .title {
  width: 280px !important;
  margin: auto !important;
}
/deep/ .van-nav-bar__title {
  max-width: 76%;
}
.search {
  background-color: #f24a44 !important;
}
.right {
  font-size: 14px !important;
  color: #fff;
}
.send {
  clear: both;
}
.head {
  font-size: 14px;
  color: #777;
  padding: 12px 0 0 10px;
}
.con {
  width: 100%;
  padding: 10px;
  div {
    float: left;
    background-color: #eee;
    padding: 4px;
    display: flex;
    color: #494949;
    border-radius: 5px;
    margin: 0 5px;
    margin-top: 10px;
    padding: 8px;
    span {
      font-size: 14px;
    }
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
}
</style>