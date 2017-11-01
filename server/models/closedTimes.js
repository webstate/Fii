var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ClosedTimes = new Schema({
    start: Date,
    end: Date,
    reason: String
});

module.exports = mongoose.model('closedTimes', ClosedTimes);
