var express = require('express');
var router = express.Router();
var path = require('path');
var auth = require('../config/mailcreds');
var mailer = require('nodemailer');

// nodemailer stuff
const transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: auth.user,
		pass: auth.pass
	}
});


const sql = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {
  sql.query(`SELECT * FROM tbl_portfolio`, (err, results)=>{
    if (err){
      throw err; 
    }else{

      //spliting mockups
      results.forEach(row =>{
        console.log(row);
        let split = row.Mockups.split(','); 
        row.Mockups = split;
      });

      //spliting apps used
      results.forEach(row =>{
        console.log(row);
        let split = row.AppsUsed.split(','); 
        row.AppsUsed = split;
      });

      //splitting images
      results.forEach(row =>{
        console.log(row);
        let split = row.Images.split(','); 
        row.Images = split;
      });

        console.log(results);
    }
          res.render('index', {
            
          //portfolio peices:
            cordae: results[0],
            hack  : results[1],
            cliff : results[2],
            fav   : results[3] 
          });
})});








// nodemailer post

router.post('/submit', (req, res) => {
	console.log('hit mail route');
	console.log('body: ', req.body);

	// get the mail options from the form -> the url params using bodyParser middleware

	const mailOptions = {
		from: req.body.usermail,
		to: auth.user,
		replyTo: req.body.usermail,
		subject: `From Portfolio site: Subject = ${req.body.subject || 'none'}`, // Subject line
		text: 'Sent by:' + req.body.company + '***********************************' + req.body.message
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log("failed... ", err);
			res.json(err);
		} else {
			console.log("success! ", info);
			res.json(info);
		}
  });
  
  res.render('submit', {pageTitle: ' - Success!', layout: false});
})

module.exports = router;
