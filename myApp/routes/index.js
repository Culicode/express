var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test_node',function(req,res,next){
	res.render('test',{quang:'Learning NodeJS and Express .Frist step !'});
});
router.get('/home',function (req,res,next) {
    res.render('home');
})
router.get('*',function (req,res) {
    res.send("404 NOT FOUND !");
})
module.exports = router;
