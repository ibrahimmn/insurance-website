const express=require('express');

const app=express();
const nodemailer= require("nodemailer");

const PORT= process.env.PORT || 5000;




app.use(express.static('public'));
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html')

})

app.post('/', (req, res)=>{
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


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})



const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 's%3Al3ozSdvQ83TtC9RvJ.CibaQoHtaY0H3QOB1kqR8H2A',
  baseURL: 'http://localhost:5000',
  clientID: 'hXHJzAtRz7iCU2Tw5kunwQgNsvdOQ8uz',
  issuerBaseURL: 'https://dev-ygwg4eyha2gz1ahj.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

const { requiresAuth } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});