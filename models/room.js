const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    name : {
        type: String ,
        required: true
    },
    maxcount : {
        type:Number,
        required: true
    },
    phonenumber : {
        type:Number,
        required:true
    },
    rentpermonth : {
        type:Number,
        require:true
    },
    imageurls : [],
    currentbookings : [],
    type: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    }
}, {
    timestamps : true,
})

const roomModel = mongoose.model('rooms', roomSchema)

module.exports = roomModel