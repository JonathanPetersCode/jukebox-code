const { default: axios } = require("axios");

const kansasAlbum = "https://api.deezer.com/album/78167/"
const kansasAlbum = "https://api.deezer.com/album/78167/"


axios.get(deezerMusicSample).then(res => {
    // console.log(`statusCode: ${res.status}`)
    // console.log(Object.keys(res.data))
    console.log(res.data)
  })
