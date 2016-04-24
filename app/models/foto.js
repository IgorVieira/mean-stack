var mongoose = require('mongoose')

var foto =  mongoose.Schema({
    titulo:{
        type:String,
        require:true
    },
    url:{
        type:String,
        required:true
    },
    grupo:{
        type: Number,
        required:true
    }




})

mongoose.model('Foto', foto)
