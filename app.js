const { default: axios } = require("axios");
const musicBrainz = "https://musicbrainz.org/ws/2/release/f6ab348d-81a5-4bdd-9fae-2536fba72c20?inc=recordings";

const getJsonResponseFromAPI = axios.get(musicBrainz).then(function (response) {
    console.log(response);
  })