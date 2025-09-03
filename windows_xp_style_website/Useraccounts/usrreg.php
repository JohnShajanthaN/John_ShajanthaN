<?php

$username=$_POST['username'];
$password=$_POST['password'];
$cpassword=$_POST['password_confirm'];

include("database.php");

include("/home/johnshajanthanj/public_html/index.php");

if(isset($_POST['register']))
{
	
	if($username=="")
	{
			
		if($password=="")
		{
			if($cpassword=="")
			{		
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Username & Password & Confirm Password Cannot Be Blank";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
				
			}
			else
			{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Username & Password Cannot Be Blank !!";';
				echo 'document.getElementById("error").style.display="block";';
				/* echo 'document.getElementById("txtcpass").value="'<?php echo $cpassword;?>'";'; */
				echo '</script>';			
			}
			
		}
		
		else
		{
			if($cpassword=="")
			{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Username & Confirm Password Cannot Be Blank !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
			}
			else
			{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Username Cannot Be Blank !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';												
			}
			
		}
	}
	
	else if($password=="") 
	{
		
			if($cpassword=="")
			{
				
			$sql3=mysqli_query($conn,"SELECT * FROM usrreg where username='$username'");

			if(mysqli_num_rows($sql3)>0)
			{	
			//header("location:index.php");
			    echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Username Is Already Exists && Password && Confirm Password Cannot Be Blank !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';		
			}
			
			else
			{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Correct Username && Password && Confirm Password Cannot Be Blank !! ";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
			}
			
			}
			
			else
			{
				
			$sql4=mysqli_query($conn,"SELECT * FROM usrreg where username='$username'");

			if(mysqli_num_rows($sql4)>0)
			{			
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Username Is Already Exists && Password Cannot Be Blank !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';	
			    //header("location:index.php");
			}
			
			else
			{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Correct Username && Password Cannot Be Blank !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
			}
			
			}
				
	}						
					
	else if($cpassword=="")
	{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Correct Username && Confirm Password Cannot Be Blank !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';	
	}
	
	else
	{
		if($password==$cpassword)
		{
			
		$sql1=mysqli_query($conn,"SELECT * FROM usrreg where username='$username'");

		if(mysqli_num_rows($sql1)>0)
		{	
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Username Is Already Exists && Try Another Username !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
		//header("location:index.php");
		}
		
		else
		{
			
		$query=mysqli_query($conn,"insert into usrreg (username,password) values ('$username','$password')");
		
        if($query)
		{
			echo "Account Created Successfully !!";
			header("location:login.php");
		}
		else		
		{			
		
		}
		
		}
		
		}
		
		else
		{
			
		$sql2=mysqli_query($conn,"SELECT * FROM usrreg where username='$username'");

		if(mysqli_num_rows($sql2)>0)
		{		
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Username Is Already Exists && Confirm Password Does not Match With Password !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
		//header("location:index.php");
		}
		
		else
		{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Correct Username && Confirm Password Does not Match With Password !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
		}
					
		}
		
	}
		
}

?>

