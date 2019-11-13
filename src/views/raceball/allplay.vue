<template>
  <div class="container" id="shop">
    <navBar :goback="true" title>
      <div slot="title">
        <span>心田喜悦</span>
        <span>VS</span>
        <span>东京FC</span>
      </div>
      <div class="right" slot="right">
        <span class="fenxi">分析</span>
      </div>
    </navBar>
    <div class="main">
      <h3>胜平负/让球</h3>
      <div class="first">
        <div class="left">
          <p class="p1">0</p>
          <p class="p2">+1</p>
        </div>
        <div class="right">
          <ul>
            <li
              :class="box.includes(item) ? 'bgColor':'' "
              v-for="(item,index) in list"
              :key="index"
              @click="change(item)"
            >{{item.score}}</li>
          </ul>
        </div>
      </div>
      <h3>总进球</h3>
      <div class="second">
        <div class="left">
          <p class="p1">总进球</p>
        </div>
        <div class="right">
          <ul>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
          </ul>
        </div>
      </div>
      <h3>半全场</h3>
      <div class="third">
        <div class="left">
          <p class="p1">半全场</p>
        </div>
        <div class="right">
          <ul>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
          </ul>
        </div>
      </div>
      <h3>比分</h3>
      <div class="fourth">
        <div class="sheng">
          <div class="left">
            <p class="p1">胜</p>
          </div>
          <div class="right">
            <ul>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
            </ul>
          </div>
        </div>
        <div class="ping">
          <div class="left">
            <p class="p1">平</p>
          </div>
          <div class="right">
            <ul>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
            </ul>
          </div>
        </div>
        <div class="fu">
          <div class="left bgc">
            <p class="p1">负</p>
          </div>
          <div class="right">
            <ul>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
              <li>胜 4.00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "allplay",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      list: this.$route.query.list,
      box: this.$route.query.box
    };
  },
  computed: {},
  watch: {},
  methods: {
    change: function(e) {
      if (this.box.includes(e)) {
        this.box.splice(this.box.indexOf(e), 1);
      } else {
        this.box.push(e);
      } // 把点击的元素item放入box数组中                    this.box.push(e);
      console.log(this.box.length);
    }
  },
  mounted() {
    console.log(this.list);
    console.log(this.box);
  }
};
</script>
<style lang="less" scoped>
.main {
  padding: 0 15px;
  h3 {
    font-size: 16px;
    padding: 15px 0;
    display: inline-block;
  }
  .first {
    .left {
      float: left;
      width: 10%;
      p {
        
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #ffffff;
      }
      .p1 {
        background-color: rgb(207, 207, 207);
      }
      .p2 {
        background-color: rgb(230, 55, 55);
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 40px;
          width: 32%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          line-height: 40px;
          color: #4b4949;
        }
      }
    }
  }
  .second {
    .left {
      float: left;
      width: 10%;
      height: 82px;
      background-color: rgb(118, 178, 235);
      p {
        height: 82px;
        width: 25px;
        text-align: center;
        font-size: 14px;
        margin: 0 auto;
        color: white;
        padding-top: 15px;
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 40px;
          width: 24%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          line-height: 40px;
          color: #4b4949;
        }
      }
    }
  }
  .third {
    .left {
      float: left;
      width: 10%;
      height: 125px;
      background-color: rgb(240, 170, 120);
      p {
        height: 82px;
        width: 25px;
        text-align: center;
        font-size: 14px;
        margin: 0 auto;
        color: white;
        padding-top: 38px;
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 40px;
          width: 32%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          line-height: 40px;
          color: #4b4949;
        }
      }
    }
  }
  .fourth {
    .sheng,
    .fu {
      .left {
        float: left;
        width: 10%;
        height: 125px;
        line-height: 125px;
        background-color: rgb(236, 152, 147);

        p {
          text-align: center;
          font-size: 14px;
          margin: 0 auto;
          color: white;
        }
      }
      .bgc {
        background-color: rgb(130, 235, 72);
      }
      .right {
        width: 90%;
        float: left;
        ul {
          li {
            display: inline-block;
            height: 40px;
            width: 19%;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 40px;
            color: #4b4949;
          }
        }
      }
    }
    .ping {
      .left {
        float: left;
        width: 10%;
        height: 40px;
        line-height: 40px;
        background-color: rgb(115, 175, 245);
        p {
          text-align: center;
          font-size: 14px;
          margin: 0 auto;
          color: white;
        }
      }
      .right {
        width: 90%;
        float: left;
        ul {
          li {
            display: inline-block;
            height: 40px;
            width: 19%;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 40px;
            color: #4b4949;
          }
        }
      }
    }
  }
}
.bgColor {
  background-color: red;
  color: white !important;
  text-align: center !important;
}
</style>