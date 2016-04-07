module.exports =  function(app){


var controller =  app.controllers.foto


app.get('/v1/fotos', controller.lista)


}
