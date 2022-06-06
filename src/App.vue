<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <home />
    <message class="d-flex justify-content-center"/>
    <LoginForm />
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import home from './components/home.vue'
import message from './components/message.vue'
import LoginForm from './components/LoginForm.vue'
export default {
  name: 'App',
  components: {
    home,
    message,
    LoginForm,
  },
  computed: {
	...mapGetters(['getIsLogin', 'getloginMessage']),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
