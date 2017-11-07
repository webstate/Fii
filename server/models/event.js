// event model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Event = new Schema({
  name: String,
  description: String,
  image: {type: String, default: ""},
  date: Date,
  nameEng: {type:String, default: ""},
  descEng: {type:String, default: ""},
  imageEng: {type: String, default: ""},
  nameFin: {type:String, default: ""},
  descFin: {type:String, default: ""},
  imageFin: {type: String, default: ""},
  nameRus: {type:String, default: ""},
  descRus: {type:String, default: ""},
  imageRus: {type: String, default: ""}
});



module.exports = mongoose.model('event', Event);
