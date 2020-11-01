const {Schema,model} = require ('mongoose');


const lyricParticleSchema = new Schema( {
  time: Number,
  words: [Object]
});


const LyricSchema = new Schema({
  trackId:String,
  writers:String,
  lines:[lyricParticleSchema]
  
},{
  timestamps:true,
  toJSON:{
    virtuals:true 
 }
})


module.exports = model('Lyrics',LyricSchema);