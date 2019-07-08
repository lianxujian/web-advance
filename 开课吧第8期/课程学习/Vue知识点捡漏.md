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
8、请求拦截器、路由拦截器
9、Array.filter()  //filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
   Array every()   //如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
   Array some()    //如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
   Array map()     //map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
   Array.reduce()  //reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
   
   var numbers = [65, 44, 12, 4];
   function getSum(total, num) {
       return total + num;
   }
   function myFunction(item) {
       document.getElementById("demo").innerHTML = numbers.reduce(getSum);
   }        //125
