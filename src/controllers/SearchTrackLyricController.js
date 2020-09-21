const muxisMatchApi = require('../services/muxisMatchApi');

class SearchTrackLyricController {
    async show(req, res) {
      const {artist, track} = req.query;

      const searchResponse = await muxisMatchApi.get(`/ws/1.1/track.search?q_artist=${artist}&q_track=${track}`)
      
      const {track_id} = searchResponse.data.message.body.track_list[0].track;
      
      const response = await muxisMatchApi.get(`/ws/1.1/track.lyrics.get?track_id=${track_id}`)
      const lyrics = response.data.message.body.lyrics.lyrics_body;

      return res.json(lyrics);
    }
}

module.exports =  new SearchTrackLyricController();