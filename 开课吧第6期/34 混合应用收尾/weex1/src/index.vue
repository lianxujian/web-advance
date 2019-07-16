<template>
  <div>aaa</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      arr: [12, 5, 8, 9, 12, 88]
    }
  }
}
</script>

<style scoped>
  .box {height: 200px;}
</style>
