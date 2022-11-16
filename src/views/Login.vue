<script>
import { auth } from '../stores/auth';

export default {

    data() {
        return {
         auth
        }
    },
    methods: {
        isDisabled(value) {
            return value.length > 0;
        }
    }
}
</script>

<template>
    <div v-if="!auth.is_authenticated" id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input id="input-email" placeholder="E-mail" />
            <input id="input-password" type="password" placeholder="Password" />
            <button id="btn-submit" type="submit">LOGIN</button>
        </form>
    </div>
</template>