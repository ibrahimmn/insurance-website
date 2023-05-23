<?php

// if(isset($_POST['submit'])){
//     $to = "ibrahimmneimneh2000@gmail.com"; // this is your Email address
//     $from = $_POST['email']; // this is the sender's Email address
//     $first_name = $_POST['first_name'];
//     $last_name = $_POST['last_name'];
//     $subject = "Form submission";
//     $subject2 = "Copy of your form submission";
//     $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
//     $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

//     $headers = "From:" . $from;
//     $headers2 = "From:" . $to;
//     mail($to,$subject,$message,$headers);
//     mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
//     echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
// }
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 // Get the form data
 $name = $_POST["name"];
 $email = $_POST["email"];
 $message = $_POST["message"];

 // Send the email
 $to = "ibrahimmneimneh2000@gmail.com";
 $subject = "New Message from Contact Form";
 $body = "Name: $name\nEmail: $email\nMessage: $message";
 $headers = "From: $email";

 if (mail($to, $subject, $body, $headers)) {
   echo "Thank you for your message!";
 } else {
   echo "Oops, something went wrong. Please try again later.";
 }
}


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Graduation project">
    <meta name="author" content="Ibrahim Mnaimne">
   
    <title>protectnow | Protect</title>
    
    <link rel="shortcut icon" type="image/x-icon" href="assets/web-icon.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" /> -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="/css/contactus.css">
    
</head>
<body>
<%- include('partials/header') -%>
  <div class="separator"></div>


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24090.575180718984!2d28.801400700000002!3d40.99632715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa396db59606d%3A0x6594147beb14e9b4!2sIstanbul%20Ayd%C4%B1n%20University!5e0!3m2!1sen!2str!4v1680274944869!5m2!1sen!2str" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<div class="contact">
    <div class="innercontact">

        <div class="contactussub">
        <h2>Contact us</h2>
        <p><span>Address:</span> Beşyol, İnönü Cd. No:38, 34295 Küçükçekmece/İstanbul</p>
        <p><span>Telefon:</span> <a href="tel:441428">441428</a></p>
        <p><span>Email:</span> <a href="mailto:admission@aydin.edu.tr">admission@aydin.edu.tr</a></p>
         </div>

    
    <!-- <form id="emailsub" > -->
      <!-- <form onsubmit="sendmail(); reset(); return false"> -->
      <form action="" method="POST">
        <h2>Send us a Message</h2>

        <span>Name:</span> <input type="text" id="name" name="first_name"><br>
       <span>Last Name:</span> <input type="text" id="lastname" name="last_name"><br>
        <span>Email:</span> <input type="text" id="email" name="email" required><br>
        <span>Message:</span><br><textarea  id="message" name="message" required></textarea><br>
        <input type="submit" name="submit" value="Submit">
        <!-- <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message"></textarea><br><br>
        <input type="submit" value="Submit"> -->
        
        </form>
    </div>
</div>


<button onclick="topFunction()" id="topBtn" title="Go to top"><i class="fa-solid fa-chevron-up  fa-xl" style="color: #fafafa;"></i></button>

<div class="prepared">
  <p><strong>Be prepared</strong></p>
</div>


<%- include('partials/footer') -%>




<script  src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- <script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
  function sendmail(){
  Email.send({
    SecureToken: "a9df5a2b-e2fc-4980-81f3-689f3d8c6aeb",
    // Host : "smtp.elasticemail.com",
    // Username : "username",
    // Password : "password",
    To : 'tbmn85@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New contact mail",
    Body : "Name: "+getElementById("name").value
          + "<br> Last Name: "+getElementById("lastname").value
          + "<br> Email: "+getElementById("email").value
          + "<br> Message: "+getElementById("message").value


}).then(
  message => alert("Message sent successfully")
);
  }
</script> -->
<script>
    <script src="/js/main.js"></script>


  // $(document).ready(function() {
  //   $('#emailsub').submit(function(event) {
  //     event.preventDefault(); // Prevent default form submission

  //     $.ajax({
  //       type: 'POST',
  //       url: 'php/emailsubmit.php',
  //       data: $('#emailsub').serialize(), // Send form data to PHP file
  //       success: function(response) {
  //         // Display the response from PHP file
  //         console.log(response);
  //       }
  //     });
  //   });
  // });




</script>




</body>    
</html> 