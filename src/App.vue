<script>
import Navigation from './components/NavigationComponent.vue';
import { auth } from './stores/auth';

export default { components: { Navigation }, data() { return { auth } } }
</script>
<template>
    <Header v-if="auth.is_authenticated"></Header>
    <Navigation v-if="auth.is_authenticated" />
    <div id="section-player">
        <AudioPlayer />
    </div>
</template>
