function sendmail(params){
        var tempparams={
         name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        };
    emailjs.send('service_ibxeiq8','template_7ifuj5n',tempparams)
    .then(function(res){
        console.log("sucsess",res.status);
    })
    
  
    }