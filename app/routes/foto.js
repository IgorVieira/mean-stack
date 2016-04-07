module.exports =  function(app){


app.get('/v1/fotos', function(req,res){

  var fotos = [
        {_id:1, titulo:'Leao', url:'http://www.fundosanimais.com/Minis/leoes.jpg'}

   ]


res.json(fotos)

})


}
