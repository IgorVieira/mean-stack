

module.exports = function(app){
    var mongoose = require('mongoose')
    var jwt = require('jsonwebtoken')
    var model = mongoose.model('Usuario')



    var controller = {
        autenticar:(req,res) =>{
            console.log("Usuario:" + req.body)
            model.findOne({login:req.body.login, senha:req.body.senha})
            .then(function(usuario){
                if(!usuario){
                    console.log('Login e senha invalidos')
                    res.sendStatus(401)
                }else{
                    var token = jwt.sign(usuario.login, app.get('secret'),{
                        expiresIn:84600
                    })

                    console.log('Send token')
                    res.set('x-access-token', token)
                    res.end()
                }
            })
            .then((error)=>{
                console.log('Login e senha invalidos ' + error)
                res.sendStatus(401)
            })
        },
        verificaToken:(req, res, next) =>{
            var token = req.headers['x-access-token']

            if(token){
                console.log('Vefify token...')
                jwt.verify(token, app.get('secret'), function(err, decoded){
                    if(err){
                        console.log('Token reject '+ err)
                        res.sendStatus(401)
                    }

                    req.usuario = decoded
                    next()
                })
            }else {
                console.log('No send token')
                res.sendStatus(401)
            }







        }
    }


    return controller

}
