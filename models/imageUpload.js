const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    filePath: {type: String, require: false}
});
module.exports = mongoose.model("images", ImageSchema)