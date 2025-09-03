

// SELECTING ALL TEXT ELEMENTS
var username = document.forms['vform']['username'];
var password = document.forms['vform']['password'];
var password_confirm = document.forms['vform']['password_confirm'];

// SELECTING ALL ERROR DISPLAY ELEMENTS
var name_error = document.getElementById('name_error');
var password_error1 = document.getElementById('password_error1');
var password_error = document.getElementById('password_error');


// SETTING ALL EVENT LISTENERS
username.addEventListener('blur', nameVerify, true);
password.addEventListener('blur', passwordVerify, true);


// validation function
function Validate() 
{
	

  // Mandory Field Checks
  
  if (username.value === "" && password.value === "" && password_confirm.value === "" )
  {
    username.style.border = "solid 5px red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  

  // validate username
  if (username.value === "")
  {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  
  // validate username
  if (username.value.length < 3)
  {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username must be at least 3 characters";
    username.focus();
    return false;
  }

  // validate password
  if (password.value === "") 
  {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password.style.border = "1px solid red";
    password_error1.textContent = "Password is required";
    password.focus();
    return false;
  }
  
   // validate confirm password
  if (password_confirm.value === "") 
  {
    password_confirm.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Confirm Password is required";
    password_confirm.focus();
    return false;
  }
  
  // check if the two passwords match
  if (password.value != password_confirm.value) 
  {
    password.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
  
}

// event handler functions
function nameVerify() 
{	
  if (username.value != "") 
  {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}

function passwordVerify() 
{
  if (password.value != "") 
  {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	document.getElementById('password_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
  if (password.value === password_confirm.value) 
  {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
}




