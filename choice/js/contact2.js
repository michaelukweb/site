function submit () {

	document.getElementById("main-contact-send").onclick = submitForm;
}

window.addEventListener('load', function loadFunctions() {

  submit();

});

function submitForm () {

  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  //Name validation

  if (name == null || name == "") {

    document.getElementById("name-err").innerHTML = "Please enter your name";

    return false;

  } else {
  	document.getElementById("name-err").innerHTML = "";
  }


  //Email validation

  if (email == null || email == "") {

    document.getElementById("email-err").innerHTML = "Please enter your email";
    return false;

  } else if (email !== null) {

		var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  		var result1 = document.getElementById("email").value;
  		var result = result1.trim();

 		if (!regex.test(result)) {

    		document.getElementById("email-err").innerHTML = "Please enter a valid email address";
    		return false;

  		} else {

    		document.getElementById("email-err").innerHTML = "";

  		}

  }

  else {

  	    document.getElementById("email-err").innerHTML = "";

  }

	//Message validation

	if (message == null || message == "") {

		document.getElementById("message-err").innerHTML = "Please enter your message";
		return false;

	} else {

				document.getElementById("message-err").innerHTML = "";
	}


  var formData = new FormData;

	formData.append( "fname", document.getElementById("fname").value);
	formData.append( "email", document.getElementById("email").value);
	formData.append( "message", document.getElementById("message").value);
  formData.append( "phone", document.getElementById("phone").value);


	var ajax = new XMLHttpRequest();
  ajax.open( "POST","contact2.php");

  ajax.onreadystatechange = function () {
  //console.log("ajax function running");


  //console.log("ajax readyState" + ajax.readyState);
  //console.log("ajax status" + ajax.status);


  if (ajax.readyState == 4 && ajax.status == 200) {

    //console.log("ajax responseText " + ajax.responseText);

    var text = ajax.responseText;
 		//console.log("var text responseText is " + text);

    if (ajax.responseText == "success") {

      //console.log("ajax responseText -if- statement " + ajax.responseText);
      //getRes("myform").innerHTML = " We will be in contact shortly";
      document.getElementById("myform").innerHTML = "Thank you for your query, we will be in contact shortly";


      } else {

        document.getElementById("response_msg").innerHTML = ajax.responseText;
        //getRes("main-contact-send").disabled = false;
      }

  }

  }
  ajax.send(formData);
  var form = document.getElementById("myform");
  form.reset();

}
