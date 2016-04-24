var mongoose = require('mongoose')

var user =  mongoose.Schema({
    login:{
        type:String,
        require:true
    },
    senha:{
        type:String,
        required:true
    }




})

mongoose.model('Usuario', user)
