<?php 

	if (isset($_POST['fname']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['phone'])) {

		$fname = strip_tags($_POST['fname']);
		$email = strip_tags($_POST['email']);
		$message = strip_tags($_POST['message']);
		$phone = strip_tags($_POST['phone']);
		$to = "michaelafc01@gmail.com";
		$from = $email;
		$subject = "Contact Form Message";
		$text = 'Name: ' . $fname .  " " .'Email Address: ' . $from . "\r\n" .'Phone Number: ' . $phone;
		$res = "success";
		$res1 = trim($res);

		$errors = array();


		if (empty($fname) === true || empty($email) === true || empty($message) === true) {

			$errors [] = "Name, email and Message is required";
			echo "Name, email and Message are required";
			echo "<br>";
		} 

		if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
			$errors [] = 'Please enter a valid email address';
			echo "Error Please enter a valid email address php";
			
		} 

		// if (ctype_alpha($fname) === false) {
		// 	$errors [] = 'Name must only contain letters';
		// 	echo "Error Name must only contain letters php";
		// 	echo "<br>";
		// }

		if (empty($message)) {

			$errors [] = "Please enter your message";
			echo "<br>";
			echo "Please enter your message php";
			// echo "<br>";
		}
	

		// $response = $fname . ' ' .$email . ' ' .$message;

		// $headers = "From: $from\r\n";
		// $headers .= "MIME-Version: 1.0\r\n";
		// $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

	 	if (empty($errors) === true) {

			if (mail($to, $subject, $text, $message));
			{
				echo $res;
			} 


			//header('Location: index.html?sent');
			//echo "sucess";
			//exit();

		} else {

				echo "Error occurred sending form php";

		}





	}//End of Isset

?>

