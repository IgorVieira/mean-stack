

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
                   //Login e senha invalidos
                    res.sendStatus(401)
                }else{
                    var token = jwt.sign(usuario.login, app.get('secret'),{
                        expiresIn:84600
                    })

                    //Send token
                    res.set('x-access-token', token)
                    res.end()
                }
            })
            .then((error)=>{
                //Login e senha invalidos 
                res.sendStatus(401)
            })
        },
        verificaToken:(req, res, next) =>{
            var token = req.headers['x-access-token']

            if(token){
                console.log('Vefify token...')
                jwt.verify(token, app.get('secret'), function(err, decoded){
                    if(err){
                        //Token reject
                        res.sendStatus(401)
                    }

                    req.usuario = decoded
                    next()
                })
            }else {
                //'Not send token'
                res.sendStatus(401)
            }







        }
    }


    return controller

}
