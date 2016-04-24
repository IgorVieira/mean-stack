

module.exports = function(app){
    var mongoose = require('mongoose')
    var jwt = require('jsonwebtoken')
    var model = mongoose.model('Usuario')



    var controller = {
        autenticar:(req,res) =>{
            model.findOne({login:req.body.login, senha:req.body.senha})
            .then(function(usuario){
                if(!usuario){
                    console.log('Login e senha invalidos')
                    res.sendStatus(401)
                }else{
                    var token = jwt.sign({usuario:login}, app.get('secret'),{
                        expiresIn:84600
                    })
                }
            })
            .then((error)=>{
                console.log('Login e senha invalidos')
                res.sendStatus(401)
            })
        },
        verificaToken:(req, res) =>{

        }
    }


    return controller

}
