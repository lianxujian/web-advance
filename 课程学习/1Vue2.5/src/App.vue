<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- 条件语句 -->
    <p v-if="showName">{{name}}</p>
    <!-- <p>
      <input type="text" v-model="text">
    </p>-->
    <!-- 循环语句 -->
    <ul>
      <li v-for="(good, index) in goods" :key="good.id">
        <span>{{good.text}}</span>
        <span>￥{{good.price}}</span>
        <button @click="addGood(index)">加购物车</button>
      </li>
    </ul>
    <!-- 购物车 -->
    <cart :name="name"></cart>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Cart from "./components/Cart.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    HelloWorld,
    Cart
  },
  data() {
    return {
      name: "开课吧购物车",
      showName: false,
      goods: [],
      text: ""
    };
  },
  async created() {
    // 创建钩子，组件创建完成执行一次
    setTimeout(() => {
      this.showName = true;
    }, 1000);

    // 查询产品列表
    try {
      const response = await axios.post("/api/goods");
      console.log(response);
      this.goods = response.data.list;
    } catch (error) {
      // 错误处理
    }

    // 不用await
    // axios.get("/api/goods").then(resp => {
    //   this.goods = response.data.list;
    // }).catch(err => {
    //   // 错误处理
    // })
  },
  methods: {
    addGood(i) {
      // 获取goods中对应项
      const good = this.goods[i];
      this.$bus.$emit("addCart", good);
      // this.$root.$emit('addCart', good)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
