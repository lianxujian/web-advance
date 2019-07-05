<template>
    <div>
        <h3>page2</h3>
        <!-- 获取路由路径参数 -->
        <p>id:{{$route.params.id}}</p>
        <p>msg:{{$route.params.msg}}</p>
        <p>msg:{{$route.query.foo}}</p>
        <!-- 通过属性传递过来 -->
        <p>id:{{id}}</p>
        <p>msg:{{msg}}</p>
        <p>msg:{{foo}}</p>
    </div>
</template>

<script>
    export default {
        props: ['id','msg','foo'],
        created(){
            console.log(this.$route.params.msg);
            // 查询参
            console.log(this.$route.query.foo);
            
        }
    }
</script>

<style scoped>

</style>