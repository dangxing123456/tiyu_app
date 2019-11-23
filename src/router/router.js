import Vue from "vue";
import Router from "vue-router";
import store from "../store/store";

// tarBar ----- 子页面
import Index from "@/views/index/index.vue";
// 内嵌组件

Vue.use(Router);

const router = new Router({
  /**
   * name: 组件名称 (需要开启缓存，路由组件名称与组件内名称必须一致，区分大小写)
   * meta：{
   *  title: 页面标题，
   *  keepAlive：是否开启缓存（开启缓存是组件内name，所以这里需要和routes的name配合）
   *  isTransition: 是否开启过渡动画
   * }
   */
  routes: [
    {
      path: "/",
      component: Index,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/index/subviews/home.vue"),
          meta: {
            keepAlive: true,
            isTransition: true,
            title: "首页",
            isMember: false,
            isLogin: false,
            icon: "1-1",
            icon_press: "1-2",
            index: 0
          }
        },
        {
          path: "/score",
          name: "score",
          component: () => import("@/views/index/subviews/score.vue"),
          redirect: { name: "theScore" },
          children: [
            {
              path: "/theScore",
              name: "theScore",
              component: () => import("@/views/scores/theScore.vue"),
              redirect: { name: "football" },
              children: [
                {
                  path: "/football",
                  name: "football",
                  component: () => import("@/views/ball/football.vue")
                },
                {
                  path: "/basketball",
                  name: "basketball",
                  component: () => import("@/views/ball/basketball.vue")
                }
              ]
            },
            {
              path: "/lottery",
              name: "lottery",
              component: () => import("@/views/scores/lottery.vue")
            }
          ],
          meta: {
            keepAlive: false,
            isTransition: true,
            title: "比分",
            isMember: false,
            icon: "2-1",
            icon_press: "2-2",
            isLogin: false,
            index: 1
          }
        },
        {
          path: "/find",
          name: "find",
          component: () => import("@/views/index/subviews/find.vue"),
          redirect: { name: "documentary" },
          children: [
            {
              // 跟单
              path: "/documentary",
              name: "documentary",
              component: () => import("@/views/found/documentary.vue")
            },
            {
              // 推荐
              path: "/recommended",
              name: "recommended",
              component: () => import("@/views/found/recommended.vue")
            },
            {
              // 合买
              path: "/chipped",
              name: "chipped",
              component: () => import("@/views/found/chipped.vue")
            }
          ],
          meta: {
            keepAlive: false,
            isTransition: true,
            title: "发现",
            isMember: false,
            isLogin: false,
            icon: "3-1",
            icon_press: "3-2",
            index: 2
          }
        },
        {
          path: "/mine",
          name: "mine",
          component: () => import("@/views/index/subviews/mine.vue"),
          meta: {
            keepAlive: false,
            isTransition: true,
            title: "我的",
            isMember: false,
            isLogin: true,
            icon: "4-1",
            icon_press: "4-2",
            index: 3
          }
        }
      ]
    },
    //连红榜
    {
      path: "/redlist",
      name: "redlist",
      component: () => import("@/views/rankingList/redlist.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "连红榜",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //命中榜
    {
      path: "/hitlist",
      name: "hitlist",
      component: () => import("@/views/rankingList/hitlist.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "命中榜",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //盈利榜
    {
      path: "/profitlist",
      name: "profitlist",
      component: () => import("@/views/rankingList/profitlist.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "盈利榜",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    }, //竞彩足球
    {
      path: "/racefootball",
      name: "racefootball",
      component: () => import("@/views/raceball/racefootball.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "竞彩足球",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //竞彩篮球
    {
      path: "/racebasketball",
      name: "racebasketball",
      component: () => import("@/views/raceball/racebasketball.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "竞彩篮球",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //足球全部玩法
    {
      path: "/allplay",
      name: "allplay",
      component: () => import("@/views/raceball/allplay.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "全部玩法",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //篮球全部玩法
    {
      path: "/allplayBasket",
      name: "allplayBasket",
      component: () => import("@/views/raceball/allplayBasket.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "全部玩法",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //我的关注
    {
      path: "/myguanzhu",
      name: "myguanzhu",
      component: () => import("@/views/guanzhu/myguanzhu.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "我的关注",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },

    //足球赛事分析
    {
      path: "/matchFenxi",
      name: "matchFenxi",
      component: () => import("@/views/fenxi/matchFenxi.vue"),
      redirect: { name: "analysis" },
      children: [
        {
          //分析
          path: "/analysis",
          name: "analysis",
          component: () => import("@/views/fenxiList/analysis.vue")
        },
        {
          // 情报
          path: "/intelligence",
          name: "intelligence",
          component: () => import("@/views/fenxiList/intelligence.vue")
        },
        {
          //赔率
          path: "/losspercent",
          name: "losspercent",
          component: () => import("@/views/fenxiList/losspercent.vue"),
          children: [
            {
              //必发
              path: "/bifa",
              name: "bifa",
              component: () => import("@/views/peilv/bifa.vue")
            },
            {
              //大小球
              path: "/daxiao",
              name: "daxiao",
              component: () => import("@/views/peilv/daxiao.vue")
            },
            {
              //凯利
              path: "/kaili",
              name: "kaili",
              component: () => import("@/views/peilv/kaili.vue")
            },
            {
              //欧赔
              path: "/oupei",
              name: "oupei",
              component: () => import("@/views/peilv/oupei.vue")
            },
            {
              //亚赔
              path: "/yapei",
              name: "yapei",
              component: () => import("@/views/peilv/yapei.vue")
            }
          ]
        },
        {
          //方案
          path: "/plan",
          name: "plan",
          component: () => import("@/views/fenxiList/plan.vue")
        }
      ],
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "赛事分析",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    // 篮球赛事分析
    {
      path: "/fenxinBasket",
      name: "fenxinBasket",
      component: () => import("@/views/fenxi/fenxinBasket.vue"),
      redirect: { name: "analysisBasket" },
      children: [
        {
          //分析
          path: "/analysisBasket",
          name: "analysisBasket",
          component: () => import("@/views/fenxiList/analysisBasket.vue")
        },
        {
          // 亚赔
          path: "/yapeiBasket",
          name: "yapeiBasket",
          component: () => import("@/views/fenxiList/yapeiBasket.vue")
        },
        {
          //欧赔
          path: "/oupeiBasket",
          name: "oupeiBasket",
          component: () => import("@/views/fenxiList/oupeiBasket.vue")
        },
        {
          //大小
          path: "/daxiaoBasket",
          name: "daxiaoBasket",
          component: () => import("@/views/fenxiList/daxiaoBasket.vue")
        }
      ],
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "赛事分析",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //竞彩专家
    {
      path: "/experts",
      name: "experts",
      component: () => import("@/views/found/experts.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "竞彩专家",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //专家战绩
    {
      path: "/ExpertsSuggest",
      name: "ExpertsSuggest",
      component: () => import("@/views/detail/ExpertsSuggest.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "专家战绩",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //名人战绩
    {
      path: "/celebrityRecord",
      name: "celebrityRecord",
      component: () => import("@/views/detail/celebrityRecord.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "名人战绩",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //方案详情
    {
      path: "/planDetails",
      name: "planDetails",
      component: () => import("@/views/detail/planDetails.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "方案详情",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //合买详情
    {
      path: "/chippedDetails",
      name: "chippedDetails",
      component: () => import("@/views/detail/chippedDetails.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "合买详情",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //认购详情
    {
      path: "/subscribeDetails",
      name: "subscribeDetails",
      component: () => import("@/views/detail/subscribeDetails.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "认购详情",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },
    //确认方案
    {
      path: "/confirmPlan",
      name: "confirmPlan",
      component: () => import("@/views/detail/confirmPlan.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "确认方案",
        isMember: false,
        isLogin: false,
        icon: "4-1",
        icon_press: "4-2"
      }
    },

    // 注册登录
    {
      path: "/login/:name?",
      name: "login",
      component: () => import("@/views/login/login.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "登录",
        isMember: false,
        isLogin: false
      }
    },
    {
      path: "/register/:val?",
      name: "register",
      component: () => import("@/views/login/register.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "注册",
        isMember: false,
        isLogin: false
      }
    },
    {
      path: "/registerPassword",
      name: "registerPassword",
      component: () => import("@/views/login/registerPassword.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "设置密码",
        isMember: false,
        isLogin: false
      }
    },
    {
      path: "/resetPassword",
      name: "resetPassword",
      component: () => import("@/views/login/resetPassword.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "修改密码",
        isMember: false,
        isLogin: false
      }
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("@/views/mine/setting.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "设置",
        isMember: false,
        isLogin: false
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.index != undefined) {
    store.state.tabActiveIndex = to.meta.index;
  }
  if (to.meta.isLogin) {
    if (!window.localStorage.getItem("token")) {
      if (from.name == "login") {
        router.push("/");
      } else {
        router.push("/login/" + from.name);
      }
    } else {
      next();
    }
    if (to.meta.isMember) {
      if (!window.localStorage.getItem("token")) {
        router.push("/login/" + from.name);
      } else {
        if (store.state.isMember) {
          next();
        } else {
          router.push("/buymember");
        }
      }
    }
  } else {
    next();
  }
});

router.afterEach(route => {
  // console.log(route)
  // console.log("跳转")
});

export default router;
