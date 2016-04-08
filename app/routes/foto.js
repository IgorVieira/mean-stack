module.exports =  function(app){


var controller =  app.controllers.foto


app.get('/v1/fotos', controller.lista)

app.get('/v1/fotos/:id', controller.buscarPorId)

app.delete('/v1/fotos/:id', controller.removePorId)



}
