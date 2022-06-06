<template>
  <div>
	<div class="alert alert-danger" v-if="getloginMessage">
		Username and/or password incorrect!
	</div>
	<div class="alert alert-success" v-if="getIsLogin">
		Login successfully!
	</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters(['getIsLogin', 'getloginMessage'])
	}
}
</script>

<style>
</style>