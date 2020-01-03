<template>
  <div class="container" id="shop">
    <navBar :goback="true"></navBar>
    <p class="tie">*页面显示盘口及赔率仅供参考,请以实际票样为准</p>
    <div class="head">
      <div class="div1" @click="$router.push('/racefootball')">+添加/编辑赛事</div>
      <div @click="removeAll">清空列表</div>
    </div>

    <div class="main">
      <div class="test" v-for="(item,index) in list" :key="index" v-if="show(index)">
        <div class="left">
          <p class="first"></p>
          <p @click="removeFootball(index)">
            <van-icon name="clear" />
          </p>
          <p></p>
        </div>
        <div class="right">
          <div class="div1">
            <span class="rang">{{item.num}}</span>
            <span>[主]{{item.hcn}}</span>
            <span style="color:#777">VS</span>
            <span>[客]{{item.acnAbbr}}</span>
          </div>
          <div class="tab">
            <div class="left1">
              <p class="p1">
                <span class="p1-first">0</span>
              </p>
              <p class="p2">
                <span class="p2-first">{{item.goalline}}</span>
              </p>
              <p class="p3">
                <span class="p3-first">其他</span>
              </p>
            </div>
            <div class="center">
              <div class="center">
                <ul>
                  <li
                    v-for="(item,i) in item.footBallBet"
                    :key="i"
                    v-if="i<6"
                    :class="addColor(index,i)"
                    @click="push(index,i,item)"
                  >
                    <span v-show="i==0">胜</span>
                    <span v-show="i==1">平</span>
                    <span v-show="i==2">负</span>
                    <span v-show="i==3">胜</span>
                    <span v-show="i==4">平</span>
                    <span v-show="i==5">负</span>
                    <span>{{item}}</span>
                  </li>
                </ul>
              </div>
              <div class="bot" @click="$router.push('/allplay/'+index)">
                <p :class="show1(index).length>0  ? 'aa' : '' ">未选择更多玩法</p>
                <ul v-for="(item1,i) in show1(index)" :key="i">
                  <li v-if="item1" class="bgColor">
                    <span v-show="i==6">0球</span>
                    <span v-show="i==7">1球</span>
                    <span v-show="i==8">2球</span>
                    <span v-show="i==9">3球</span>
                    <span v-show="i==10">4球</span>
                    <span v-show="i==11">5球</span>
                    <span v-show="i==12">6球</span>
                    <span v-show="i==13">7+球</span>
                    <span v-show="i==14">胜胜</span>
                    <span v-show="i==15">胜平</span>
                    <span v-show="i==16">胜负</span>
                    <span v-show="i==17">平胜</span>
                    <span v-show="i==18">平平</span>
                    <span v-show="i==19">平负</span>
                    <span v-show="i==20">负胜</span>
                    <span v-show="i==21">负平</span>
                    <span v-show="i==22">负负</span>
                    <span v-show="i==23">1:0</span>
                    <span v-show="i==24">2:0</span>
                    <span v-show="i==25">2:1</span>
                    <span v-show="i==26">3:0</span>
                    <span v-show="i==27">3:1</span>
                    <span v-show="i==28">3:2</span>
                    <span v-show="i==29">4:0</span>
                    <span v-show="i==30">4:1</span>
                    <span v-show="i==31">4:2</span>
                    <span v-show="i==32">5:0</span>
                    <span v-show="i==33">5:1</span>
                    <span v-show="i==34">5:2</span>
                    <span v-show="i==35">胜其他</span>
                    <span v-show="i==36">0:0</span>
                    <span v-show="i==37">1:1</span>
                    <span v-show="i==38">2:2</span>
                    <span v-show="i==39">3:3</span>
                    <span v-show="i==40">平其他</span>
                    <span v-show="i==41">0:1</span>
                    <span v-show="i==42">0:2</span>
                    <span v-show="i==43">1:2</span>
                    <span v-show="i==44">0:3</span>
                    <span v-show="i==45">1:3</span>
                    <span v-show="i==46">2:3</span>
                    <span v-show="i==47">0:4</span>
                    <span v-show="i==48">1:4</span>
                    <span v-show="i==49">2:4</span>
                    <span v-show="i==50">0:5</span>
                    <span v-show="i==51">1:5</span>
                    <span v-show="i==52">2:5</span>
                    <span v-show="i==53">负其他</span>
                    {{item1}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bot-btn">
      <p class="tishi">
        *由于店铺繁忙,本店当前最低消费
        <span>10元</span>。
      </p>
      <div class="con">
        <div @click="menu()">
          <span v-if="f.length==0">请选择过关方式</span>
          <span v-for="(val,i3) in f " :key="i3">{{val=val.replace(/_/, "串")}}</span>
          <van-icon name="arrow-down" />
        </div>
        <div class="div1">
          <van-stepper @change="change(value)" v-model="value" />
          <p>倍</p>
        </div>
      </div>
      <div class="btn">
        <div class="text">
          <p>
            <span>{{$store.state.sumcount}}场</span>
            <span>{{zhu}}注{{this.$store.state.value}}倍</span>
            <span>
              共
              <span class="color">{{this.$store.state.money*this.$store.state.value}}元</span>
            </span>
          </p>

          <span class="fanwei">
            [奖金范围：
            <span class="color">{{$METHOD.format45(maxBonus*this.$store.state.value,100)}}</span> 元]
          </span>
        </div>
        <!-- <van-button type="danger" size="large" @click="confirmOrder">下一步</van-button> -->
        <van-button round type="info" color="red" size="large" @click="confirmOrder">下一步</van-button>
      </div>
    </div>
    <van-action-sheet v-model="showmenu">
      <div class="content">
        <div class="head-bot">
          <h3>标准过关</h3>
        </div>
        <div class="wrapper">
          <ul>
            <li
              v-for="(item,i) in showMethod()"
              :key="i"
              @click="push1(i,item)"
              :class="addColor1(i)"
            >
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div class="senf">
          <h3>组合过关</h3>
        </div>
        <div class="bottom">
          <ul>
            <li
              v-for="(item,i2) in showMethod1()"
              :key="i2"
              @click="push2(i2,item)"
              :class="addColor2(i2,item)"
            >
              <span>{{item}}</span>
            </li>
          </ul>
        </div>
        <div class="btn">
          <van-button type="default" size="large">取消</van-button>
          <van-button type="danger" size="large" @click="confirm()">确定</van-button>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";
export default {
  name: "confirmPlan",
  components: {
    navBar
  },
  data() {
    return {
      list: this.$store.state.result,
      replayRe: [],
      a: "",
      bet: [],
      value: 1,
      zhu: 0,
      money: "",
      maxBonus: "",
      showmenu: false,
      StringMethod: [
        "1串1",
        "2串1",
        "3串1",
        "4串1",
        "5串1",
        "6串1",
        "7串1",
        "8串1",
        "3串3",
        "3串4",
        "4串4",
        "4串5",
        "4串6",
        "4串11",
        "5串5",
        "5串6",
        "5串10",
        "5串16",
        "5串20",
        "5串26",
        "6串6",
        "6串7",
        "6串15",
        "6串20",
        "6串22",
        "6串35",
        "6串42",
        "6串50",
        "6串57",
        "7串7",
        "7串8",
        "7串21",
        "7串35",
        "7串120",
        "8串8",
        "8串9",
        "8串28",
        "8串56",
        "8串70",
        "8串247"
      ],
      b: [],

      i: null,
      d: [],
      c: [],
      f: [],
      flag: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    other(item) {
      var f = false;
      for (var i = 0; i < item.length; i++) {
        if (item[i] != undefined) {
          f = true;
        }
        return f;
      }
    },
    confirmOrder() {
      console.log(this.$store.state.selectResult);
      if (this.$store.state.money * this.$store.state.value < 10) {
        this.$toast({
          message: "投注金额不能小于10元"
        });
        return;
      }
      if (this.f.length == 0) {
        this.$toast({
          message: "请选择串法"
        });
      } else if (this.$store.state.sumcount >= 2 && this.f.length > 0) {
        this.$router.push("/confirmOrder");
      } else {
        this.$toast({
          message: "非单关至少选择两场比赛"
        });
      }

      if (this.$store.state.sumcount == 1 && this.f.length > 0) {
        var i1 = 0;
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
          if (arr[i].length > 0) {
            i1 = i;
          }
        }
        if (this.$store.state.result[i1].single == 1) {
          this.$router.push("/confirmOrder");
          this.$toast({
            message: "进入单关模式"
          });
        }
      }
    },
    showMethod() {
      if (this.$store.state.sumcount == 1) {
        return this.StringMethod.slice(0, 1);
      } else if (this.$store.state.sumcount <= 2) {
        return this.StringMethod.slice(1, 2);
      } else if (this.$store.state.sumcount <= 3) {
        return this.StringMethod.slice(1, 3);
      } else if (this.$store.state.sumcount <= 4) {
        return this.StringMethod.slice(1, 4);
      } else if (this.$store.state.sumcount <= 5) {
        return this.StringMethod.slice(1, 5);
      } else if (this.$store.state.sumcount <= 6) {
        return this.StringMethod.slice(1, 6);
      } else if (this.$store.state.sumcount <= 7) {
        return this.StringMethod.slice(1, 7);
      } else if (this.$store.state.sumcount <= 9999) {
        return this.StringMethod.slice(1, 8);
      }
    },
    showMethod1() {
      if (this.$store.state.sumcount <= 2) {
        return this.StringMethod.slice(0, 0);
      } else if (this.$store.state.sumcount <= 3) {
        return this.StringMethod.slice(8, 10);
      } else if (this.$store.state.sumcount <= 4) {
        return this.StringMethod.slice(8, 14);
      } else if (this.$store.state.sumcount <= 5) {
        return this.StringMethod.slice(8, 20);
      } else if (this.$store.state.sumcount <= 6) {
        return this.StringMethod.slice(8, 29);
      } else if (this.$store.state.sumcount <= 7) {
        return this.StringMethod.slice(8, 34);
      } else if (this.$store.state.sumcount <= 9999) {
        return this.StringMethod.slice(8, 40);
      }
    },
    menu() {
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
        console.log(arrs);

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
        console.log(this.$store.state.result[num]);
        if (this.$store.state.result[num].single == 0 && arrs.length > 0) {
          for (let j = 0; j < 3; j++) {
            if (arr[num][j] != undefined && arr[num][j] != "") {
              this.flag = true;
              console.log(this.flag);
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
              console.log(this.flag);
              break;
            }
          }
        }
        if (!this.flag) {
          if (arr1.length > 0 && this.$store.state.result[num].single1 == 1) {
            this.flag = false;
            console.log(this.flag);
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
            console.log(this.flag);
          }
        }

        if (this.$store.state.result[num].single3 == 0 && arr3.length > 0) {
          for (let j = 14; j < 23; j++) {
            if (arr[num][j] != undefined && arr[num][j] != "") {
              this.flag = true;
              console.log(this.flag);

              break;
            }
          }
        }
        if (!this.flag) {
          if (arr3.length > 0 && this.$store.state.result[num].single3 == 1) {
            this.flag = false;
            console.log(this.flag);
          }
        }

        if (this.$store.state.result[num].single4 == 0 && arr4.length > 0) {
          for (let j = 23; j < 54; j++) {
            if (arr[num][j] != undefined && arr[num][j] != "") {
              this.flag = true;
              console.log(this.flag);

              break;
            }
          }
        }
        if (!this.flag) {
          if (arr4.length > 0 && this.$store.state.result[num].single4 == 1) {
            this.flag = false;
            console.log(this.flag);
          }
        }

        console.log(this.flag);
      }

      if (this.flag) {
        this.$toast({
          message: "非单关请选择两场比赛"
        });
      } else {
        this.showmenu = true;
      }
    },
    change(value) {
      if (this.value > 100000) {
        this.$toast({
          message: "最高输入100000倍"
        });
      } else {
        this.$store.state.value = value;
      }
    },
    show(index) {
      var r = false;
      this.$store.state.selectResult[index].forEach((e, i1) => {
        if (e != undefined && e != "") {
          r = true;
        }
      });
      return r;
    },
    removeAll() {
      for (var i = 0; i < this.$store.state.selectResult.length; i++) {
        this.$store.state.selectResult[i] = [];
      }
      this.$store.state.sumcount = 0;
      this.getMoney();
      this.confirm();
      this.f = [];
      this.$router.go(-1);
    },
    removeFootball(index) {
      this.$store.state.selectResult[index] = [];

      this.getMoney();
      this.confirm();
      this.$store.state.sumcount--;
      this.f = [];
    },
    show1(index) {
      var arr = [];
      this.$store.state.selectValue[index].forEach((e, i) => {
        if (i >= 6 && e != "") {
          arr[i] = e;
        }
      });

      return arr;
    },
    addColor(i, i2) {
      if (
        this.$store.state.selectResult[i][i2] == undefined ||
        this.$store.state.selectResult[i][i2] == ""
      ) {
        return "";
      } else {
        return "bgColor";
      }
    },
    addColor1(i2) {
      if (this.b[i2] == undefined || this.b[i2] == "") {
        return "";
      } else {
        return "bgColor";
      }
    },
    addColor2(i, val) {
      if (this.c[i] == undefined || this.c[i] == "") {
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

      if (this.$store.state.sumcount == 1) {
        if (this.$store.state.result[index].single == 0 && ii < 3) {
          for (let i = 0; i < 3; i++) {
            if (
              this.$store.state.selectResult[index][ii] != undefined ||
              this.$store.state.selectResult[index][ii] != ""
            ) {
              this.flag = true;
              break;
            }
            var arr2 = JSON.parse(
              JSON.stringify(this.$store.state.selectResult[index].slice(0, 3))
            );
            for (var i = 0; i < arr2.length; i++) {
              if (arr2[i].length == 0) {
                arr2.splice(i, 1);
                i--;
              }
            }
            if (arr2.length == 0) {
              this.flag = false;
            }
          }
        }
        if (this.$store.state.result[index].single1 == 0 && ii >= 3 && ii < 6) {
          for (let i = 0; i < 3; i++) {
            if (
              this.$store.state.selectResult[index][ii] != undefined ||
              this.$store.state.selectResult[index][ii] != ""
            ) {
              this.flag = true;
              break;
            }
          }
          var arr1 = JSON.parse(
            JSON.stringify(this.$store.state.selectResult[index].slice(3, 6))
          );
          for (var i = 0; i < arr1.length; i++) {
            if (arr1[i].length == 0) {
              arr1.splice(i, 1);
              i--;
            }
          }
          if (arr1.length == 0) {
            this.flag = false;
          }

          this.$store.state.flag = this.flag;
        }
      }
      this.getMoney();
      this.confirm();
      this.f = [];
    },
    push1(i, val) {
      this.c = [];
      if (this.b[i] == undefined || this.b[i] == "") {
        this.$set(this.b, i, val);
      } else {
        this.$set(this.b, i, "");
      }
    },
    push2(i, val) {
      this.b = [];
      this.c = [];
      if (this.c[i] == undefined || this.c[i] == "") {
        this.$set(this.c, i, val);
      } else {
        this.$set(this.c, i, "");
      }
    },
    confirm() {
      this.f = [...this.b, ...this.c];

      for (var i = 0; i < this.f.length; i++) {
        if (!this.f[i]) {
          this.f.splice(i, 1);
          i--;
        }
      }
      this.$store.state.gate = this.f;
      for (var i = 0; i < this.f.length; i++) {
        // this.f[i].substring(1, 2) = "_";
        this.f[i] = this.f[i].replace(/串/, "_");
      }

      this.showmenu = false;
      this.getMoney();
      this.b = [];
    },
    getMoney() {
      var num = 0;
      for (var i = 0; i < this.b.length; i++) {
        if (this.b[i] != undefined && this.b[i].length > 0) {
          num++;
        }
      }
      // if (num > 5) {
      //   this.$toast({
      //     message: "组合过关最多选择五个"
      //   });
      //   this.b = [];
      //   return;
      // }
      var resu = [];
      for (var i = 0; i < this.$store.state.result.length; i++) {
        if (this.show(i)) {
          resu.push(this.$store.state.selectResult[i]);
          this.$store.state.betArr[i] = this.$store.state.result[i].footBallBet;
          this.$store.state.footId[i] = this.$store.state.result[i].id;
        } else {
          delete this.$store.state.betArr[i];
          delete this.$store.state.footId[i];
        }
      }

      var arr = [];
      for (var i = 0; i < resu.length; i++) {
        var a = [];
        var b = [];
        var c = [];
        var d = [];
        var e = [];
        for (var j = 0; j < resu[i].length; j++) {
          if (resu[i][j]) {
            if (j >= 0 && j < 3) {
              a.push(j);
            } else if (j >= 3 && j < 6) {
              b.push(j);
            } else if (j >= 6 && j < 14) {
              c.push(j);
            } else if (j >= 14 && j < 23) {
              d.push(j);
            } else if (j >= 23 && j < 54) {
              e.push(j);
            }
          }
        }
        arr.push([a, b, c, d, e]);
      }
      this.$store.state.arr = arr;
      console.log(arr);
      //   var arr = JSON.parse(JSON.stringify(this.$store.state.selectResult));
      //   for (var i = 0; i < arr.length; i++) {
      //     for (var j = 0; j < arr[i].length; j++) {
      //       if (arr[i][j].length == 0) {
      //         arr[i].splice(j, 1);
      //         j--;
      //       }
      //     }
      //   }
      //   for (var i = 0; i < arr.length; i++) {
      //     if (arr[i].length == 0) {
      //       arr.splice(i, 1);
      //       i--;
      //     }
      //   }
      //   //   去掉索引为empty
      //   for (var i = 0; i < arr.length; i++) {
      //     for (var j = 0; j < arr[i].length; j++) {
      //       for (var k = 0; k < arr[i][j].length; k++) {
      //         if (!arr[i][j][k]) {
      //           arr[i][j].splice(k, 1);
      //           k--;
      //         }
      //       }
      //     }
      //   }

      // 为每一项添加索引;
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
          for (var k = 0; k < arr[i][j].length; k++) {
            arr[i][j][k] = i + "_" + arr[i][j][k];
          }
        }
      }
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
          if (arr[i][j].length == 0) {
            arr[i].splice(j, 1);
            j--;
          }
        }
      }

      var gate = this.f;

      function arrcl(arr, n, z) {
        var r = [];
        fn([], arr, n);
        return r;

        function fn(t, a, n) {
          if (n === 0 || (z && r.length == z)) {
            return (r[r.length] = t);
          }
          for (var i = 0, l = a.length - n; i <= l; i++) {
            if (!z || r.length < z) {
              var b = t.slice();
              b.push(a[i]);
              fn(b, a.slice(i + 1), n - 1);
            }
          }
        }
      }

      function arral(A2, fn) {
        var n = 0,
          codes = [],
          code = [],
          isTest = typeof fn == "function",
          stop;
        each(A2, n);

        function each(A2, n) {
          if (stop || n >= A2.length) {
            if (isTest && false === fn(code)) {
              stop = true;
            } else {
              codes.push(code.slice());
              code.length = n - 1;
            }
          } else {
            var cur = A2[n];
            for (var i = 0, j = cur.length; i < j; i++) {
              code.push(cur[i]);
              each(A2, n + 1);
            }
            if (n) {
              code.length = n - 1;
            }
          }
        }

        return codes;
      }

      function GetVotetype(typevote) {
        switch (typevote) {
          case "1_1":
            return "1";
          case "2_1":
            return "2";
          case "2_3":
            return "1 2";
          case "3_1":
            return "3";
          case "3_3":
            return "2";
          case "3_4":
            return "2 3";
          case "3_7":
            return "1 2 3";
          case "4_1":
            return "4";
          case "4_2":
            return "2";
          case "4_4":
            return "3";
          case "4_5":
            return "3 4";
          case "4_6":
            return "2";
          case "4_11":
            return "2 3 4";
          case "4_15":
            return "1 2 3 4";
          case "5_1":
            return "5";
          case "5_2":
            return "2";
          case "5_5":
            return "4";
          case "5_6":
            return "4 5";
          case "5_10":
            return "2";
          case "5_16":
            return "3 4 5";
          case "5_20":
            return "2 3";
          case "5_26":
            return "2 3 4 5";
          case "5_31":
            return "1 2 3 4 5";
          case "6_1":
            return "6";
          case "6_2":
            return "2";
          case "6_6":
            return "5";
          case "6_7":
            return "5 6";
          case "6_15":
            return "2";
          case "6_20":
            return "3";
          case "6_22":
            return "4 5 6";
          case "6_35":
            return "2 3";
          case "6_42":
            return "3 4 5 6";
          case "6_50":
            return "2 3 4";
          case "6_57":
            return "2 3 4 5 6";
          case "6_63":
            return "1 2 3 4 5 6";
          case "7_1":
            return "7";
          case "7_7":
            return "6";
          case "7_8":
            return "6 7";
          case "7_21":
            return "5";
          case "7_35":
            return "4";
          case "7_120":
            return "2 3 4 5 6 7";
          case "8_1":
            return "8";
          case "8_8":
            return "7";
          case "8_9":
            return "7 8";
          case "8_28":
            return "6";
          case "8_56":
            return "5";
          case "8_70":
            return "4";
          case "8_247":
            return "2 3 4 5 6 7 8";
          case "9_1":
            return "9";
          case "10_1":
            return "10";
          case "11_1":
            return "11";
          case "12_1":
            return "12";
          case "13_1":
            return "13";
          case "14_1":
            return "14";
          case "15_1":
            return "15";
          default:
            if (typevote.indexOf("二关") > -1) return "2";
            if (typevote.indexOf("三关") > -1) return "3";
            else return "0";
        }
      }

      for (var i = 0; i < this.$store.state.betArr.length; i++) {
        if (!this.$store.state.betArr[i]) {
          this.$store.state.betArr.splice(i, 1);
          i--;
        }
      }
      var source = this.$store.state.betArr;
      function parse(data, source) {
        //取几串几 ，二维数组的行(如[1,2,3]2串1，组合为[[1,2],[1,3],[2,3]])
        // if (data.length == 0 || source.length == 0) {
        //   return;
        // }
        var bisai = [];
        var wagers = 0;
        var result = {};
        var totalBet = 0;
        for (var ii = 0, ll = gate.length; ii < ll; ii++) {
          var chuanType = gate[ii];
          var matchArr = chuanType.split("_"); //几串几
          var matheCount = matchArr[0]; //2串1 的2
          var combArr = arrcl(data, matheCount);
          for (var i1 = 0, l1 = combArr.length; i1 < l1; i1++) {
            var colComArr = arral(combArr[i1]);
            for (var i2 = 0, l2 = colComArr.length; i2 < l2; i2++) {
              var gateway = GetVotetype(chuanType);
              var gatArr = gateway.split(" ");
              for (var i3 = 0, l3 = gatArr.length; i3 < l3; i3++) {
                var res = arrcl(colComArr[i2], gatArr[i3]);
                for (var i4 = 0, l4 = res.length; i4 < l4; i4++) {
                  var wagerArr = arral(res[i4]);
                  for (let v in wagerArr) {
                    bisai[bisai.length] = wagerArr[v];
                    var first = wagerArr[v][0];
                    var firArr = first.split("_");
                    var betfir = source[firArr[0]][firArr[1]];
                    if (chuanType != "1_1") {
                      var second = wagerArr[v][1];
                      var secArr = second.split("_");
                      var betsec = source[secArr[0]][secArr[1]];
                      var oneWagerBet = (
                        Number(betfir) * Number(betsec)
                      ).toFixed(2);
                      totalBet =
                        Number(totalBet.toFixed(2)) + Number(oneWagerBet);
                    } else {
                      totalBet = Number(totalBet.toFixed(2)) + Number(betfir);
                    }
                    wagers++;
                  }
                }
              }
            }
          }
        }
        result["wagerCount"] = wagers;
        result["payMoney"] = 2 * wagers;
        result["maxBonus"] = 2 * totalBet.toFixed(2);
        result["wagers"] = bisai;
        return result;
      }
      console.log(parse(arr, source));
      //订单数据数据格式【{"wager":[],"bet":[],"matchIds":["000","001"],"times":2,"userId":""}】
      function bookOrder(wagers) {
        var bisaiArr = wagers.wagers;
        // for()
      }
      this.$store.state.wagers = parse(arr, source).wagers;
      this.zhu = parse(arr, source).wagerCount;
      this.$store.state.money = parse(arr, source).payMoney;
      this.maxBonus = parse(arr, source).maxBonus;
    }
  },

  mounted() {},
  created() {
    this.getMoney();
  }
};
</script>
<style lang="less" scoped>
.tie {
  background-color: #b0e2ff;
  font-size: 12px;
  padding: 5px;
  color: #777;
}
.aa {
  display: none;
}
.bgColor {
  background-color: red !important;
  color: white !important;
  text-align: center !important;
}
.main {
  padding-bottom: 130px;
}
.head {
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: #fff;
  font-size: 14px;
  height: 50px;
  div {
    width: 50%;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .div1 {
    border-right: 1px solid #eeeeee;
  }
}
.test {
  padding: 10px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  border-bottom: 1px solid #eeeeee;
  .right {
    width: 80%;
    .div1 {
      display: flex;
      justify-content: space-around;
      padding-bottom: 10px;
      font-size: 14px;
      color: #4b4949;
      width: 100%;
    }
    .tab {
      display: flex;
      width: 5.45rem;
      .left1 {
        float: left;
        color: #4b4949;
        .p1 {
          span {
            display: inline-block;

            width: 70px;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 38px;
          }
          .p1-first {
            width: 20px;
            height: 30px;
            background-color: rgb(204, 204, 204);
            color: white;
          }
        }
        .p2 {
          span {
            display: inline-block;
            height: 38px;
            width: 70px;
            border: 1px solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 30px;
          }
          .p2-first {
            width: 20px;
            height: 30px;
            line-height: 30px;
            background-color: rgb(100, 160, 240);
            color: white;
          }
        }
        .p3 {
          span {
            display: inline-block;
            height: 32px;
            border: 0.02rem solid #eeeeee;
            float: left;
            text-align: center;
            width: 0.4rem;
            background-color: #29e222;
            color: white;
            writing-mode: tb-rl;
            line-height: 0.4rem;
          }
        }
      }
      .center {
        font-size: 12px;
        ul {
          li {
            background-color: #fff;
            display: inline-block;
            height: 30px;
            width: 80px;
            border: 0.02rem solid #eeeeee;
            float: left;
            text-align: center;
            line-height: 30px;
            color: #4b4949;
            font-size: 12px;
          }
        }
        .bot {
          display: inline-block;
          width: 246px;

          border: 1px solid #eeeeee;
          text-align: center;
          line-height: 32px;
          background-color: #fff;
          ul {
            li {
              width: 80px;
              font-size: 12px;
            }
          }
        }
      }
      .right1 {
        color: #4b4949;
        span {
          display: inline-block;
          height: 118px;
          width: 31px;
          border: 1px solid #eeeeee;
          line-height: 32px;
          text-align: center;
          writing-mode: tb-rl;
          background-color: #fff;
        }
      }
    }
  }
  .left {
    text-align: center;
    .first {
      padding-bottom: 20px;
      font-size: 16px;
      color: #4b4949;
    }
  }
}
.bot-btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  .tishi {
    font-size: 12px;
    padding: 5px;
    background-color: #ffdead;
    padding-left: 20px;
    color: #777;
    span {
      color: #f24a44;
    }
  }
  .text {
    width: 100%;

    text-align: center;
    padding: 10px 0px;
    font-size: 12px;
    margin-left: 60px;
    .fanwei {
      color: #777;
    }
    .pei {
      color: rgb(158, 150, 145);
      padding-top: 5px;
    }
    .color {
      color: #f24a44;
    }
  }
  .con {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    div {
      width: 50%;
      text-align: center;
      height: 45px;
      line-height: 45px;
      margin: 0;
      span {
        font-size: 15px;
      }
      /deep/ .van-icon-arrow-down {
        float: right;
        margin: 15px;
      }
    }
    .div1 {
      border-left: 1px solid #eeeeee;
      display: flex;
      font-size: 14px;
      p {
        margin-left: 25px;
      }
    }
    /deep/ .van-stepper {
      margin-left: 25px;
    }
  }
  .btn {
    display: flex;
    width: 100%;
    align-items: center;
    /deep/ .van-button {
      width: 150px;
      height: 40px;
      font-size: 14px;
      line-height: 40px;
    }
  }
}
.content {
  background-color: #eeeeee;
  .head-bot {
    font-size: 14px;
    padding: 10px 5px;
  }
  .wrapper,
  .bottom {
    font-size: 14px;
    background-color: #fff;
    padding: 10px 5px;
    ul {
      // display: flex;
      // flex-flow: wrap;
      // justify-content: space-around;
      padding: 0 10px;
      margin: 0 auto;
      li {
        display: inline-block;
        width: 70px;
        height: 35px;
        border: 1px solid #d6d6d6;
        text-align: center;
        line-height: 35px;
        margin-top: 10px;
        margin-left: 10px;
      }
    }
  }

  .senf {
    padding: 10px 5px;
    h3 {
      font-size: 16px;
    }
  }
  .bottom {
    background-color: #fff;
  }
  .btn {
    display: flex;
    justify-content: space-between;
  }
}
</style>