<template>
    <div v-if="isLogin">
        <button type="submit" class="btn btn-danger" @click="logout">Çıkış Yap</button>
    </div>
</template>
<script>
import { mapGetters , mapActions} from 'vuex';
export default {
    computed: {
        ...mapGetters(['isLogin'])
    },
    methods:{
        ...mapActions(['logout']),
        logout(){
         this.logout();
        }
    }
}
</script>