var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bjir' });
});

router.get('/profile', function(req,res) {
  res.render('profile',{nama: 'kevin', npm : '2024240007'});
})

module.exports = router;
