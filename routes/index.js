var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

const nodemailer= require("nodemailer");
const PDFDocument = require('pdfkit');

router.get('/', function (req, res, next) {
  res.render('home', {
    
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.get('/profile', requiresAuth(), function (req, res, next) {
  res.render('profile', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Profile page'
  });
});

router.get('/getinsurance', requiresAuth(), function (req, res, next) {
  res.render('getinsurance', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Get insurance'
  });
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
          pass: 'aoigehkwaxwkurfe'
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



module.exports = router;
