const mongoose = require('mongoose')

const UtilsSchema = mongoose.Schema({
    about:{
        type:String,
        required:false
    }
})

const UtilsModel = mongoose.model('Utils', UtilsSchema)

module.exports = UtilsModel;
