module.exports = function(app){


    var controller =  app.controller.auth

    app.get('/autenticar', controller.autenticar)
    app.get('/*', controller.verificaToken)
}
