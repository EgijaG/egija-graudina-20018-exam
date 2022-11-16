<script>
import songs from '../data/songs';
import IconHeart from '../components/icons/IconHeart.vue';
import IconCaretUp from '../components/icons/IconCaretUp.vue';
import IconPlay from '../components/icons/IconPlay.vue';

export default {
    data() {
        return {
            search: '',
            localSongs: songs,
            show_favourites: false
        }
    },
    methods: {
        handleScroll(event) {
            this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
        },
        searchByTitle(title) {

        },
        sortBy() {

        },
        formatTime(millis) {
            var millis = parseInt(JSON.stringify(millis))
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }

    },
    components: { IconCaretUp, IconHeart, IconPlay },
    computed: {
        filtered_songs() {
            return songs;
        },
        filter() {
            localSongs = songs.filter(s => {
                return s.name.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    }


}
</script>
<template>
    <div id="songs-view" @scroll="handleScroll">
        <div class="wrapper-header">
            <h1>SONGS</h1>
            <div class="wrapper-search">
                <input id="input-search" type="text" placeholder="Search by title..." v-model="search"
                    v-on:keyup.enter="filter()" />
            </div>
            <div class="wrapper-settings">
                <button id="btn-show-favorites" :class="{ active: show_favourites }">Show Favorites</button>
            </div>
        </div>
        <div class="wrapper-songs">
            <table cellspacing="0" cellpadding="0">
                <tr ref="header">
                    <th id="th-id">#</th>
                    <th id="th-title">
                        Title
                        <IconCaretUp />
                    </th>
                    <th id="th-artist">Artist</th>
                    <th id="th-album">Album</th>
                    <th id="th-duration">
                        Duration
                        <IconCaretUp />
                    </th>
                </tr>
                <!-- Loop goes on this <tr> element -->
                <tr class="song" v-for="(s, ind) in filtered_songs">
                    <td id="td-index">
                        <IconPlay />
                        <span id="txt-index">{{ ind + 1 }}</span>
                    </td>
                    <td id="td-title">
                        <img v-bind:src="s.album.images[1].url" />
                        {{ s.name }}
                    </td>
                    <td id="td-artist">{{ s.artists.map(e => e.name).join(", ") }}</td>
                    <td id="td-album">{{ s.album.name }}</td>
                    <td id="td-duration">
                        {{ formatTime(s.duration_ms) }}
                        <IconHeart :class="{ active: show_favourites }" @click="" />
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>