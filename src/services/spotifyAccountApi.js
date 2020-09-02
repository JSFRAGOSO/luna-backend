const axios  = require('axios');

const spotifyApi = axios.create({
  baseURL: process.env.SPOTIFY_ACCOUNTS_API_URL,
});

module.exports =  spotifyApi;