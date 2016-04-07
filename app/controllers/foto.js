module.exports = function(app){
  var controller = {}


   controller.lista = function(req,res){
	 var fotos = [
       	   {_id:1, titulo:'Leao', url:'http://www.fundosanimais.com/Minis/leoes.jpg'},
	    {_id:2, titulo:'Leao2', url:'http://www.fundosanimais.com/Minis/leoes.jpg'}
         ]

         res.json(fotos)
  
   }


 return controller

}
