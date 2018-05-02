 
function submit() {

  document.getElementById("main-contact-send").onclick = submitForm;

} 

window.addEventListener('load', function loadFunctions() {
          
  submit();

});

function getRes(id) { 

  return document.getElementById(id);
}

function submitForm() {


  var name = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;


  document.getElementById("name-err").innerHTML = "";  
  document.getElementById("email-err").innerHTML = ""; 
  document.getElementById("lname-err").innerHTML = "";  
  document.getElementById('fname').style.borderColor = "";
  document.getElementById('email').style.borderColor = ""; 
  document.getElementById('lname').style.borderColor = "";
 


    //name 
  if (name == null || name == "") {

    document.getElementById("name-err").innerHTML = "Please enter your first name";
    document.getElementById('fname').style.borderColor = "red";
    return false;

  } 

      //name 
  if (lname == null || lname == "") {

    document.getElementById("lname-err").innerHTML = "Please enter your last name";
    document.getElementById('lname').style.borderColor = "red";
    return false;

  } 


  //email function
  if (email == null || email == "") {

    document.getElementById("email-err").innerHTML = "Please enter you email address";  
    document.getElementById('email').style.borderColor = "red";
    return false;

  } else if (email !== null) {

      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var result1 = document.getElementById("email").value;
      var result = result1.trim();
      document.getElementById("email-err").innerHTML = "";  

                    
    if (!regex.test(result)) {
                        
        document.getElementById("email-err").innerHTML = "Please enter a valid email address"; 
        document.getElementById('email').style.borderColor = "red"; 
        return false;

      } else {
    
        document.getElementById("email-err").innerHTML = "";
                    
      }

  }

  else {
        
        document.getElementById("email-err").innerHTML = "";  

  }


  //getRes("main-contact-send").disabled = false;
  //getRes("response_msg").innerHTML = 'Please wait sending message....';
          
  var formData = new FormData();
  formData.append( "fname", getRes("fname").value);
  formData.append( "email", getRes("email").value);
  formData.append( "lname", getRes("lname").value);

          
   var ajax = new XMLHttpRequest();
     ajax.open( "POST","contact_form.php");
          


  ajax.onreadystatechange = function () {
              console.log("ajax function running");
              
    //Not working
    console.log("ajax readyState" + ajax.readyState);
     console.log("ajax status" + ajax.status);


    if (ajax.readyState == 4 && ajax.status == 200) {
     
        console.log("ajax responseText " + ajax.responseText);
          console.log("var text responseText is " + text);
          var text = this.responseText;

      if (text.charAt(0) == "s") {

          console.log("ajax responseText if statement " + ajax.responseText);     
        //getRes("myform").innerHTML = " We will be in contact shortly";
        document.getElementById("myform").innerHTML = "Thank you for getting in touch, I shall be in contact shortly";
                 

      } else {

        getRes("response_msg").innerHTML = ajax.responseText;

        //getRes("main-contact-send").disabled = false;

      }
                  
    }

  }


  //console.log("send data");
  ajax.send(formData);
  var form = document.getElementById("myform");
  form.reset();
  
} 
                
            