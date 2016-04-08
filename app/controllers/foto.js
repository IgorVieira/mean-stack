var fotos = [
       	   {_id:1, titulo:'Leao', url:'http://www.fundosanimais.com/Minis/leoes.jpg'},
	    	{_id:2, titulo:'Leao2', url:'http://www.fundosanimais.com/Minis/leoes.jpg'}
        ]



module.exports = function(app){
   

	var CONTADOR_ID = {}

  var controller = {
  	
  	listar:(req,res) => {
         res.json(fotos)  
    },
    adicionar:(req, res)=>{
     var foto =  req.body
     foto._id = ++CONTADOR_ID
     fotos.push(foto)
     res.json(foto)
    },

    buscarPorId:(req, res) => {
   	   var foto = fotos.find((foto) => foto._id == req.params.id)
   		
   		res.json(foto)
    },

    removePorId:(req, res)=>{
    	fotos = fotos.filter((foto) => foto._id != req.params.id)
    	res.sendStatus(204)
    }


  }


   


   


 return controller

}
