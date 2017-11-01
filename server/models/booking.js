var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Booking = new Schema({
    people: String,
    date: Date,
    name: String,
    email: String,
    phone: String,
    info: String
});

module.exports = mongoose.model('booking', Booking);
