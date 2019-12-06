<template>
  <div class="container" id="shop">
    <navBar :goback="true" title>
      <div slot="title">
        <span>心田喜悦</span>
        <span>VS</span>
        <span>东京FC</span>
      </div>
      <div class="right" slot="right">
        <span class="fenxi" @click="detail">分析</span>
      </div>
    </navBar>
    <div class="main">
      <h3>主队让分-1.5</h3>
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
      <h3>预设总分163.5</h3>
      <div class="second">
        <div class="left">
          <p class="p1">大小分</p>
        </div>
        <div class="right">
          <ul>
            <li>胜 4.00</li>
            <li>胜 4.00</li>
          </ul>
        </div>
      </div>
      <h3>胜分差</h3>
      <div class="third">
        <div class="left">
          <p class="p1">客胜</p>
          <p class="p2">主胜</p>
        </div>
        <div class="right">
          <ul>
            <li v-for="(item,index) in 12" :key="index">
              <p>客胜(1-5)</p>
              <p>4.05</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "allplayBasket",
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
    detail() {
      this.$router.push({
        path: "/fenxinBasket"
      });
    },
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
.fenxi {
  color: #ffffff;
  font-size: 14px;
}
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
          width: 49%;
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
      height: 50px;
      background-color: rgb(118, 178, 235);
      p {
        height: 50px;
        width: 0.5rem;
        text-align: center;
        font-size: 13px;
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
          height: 50px;
          width: 49%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          line-height: 50px;
          color: #4b4949;
        }
      }
    }
  }
  .third {
    .left {
      float: left;
      width: 10%;
      p {
        height: 1.5rem;
        text-align: center;
        border: 0.02rem solid #ffffff;
        writing-mode: vertical-lr;
        width: 34px;
        /* text-align: center; */
        margin-left: 3p;
        line-height: 34px;
        color: #ffffff;
      }
      .p1 {
        background-color: #ec9893;
      }
      .p2 {
        background-color: #76b2eb;
      }
    }
    .right {
      width: 90%;
      float: left;
      ul {
        li {
          display: inline-block;
          height: 36px;
          width: 32%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          font-size: 13px;
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