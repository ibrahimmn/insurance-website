window.jsPDF = window.jspdf.jsPDF;

function show(){
    document.getElementById("zero").style.display = "block";
    document.getElementById("aa 1").style.display = "block";
   
  }
  
  function hide() {
    document.getElementById("zero").style.display = "none";
    document.getElementById("aa 1").style.display = "none";
    
    
  }
  function hidegenerate() {
    
    document.getElementById("aaa 1").style.display = "none";
    
  }

  function show2(){
    document.getElementById("zero").style.display = "block";

    document.getElementById("aa 2").style.display = "block";
    
  }
  
  function hide2() {
    document.getElementById("zero").style.display = "none";
   
    document.getElementById("aa 2").style.display = "none";
      
  }

  function show3(){
    document.getElementById("zero").style.display = "block";
   
    document.getElementById("aa 3").style.display = "block";
    
  }
  
  function hide3() {
    document.getElementById("zero").style.display = "none";
    
    document.getElementById("aa 3").style.display = "none";

  }
  function show4(){
    document.getElementById("zero").style.display = "block";
   
    document.getElementById("aa 4").style.display = "block";
   
  }
  
  function hide4() {
    document.getElementById("zero").style.display = "none";
    
    document.getElementById("aa 4").style.display = "none";
    
  }
  function show5(){
    document.getElementById("zero").style.display = "block";
   
    document.getElementById("aa 5").style.display = "block";  
  }
  
  function hide5() {
    document.getElementById("zero").style.display = "none";
   
    document.getElementById("aa 5").style.display = "none";   
  }

  
 
  


  
var form=document.getElementById('form 1');
form.addEventListener('submit',function(event){
  event.preventDefault()
  var name =document.getElementById('name').value
  var surname =document.getElementById('surname').value
  var ID =document.getElementById('ID').value
  var doc = new jsPDF()
  doc.addImage("/assets/new-logo.png", 'PNG', 85, 5, 40, 40);
  doc.setTextColor("red");
  doc.setFontSize(22);
  doc.text("protecnow",87,50,);
  doc.setTextColor("black");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("Name:", 7, 80);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(name,50,80);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("Surname:", 7, 90);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(surname,50,90);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("TCKN:", 7, 100);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(ID,50,100);
  doc.setFontSize(20);
  doc.setFont("normal");
  doc.text("Thank you "+name+" "+surname+".",2,120);
  doc.text("You have succesfuly been registerd in our  - Protect what you love -",2,140);
  doc.text("insurance program that includes car insurance, home insurance and ",2,150);
  doc.text("travel insurance. ",2,160);
  doc.setFont("times", "italic");
  doc.text("We care about you", 200, 180, null, null, "right");
  doc.addImage("/assets/stamp.png", 'PNG', 155, 190, 40, 40);

  doc.save("protect-what-you-love.pdf");
}
);




var formm2=document.getElementById('form 2')
formm2.addEventListener('submit',function(event){
  event.preventDefault()

  //var logoimg='data:image/png;base64,'+Base64.encode('/assets/new-logo.png');
  var name =document.getElementById('name2').value;
  var surname =document.getElementById('surname2').value;
  var ID =document.getElementById('ID2').value;

  var doc = new jsPDF()
  doc.addImage("/assets/new-logo.png", 'PNG', 85, 5, 40, 40);
  doc.setTextColor("red");
  doc.setFontSize(22);
  doc.text("protecnow",87,50,);

  doc.setTextColor("black");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("Name:", 7, 80);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(name,50,80);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("Surname:", 7, 90);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(surname,50,90);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("TCKN:", 7, 100);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(ID,50,100);

  doc.setFontSize(20);
  doc.setFont("normal");
  doc.text("Thank you "+name+" "+surname+".",2,120);
  //doc.text("programs.",2,130);
  doc.text("You have succesfuly been registerd in our  - Protect who you love -",2,140);
  doc.text("insurance program that includes savings and investments, life ",2,150);
  doc.text("insurance and retirement planning. ",2,160);

  doc.setFont("times", "italic");
  doc.text("We care about you", 200, 180, null, null, "right");
  doc.addImage("/assets/stamp.png", 'PNG', 155, 190, 40, 40);



  doc.save("protect-who-you-love.pdf");
}
);


