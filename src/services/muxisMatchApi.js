const axios  = require('axios');

const muxisMatchApi = axios.create({
  baseURL: process.env.MUSIXMATCH_API_URL,
});

muxisMatchApi.defaults.params = {}
muxisMatchApi.defaults.params['apikey'] = process.env.MUSIXMATCH_API_KEY;

module.exports =  muxisMatchApi;