<template>
    <div>
      <input :type="type" :value="value" @input="onInput">
    </div>
</template>

<script>
export default {
  props:{
    value:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:'text'
    }
  },
  data(){
    return {

    }
  },
  methods: {
    onInput(e){
      //派发事件，通知父组件输入值变化
      this.$emit('input',e.target.value)

      //通知父组件校验 $parent（父组件）
      this.$parent.$emit('validate');
    }
  },
  mounted(){
    //console.log(this.value);
  }
}
</script>

<!-- 本页css -->
<style scoped>

</style>
