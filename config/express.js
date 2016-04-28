var express = require('express'),
consign = require('consign'),
bodyParser = require('body-parser'),
app = express();


app.set('secret','merameranomi')
app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd:'app'})
   .include('models')
   .then('controllers')
   .then('routes/auth.js')
   .then('routes')
   .into(app)





module.exports = app;
