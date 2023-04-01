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

