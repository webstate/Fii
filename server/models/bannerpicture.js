var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BannerPicture = new Schema({
    picturePath:String
})

module.exports = mongoose.model('bannerpictures', BannerPicture);
