const { default: axios } = require("axios");
const musicBrainzSampleRelease = "http://musicbrainz.org/ws/2/release/59211ea4-ffd2-4ad9-9a4e-941d3148024a?inc=artist-credits+labels+discids+recordings";

axios.get(musicBrainzSampleRelease).then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })