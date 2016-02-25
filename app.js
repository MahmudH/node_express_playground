var express = require('express');
var app = express();

port = process.env.PORT || 5000;

app.use(express.static('public'));
/*app.use(express.static('src/views'));*/
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/books', function(req, res){
  res.render('index');
});

app.listen(port, function(err){
  console.log('Running server on port ' + port);
});
