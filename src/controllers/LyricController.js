const Lyrics = require('../models/Lyrics');

class LyricController {
  async show(req, res) {
    const {trackId} = req.params;
    const lyric = await Lyrics.findOne({trackId});

    return res.json(lyric);
  }

  async store(req, res) {
    const {
      provider,
      writers,
      kind,
      trackId,
      lines,
    } = req.body;

    const findLyric = await Lyrics.findOne({trackId});
    
    if(findLyric)
      return res.json(findLyric);

    const lyric = await Lyrics.create({trackId, writers, lines});
    
    return res.status(201).json(lyric);
  }
}

module.exports = new LyricController();