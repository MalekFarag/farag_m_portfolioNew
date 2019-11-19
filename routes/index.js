var express = require('express');
var router = express.Router();
var path = require('path');


const sql = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {pageTitle: ' - About'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {pageTitle: ' - Contact'});
});


/* GET portfolio data FROM database. */
// router.get('/svgData/:target', (req,res)=>{
//   let query = `SELECT * FROM stats WHERE id="${req.params.target}"`

//   sql.query(query, (err, result)=>{
//     if (err){console.log(err);}

//     console.log(result);

//     res.json(result[0]);
//   })
// })

module.exports = router;
