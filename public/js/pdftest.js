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

  const form1= document.querySelector('.form1')


  let name=document.getElementById('name');
  let surname=document.getElementById('surname');
  let ID=document.getElementById('ID');
  //let message=document.getElementById('message');
  
  form1.addEventListener('submit', (e)=>{
      e.preventDefault();
  
  
      let formData = {
          name:name.value,
          surname:surname.value,
          ID:ID.value,
         
      }
      
      let xhr=new XMLHttpRequest();
      xhr.open('POST','/insurance');
      xhr.setRequestHeader('content-type','application/json');
      xhr.onload = function(){
          console.log(xhr.responseText);
          if(xhr.responseText== 'success'){
              alert('database sent');
              name.value="";
              surname.value="";
             
              ID.value="";
  
          }else{
              alert('something went wrong')
          }
      }
  
      xhr.send(JSON.stringify(formData));
  
  })