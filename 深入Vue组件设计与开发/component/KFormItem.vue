<template>
    <div>
      <label v-if="label">{{label}}</label>
      <!-- input占位符 -->
      <slot></slot>
      <!--错误信息展示-->
      <p v-if="error">{{error}}</p>
    </div>
</template>

<script>
export default {
  inject:['form'],
  props:{
    label:{
      type:String,
      default:''
    },
    prop:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      error:''
    }
  },
  methods: {
    validate(){
      //执行具体校验工作
      //1、获取校验规则
      console.log(this.form.rules[this.prop]);
      //2、获取数据模型
      console.log(this.form.model[this.prop]);

      /*//获取校验规则
      const rules = this.form.rules[this.prop];
      //获取数据模型
      const value = this.form.model[this.prop];
      //校验对象
      const descriptor = {[this.prop]:rules};
      //创建校验器
      const schema = new Schema(descriptor);
      //校验
      schema.validate({[this.prop]:value},errors => {
        if(errors){
          this.error = errors[0].message;
        }else{
          this.error = '';
        }
      })*/
    }
  },
  mounted(){
    this.$on('validate',this.validate);
  }
}
</script>

<!-- 本页css -->
<style scoped>

</style>
