<script>
import NavigationComponent from './components/NavigationComponent.vue';
import Login from './views/Login.vue';
import { auth } from './stores/auth';

export default {
    components: { Login, NavigationComponent },
    data() { return { auth } },
    computed: {
        local_auth() {
            return localStorage.getItem('is_authenticated');
        }
    }
}
</script>
<template>
    <Header v-if="auth.is_authenticated" />
    <div id="section-body">
        <NavigationComponent v-if="auth.is_authenticated" />
        <router-view class="section-router"></router-view>
    </div>
    <div id="section-player" v-if="auth.is_authenticated">
        <AudioPlayer />
    </div>

</template>
