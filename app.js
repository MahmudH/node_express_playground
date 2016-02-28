var express = require('express');
var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router();


app.use(express.static('public'));
/*app.use(express.static('src/views'));*/
app.set('views', './src/views');
app.set('view engine', 'ejs');

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich',
        read: false
    },
    {
        title: 'Lost Ark',
        genre: 'Fantasy',
        author: 'Nemo',
        read: false
    }
];

bookRouter.route('/').get(function(req, res) {
    res.render("books", { title: 'Books', 
    nav: [
        {Link: '/Books', Text: 'Books'}, 
        {Link: '/Authors', Text: 'Authors'}],
    books: books
      });
});

bookRouter.route('/single').get(function(req, res) {
    res.send("Hello Single Book");
}); 

app.use('/Books', bookRouter);

app.get('/', function(req, res){
    res.render('index', { nav: [
        {Link: '/Books', Text: 'Books'}, 
        {Link: '/Authors', Text: 'Authors'}] 
      });
});

app.get('/books', function(req, res){
  res.render('index');
});

app.listen(port, function(err){
  console.log('Running server on port ' + port);
});
