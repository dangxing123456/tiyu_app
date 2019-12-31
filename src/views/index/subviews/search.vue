<template>
  <div class="container" id="shop">
    <navBar title>
      <van-search
        v-model="keyword"
        placeholder="请输入作者"
        shape="round"
        left-icon
        class="search"
        slot="title"
      ></van-search>
      <div class="right" slot="right">
        <span @click="search() ">搜索</span>
      </div>
    </navBar>
    <div class="main">
      <div>
        <p class="head">搜索结果</p>
        <div class="con">
          <div v-for="(item,index) in listResult" :key="index" @click="detail(item.userId)">
            <img :src="item.icon" alt />
            <span>{{item.nickname}}</span>
          </div>
        </div>
      </div>
      <div class="send">
        <p class="head">热门搜索</p>
        <div class="con">
          <div v-for="(item,index) in list" :key="index" @click="detail(item.userId)">
            <img :src="item.icon" alt />
            <span>{{item.nickname}}</span>
          </div>
        </div>
      </div>
      <div class="send">
        <p class="head">
          <span>搜索记录</span>
          <van-icon name="delete" size="17px" color="#494949" @click="del()" />
        </p>
        <div class="con">
          <div v-for="(item,index) in HistoryList" :key="index" @click="detail(item.userId)">
            <span>{{item.nickname}}</span>
            <!-- <span>{{item}}</span>  -->
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
      list: [],
      listResult: [],
      HistoryList: [],
      arr: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    del() {
      // this.HistoryList = [];
      localStorage.removeItem("HistoryList");
      this.HistoryList = [];
      console.log(this.HistoryList);
    },
    SearchVal(val) {
      // val = val.trim(); // 清除空格
      // if (this.HistoryList.length > 0) {
      //   // 有数据的话 判断
      //   if (this.HistoryList.indexOf(val) !== -1) {
      //     // 有相同的，先删除 再添加
      //     this.HistoryList.splice(this.HistoryList.indexOf(val), 1);
      //     this.HistoryList.unshift(...val);
      //   } else {
      //     // 没有相同的 添加
      //     this.HistoryList.unshift(...val);
      //   }
      // } else {
      //   // 没有数据 添加
      //   this.HistoryList.unshift(...val);
      // }
      // if (this.HistoryList.length > 6) {
      //   // 保留六个值
      //   this.HistoryList.pop();
      // }
      this.HistoryList.unshift(...val);
      localStorage.setItem("HistoryList", JSON.stringify(this.HistoryList));
      this.HistoryList = JSON.parse(localStorage.getItem("HistoryList"));
    },
    detail(id) {
      this.$router.push("/personHome/" + id);
    },
    search() {
      this.$SERVER.getUserInfoByName({ nickname: this.keyword }).then(res => {
        if (res.code == "200") {
          if (res.data.length == 0) {
            this.$toast({
              message: "您搜索的作者不存在"
            });
          } else {
            this.listResult = res.data;
            this.SearchVal(this.listResult);
            this.keyword = "";
          }
        }

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

    if (localStorage.getItem("HistoryList")) {
      if (JSON.parse(localStorage.getItem("HistoryList")).length > 0) {
        this.HistoryList = JSON.parse(localStorage.getItem("HistoryList"));
      }
    }

    // this.HistoryList = JSON.parse(localStorage.getItem("HistoryList"));
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
  padding: 12px 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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