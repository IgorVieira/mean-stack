module.exports = function(app){

var controller = app.controllers.grupo

app.get('/v1/grupos', controller.lista)

}

