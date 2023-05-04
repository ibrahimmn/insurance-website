var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

const nodemailer= require("nodemailer");


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
