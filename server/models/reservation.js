var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reservation = new Schema({
    date: Date,
    people: String,
    details: [{name: String, email:String, phone:String}]
})

module.exports = mongoose.model('reservation', reservation);
