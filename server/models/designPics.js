var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var designPicture = new Schema({
    picturePath:String,
    block: String, 
})

module.exports = mongoose.model('designpicture', designPicture);
