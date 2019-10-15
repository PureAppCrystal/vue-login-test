<template>
    <div>
        <form @submit.prevent="handleSubmit">
            ID <input type='text' name='username' v-model="username" autocomplete="off" /><br>
            PW <input type='password' name='password' v-model="password" autocomplete="off"/><br>
            <button type='submit'>로그인</button>
        </form>

    </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
    name: 'loginPage',
    date() {
        return {
            username: "admin",
            password: "1234",
        }
    },
    methods: {
        ...mapActions('user', ['login']),
        handleSubmit: function() {
            console.log("====== try login ======")
            console.log("username : ", this.username);
            console.log("password : ", this.password)
            const { username, password } = this;
            this.login({username, password})
        }
    }
}
</script>