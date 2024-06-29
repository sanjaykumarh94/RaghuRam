<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = "This comment is from service page";
$message = $_POST['message'];

$email_from = "info@psychic-raghuramji.com";

$email_subject = "New subject";

$email_body = "User Name: $name. \n".
              "User Email: $visitor_email. \n".
              "Subject: $subject. \n".
              "User Message: $message. \n\n\n\n\n".

$to = "sanjaykumarh94@gmail.com,info@psychic-raghuramji.com";

$headers = "From: $email_from \r\n";

$headers  = "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location:  index.html")

?>
