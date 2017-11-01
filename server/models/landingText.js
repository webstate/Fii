var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var landingText = new Schema({
    place: String,
    text: String,
    lan: String
})

module.exports = mongoose.model('landingtext', landingText);
