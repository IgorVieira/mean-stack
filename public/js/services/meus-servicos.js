angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', function($resource) {

        return $resource('/v1/fotos/:fotoId', null, {
            'update' : {
                method: 'PUT'
            }
        })
    })
    .factory("cadastroDeFotos", function(recursoFoto, $q, $rootScope) {
        var service = {};
        var evento = 'fotoCadastrada'
        service.cadastrar = (foto) => {
            return $q((resolve, reject) => {

                if(foto._id) {
                    recursoFoto.update({fotoId: foto._id}, foto, () => {
                      $rootScope.$broadcast(evento)
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
                            inclusao: false
                        })
                    },(erro) => {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
                        })
                    })

                } else {
                     recursoFoto.save(foto, () => {
                       $rootScope.$broadcast(evento)
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
                            inclusao: true
                        })
                    },(erro) => {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível incluir a foto ' + foto.titulo
                        })
                    })
                }
            })
        }
        return service
    })
