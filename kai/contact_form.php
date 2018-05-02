<?php 

	if (isset($_POST['fname']) && isset($_POST['email']) && isset($_POST['lname']) ) {

		$fname = strip_tags($_POST['fname']);
		$lname = strip_tags($_POST['lname']);
		$email = strip_tags($_POST['email']);
		$to = "michaelafc01@gmail.com";
		$from = $email;
		$subject = "Contact Form Message";
		$text = 'Name: ' . $fname .  " " .'Email Address: ' . $from . "\r\n" .'Phone Number: ' . $lname;
		$res = "success";
		$res1 = trim($res);

		$errors = array();


		if (empty($fname) === true || empty($email) === true || empty($lname) === true) {

			$errors [] = "Name, email and Message is required";
			echo "Name, email and Message are required";
			echo "<br>";
		} 

		if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
			$errors [] = 'Please enter a valid email address';
			echo "Error Please enter a valid email address php";
			
		} 
		

	 	if (empty($errors) === true) {

			if (mail($to, $subject, $text));
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

