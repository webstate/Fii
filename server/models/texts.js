var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Texts = new Schema({
    category: String, 
    title:String,
    text: String
})

module.exports = mongoose.model('texts', Texts);
