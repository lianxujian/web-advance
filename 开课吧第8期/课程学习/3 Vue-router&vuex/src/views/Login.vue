<template>
  <div>
    Login
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  methods: {
    async login() {
      // 登录成功
      // window.isLogin = true;
      await this.$store.dispatch("submitLogin");

      if (this.$store.state.isLogin) {
        // 登录成功
        const { redirect } = this.$route.query;
        // const redirect = this.$route.query.redirect;
        if (redirect) {
          // 有回跳地址就去哪
          this.$router.push(redirect);
        } else {
          // 没有去首页
          this.$router.push("/");
        }
      } else {
          alert('登录失败，请重试！')
      }
    }
  }
};
</script>

<style scoped>
</style>