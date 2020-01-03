<template>
  <div class="container">
    <navBar></navBar>
    <div class="head">
      <img src="@/assets/images/paihang.png" alt srcset />
    </div>
    <div class="main">
      <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
        <van-tabs v-model="active" sticky :offset-top="176" type="line">
          <van-tab title="连红榜">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="getjoinWinTop"
            >
              <div
                class="content"
                v-for="(item,index) in joinWinTopList"
                :key="index"
                @click="detailExpert(item.userId)"
              >
                <div class="first">
                  <span>{{index+1}}</span>
                </div>
                <div class="info">
                  <img :src="item.icon" alt srcset />
                  <!-- <img src="@/assets/images/paihang.png" alt srcset /> -->
                  <span class="name">{{item.nickname}}</span>

                  <span v-if="item.flowCount>0">{{item.flowCount}}</span>
                </div>
                <div class="last">
                  <p>{{item.winCount}}</p>
                  <p>连红</p>
                </div>
              </div>
            </van-list>
          </van-tab>
          <van-tab title="命中榜">
            <van-list
              v-model="loading1"
              :finished="finished1"
              finished-text="没有更多了"
              @load="getSheng"
            >
              <div
                class="content"
                v-for="(item,index) in shopTop"
                :key="index"
                @click="detailExpert(item.userId)"
              >
                <div class="first">
                  <span>{{index+1}}</span>
                </div>
                <div class="info">
                  <img :src="item.icon" alt srcset />
                  <span class="name">{{item.nickname}}</span>

                  <span v-if="item.flowCount>0">{{item.flowCount}}</span>
                </div>
                <div class="last">
                  <p>{{item.winRate*100}}%</p>
                  <p>命中率</p>
                </div>
              </div>
            </van-list>
          </van-tab>
          <van-tab title="大神榜">
            <van-list
              v-model="loading2"
              :finished="finished2"
              finished-text="没有更多了"
              @load="getTopPerson"
            >
              <div
                class="content"
                v-for="(item,index) in person"
                :key="index"
                @click="detailExpert(item.userId)"
              >
                <div class="first">
                  <span>{{index+1}}</span>
                </div>
                <div class="info">
                  <img :src="item.icon" alt srcset />
                  <span class="name">{{item.nickname}}</span>

                  <span class="count" v-if="item.flowCount>0">{{item.flowCount}}</span>
                </div>
                <div class="last">
                  <p>{{item.hotCount}}</p>
                  <p>带红人数</p>
                </div>
              </div>
            </van-list>
          </van-tab>
        </van-tabs>
      <!-- </van-pull-refresh> -->
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navbar/navbar.vue";

export default {
  name: "bang",
  components: {
    navBar
  },
  data() {
    return {
      list: [],
      active: 0,
      joinWinTopList: [],
      person: [],
      shopTop: [],
      loading: false,
      finished: false,
      page: 1,
      loading1: false,
      finished1: false,
      page1: 1,
      loading2: false,
      finished2: false,
      page2: 1,
      isLoading: false
    };
  },
  created() {},
  methods: {
    detailExpert(id) {
      this.$router.push("/personHome/" + id);
    },
    getSheng() {
      this.$SERVER
        .getShootTop({
          pagenum: this.page1,
          pagesize: 10
        })
        .then(res => {
          this.shopTop = [...this.shopTop, ...res.data.list];
          this.loading1 = false;
          this.page1++;
          if (!res.data.hasNextPage) {
            this.finished1 = true;
          }
        });
    },
    getjoinWinTop() {
      this.$SERVER
        .joinWinTop({
          pagenum: this.page,
          pagesize: 10
        })
        .then(res => {
          this.joinWinTopList = [...this.joinWinTopList, ...res.data.list];
          this.loading = false;
          this.page++;
          if (!res.data.hasNextPage) {
            this.finished = true;
          }
        });
    },
    getTopPerson() {
      this.$SERVER
        .getTopPerson({
          pagenum: this.page2,
          pagesize: 10
        })
        .then(res => {
          this.person = [...this.person, ...res.data.list];

          this.loading2 = false;
          this.page2++;
          if (!res.data.hasNextPage) {
            this.finished2 = true;
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.head {
  width: 100%;
  height: 130px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.main {
  background-color: #fff;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 5px;
    position: relative;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    .first {
      span {
        font-size: 14px;
        color: #777;
      }
    }
    .info {
      width: 60%;
      display: flex;
      align-items: center;
      .name {
        font-size: 14px;
        margin-left: 10px;
        color: #494949;
      }
      .count {
        display: inline-block;
        width: 14px;
        height: 14px;
        color: #fff;
        background-color: red;
        font-size: 12px;
        border-radius: 50%;
        text-align: center;
        line-height: 14px;
        position: absolute;
        right: 275px;
        bottom: 11px;
      }
      // span {
      //   &:last-child {
      //   }
      // }
    }
    .last {
      text-align: center;
      width: 50px;
      p {
        &:first-child {
          color: red;
          font-weight: bold;
        }
        &:last-child {
          font-size: 12px;
          color: red;
        }
      }
    }
  }
}
</style>