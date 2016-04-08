module.exports =  function(app){


var controller =  app.controllers.foto

app.route('/v1/fotos')
	.get(controller.listar)
	.post(controller.adicionar)


app.route('/v1/fotos/:id')
	.get(controller.buscarPorId)
	.delete(controller.removePorId)



}
