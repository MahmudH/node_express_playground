var express = require('express');

var bookRouter = express.Router();

var router = function(nav){
      


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
        res.render("bookListView", { title: 'Books', 
        nav: nav,
        books: books
        });
    });

    bookRouter.route('/:id').get(function(req, res) {
        var id = req.params.id; 
        res.render("bookView", { title: 'Books', 
        nav: nav,
        books: books[id]
        });
    }); 
    
    return bookRouter;

}

module.exports = router; 


