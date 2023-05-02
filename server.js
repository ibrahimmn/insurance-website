const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const router = require('./routes/index');
const { auth } = require('express-openid-connect');



//dotenv.load();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 's%3Al3ozSdvQ83TtC9RvJ.CibaQoHtaY0H3QOB1kqR8H2A',
  baseURL: 'http://localhost:5000',
  clientID: 'hXHJzAtRz7iCU2Tw5kunwQgNsvdOQ8uz',
  issuerBaseURL: 'https://dev-ygwg4eyha2gz1ahj.us.auth0.com'
};

const port = process.env.PORT || 5000;
if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
  config.baseURL = `http://localhost:${port}`;
}

app.use(auth(config));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

app.use('/', router);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: process.env.NODE_ENV !== 'production' ? err : {}
  });
});

http.createServer(app)
  .listen(port, () => {
    console.log(`Listening on ${config.baseURL}`);
  });




 
// app.post('/', (req, res)=>{
//     console.log(req.body);
//     const transporter= nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user:'bobtestlar@gmail.com',
//             pass: 'aoigehkwaxwkurfe'
//         }
//     })
//     const mailOptions= {
//         from: req.body.email,
//         to: 'bobtestlar@gmail.com',
//         subject:`Message from ${req.body.email}: ${req.body.subject}`,
//         text: req.body.message
//     }
//     transporter.sendMail(mailOptions,(error,info)=>{
//         if(error){
//             console.log(error);
//             res.send('error');

//         }else{
//             console.log('Email sent:'+info.response);
//             res.send('success')

//         }
//     })

// })