var formm3=document.getElementById('form 3')
formm3.addEventListener('submit',function(event){
  event.preventDefault()

  //var logoimg='data:image/png;base64,'+Base64.encode('/assets/new-logo.png');
  var name =document.getElementById('name3').value
  var surname =document.getElementById('surname3').value
  var ID =document.getElementById('ID3').value


  var doc = new jsPDF()
  doc.addImage("/assets/new-logo.png", 'PNG', 85, 5, 40, 40);
  doc.setTextColor("red");
  doc.setFontSize(22);
  doc.text("protecnow",87,50,);

  doc.setTextColor("black");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("Name:", 7, 80);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(name,50,80);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("Surname:", 7, 90);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(surname,50,90);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("TCKN:", 7, 100);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(ID,50,100);

  doc.setFontSize(20);
  doc.setFont("normal");
  doc.text("Thank you "+name+" "+surname+".",2,120);
  //doc.text("programs.",2,130);
  doc.text("You have succesfuly been registerd in our  - Protect your business -",2,140);
  doc.text("insurance program that includes products, insurance sustainibility ",2,150);
  doc.text("and insurance risk insights.",2,160);

  doc.setFont("times", "italic");
  doc.text("We care about you", 200, 180, null, null, "right");
  doc.addImage("/assets/stamp.png", 'PNG', 155, 190, 40, 40);



  doc.save("protect-your-business.pdf");
}
);


var formmmm=document.getElementById('form 4')
formmmm.addEventListener('submit',function(event){
  event.preventDefault()

  //var logoimg='data:image/png;base64,'+Base64.encode('/assets/new-logo.png');
  var name =document.getElementById('name4').value
  var surname =document.getElementById('surname4').value
  var ID =document.getElementById('ID4').value


  var doc = new jsPDF()
  doc.addImage("/assets/new-logo.png", 'PNG', 85, 5, 40, 40);
  doc.setTextColor("red");
  doc.setFontSize(22);
  doc.text("protecnow",87,50,);

  doc.setTextColor("black");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("Name:", 7, 80);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(name,50,80);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("Surname:", 7, 90);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(surname,50,90);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("TCKN:", 7, 100);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(ID,50,100);

  doc.setFontSize(20);
  doc.setFont("normal");
  doc.text("Thank you "+name+" "+surname+".",2,120);
  //doc.text("programs.",2,130);
  doc.text("You have succesfuly been registerd in our  - Protect your employees -",2,140);
  doc.text("insurance program that includes mobile employees and protection around ",2,150);
  doc.text("the world. ",2,160);

  doc.setFont("times", "italic");
  doc.text("We care about you", 200, 180, null, null, "right");
  doc.addImage("/assets/stamp.png", 'PNG', 155, 190, 40, 40);



  doc.save("protect-employees.pdf");
}
);


