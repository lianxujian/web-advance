<template>
    <div>
        <h3>Dashboard</h3>
        <!-- 父组件必须有一个路由出口，负责显示子路由内容 -->
        <router-view></router-view>

        <button @click="inc">increase</button>
        <button @click="incAsync">incAsync</button>
        <p>{{count}}</p>
        <p>您的余额为：{{money}}</p>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

    export default {
        methods: {
            ...mapMutations(['increase']),
            ...mapActions(['increaseAsync']),
            inc() {
                // this.$store.commit('increase')
                this.increase()
            },
            incAsync() {
                // this.$store.dispatch('increaseAsync')
                this.increaseAsync('参数')
            }
        },
        computed: { 
            // {count: this.$store.state.count}
            ...mapState(['count']),
            ...mapGetters(['money'])
        },
    }
</script>

<style scoped>

</style>