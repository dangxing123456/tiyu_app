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
      <h3>胜平负/让球</h3>
      <div class="first">
        <div class="left">
          <p class="p1">{{list.footBallBet.odds_list.hhad.single}}</p>
          <p class="p2">{{list.footBallBet.odds_list.hhad.goalline}}</p>
        </div>
        <div class="right">
          <ul>
            <li>{{list.footBallBet.odds_list.hhad.odds[0].a}}</li>
            <li>{{list.footBallBet.odds_list.hhad.odds[0].d}}</li>
            <li>{{list.footBallBet.odds_list.hhad.odds[0].h}}</li>
            <li>{{list.footBallBet.odds_list.hhad.odds[1].a}}</li>
            <li>{{list.footBallBet.odds_list.hhad.odds[1].d}}</li>
            <li>{{list.footBallBet.odds_list.hhad.odds[1].h}}</li>
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
            <li>
              <p>0球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[0].s0}}</p>
            </li>
            <li>
              <p>1球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[0].s1}}</p>
            </li>
            <li>
              <p>2球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[0].s2}}</p>
            </li>
            <li>
              <p>3球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[0].s3}}</p>
            </li>
            <li>
              <p>4球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[0].s4}}</p>
            </li>
            <li>
              <p>5球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[0].s5}}</p>
            </li>
            <li>
              <p>6球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[0].s6}}</p>
            </li>
            <li>
              <p>7球</p>
              <p>{{list.footBallBet.odds_list.ttg.odds[0].s7}}</p>
            </li>
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
            <li>{{list.footBallBet.odds_list.hafu.odds[0].aa}}</li>
            <li>{{list.footBallBet.odds_list.hafu.odds[0].ad}}</li>
            <li>{{list.footBallBet.odds_list.hafu.odds[0].ah}}</li>
            <li>{{list.footBallBet.odds_list.hafu.odds[0].da}}</li>
            <li>{{list.footBallBet.odds_list.hafu.odds[0].dd}}</li>
            <li>{{list.footBallBet.odds_list.hafu.odds[0].dh}}</li>
            <li>{{list.footBallBet.odds_list.hafu.odds[0].ha}}</li>
            <li>{{list.footBallBet.odds_list.hafu.odds[0].hd}}</li>
            <li>{{list.footBallBet.odds_list.hafu.odds[0].hh}}</li>
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
      list: this.$route.query.box
    };
  },
  computed: {},
  watch: {},
  methods: {
    detail() {
      this.$router.push({
        path: "/matchFenxi"
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
    font-size: 12px;
    .left {
      float: left;
      width: 10%;
      p {
        height: 35px;
        line-height: 35px;
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
          height: 35px;
          width: 32%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          line-height: 35px;
          color: #4b4949;
        }
      }
    }
  }
  .second {
    font-size: 12px;
    .left {
      float: left;
      width: 10%;
      height: 80px;
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
          height: 35px;
          width: 24%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          color: #4b4949;
        }
      }
    }
  }
  .third {
    font-size: 12px;
    .left {
      float: left;
      width: 10%;
      height: 122px;
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
          height: 35px;
          width: 32%;
          border: 1px solid #eeeeee;
          float: left;
          text-align: center;
          line-height: 35px;
          color: #4b4949;
        }
      }
    }
  }
  .fourth {
    font-size: 12px;
    .sheng,
    .fu {
      .left {
        float: left;
        width: 10%;
        height: 122px;
        line-height: 122px;
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
            height: 35px;
            width: 19%;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 35px;
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
            height: 35px;
            width: 19%;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 35px;
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