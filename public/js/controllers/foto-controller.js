angular.module('alurapic')
    .controller('FotoController', function($scope, recursoFoto, $routeParams, cadastroDeFotos) {

        $scope.foto = {};
        $scope.mensagem = '';

        if($routeParams.fotoId) {
            recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
                $scope.foto = foto;
            }, function(erro) {
                $scope.mensagem = 'Não foi possível obter a foto'
            });
        }

        $scope.submeter = () => {

            if ($scope.formulario.$valid) {
                cadastroDeFotos.cadastrar($scope.foto)
                .then((dados) => {
                    $scope.mensagem = dados.mensagem;
                    if (dados.inclusao) $scope.foto = {};
										
                })
                .catch((erro) => {
                    $scope.mensagem = erro.mensagem;
                });
            }
        };
    });
