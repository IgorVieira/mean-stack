var mongoose = require('mongoose')

module.exports = function(app){

  var model = mongoose.model('Foto')



  var controller = {

  	listar:(req,res) => {

      model.find()
      .then((fotos)=>{
        res.json(fotos)
      })
      .then((error) =>{
        console.log('Error for list '+ error)
        res.sendStatus(500)
      })


    },
    adicionar:(req, res)=>{
     model.create(req.body)
     .then((foto)=>{
       res.json(foto)
     })
     .then((error)=>{
       console.log('Error for add ' + error)
       res.sendStatus(500)
     })

    },

    buscarPorId:(req, res) => {
   	  model.findById(req.params.id)
      .then((foto)=>{
        if(!foto) throw new Error('Foto não encontrada')
        res.json(foto)
      })
      .then((error) =>{
        console.log('Error for search '+error)
        res.sendStatus(500)
      })
    },

    removePorId:(req, res)=>{
    	model.remove({'_id':req.params.id})
      .then(()=>{
        res.sendStatus(200)
      })
      .then((error)=>{
        console.log('Error for remove '+ error)
        res.sendStatus(500)
      })
    },

    atualizar:(req, res)=>{
      model.findByIdAndUpdate(req.params.id, req.body)
      .then((foto)=>{
        res.json(foto)
      })
      .then((error)=>{
        console.log('Error for update '+error)
        res.sendStatus(500)
      })

    }


  }


 return controller

}
