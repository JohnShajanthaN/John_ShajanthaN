<?php

$username = $_POST['username'];
$password = $_POST['password'];

include("database.php");
include("login.php");

if(isset($_POST['login']))
{	
	if($username=="")
	{
		if($password=="")
		{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Username & Password Cannot Be Blank. !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';		
		}
		else
		{
				$sql=mysqli_query($conn,"SELECT * FROM usrreg where password='$password'");
				
				if(mysqli_num_rows($sql)>0)
				{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Username Cannot Be Blank && Correct Password !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
				}
				
				else
				{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Username Cannot Be Blank && Incorrect Password !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
				}
			
		}
	
	}
	
	else
	{
		if($password=="")
		{
				$sql=mysqli_query($conn,"SELECT * FROM usrreg where username='$username'");
				$row= mysqli_fetch_array($sql);
	
				if(mysqli_num_rows($sql)>0)
				{	
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Correct Username && Password Cannot Be Blank.!!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
				}
				
				else
				{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Incorrect Username && Password Cannot Be Blank.!!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
				}
				
		}
		
		else
		{
				$sql1=mysqli_query($conn,"SELECT * FROM usrreg where username='$username' && password='$password'");
				$row1=mysqli_fetch_array($sql1);
				
				$uname=mysqli_query($conn,"SELECT * FROM usrreg where username='$username'");
				$pass=mysqli_query($conn,"SELECT * FROM usrreg where password='$password'");
				
	
				if(mysqli_num_rows($sql1)>0)
				{	
				$_SESSION["uname"] =$row1['username'];
				echo "Login Successfully !!";
				header("location:home.php");
				}
				
				else if(mysqli_num_rows($uname)>0)
				{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Correct Username && Incorrect Password!!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
					
				}
				
				else if(mysqli_num_rows($pass)>0)
				{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Incorrect Username && Correct Password !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
					
				}
				
				else
				{
				echo '<script type="text/javascript">';
				echo 'document.getElementById("error").innerHTML="Incorrect Username && Incorrect Password !!";';
				echo 'document.getElementById("error").style.display="block";';
				echo '</script>';
				}
				
	}
	
  }
		
}
		
?>