var express = require('express');
var router = express.Router();
var path = require('path');
const sql = require('../utils/sql');

/* GET home page. */
router.get('/', (req, res) => {

  sql.query(`SELECT * FROM tbl_portfolio`, (err, results)=>{
        if (err){
          throw err; 
          console.log(err);
        }else{
          console.log(results);
        }

      // splits up by removing ','
        // result.Apps-used = result.Apps-used.split(",").map(function(item) {
        //   return item;
        // });
        // result.Images = result.Images.split(",").map(function(item) {
        //   return item;
        // });
    
        console.log('Database results:', results);
    
         res.json(results[0]);
          res.render('index', {
            //portfolio peices:
            cordae: results[0],
            hack  : results[1],
            cliff : results[2],
            fav   : results[3] 
          });
      });
});

/* GET submit page. */
router.get('/submit', function(req, res, next) {
  res.render('submit', {pageTitle: ' - Success!', layout: false});
});

module.exports = router;
