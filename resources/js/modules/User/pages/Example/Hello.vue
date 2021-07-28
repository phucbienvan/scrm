<template>
    <div v-if="is_mounted">

        <el-button @click="sendHelloWorld">Hello {{userinfo.name}}</el-button>
    </div>
</template>

<script>
import {PostHelloWorld} from '../../services/user.ajax.js'
import { mapState, mapActions } from 'vuex';


export default {

computed:{
    ...mapState('user', ['userinfo']),
},

data(){
    return {
    is_mounted: true
    }
},

async mounted () {
    this.doFetchUserInfo();
    this.$message('Bạn đã login là: ' + this.userinfo.name );
},

methods:{
    ...mapActions('user', ['doFetchUserInfo']),

    async sendHelloWorld()
    {
       try{
            const response = await PostHelloWorld({name: 'sung'});

       }catch(e)
       {

       }
    }
}
}
</script>

<style>

</style>
