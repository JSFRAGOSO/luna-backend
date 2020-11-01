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

    const lyric = await Lyrics.create({trackId, writers, lines});

    return res.status(201).json(lyric);
  }
}

module.exports = new LyricController();