var express = require('express');
var consign = require('consign')
var app = express();

app.use(express.static('./public'));


consign({cwd:'app'})
   .include('controller')
   .then('routes')	
   .into(app)





module.exports = app;
