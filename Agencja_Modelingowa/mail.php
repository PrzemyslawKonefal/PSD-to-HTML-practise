<?php
$to      = 'webmaster@example.com';
$subject = 'Kontakt z witryny';
$message = $_POST['message'];
$headers = 'From: ' .$_POST['email']. "\r\n";

mail($to, $subject, $message, $headers);
header('Location: index.html');
?>
