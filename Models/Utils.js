const mongoose = require('mongoose')

const UtilsSchema = mongoose.Schema({
    about:{
        type:String,
        required:false
    },
    announcement:{
            text:{
                type:String,
                required:false
            },
            pic:{
                type:String,
                required:false
            }
    },
    giftcards:[{
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:false
        },
        pic:{
            type:String,
            required:true
        }
    }]
})

const UtilsModel = mongoose.model('Utils', UtilsSchema)

module.exports = UtilsModel;
