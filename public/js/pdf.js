function show(){
    document.getElementById("zero").style.display = "block";
    document.getElementById("aa 1").style.display = "block";
     
  }
  
  function hide() {
    document.getElementById("zero").style.display = "none";
    document.getElementById("aa 1").style.display = "none";
    
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


  
window.jsPDF = window.jspdf.jsPDF;

var form=document.getElementById('form 1');
form.addEventListener('submit',function(event){
  event.preventDefault()

  //var logoimg='data:image/png;base64,'+Base64.encode('/assets/new-logo.png');
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
  //doc.text("programs.",2,130);
  doc.text("You have succesfuly been registerd in our  - Protect what you love -",2,140);
  doc.text("insurance program that includes car insurance, home insurance and ",2,150);
  doc.text("travel insurance. ",2,160);

  doc.setFont("times", "italic");
  doc.text("We care about you", 200, 180, null, null, "right");
  doc.addImage("/assets/stamp.png", 'PNG', 155, 190, 40, 40);



  doc.save("testo.pdf");
}
);





var form2=document.getElementById('form 2')
form2.addEventListener('submit',function(event){
  event.preventDefault()

  //var logoimg='data:image/png;base64,'+Base64.encode('/assets/new-logo.png');
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
  //doc.text("programs.",2,130);
  doc.text("You have succesfuly been registerd in our  - Protect who you love -",2,140);
  doc.text("insurance program that includes savings and investments, life ",2,150);
  doc.text("insurance and retirement planning. ",2,160);

  doc.setFont("times", "italic");
  doc.text("We care about you", 200, 180, null, null, "right");
  doc.addImage("/assets/stamp.png", 'PNG', 155, 190, 40, 40);



  doc.save("testo.pdf");
}
);

var form3=document.getElementById('form 3')
form3.addEventListener('submit',function(event){
  event.preventDefault()

  //var logoimg='data:image/png;base64,'+Base64.encode('/assets/new-logo.png');
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
  //doc.text("programs.",2,130);
  doc.text("You have succesfuly been registerd in our  - Protect your business -",2,140);
  doc.text("insurance program that includes products, insurance sustainibility ",2,150);
  doc.text("and insurance risk insights.",2,160);

  doc.setFont("times", "italic");
  doc.text("We care about you", 200, 180, null, null, "right");
  doc.addImage("/assets/stamp.png", 'PNG', 155, 190, 40, 40);



  doc.save("testo.pdf");
}
);


var formmmm=document.getElementById('form 4')
formmmm.addEventListener('submit',function(event){
  event.preventDefault()

  //var logoimg='data:image/png;base64,'+Base64.encode('/assets/new-logo.png');
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
  //doc.text("programs.",2,130);
  doc.text("You have succesfuly been registerd in our  - Protect your employees -",2,140);
  doc.text("insurance program that includes mobile employees and protection around ",2,150);
  doc.text("the world. ",2,160);

  doc.setFont("times", "italic");
  doc.text("We care about you", 200, 180, null, null, "right");
  doc.addImage("/assets/stamp.png", 'PNG', 155, 190, 40, 40);



  doc.save("testo.pdf");
}
);


var form5=document.getElementById('form 5')
form5.addEventListener('submit',function(event){
  event.preventDefault()

  //var logoimg='data:image/png;base64,'+Base64.encode('/assets/new-logo.png');
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
  //doc.text("programs.",2,130);
  doc.text("You have succesfuly been registerd in our  - Protect your health -",2,140);
  doc.text("insurance program that includes physical health,mental health and ",2,150);
  doc.text("Social health.",2,160);

  doc.setFont("times", "italic");
  doc.text("We care about you", 200, 180, null, null, "right");
  doc.addImage("/assets/stamp.png", 'PNG', 155, 190, 40, 40);



  doc.save("testo.pdf");
}
)



