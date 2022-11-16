import { reactive } from "vue";

export const player = reactive({
  playlist: [],
  now_playing: {}, // SONG OBJECT
  setPlaylist(songs) {
    this.playlist = songs;
    console.log(this.playlist);
  },
  setNowPlaying(song) {
    this.now_playing = song;
    console.log(this.playlist);
  },
  getNowPlayingSongId() {
    return this.now_playing?.id;
  },
  getNowPlaying() {
    return this.now_playing;
  },
  getNowPlayingAlbumID() {
    return this.now_playing?.album?.id ?? null;
  },
  getNowPlayingSongName() {
    return this.now_playing?.name ?? "";
  },
  getNowPlayingSongImage() {
    return this.now_playing?.album?.images[1].url ?? "";
  },
  getNowPlayingArtists() {
    return this.now_playing?.artists?.map((artist) => artist.name).join(", ");
  },
  getNowPlayingSongPreview() {
    return this.now_playing?.preview_url;
  },
  getNextSong() {
    console.log(this.playlist);
    let index = this.playlist.findIndex(i => (i.id==this.now_playing.id));
    console.log(`Current index: ${index} & next is ${index+1}`);
  },
  getPreviousSong() {
    let index = this.playlist.findIndex(i => (i.id==this.now_playing.id));
    console.log(`Current index: ${index} & next is ${index-1}`);
  },
  resetNowPlaying() {
    this.now_playing = {};
  },
});
