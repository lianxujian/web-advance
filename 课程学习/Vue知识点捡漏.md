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