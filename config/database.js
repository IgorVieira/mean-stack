module.exports = function(uri){
    var mongoose = require('mongoose')

    mongoose
        .connect('mongodb://'+uri)
    mongoose
        .connection.on('connected', ()=>{
            console.log('Mongodb is Connected')
        })
    mongoose
        .connection.on('error', (error) =>{
            console.log('ERROR in connection')
        })
    mongoose
        .connection.on('disconnected', ()=>{
            console.log('MongoDB is disconnected')
        })


    process.on('SIGINT', ()=>{
        mongoose.connection.close(()=>{
            console.log('Connection end')
            process.exit(0)
        })
    })
}
