const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    shortDescription:{
        type:String,
        required:false
    },
    longDescription:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type: [String],
        required:true
    },
    category:{
        type:[String],
        required:true
    }
})

const ItemModel = mongoose.model('Items', ItemSchema)

module.exports = ItemModel;