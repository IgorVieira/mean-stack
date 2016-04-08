var fotos = [
       	   {_id:1, titulo:'Leao', url:'http://www.fundosanimais.com/Minis/leoes.jpg'},
	    	{_id:2, titulo:'Leao2', url:'http://www.fundosanimais.com/Minis/leoes.jpg'}
        ]



module.exports = function(app){
   


  var controller = {
  	
  	lista:(req,res) => {
         res.json(fotos)  
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
