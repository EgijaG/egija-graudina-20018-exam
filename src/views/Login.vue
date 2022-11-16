<script>
import { auth } from '../stores/auth';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        sumbitForm() {
            auth.authenticate(this.email, this.password);
        }

    }
}
</script>
<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input id="input-email" placeholder="E-mail" v-model='email' type="email" />
            <input id="input-password" type="password" placeholder="Password" v-model='password' />
            <button id="btn-submit" type="submit" :disabled="!email || password.length < 6"
                @click="sumbitForm()">LOGIN</button>
        </form>
    </div>
</template>