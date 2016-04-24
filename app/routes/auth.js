module.exports = function(app){


    var controller =  app.controllers.auth

    app.post('/autenticar', controller.autenticar)
    app.use('/*', controller.verificaToken)
}
