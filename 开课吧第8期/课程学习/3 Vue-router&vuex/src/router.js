import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Page1 from "@/views/Page1.vue";
import Page2 from "@/views/Page2.vue";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import store from "./store";

// 插件挂载
Vue.use(Router);

function func({ params, query }) {
  return {
    id: params.id,
    msg: params.msg,
    foo: query.foo
  };
}

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: "/dashboard/page1" },
    {
      path: "/dashboard",
      component: Dashboard,
      beforeEnter(to,from,next){
        if (store.state.isLogin) {
          next();
        } else {
          next('/login?redirect='+to.path);
        }
      },
      children: [
        { path: "static", component: Page1, props: { foo: "bar" } }, // 给组件传静态值
        { path: "page1/:foo", component: Page1, props: true }, // 将route.params
        {
          path: "page2/:id/:msg",
          name: "page2",
          component: Page2,
          props: func
        }
      ]
    },
    { path: "/login", name: "login", component: Login }
  ]
});

// 全局路由守卫
router.beforeEach((to,from,next)=>{
  console.log(to);
  // if (to.path !== '/login') { // 要求登录
  //   if (window.isLogin) {
  //     next();
  //   } else {
  //     next('/login?redirect='+to.path);
  //   }
  // } else {
  //   next();
  // }
  next();
})
router.afterEach((to,from)=>{

})
export default router;
