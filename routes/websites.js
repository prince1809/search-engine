var express = require('express');
var router = express.Router();

var Category = require('../models/category');
var Website = require('../models/website');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
    res.render('add_website');
});


router.post('/add', function(req, res, next) {
  var website = new Website();
  website.title = req.body.title;
  website.url = req.body.url;
  website.description = req.body.description;

  Website.addWebsite(website, function (err, website) {
    if(err){
      res.send(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
