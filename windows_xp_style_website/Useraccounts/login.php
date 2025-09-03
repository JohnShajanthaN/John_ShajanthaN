<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8">
  <title>User Login</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <script type="text/javascript" src="scripts.js"> </script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
</head>

<body>

  <div id="wrapper">
  
   <form method="POST" action="loginProcess.php" id="logform" name="lform" > <!-- onsubmit="return Validate()" -->
   
   	<div id="username_div">
   	  <label>Username</label> <br>
   	  <input type="text" name="username" class="textInput" tabindex="1" autofocus>
   	  <div id="name_error"></div>
   	</div>

   	<div id="password_div">
   	  <label>Password</label> <br>
   	  <input type="password" name="password" tabindex="2" class="textInput">
	  <div id="password_error1"></div>
   	</div>
	
	<div id="error">
	
	</div>
		
   	<div>
   	<input type="submit" name="login" value="Login" tabindex="3" class="btn">
   	</div>
	
   </form>
   
  </div>
  
  <script type='text/javascript'>
		
        $(document).ready(function()
		{
            $('#logform input').keydown(function(e)
			{
             if(e.keyCode==13)
			 {       

                if($(':input:eq(' + ($(':input').index(this) + 1) + ')').attr('type')=='submit')
				{// check for submit button and submit form on enter press
                 return true;
                }

                $(':input:eq(' + ($(':input').index(this) + 1) + ')').focus();

               return false;
             }

            });
        });
		
        </script>
  
</body>

</html>


