var express = require('express');
var router = express.Router();

var Category = require('../models/category');
var Article = require('../models/article');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.get('/add', function(req, res, next) {
    Category.getCategories(function (err, categories) {
        res.render('add_article',{
            categories: categories
        });
    });
});


router.post('/add', function(req, res, next) {
    var article = new Article();
    article.title = req.body.title;
    article.url = req.body.url;
    article.author = req.body.author;
    article.category = req.body.category;
    article.description = req.body.description;

    Article.addArticle(article, function (err, article) {
        if(err){
            res.send(err);
        }
        res.redirect('/');
    });
});

module.exports = router;
