var express = require('express');
var router = express.Router();
var Website = require('../models/website');
var Article = require('../models/article');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Search Engine' });
});


router.get('/search', function(req, res, next) {
  var searchText = req.param('q');
  var searchType = req.param('type');

  if(searchType == 'website'){

    Website.searchWebsites(searchText, function (err, websites) {
      if(err){
        res.send(err);
      }
      var model = {
        websites: websites.results
      }

      res.render('website_results',model);
    });

  } else if(searchType == 'news') {

    Article.searchArticles(searchText, function (err, articles) {
      if(err){
        res.send(err);
      }
      var model = {
        articles: articles.results
      }

      res.render('article_results',model);
    });

  } else {
    res.send('Choose website or news');
  }
});

module.exports = router;
