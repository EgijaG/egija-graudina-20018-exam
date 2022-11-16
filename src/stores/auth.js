import { reactive } from "vue";
import router from "../router/index.js";

export const auth = reactive({
  user: {
    name: "Egija",
    surname: "Graudina",
    code: "IT20018",
    favourite_songs: [],
  },
  is_authenticated: localStorage.is_authenticated ?? false,

  setUserData(name, surname, code) {
    this.user.name = name;
    this.user.surname = surname;
    this.user.code = code;
  },

  authenticate(email, password) {
    console.log("Authenticating....");
    const mail = "egija.graudina@va.lv";
    const pass = "123456";
    if (email != mail && password != pass) {
      console.log("Incorrect credentials");
      return;
    }
    this.is_authenticated = true;
    localStorage.is_authenticated = true;
    router.push("/");
  },

  logout() {
    localStorage.clear();
    this.is_authenticated = false;
    localStorage.is_authenticated = false;
    // change to login page
    router.push("/login");
  },

  toggleFavorite(songID) {
    if (!this.user.favourite_songs.includes(songID)) {
      this.user.favourite_songs.push(songID);
    } else {
      this.user.favourite_songs.splice(
        this.user.favourite_songs.findIndex((id) => songID == id),
        1
      );
    }
    localStorage.setItem("fav_songs", this.user.favourite_songs);
  },

  getFavoriteSongs() {
    return this.user.favourite_songs;
  },
});
