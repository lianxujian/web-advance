1、computed
2、this.$root.$emit()          Vue.prototype.$bus = new Vue();
3、watch:{
		属性:{
			handler(new,old){

			},
			deep:true
		}
	}
4、this.$set(obj,属性，值);
5、// 订阅store变化
  store.subscribe((mutation, state) => {
    switch (mutation.type) {
      case "setToken":
        localStorage.setItem("token", JSON.stringify(state.token));
        break;
      case "addCart":
        localStorage.setItem("cart", JSON.stringify(state.cart));
        break;
    }
  });
6、自定义历史回退 history 思想 
7、自定义组件（提示消息3秒后消失）单例模式思想 创建一个虚拟dom然后追加到body
8、请求拦截器、路由拦截器、