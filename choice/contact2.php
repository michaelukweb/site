<?php

	if (isset($_POST['fname']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['phone'])) {

	function testInput ($data) {

		$data = strip_tags($data);
 		$data = stripslashes($data);
  	$data = htmlspecialchars($data);

		return $data;
	}

	$name = testInput($_POST['fname']);
	$email = testInput($_POST['email']);
	$message = testInput($_POST['message']);
	$phone = testInput($_POST['phone']);
	$to = "michaelafc01@gmail.com";
	$subject = "Contact Form Message";
	$text = 'Name: ' . $name .  "\r\n" .'Email Address: ' . $email . "\r\n" .'Message: ' . $message . " Phone Number: " .$phone;


	$errors = array();


	if (empty($name) || empty($email) || empty($message)) {

		$errors [] = "Name, Email and Message are required";

	} else {

		if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {

			$errors [] = "Whoops Invalid Email, Please check for any mistakes";
			echo "PHP email error";
			echo "<br>";
		}

		if (ctype_digit($name) === true) {
			$errors [] = "Whoops your name must not contain numbers";
			echo "PHP name error";
			echo "<br>";
		}

	}




	if (empty($errors) === true) {

		if (mail($to, $subject, $text));
			{
				echo "success";
			}
	} else {

		echo "An Error has occurred";
	}


}

?>
