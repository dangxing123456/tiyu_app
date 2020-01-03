<template>
  <div class="container" id="shop">
    <navBar :goback="true" title="竞彩足球">
      <!-- <div class="right" slot="right">
        <span class="shai">筛</span>
        <span>
          <img src="../../assets/images/shuaxin.png" alt />
        </span>
      </div>-->
      <!-- <van-dropdown-menu class="menu" slot="title">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>-->
    </navBar>

    <div class="main">
      <div class="wrap" v-for="(item1,index) in $store.state.result" :key="index">
        <div class="dan" v-if="item1.single==1">
          <span>单</span>
        </div>
        <div class="title">
          <span>{{item1.date}}</span>
          <span>{{item1.num}}</span>
        </div>
        <div class="test">
          <div class="left">
            <p class="first">{{item1.num}}</p>
            <p>{{item1.lcnAbbr}}</p>
            <p>
              {{item1.time}}
              <br />截止
              <span @click="go(item1)">析</span>
            </p>
          </div>
          <div class="right">
            <div class="div1">
              <span class="rang">让球</span>
              <span>{{item1.hcn}}</span>
              <span style="color:#777">VS</span>
              <span>{{item1.acnAbbr}}</span>
            </div>
            <div class="tab" v-if="item1.footBallBet">
              <div class="center" v-if="item1.footBallBet">
                <ul :class="item1.single=='1'&& $store.state.bool==true?'bor':''">
                  <span class="p1-first">0</span>
                  <li
                    v-for="(item,i) in item1.footBallBet"
                    :key="i"
                    v-if="i<3"
                    :class="addColor(index,i)"
                    @click="push(index,i,item)"
                  >
                    <span v-if="i==0 || i==3">胜</span>
                    <span v-else-if="i==1 || i==4">平</span>
                    <span v-else-if="i==2 || i==5">负</span>
                    <span>{{item}}</span>
                  </li>
                </ul>
                <ul :class="item1.single1=='1'&& $store.state.bool==true?'bor':''">
                  <span :class="item1.goalline=='+1'?'p2-red':'p2-blue'">{{item1.goalline}}</span>
                  <li
                    v-for="(item,i) in item1.footBallBet"
                    :key="i"
                    v-if="i>=3 && i<6"
                    :class="addColor(index,i)"
                    @click="push(index,i,item)"
                  >
                    <span v-if="i==0 || i==3">胜</span>
                    <span v-else-if="i==1 || i==4">平</span>
                    <span v-else-if="i==2 || i==5">负</span>
                    <span>{{item}}</span>
                  </li>
                </ul>
              </div>
              <div
                class="right1"
                :class="(item1.single=='1' ||item1.single1=='1' ||item1.single2=='1' ||item1.single3=='1' ||item1.single4=='1') && $store.state.bool==true?'bor':''"
              >
                <span
                  :class="bgc(item1,index)"
                  @click="$router.push('/allplay/'+index)"
                >{{coun(index)}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="bot-btn">
        <div class="check">
          <van-checkbox
            v-model="checked"
            shape="square"
            checked-color="#FFA500"
            @change="chek"
          >显示固定单关(橙色框内)</van-checkbox>
        </div>
        <!-- <div class="text">
          <p v-if="$store.state.sumcount==0">至少选择2场比赛</p>
          <p v-if="$store.state.sumcount>=1">已选择{{$store.state.sumcount}}场比赛</p>
          <p class="pei">[页面赔率仅供参考,请以实体票为准]</p>
        </div>-->
        <div class="btn">
          <div class="delete" @click="del">
            <p>
              <van-icon name="delete" size="19px" />
            </p>
            <p>清空</p>
          </div>
          <div>
            <p v-if="$store.state.sumcount==0">至少选择2场比赛</p>
            <p v-if="$store.state.sumcount>=1">已选择{{$store.state.sumcount}}场比赛</p>
          </div>
          <div>
            <!-- <van-button type="danger" size="large" @click="confirm">确定</van-button> -->
            <van-button round type="danger" @click="confirm" size="small">确定</van-button>
          </div>

          <!-- <van-button type="default" size="large">清空</van-button>
          <van-button type="danger" size="large" >确定</van-button>-->
        </div>
      </div>
      <!-- 下拉菜单 -->
      <!-- <van-action-sheet v-model="show" :actions="actions">
        <div class="content">
          <div class="head">
            <h3>赛事筛选</h3>
            <span>清空</span>
          </div>
          <div class="wrapper">
            <ul>
              <li v-for="(item,index) in 8" :key="index">西甲(8)</li>
            </ul>
          </div>
          <div class="senf">
            <h3>赔率筛选</h3>
          </div>
          <div class="bottom">
            <div class="radio">
              <van-checkbox v-model="checked">赔率小于:</van-checkbox>
              <input type="text" value="1.5" />
            </div>
            <div class="con">
              <div>
                <p>赔率筛选范围：</p>
              </div>
              <div>
                <p>足球 胜平负/让球胜平负</p>
                <p>篮球 胜负/让分胜负</p>
              </div>
            </div>
          </div>
          <div class="btn">
            <van-button type="default" size="large">取消</van-button>
            <van-button type="danger" size="large">确定</van-button>
          </div>
        </div>
      </van-action-sheet>-->
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "racefootball",
  components: {
    navBar
  },
  props: {},
  data() {
    return {
      a: "",
      count: 0,
      checked: true,
      flag: false
    };
  },
  mounted() {},
  methods: {
    chek() {
      if (this.checked == true) {
        this.$store.state.bool = true;
      } else {
        this.$store.state.bool = false;
      }
    },
    del() {
      for (var i = 0; i < this.$store.state.selectResult.length; i++) {
        for (let j = 0; j < this.$store.state.selectResult[i].length; j++) {
          this.$store.state.selectResult[i][j] = "";
        }
      }
      this.$store.state.sumcount = 0;
      this.getList();
    },
    go(item) {
      this.$router.push({
        name: "matchFenxi",
        params: {
          head: {
            id: item.id,
            zhu: item.hcn,
            ke: item.acn,
            hIcon: item.hIcon,
            aIcon: item.aIcon,
            time: item.date + " " + item.time,
            fsH: item.fsH,
            fsA: item.fsA,
            htsH: item.htsH,
            htsA: item.htsA,
            scoreStatus: item.scoreStatus
          }
        }
      });
    },
    confirm() {
      if (this.$store.state.sumcount >= 2) {
        this.$router.push("/confirmPlan");
      } else {
        this.$toast({
          message: "非单关至少选择两场比赛"
        });
      }
      if (this.$store.state.sumcount == 1) {
        var num = 0;
        var arr = this.$store.state.selectResult;

        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != undefined && arr[i][j] != "") {
              num = i;
            }
          }
        }

        var arrs = arr[num].slice(0, 3);
        for (var i = 0; i < arrs.length; i++) {
          if (!arrs[i]) {
            arrs.splice(i, 1);
            i--;
          }
        }

        var arr1 = arr[num].slice(3, 6);

        for (var i = 0; i < arr1.length; i++) {
          if (!arr1[i]) {
            arr1.splice(i, 1);
            i--;
          }
        }
        var arr2 = arr[num].slice(6, 14);

        for (var i = 0; i < arr2.length; i++) {
          if (!arr2[i]) {
            arr2.splice(i, 1);
            i--;
          }
        }
        var arr3 = arr[num].slice(14, 23);

        for (var i = 0; i < arr3.length; i++) {
          if (!arr3[i]) {
            arr3.splice(i, 1);
            i--;
          }
        }
        var arr4 = arr[num].slice(23, 54);

        for (var i = 0; i < arr4.length; i++) {
          if (!arr4[i]) {
            arr4.splice(i, 1);
            i--;
          }
        }

        if (this.$store.state.result[num].single == 0 && arrs.length > 0) {
          for (let j = 0; j < 3; j++) {
            if (arr[num][j] != undefined && arr[num][j] != "") {
              this.flag = true;

              break;
            }
          }
        }
        if (!this.flag) {
          if (arrs.length > 0 && this.$store.state.result[num].single == 1) {
            this.flag = false;
          }
        }

        if (this.$store.state.result[num].single1 == 0 && arr1.length > 0) {
          for (let j = 3; j < 6; j++) {
            if (arr[num][j] != undefined && arr[num][j] != "") {
              this.flag = true;

              break;
            }
          }
        }
        if (!this.flag) {
          if (arr1.length > 0 && this.$store.state.result[num].single1 == 1) {
            this.flag = false;
          }
        }

        if (this.$store.state.result[num].single2 == 0 && arr2.length > 0) {
          for (let j = 6; j < 14; j++) {
            if (arr[num][j] != undefined && arr[num][j] != "") {
              this.flag = true;
              break;
            }
          }
        }
        if (!this.flag) {
          if (arr2.length > 0 && this.$store.state.result[num].single2 == 1) {
            this.flag = false;
          }
        }

        if (this.$store.state.result[num].single3 == 0 && arr3.length > 0) {
          for (let j = 14; j < 23; j++) {
            if (arr[num][j] != undefined && arr[num][j] != "") {
              this.flag = true;

              break;
            }
          }
        }
        if (!this.flag) {
          if (arr3.length > 0 && this.$store.state.result[num].single3 == 1) {
            this.flag = false;
          }
        }

        if (this.$store.state.result[num].single4 == 0 && arr4.length > 0) {
          for (let j = 23; j < 54; j++) {
            if (arr[num][j] != undefined && arr[num][j] != "") {
              this.flag = true;

              break;
            }
          }
        }
        if (!this.flag) {
          if (arr4.length > 0 && this.$store.state.result[num].single4 == 1) {
            this.flag = false;
          }
        }

        // if (this.$store.state.result[num].single == 1 && arrs.length > 0) {
        //   this.flag = false;
        // }
        // if (this.$store.state.result[num].single1 == 1 && arr1.length > 0) {
        //   this.flag = false;
        // }
        // if (this.$store.state.result[num].single2 == 1 && arr2.length > 0) {
        //   this.flag = false;
        // }
        // if (this.$store.state.result[num].single3 == 1 && arr3.length > 0) {
        //   this.flag = false;
        // }
        // if (this.$store.state.result[num].single4 == 1 && arr4.length > 0) {
        //   this.flag = false;
        // }
      }

      this.$store.state.flag = this.flag;

      if (this.$store.state.sumcount == 1) {
        if (!this.$store.state.flag) {
          this.$router.push("/confirmPlan");
          this.$toast({
            message: "进入单关模式"
          });
        }
      }
      this.flag = false;
    },
    show(index) {
      var r = false;
      this.$store.state.selectResult[index].forEach((e, i1) => {
        if (e != undefined && e != "") {
          r = true;
        }
      });
      return this.$store.state.selectResult[index];
    },
    bgc(item, index) {
      if (this.coun(index) == "更多") {
        return "";
      } else {
        return "bgColor1";
      }
    },
    coun(index) {
      var arr = JSON.parse(
        JSON.stringify(this.$store.state.selectResult[index])
      );
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "") {
          arr.splice(i, 1);
          i--;
        }
      }

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == null) {
          arr.splice(i, 1);
          i--;
        }
      }
      if (arr.length == 0) {
        return "更多";
      }
      return "已选" + arr.length + "项";
    },
    addColor(i, i2) {
      // if (i2 < 6) {
      if (
        this.$store.state.selectResult[i][i2] == undefined ||
        this.$store.state.selectResult[i][i2] == ""
      ) {
        return "";
      } else {
        return "bgColor";
      }
    },
    push(index, ii, val) {
      if (
        this.$store.state.selectResult[index][ii] == undefined ||
        this.$store.state.selectResult[index][ii] == ""
      ) {
        this.$set(this.$store.state.selectResult[index], ii, val);
      } else {
        this.$set(this.$store.state.selectResult[index], ii, "");
      }
      var arr = JSON.parse(JSON.stringify(this.$store.state.selectResult));
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
          if (arr[i][j] == "" || arr[i][j] == undefined) {
            arr[i].splice(j, 1);
            j--;
          }
        }
      }

      for (var i = 0; i < arr.length; i++) {
        if (arr[i].length == 0) {
          arr.splice(i, 1);
          i--;
        }
      }

      this.$store.state.sumcount = arr.length;

      // if (this.$store.state.sumcount == 1) {
      //   if (this.$store.state.result[index].single == 0 && ii < 3) {
      //     for (let i = 0; i < 3; i++) {
      //       if (
      //         this.$store.state.selectResult[index][ii] != undefined ||
      //         this.$store.state.selectResult[index][ii] != ""
      //       ) {
      //         this.$store.state.flag = true;
      //         break;
      //       }
      //       var arr2 = JSON.parse(
      //         JSON.stringify(this.$store.state.selectResult[index].slice(0, 3))
      //       );
      //       for (var i = 0; i < arr2.length; i++) {
      //         if (arr2[i].length == 0) {
      //           arr2.splice(i, 1);
      //           i--;
      //         }
      //       }
      //       if (arr2.length == 0) {
      //         this.$store.state.flag = false;
      //       }
      //     }
      //   }
      //   if (this.$store.state.result[index].single1 == 0 && ii >= 3 && ii < 6) {
      //     for (let i = 0; i < 3; i++) {
      //       if (
      //         this.$store.state.selectResult[index][ii] != undefined ||
      //         this.$store.state.selectResult[index][ii] != ""
      //       ) {
      //         this.$store.state.flag = true;
      //         break;
      //       }
      //     }
      //     var arr1 = JSON.parse(
      //       JSON.stringify(this.$store.state.selectResult[index].slice(3, 6))
      //     );
      //     for (var i = 0; i < arr1.length; i++) {
      //       if (arr1[i].length == 0) {
      //         arr1.splice(i, 1);
      //         i--;
      //       }
      //     }
      //     if (arr1.length == 0) {
      //       this.$store.state.flag = false;
      //     }
      //   }

      //   if (this.$store.state.flag == false) {
      //     if (this.$store.state.result[index].single == 1 && ii < 3) {
      //       for (let i = 0; i < 3; i++) {
      //         if (
      //           this.$store.state.selectResult[index][ii] != undefined ||
      //           this.$store.state.selectResult[index][ii] != ""
      //         ) {
      //           break;
      //         }
      //       }
      //     }

      //     if (
      //       this.$store.state.result[index].single1 == 1 &&
      //       ii >= 3 &&
      //       ii < 6
      //     ) {
      //       for (let i = 3; i < 6; i++) {
      //         if (
      //           this.$store.state.selectResult[index][ii] != undefined ||
      //           this.$store.state.selectResult[index][ii] != ""
      //         ) {
      //           break;
      //         }
      //       }
      //     }
      //   }
      // }
    },
    getList() {
      var that = this;

      that.$SERVER
        .getFootBall({
          pagenum: 1,
          pagesize: 50
        })
        .then(res => {
          if (res.code == 200) {
            for (var i = 0; i < res.data.list.length; i++) {
              this.$store.state.selectResult.push([]);
              this.$store.state.selectValue.push([]);
            }
            var arr = [];
            res.data.list.forEach((e, i) => {
              var a;
              var b;
              var c;
              var f;
              var f1, f2, f3, f4;
              if (!e.footBallBet.odds_list.had) {
                a = "";
                b = "";
                c = "";
              } else {
                a =
                  e.footBallBet.odds_list.had.odds[
                    e.footBallBet.odds_list.had.odds.length - 1
                  ].h;
                b =
                  e.footBallBet.odds_list.had.odds[
                    e.footBallBet.odds_list.had.odds.length - 1
                  ].d;
                c =
                  e.footBallBet.odds_list.had.odds[
                    e.footBallBet.odds_list.had.odds.length - 1
                  ].a;
              }

              if (!e.footBallBet.odds_list.had) {
                f = 0;
              } else {
                f = e.footBallBet.odds_list.had.single;
              }
              if (!e.footBallBet.odds_list.hhad) {
                f1 = 0;
              } else {
                f1 = e.footBallBet.odds_list.hhad.single;
              }
              if (!e.footBallBet.odds_list.ttg) {
                f2 = 0;
              } else {
                f2 = e.footBallBet.odds_list.ttg.single;
              }
              if (!e.footBallBet.odds_list.hafu) {
                f3 = 0;
              } else {
                f3 = e.footBallBet.odds_list.hafu.single;
              }
              if (!e.footBallBet.odds_list.crs) {
                f4 = 0;
              } else {
                f4 = e.footBallBet.odds_list.crs.single;
              }
              arr[i] = {
                id: e.id,
                date: e.date,
                num: e.num,
                lcnAbbr: e.lcnAbbr,
                time: e.time,
                hcn: e.hcn,
                acnAbbr: e.acnAbbr,
                acn: e.acn,
                hIcon: e.hIcon,
                aIcon: e.aIcon,
                goalline: e.footBallBet.odds_list.hhad.goalline,
                single: f,
                single1: f1,
                single2: f2,
                single3: f3,
                single4: f4,
                footBallBet: [
                  a,
                  b,
                  c,
                  e.footBallBet.odds_list.hhad.odds[
                    e.footBallBet.odds_list.hhad.odds.length - 1
                  ].h,
                  e.footBallBet.odds_list.hhad.odds[
                    e.footBallBet.odds_list.hhad.odds.length - 1
                  ].d,
                  e.footBallBet.odds_list.hhad.odds[
                    e.footBallBet.odds_list.hhad.odds.length - 1
                  ].a,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s0,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s1,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s2,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s3,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s4,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s5,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s6,
                  e.footBallBet.odds_list.ttg.odds[
                    e.footBallBet.odds_list.ttg.odds.length - 1
                  ].s7,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].hh,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].hd,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].ha,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].dh,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].dd,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].da,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].ah,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].ad,
                  e.footBallBet.odds_list.hafu.odds[
                    e.footBallBet.odds_list.hafu.odds.length - 1
                  ].aa,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0100,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0200,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0201,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0300,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0301,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0302,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0400,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0401,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0402,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0500,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0501,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0502,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].h1,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0000,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0101,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0202,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0303,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].d1,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0001,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0002,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0102,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0003,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0103,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0203,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0004,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0104,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0204,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0005,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0105,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].b0205,
                  e.footBallBet.odds_list.crs.odds[
                    e.footBallBet.odds_list.crs.odds.length - 1
                  ].a1
                ]
              };
            });
            this.$store.state.result = arr;
          }
        });
    }
  },
  created() {
    this.getList();

    var arr = JSON.parse(JSON.stringify(this.$store.state.selectResult));
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == "" || arr[i][j] == undefined) {
          arr[i].splice(j, 1);
          j--;
        }
      }
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length == 0) {
        arr.splice(i, 1);
        i--;
      }
    }
    this.$store.state.sumcount = arr.length;
  }
};
</script>
<style lang="less" scoped>
.bor {
  border: 1px solid orange !important;
}
.bgColor {
  background-color: red;
  color: white !important;
  text-align: center !important;
}
.bgColor1 {
  background-color: red;
  color: white !important;
  text-align: center !important;
  height: 1.24rem !important;
  line-height: 32px !important;
}
// 修改vant ui内置样式
.menu {
  background: none;
  /deep/ .van-dropdown-menu__title {
    color: white;
  }
  /deep/ .van-dropdown-item__content {
    padding: 0 5px 5px 3px;
    margin: 0 auto;
    .van-cell {
      width: 23%;
      float: left;
      display: flex;
      justify-content: space-between;
      border: 1px solid #cccccc;
      text-align: center;
      padding: 0.2rem 0;
      margin-left: 5px;
      margin-top: 5px;
    }
  }
  /deep/ .van-cell__value {
    display: none;
  }
  /deep/ .van-dropdown-item__option--active {
    border: 1px solid red !important;
    color: red;
  }
}

