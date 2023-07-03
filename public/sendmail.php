<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require './PHPMailer/src/Exception.php';
  require './PHPMailer/src/PHPMailer.php';


  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language');
  $mail->isHTML(true);


  $mail->setFrom('Kodbaza@gmail.com', 'Mailer'); // from
  $mail->addAddress('Kodbaza@gmail.com'); //to
  $mail->Subject = 'Here is the subject'; // theme of letter

  // leters body
  $body = '<h1>title</h1>';
  $body .= '<p><b>Name:</b> '.$_POST['name'].'</p>';
  $body .= '<p><b>Phone:</b> '.$_POST['phone'].'</p>';

  $mail->Body = $body;

  // send leter
  if (!$mail->send()) {
    $message = 'Error';
  } else {
    $message = 'Letter was sended';
  }

  $response = ['message' => $message];
  header('Content-type: application/json');
  echo json_encode($response);
?>