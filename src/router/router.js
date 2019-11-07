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