.main {
  padding-bottom: 120px;
  background-color: #fff;
  .title {
    color: #4b4949;
    text-align: center;
    padding-top: 8px;
    font-size: 13px;
  }
  .wrap {
    position: relative;
    .dan {
      font-size: 12px;
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-top: 25px solid rgb(255, 187, 0);
      border-right: 25px solid transparent;
      span {
        display: inline-block;

        position: absolute;
        width: 14px;
        top: -25px;
      }
    }
  }
  .test {
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    font-size: 14px;

    .right {
      font-size: 14px;
      width: 77%;
      margin-right: 10px;
      .div1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;

        margin-right: 46px;
        color: #4b4949;
        .rang {
          width: 15px;
          color: #777;
        }
      }
      .tab {
        display: flex;
        align-items: center;
        .left1 {
          float: left;
          color: #4b4949;
          .p1 {
            span {
              display: inline-block;
              height: 30px;
              width: 70px;
              border: 1px solid #eeeeee;
              float: left;
              text-align: center;
              line-height: 30px;
            }
            .p1-first {
              width: 20px;
              background-color: rgb(204, 204, 204);
              color: white;
            }
          }
          .p2 {
            span {
              display: inline-block;
              height: 30px;
              width: 70px;
              border: 1px solid #eeeeee;
              float: left;
              text-align: center;
              line-height: 30px;
            }
            .p2-red {
              width: 20px;
              background-color: #f00;
              color: white;
            }
            .p2-blue {
              width: 20px;
              background-color: green;
              color: white;
            }
          }
        }
        .center {
          font-size: 12px;
          width: 238px;

          ul {
            width: 100%;
            height: 32px;
            border: 1px solid #ffffff;
            border-bottom: none;
            &:last-child {
              border-top: none;
            }
            .p1-first {
              background-color: rgb(204, 204, 204);
              color: white;
              display: inline-block;
              width: 22px;
              height: 32px;
              float: left;
              text-align: center;
              line-height: 32px;
            }
            .p2-red {
              background-color: #f00;
              color: white;
              display: inline-block;
              width: 22px;
              height: 32px;
              float: left;
              text-align: center;
              line-height: 32px;
            }
            .p2-blue {
              background-color: green;
              color: white;
              display: inline-block;
              width: 22px;
              height: 32px;
              float: left;
              text-align: center;
              line-height: 32px;
            }
            li {
              display: inline-block;
              height: 30px;
              width: 70px;
              border: 1px solid #eeeeee;
              float: left;
              text-align: center;
              line-height: 30px;
              color: #4b4949;
              & span:nth-child(2) {
                color: #777;
              }
            }
          }
        }
        .right1 {
          color: #4b4949;
          span {
            display: inline-block;
            height: 62px;
            width: 31px;

            line-height: 62px;
            font-size: 12px;
            color: #777;
            text-align: center;
            border: 1px solid #eee;
          }
        }
      }
    }
    .left {
      text-align: center;
      font-size: 12px;
      span {
        color: #f00;
        padding: 1px 2px;
        border: 1px solid #f00;
      }
      .first {
        padding-bottom: 20px;

        color: #4b4949;
      }
    }
  }
  .right .shai {
    display: inline-block;
    text-align: center;
    line-height: 20px;
    border: 1px solid #ffffff;
    background-color: #f24a44;
    color: #ffffff;
    width: 20px;
    height: 20px;
    font-size: 14px;
    border-radius: 5px;
  }
  .content {
    background-color: #eeeeee;
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 10px;
      h3 {
        font-size: 16px;
      }
      span {
        font-size: 14px;
        color: #f24a44;
      }
    }
    .wrapper {
      background-color: #fff;
      padding: 10px 5px;
      ul {
        display: flex;
        flex-flow: wrap;
        justify-content: space-around;
        li {
          display: inline-block;
          width: 100px;
          height: 35px;
          border: 1px solid #d6d6d6;
          text-align: center;
          line-height: 35px;
          margin-top: 10px;
        }
      }
    }
    .senf {
      padding: 8px 10px;
      h3 {
        font-size: 16px;
      }
    }
    .bottom {
      background-color: #fff;
      padding: 8px 10px;
      .radio {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        input {
          display: inline-block;
          width: 50px;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
        }
      }
      .con {
        width: 75%;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        padding-top: 10px;
        color: #4b4949;
      }
    }
    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .bot-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #ccc;
    .check {
      width: 100%;
      background-color: #fff;
      text-align: center;
      padding: 8px 25%;

      /deep/ .van-checkbox__label {
        font-size: 14px;
        color: orange;
      }
    }
    .text {
      width: 100%;
      background-color: rgb(250, 235, 275);
      text-align: center;
      padding: 5px 0px;
      font-size: 14px;
      .pei {
        color: rgb(158, 150, 145);
        padding-top: 5px;
      }
    }
    .btn {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #4b4949;
      font-size: 13px;
      padding-bottom: 8px;
      .delete {
        text-align: center;
        p {
          color: #777;
        }
      }
    }
  }

  .red {
    color: red !important;
  }
}
</style>