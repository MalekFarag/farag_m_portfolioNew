var express = require('express');
var router = express.Router();
var path = require('path');


const sql = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {
  sql.query(`SELECT * FROM tbl_portfolio`, (err, results)=>{
    if (err){
      throw err; 
    }else{
      results[0].AppsUsed = results[0].AppsUsed.split(",").map(function(item) {

          return item;
       });
      console.log('Database results: ' + results[0].AppsUsed);
    }

    // splits up by removing ','
        // results[0].Images.split(",").map(function(item) {
        //   return item;
        // });

        
    
          res.render('index', {
          //portfolio peices:
            cordae: results[0],
            hack  : results[1],
            cliff : results[2],
            fav   : results[3] 
          });
})});

/* GET submit page. */
router.get('/submit', function(req, res, next) {
  res.render('submit', {pageTitle: ' - Success!', layout: false});
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
