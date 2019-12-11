<template>
  <div class="container" id="shop">
    <navBar :goback="true" title>
      <div slot="title">
        <span>{{list.acn}}</span>
        <span>VS</span>
        <span>{{list.hcn}}</span>
      </div>
      <div class="right" slot="right">
        <span class="fenxi" @click="detail">分析</span>
      </div>
    </navBar>
    <div class="main">
      <h3>主队让分{{list.basketBallBet.odds_list.hdc[list.basketBallBet.odds_list.hdc.length-1].fixedodds}}</h3>
      <div class="first">
        <div class="left">
          <p class="p1">0</p>
          <p class="p2">让</p>
        </div>
        <div class="right">
          <ul>
            <li
              :ref="'id'+dataIndex+'_0'"
              @click="push('0','0',list.basketBallBet.odds_list.mnl[list.basketBallBet.odds_list.mnl.length-1].a,index)"
            >
              <span>胜</span>
              <span>{{list.basketBallBet.odds_list.mnl[list.basketBallBet.odds_list.mnl.length-1].a}}</span>
            </li>
            <li
              :ref="'id'+dataIndex+'_1'"
              @click="push('0','1',list.basketBallBet.odds_list.mnl[list.basketBallBet.odds_list.mnl.length-1].h,index)"
            >
              <span>平</span>
              <span>{{list.basketBallBet.odds_list.mnl[list.basketBallBet.odds_list.mnl.length-1].h}}</span>
            </li>
            <li
              :ref="'id'+dataIndex+'_2'"
              @click="push('1','2',list.basketBallBet.odds_list.hdc[list.basketBallBet.odds_list.hdc.length-1].a,index)"
            >
              <span>负</span>
              <span>{{list.basketBallBet.odds_list.hdc[list.basketBallBet.odds_list.hdc.length-1].a}}</span>
            </li>
            <li
              :ref="'id'+dataIndex+'_3'"
              @click="push('1','3',list.basketBallBet.odds_list.hdc[list.basketBallBet.odds_list.hdc.length-1].h,index)"
            >
              <span>胜</span>
              <span>{{list.basketBallBet.odds_list.hdc[list.basketBallBet.odds_list.hdc.length-1].h}}</span>
            </li>
          </ul>
        </div>
      </div>
      <h3>预设总分{{list.basketBallBet.odds_list.hilo[list.basketBallBet.odds_list.hilo.length-1].fixedodds}}</h3>
      <div class="second">
        <div class="left">
          <p class="p1">大小分</p>
        </div>
        <div class="right">
          <ul>
            <li
              :ref="'id'+dataIndex+'_4'"
              @click="push('2','4',list.basketBallBet.odds_list.hilo[list.basketBallBet.odds_list.hilo.length-1].h,index)"
            >
              <span>大</span>
              <span>{{list.basketBallBet.odds_list.hilo[list.basketBallBet.odds_list.hilo.length-1].h}}</span>
            </li>
            <li
              :ref="'id'+dataIndex+'_5'"
              @click="push('2','5',list.basketBallBet.odds_list.hilo[list.basketBallBet.odds_list.hilo.length-1].l,index)"
            >
              <span>小</span>
              <span>{{list.basketBallBet.odds_list.hilo[list.basketBallBet.odds_list.hilo.length-1].l}}</span>
            </li>
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
            <li
              :ref="'id'+dataIndex+'_6'"
              @click="push('3','6',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l1,index)"
            >
              <p>客胜(1-5)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l1}}</p>
            </li>

            <li
              :ref="'id'+dataIndex+'_7'"
              @click="push('3','7',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l2,index)"
            >
              <p>客胜(6-10)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l2}}</p>
            </li>

            <li
              :ref="'id'+dataIndex+'_8'"
              @click="push('3','8',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l3,index)"
            >
              <p>客胜(11-15)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l3}}</p>
            </li>

            <li
              :ref="'id'+dataIndex+'_9'"
              @click="push('3','9',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l4,index)"
            >
              <p>客胜(16-20)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l4}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_10'"
              @click="push('3','10',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l5,index)"
            >
              <p>客胜(21-25)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l5}}</p>
            </li>

            <li
              :ref="'id'+dataIndex+'_11'"
              @click="push('3','11',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l6,index)"
            >
              <p>客胜(26+)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].l6}}</p>
            </li>
            <li
              :ref="'id'+dataIndex+'_12'"
              @click="push('3','12',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w1,index)"
            >
              <p>客胜(1-5)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w1}}</p>
            </li>

            <li
              :ref="'id'+dataIndex+'_13'"
              @click="push('3','13',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w2,index)"
            >
              <p>客胜(6-10)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w2}}</p>
            </li>

            <li
              :ref="'id'+dataIndex+'_14'"
              @click="push('3','14',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w3,index)"
            >
              <p>客胜(11-15)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w3}}</p>
            </li>

            <li
              :ref="'id'+dataIndex+'_15'"
              @click="push('3','15',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w4,index)"
            >
              <p>客胜(16-20)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w4}}</p>
            </li>

            <li
              :ref="'id'+dataIndex+'_16'"
              @click="push('3','16',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w5,index)"
            >
              <p>客胜(21-25)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w5}}</p>
            </li>

            <li
              :ref="'id'+dataIndex+'_17'"
              @click="push('3','17',list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w6,index)"
            >
              <p>客胜(26+)</p>
              <p>{{list.basketBallBet.odds_list.wnm[list.basketBallBet.odds_list.wnm.length-1].w6}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="btn">
      <van-button type="default" size="large">取消</van-button>
      <van-button type="danger" size="large" @click="reaply">确定</van-button>
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
      list: this.$store.state.bListData,
      dataIndex: this.$store.state.bListData.index,
      arr: this.$store.state.bArrData,
      betArr: [],
      index: 0,
      bet: this.$store.state.bBetData
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
    push(i1, i2, val) {
      if (
        this.$refs["id" + this.$store.state.bListData.index + "_" + i2]
          .className == "bgColor"
      ) {
        // 删除
        if (this.$store.state.bActiveData[this.$store.state.bListData.index]) {
          delete this.$store.state.bActiveData[
            this.$store.state.bListData.index
          ][i1][i2];
        } else {
          delete this.$store.state.bArrData[i1][i2];
        }

        this.$refs[
          "id" + this.$store.state.bListData.index + "_" + i2
        ].className = "";
      } else {
        // 添加
        this.count += 1;
        this.$store.state.bArrData[i1][i2] = i2;
        this.$refs[
          "id" + this.$store.state.bListData.index + "_" + i2
        ].className = "bgColor";
      }
    },
    reaply() {
      if (!this.$store.state.bActiveData[this.list.index]) {
        this.$store.state.bActiveData[this.list.index] = [];
      }
      for (var i = 0; i < this.$store.state.bArrData.length; i++) {
        for (var j = 0; j < this.$store.state.bArrData[i].length; j++) {
          if (!this.$store.state.bActiveData[this.list.index][i]) {
            this.$store.state.bActiveData[this.list.index][i] = [];
          }
          if (this.$store.state.bArrData[this.list.index]) {
            this.$store.state.bActiveData[this.list.index][i][
              j
            ] = this.$store.state.bArrData[i][j];
          }
        }
      }

      console.log(this.$store.state.bActiveData);
      // console.log(this.$store.state.activeData);
      // this.$store.state.betData.push([...this.betArr]);
      this.$store.state.replayData.push(this.list);
      // for (var i = 0; i < this.$store.state.arrData.length; i++) {
      //   if (this.$store.state.arrData[i].length) {
      //     this.$store.state.replayData.push(this.list);
      //   }
      //   // } else {
      //   //   console.log(this.$store.state.replayData);
      //   //   this.$store.state.replayData = [];
      //   // }
      // }
      // 选中的比赛去重
      // for (var i = 0; i < this.$store.state.replayData.length; i++) {
      //   for (var j = i + 1; j < this.$store.state.replayData.length; ) {
      //     if (
      //       this.$store.state.replayData[i].id ==
      //       this.$store.state.replayData[j].id
      //     ) {
      //       //通过id属性进行匹配；
      //       this.$store.state.replayData.splice(j, 1); //去除重复的对象；
      //     } else {
      //       j++;
      //     }
      //   }
      // }
      //点击确定之后清空vuex arrData状态
      this.$store.state.bArrData = [[], [], [], [], []];
      this.$router.go(-1);
    }
  },
  mounted() {
    if (this.$store.state.bActiveData[this.list.index] != undefined) {
      for (
        var i = 0;
        i < this.$store.state.bActiveData[this.list.index].length;
        i++
      ) {
        if (this.$store.state.bActiveData[this.list.index][i]) {
          for (
            var j = 0;
            j < this.$store.state.bActiveData[this.list.index][i].length;
            j++
          ) {
            if (
              this.$store.state.bActiveData[this.list.index][i][j] != undefined
            ) {
              this.$refs[
                "id" +
                  this.$store.state.bListData.index +
                  "_" +
                  this.$store.state.bActiveData[this.list.index][i][j]
              ].className = "bgColor";
            }
          }
        }
      }
    }
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
.btn {
  display: flex;
  width: 100%;
}
</style>