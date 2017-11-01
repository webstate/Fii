// food model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Drink = new Schema({
  name: String,
  type: String,
  description: String,
  price: String,
  nameEng: {type: String, default: ""},
  descEng: {type: String, default: ""},
  subCategory: {type:String, default:""},
  nameFin: {type: String, default: ""},
  descFin: {type: String, default: ""},
  nameRus: {type: String, default: ""},
  descRus: {type: String, default: ""}
});



module.exports = mongoose.model('drink', Drink);
