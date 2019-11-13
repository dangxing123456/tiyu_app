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
    //全部玩法
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
    //专家建议
    {
      path: "/ExpertsSuggest",
      name: "ExpertsSuggest",
      component: () => import("@/views/ExpertsSuggestlist/ExpertsSuggest.vue"),
      meta: {
        keepAlive: false,
        isTransition: true,
        title: "专家建议",
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
