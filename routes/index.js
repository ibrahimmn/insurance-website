var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');
var mysql = require('mysql');
const nodemailer= require("nodemailer");
const PDFDocument = require('pdfkit');
const flash = require('connect-flash');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '****',
  database: 'myform'
});

router.get('/', function (req, res, next) {
  res.render('home', {
    
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.get('/profile', requiresAuth(), function (req, res, next) {
  var sql='SELECT * FROM users';
  
    connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('profile', { userProfile: JSON.stringify(req.oidc.user, null, 2), title: 'User List', userData: data});
  });
 
 
});

router.get('/getinsurance', requiresAuth(), function (req, res, next) {
  res.render('getinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Get insurance',
   
  });
});




  connection.connect(function(err) {

    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');

  });




router.get('/aboutus', requiresAuth(), function (req, res, next) {
  res.render('aboutus', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/aroundworldinsurance', requiresAuth(), function (req, res, next) {
  res.render('aroundworldinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/carinsurance', requiresAuth(), function (req, res, next) {
  res.render('carinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/contactus', requiresAuth(), function (req, res, next) {
  res.render('contactus', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/homeinsurance', requiresAuth(), function (req, res, next) {
  res.render('homeinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/lifeinsurance', requiresAuth(), function (req, res, next) {
  res.render('lifeinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/mobileinsurance', requiresAuth(), function (req, res, next) {
  res.render('mobileinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/overview', requiresAuth(), function (req, res, next) {
  res.render('overview', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/productinsurance', requiresAuth(), function (req, res, next) {
  res.render('productinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/protectbusiness', requiresAuth(), function (req, res, next) {
  res.render('protectbusiness', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/protectemployees', requiresAuth(), function (req, res, next) {
  res.render('protectemployees', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/protecthealth', requiresAuth(), function (req, res, next) {
  res.render('protecthealth', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/protectwhat', requiresAuth(), function (req, res, next) {
  res.render('protectwhat', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/protectwho', requiresAuth(), function (req, res, next) {
  res.render('protectwho', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/retirement', requiresAuth(), function (req, res, next) {
  res.render('retirement', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/riskinsurance', requiresAuth(), function (req, res, next) {
  res.render('riskinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/savingsinsurance', requiresAuth(), function (req, res, next) {
  res.render('savingsinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/sustainibilityinsurance', requiresAuth(), function (req, res, next) {
  res.render('sustainibilityinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});

router.get('/travelinsurance', requiresAuth(), function (req, res, next) {
  res.render('travelinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    
  });
});




router.post('/', (req, res)=>{
  console.log(req.body);
  const transporter= nodemailer.createTransport({
      service:'gmail',
      auth:{
          user:'bobtestlar@gmail.com',
          pass: '*****'
      }
  })
  const mailOptions= {
      from: req.body.email,
      to: 'bobtestlar@gmail.com',
      subject:`Message from ${req.body.email}: ${req.body.subject}`,
      text: req.body.message
  }
  transporter.sendMail(mailOptions,(error,info)=>{
      if(error){
          console.log(error);
          res.send('error');

      }else{
          console.log('Email sent:'+info.response);
          res.send('success')

      }
  })

})






router.post('/getinsurance/insurance', (req, res)=>{
  console.log(req.body);
    var name = req.body.name;
   var surname = req.body.surname;
   var ID = req.body.ID;
   var package =req.body.package;
  var email = req.body.email;
  
    var sql = `INSERT INTO users (ID, name, surname, emailAddress, packages)
     VALUES ("${ID}","${name}", "${surname}", "${email}", "${package}")`;
   
   connection.query(sql, function(err, result) {
     if (err) throw err;
     console.log('record inserted');
     console.log(err);
    
   })

})

router.post('/getinsurance/who', (req, res)=>{
  console.log(req.body);
    var name = req.body.name2;
   var surname = req.body.surname2;
   var ID = req.body.ID2;
   var package =req.body.package2;
  var email = req.body.email2;
  
    var sql = `INSERT INTO users (ID, name, surname, emailAddress, packages) VALUES ("${ID}","${name}", "${surname}", "${email}", "${package}")`;
     //var sql=`SELECT * FROM users
   //  WHERE emailAddress ="${email}"`;
  //  var sql=`SELECT * FROM users
  //  WHERE ID=1`;
   connection.query(sql, function(err, result) {
     if (err) throw err;
     console.log('record inserted');
     console.log(err);
     //console.log(result);
     //req.flash('success', 'Data added successfully!');
     //res.redirect('/');
   })

})


router.post('/getinsurance/business', (req, res)=>{
  console.log(req.body);
    var name = req.body.name3;
   var surname = req.body.surname3;
   var ID = req.body.ID3;
   var package =req.body.package3;
  var email = req.body.email3;
  
    var sql = `INSERT INTO users (ID, name, surname, emailAddress, packages) VALUES ("${ID}","${name}", "${surname}", "${email}", "${package}")`;
     //var sql=`SELECT * FROM users
   //  WHERE emailAddress ="${email}"`;
  //  var sql=`SELECT * FROM users
  //  WHERE ID=1`;
   connection.query(sql, function(err, result) {
     if (err) throw err;
     console.log('record inserted');
     console.log(err);
     //console.log(result);
     //req.flash('success', 'Data added successfully!');
     //res.redirect('/');
   })

})


router.post('/getinsurance/employees', (req, res)=>{
  console.log(req.body);
    var name = req.body.name4;
   var surname = req.body.surname4;
   var ID = req.body.ID4;
   var package =req.body.package4;
  var email = req.body.email4;
  
    var sql = `INSERT INTO users (ID, name, surname, emailAddress, packages) VALUES ("${ID}","${name}", "${surname}", "${email}", "${package}")`;
     //var sql=`SELECT * FROM users
   //  WHERE emailAddress ="${email}"`;
  //  var sql=`SELECT * FROM users
  //  WHERE ID=1`;
   connection.query(sql, function(err, result) {
     if (err) throw err;
     console.log('record inserted');
     console.log(err);
     //console.log(result);
     //req.flash('success', 'Data added successfully!');
     //res.redirect('/');
   })

})


router.post('/getinsurance/health', (req, res)=>{
  console.log(req.body);
    var name = req.body.name5;
   var surname = req.body.surname5;
   var ID = req.body.ID5;
   var package =req.body.package5;
  var email = req.body.email5;
  
    var sql = `INSERT INTO users (ID, name, surname, emailAddress, packages) VALUES ("${ID}","${name}", "${surname}", "${email}", "${package}")`;
     //var sql=`SELECT * FROM users
   //  WHERE emailAddress ="${email}"`;
  //  var sql=`SELECT * FROM users
  //  WHERE ID=1`;
   connection.query(sql, function(err, result) {
     if (err) throw err;
     console.log('record inserted');
     console.log(err);
     //console.log(result);
     //req.flash('success', 'Data added successfully!');
     //res.redirect('/');
   })

})




module.exports = router;
