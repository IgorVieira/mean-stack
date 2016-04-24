var express = require('express');
var consign = require('consign')
var bodyParser = require('body-parser');
var app = express();


app.set('secret','merameranomi')
app.use(express.static('./public'));
app.use(bodyParser.json())

consign({cwd:'app'})
   .include('models')
   .then('controllers')
   .then('routes/auth.js')
   .then('routes')
   .into(app)





module.exports = app;
