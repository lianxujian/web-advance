<template>
  <div>
    <h3>page1</h3>
    <p>
      <button @click="gotoPage2()">跳转至Page2</button>
    </p>
    <p>{{foo}}</p>
    <p>{{$store.state.count}}</p>
  </div>
</template>

<script>
export default {
  props: {
    foo: {
      type: String,
      default: ""
    }
  },
//   watch:{
//       $route(){}
//   }
  methods: {
    gotoPage2() {
      // this.$router.push('/page2/1/vuejs');
      this.$router.push({ name: "page2", params: { id: 1, msg: "vuejs" } });
    }
  },
//   beforeRouteEnter(to, from, next) {
//     if (window.isLogin) {
//       next();
//     } else {
//       next("/login?redirect=" + to.path);
//     }
//   }
    // beforeRouteUpdate(to,from,next){
    //     // 仅路由参数发生变化时触发，比如 /page/vue  /page/react
    //     next()
    // }
};
</script>

<style scoped>
</style>