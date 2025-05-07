<?php
$cf_name = $_POST['name'];
$cf_email = $_POST['email'];
$cf_phone = $_POST['phone'];
$cf_time = $_POST['time'];
$cf_date = $_POST['date'];
$cf_location = $_POST['location'];
$cf_message = $_POST['message'];

$mail_to = 'info@themeearth.com';
$subject = 'Message from a securepress site visitor '.$cf_name;

$body_message = 'From: '.$cf_name."\n";
$body_message .= 'E-mail: '.$cf_email."\n";
$body_message .= 'Phone No: '.$cf_phone."\n";
$body_message .= 'Time: '.$cf_time."\n";
$body_message .= 'Date: '.$cf_date."\n";
$body_message .= 'Location: '.$cf_location."\n";
$body_message .= 'Message: '.$cf_message;

$headers = 'From: '.$cf_email."\r\n";
$headers .= 'Reply-To: '.$cf_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Your Message Has Been Send. We will contact you shortly.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to shiddikurrahaman@gmail.com');
		window.location = 'index.html';
	</script>
<?php
}
?>