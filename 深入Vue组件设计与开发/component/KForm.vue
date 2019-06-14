<template>
    <div>
      <form>
        <slot></slot>
      </form>
    </div>
</template>

<script>
export default {
  provide(){
    return {//把表单实例作为参数传递下去，子代可以直接使用
      form:this
    }
  },
  props:{
    model:{
      type:Object,
      require:true
    },
    rules:{
      type:Object,
      default:{}
    }
  },
  data(){
    return {

    }
  },
  methods: {

  },
  mounted(){
  }
}
</script>

<!-- 本页css -->
<style scoped>

</style>
