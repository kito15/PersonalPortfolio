<?php
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])){
    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->SMTPAuth = true;
    
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
    
        $mail->Username = "rai6@njit.edu";
        $mail->Password = "ditlyfthetvmmgaa";
    
        $mail->addAddress("rai6@njit.edu");
        $mail->addReplyTo($email, $name);
    
    
        $mail->Body = $message;
        $mail->send();
        echo "Sent";
    }catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
    
}

?>