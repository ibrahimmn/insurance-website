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
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//  // Get the form data
//  $name = $_POST["name"];
//  $email = $_POST["email"];
//  $message = $_POST["message"];

//  // Send the email
//  $to = "ibrahimmneimneh2000@gmail.com";
//  $subject = "New Message from Contact Form";
//  $body = "Name: $name\nEmail: $email\nMessage: $message";
//  $headers = "From: $email";

//  if (mail($to, $subject, $body, $headers)) {
//    echo "Thank you for your message!";
//  } else {
//    echo "Oops, something went wrong. Please try again later.";
//  }
// }


    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Update this to your desired email address.
        $recipient = "tbmn85@gmail.com";
		$subject = "Message from $name";

        // Email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Subject: $subject\n\n";
        $email_content .= "Message: $message\n";

        // Email headers.
        $email_headers = "From: $name <$email>\r\nReply-to: <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>



