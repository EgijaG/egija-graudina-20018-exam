<script>
import IconGrid from '../components/icons/IconGrid.vue';
import IconList from '../components/icons/IconList.vue';
import songs from '../data/songs';

export default {
    data() {
        return {
            songs
        }
    },
    components: {
        IconGrid,
        IconList,
    },
    computed: {
        albums() {
            let albums = [];
            songs.forEach(s => { if (!albums.includes(s.album)) (albums.push(s.album)) })
            return albums;

        }
    }

}
</script>
<template>
    <div id="album-view">
        <div class="wrapper-header">
            <h1>ALBUMS</h1>
            <div class="settings">
                <button id="btn-grid">
                    <IconGrid />
                </button>
                <button id="btn-list">
                    <IconList />
                </button>
            </div>
        </div>
        <ul id="list-albums" v-for="s in albums">
            <li class="album">
                <img id="img-album" v-bind:src="s.images[0].url" />
                <div class="album-info">
                    <h4 id="txt-album-name">{{ s.name }}</h4>
                    <p id="txt-album-artists">{{ s.artists.map(e => e.name).join(", ") }}</p>
                    <div class="album-year">
                        <p id="txt-album-year">{{ s.release_date }}</p>
                        <p id="txt-album-tracks">{{ songs.reduce((occ, cur) => cur.album.id === s.id ? ++occ :
                                occ,
                                0)
                        }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>