var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

var nav = [
        {
            Link: '/Books',
            Text: 'Book'
        },
        {
            Link: '/Authors',
            Text: 'Author '
         }];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public'));
/*app.use(express.static('src/views'));*/
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.get('/', function(req, res){
    res.render('index', { nav: [
        {Link: '/Books', Text: 'Books'},
        {Link: '/Authors', Text: 'Authors'}]
      });
});

app.listen(port, function(err){
  console.log('Running server on port ' + port);
});