var formm5=document.getElementById('form 5')
formm5.addEventListener('submit',function(event){
  event.preventDefault()

  //var logoimg='data:image/png;base64,'+Base64.encode('/assets/new-logo.png');
  var name =document.getElementById('name5').value
  var surname =document.getElementById('surname5').value
  var ID =document.getElementById('ID5').value


  var doc = new jsPDF()
  doc.addImage("/assets/new-logo.png", 'PNG', 85, 5, 40, 40);
  doc.setTextColor("red");
  doc.setFontSize(22);
  doc.text("protecnow",87,50,);

  doc.setTextColor("black");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("Name:", 7, 80);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(name,50,80);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("Surname:", 7, 90);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(surname,50,90);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("TCKN:", 7, 100);
  doc.setFont("courier", "normal");
  doc.setFontSize(17);
  doc.text(ID,50,100);

  doc.setFontSize(20);
  doc.setFont("normal");
  doc.text("Thank you "+name+" "+surname+".",2,120);
  //doc.text("programs.",2,130);
  doc.text("You have succesfuly been registerd in our  - Protect your health -",2,140);
  doc.text("insurance program that includes physical health,mental health and ",2,150);
  doc.text("Social health.",2,160);

  doc.setFont("times", "italic");
  doc.text("We care about you", 200, 180, null, null, "right");
  doc.addImage("/assets/stamp.png", 'PNG', 155, 190, 40, 40);



  doc.save("protect-your-health.pdf");
}
)












