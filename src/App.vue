<script>
import NavigationComponent from './components/NavigationComponent.vue';
import Login from './views/Login.vue';
import { auth } from './stores/auth';

export default { components: { Login, NavigationComponent }, data() { return { auth } } }
</script>
<template>
        <Header v-if="auth.is_authenticated==true"/>
        <NavigationComponent v-if="auth.is_authenticated==true"/>
        <div id="section-player" v-if="auth.is_authenticated==true">
            <AudioPlayer />
        </div>
</template>
