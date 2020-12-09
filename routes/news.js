var express = require('express');
var router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('5f1246674c184e60bb9e88f19186b8b3');

new Date().getDate()

/* GET users listing. */
router.get('/', function(req, res, next) {
  let date = new Date();
  newsapi.v2.everything({
    q: 'environment',
    from: `${date.getFullYear()}-${date.getMonth()}-${date.getDay() - 10}`,
    language: 'en',
    sortBy: 'relevancy',
  }).then(response => {
    console.log(response);
    res.send(response);
  });
});

/* GET users listing. */
router.get('/:title', function(req, res, next) {
  newsapi.v2.everything({
    q: req.params.title,
    from: '2020-10-10',
    language: 'en',
    sortBy: 'relevancy',
  }).then(response => {
    console.log(response);
    res.send(response);
  });
});




module.exports = router;
