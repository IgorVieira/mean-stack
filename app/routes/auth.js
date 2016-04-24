module.exports = function(app){


    var controller =  app.controllers.auth

    app.get('/autenticar', controller.autenticar)
    app.use('/*', controller.verificaToken)
}
