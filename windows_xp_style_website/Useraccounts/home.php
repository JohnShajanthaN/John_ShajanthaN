<?php
	session_start();
	include 'database.php';			
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>User Registration</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div id="wrapper">

    <form action="home.php" method="post" enctype="multipart/form-data">
		<h2>Welcome</h2>
        <br>   
		<p class="hint-text"><br><b>Hi </b><?php echo $_SESSION["uname"] ?></p>
        <div class="text-center">Want to Leave the Page? <br><a href="logout.php">Logout</a></div>
    </form>
	
</div>

</body>
</html>