const form1= document.querySelector('.form1');
  let name=document.getElementById('name');
  let surname=document.getElementById('surname');
  let ID=document.getElementById('ID');
  let package=document.getElementById('package');
  let email=document.getElementById('email');
  
  form1.addEventListener('submit', (e)=>{
      e.preventDefault();
      let formData = {
          name:name.value,
          surname:surname.value,
          ID:ID.value,
          email:email.value,
          package:package.value,
      }      
      let xhr=new XMLHttpRequest();
      xhr.open('POST','/getinsurance/insurance');
      xhr.setRequestHeader('content-type','application/json');
      xhr.onload = function(){
          console.log(xhr.responseText);
          if(xhr.responseText== 'success'){
              alert('database sent');
              name.value="";
              surname.value="";
            
              ID.value="";
              package.value="";
  
          }else{
              alert(e)
          }
      } 
      xhr.send(JSON.stringify(formData));
      form1.reset();
      document.getElementById("aaa 1").style.display = "block";
      document.getElementById("zero").style.display = "none";
      document.getElementById("aa 1").style.display = "none";
      document.getElementById("aa 2").style.display = "none";
      document.getElementById("aa 3").style.display = "none";
      document.getElementById("aa 4").style.display = "none";
      document.getElementById("aa 5").style.display = "none";
  })



  
  const form2= document.querySelector('.form2');
   let name2=document.getElementById('name2');
   let surname2=document.getElementById('surname2');
   let ID2=document.getElementById('ID2');
   let package2=document.getElementById('package2');
   let email2=document.getElementById('email2');
  
  form2.addEventListener('submit', (e)=>{
      e.preventDefault();
  
    
  
  
  
  
  
  
  
      let formData = {
          name2:name2.value,
          surname2:surname2.value,
          ID2:ID2.value,
          email2:email2.value,
          package2:package2.value,
      }
      
      let xhr=new XMLHttpRequest();
      xhr.open('POST','/getinsurance/who');
      xhr.setRequestHeader('content-type','application/json');
      xhr.onload = function(){
          console.log(xhr.responseText);
          if(xhr.responseText== 'success'){
              alert('database sent');
              name2.value="";
              surname2.value="";
            
              ID2.value="";
              package2.value="";
  
          }else{
              alert(e)
          }
      }
  
      xhr.send(JSON.stringify(formData));
      form2.reset();
      document.getElementById("aaa 1").style.display = "block";
      document.getElementById("zero").style.display = "none";
      document.getElementById("aa 1").style.display = "none";
      document.getElementById("aa 2").style.display = "none";
      document.getElementById("aa 3").style.display = "none";
      document.getElementById("aa 4").style.display = "none";
      document.getElementById("aa 5").style.display = "none";
  })



  
  const form3= document.querySelector('.form3');
   let name3=document.getElementById('name3');
   let surname3=document.getElementById('surname3');
   let ID3=document.getElementById('ID3');
   let package3=document.getElementById('package3');
   let email3=document.getElementById('email3');
  
  form3.addEventListener('submit', (e)=>{
      e.preventDefault();
  
    
  
  
  
  
  
  
  
      let formData = {
          name3:name3.value,
          surname3:surname3.value,
          ID3:ID3.value,
          email3:email3.value,
          package3:package3.value,
      }
      
      let xhr=new XMLHttpRequest();
      xhr.open('POST','/getinsurance/business');
      xhr.setRequestHeader('content-type','application/json');
      xhr.onload = function(){
          console.log(xhr.responseText);
          if(xhr.responseText== 'success'){
              alert('database sent');
              name3.value="";
              surname3.value="";
            
              ID3.value="";
              package3.value="";
  
          }else{
              alert(e)
          }
      }
  
      xhr.send(JSON.stringify(formData));
      form3.reset();
      document.getElementById("aaa 1").style.display = "block";
      document.getElementById("zero").style.display = "none";
      document.getElementById("aa 1").style.display = "none";
      document.getElementById("aa 2").style.display = "none";
      document.getElementById("aa 3").style.display = "none";
      document.getElementById("aa 4").style.display = "none";
      document.getElementById("aa 5").style.display = "none";
  })
  
  const form4= document.querySelector('.form4');
   let name4=document.getElementById('name4');
   let surname4=document.getElementById('surname4');
   let ID4=document.getElementById('ID4');
   let package4=document.getElementById('package4');
   let email4=document.getElementById('email4');
  
  form4.addEventListener('submit', (e)=>{
      e.preventDefault();
  
    
  
  
  
  
  
  
  
      let formData = {
          name4:name4.value,
          surname4:surname4.value,
          ID4:ID4.value,
          email4:email4.value,
          package4:package4.value,
      }
      
      let xhr=new XMLHttpRequest();
      xhr.open('POST','/getinsurance/employees');
      xhr.setRequestHeader('content-type','application/json');
      xhr.onload = function(){
          console.log(xhr.responseText);
          if(xhr.responseText== 'success'){
              alert('database sent');
              name4.value="";
              surname4.value="";
            
              ID4.value="";
              package4.value="";
  
          }else{
              alert(e)
          }
      }
  
      xhr.send(JSON.stringify(formData));
      form4.reset();
      document.getElementById("aaa 1").style.display = "block";
      document.getElementById("zero").style.display = "none";
      document.getElementById("aa 1").style.display = "none";
      document.getElementById("aa 2").style.display = "none";
      document.getElementById("aa 3").style.display = "none";
      document.getElementById("aa 4").style.display = "none";
      document.getElementById("aa 5").style.display = "none";
  })

  
  const form5= document.querySelector('.form5');
   let name5=document.getElementById('name5');
   let surname5=document.getElementById('surname5');
   let ID5=document.getElementById('ID5');
   let package5=document.getElementById('package5');
   let email5=document.getElementById('email5');
  
  form5.addEventListener('submit', (e)=>{
      e.preventDefault();
  
    
  
  
  
  
  
  
  
      let formData = {
          name5:name5.value,
          surname5:surname5.value,
          ID5:ID5.value,
          email5:email5.value,
          package5:package5.value,
      }
      
      let xhr=new XMLHttpRequest();
      xhr.open('POST','/getinsurance/health');
      xhr.setRequestHeader('content-type','application/json');
      xhr.onload = function(){
          console.log(xhr.responseText);
          if(xhr.responseText== 'success'){
              alert('database sent');
              name5.value="";
              surname5.value="";
            
              ID5.value="";
              package5.value="";
  
          }else{
              alert(e)
          }
      }
  
      xhr.send(JSON.stringify(formData));
      form5.reset();
      document.getElementById("aaa 1").style.display = "block";
      document.getElementById("zero").style.display = "none";
      document.getElementById("aa 1").style.display = "none";
      document.getElementById("aa 2").style.display = "none";
      document.getElementById("aa 3").style.display = "none";
      document.getElementById("aa 4").style.display = "none";
      document.getElementById("aa 5").style.display = "none";
  })