// food model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Food = new Schema({
  name: String,
  course: String,
  description: String,
  price: String,
  nameEng: {type: String, default: ""},
  descEng: {type: String, default: ""},
  nameFin: {type: String, default: ""},
  descFin: {type: String, default: ""},
  nameRus: {type: String, default: ""},
  descRus: {type: String, default: ""}
});



module.exports = mongoose.model('food', Food);
