<?php
$servername="localhost";
$usr="id15064751_johnshajanthan";
$pass="Passw0rd!0149";
$database="id15064751_windowsx";

// Create connection
$conn = mysqli_connect($servername,$usr,$pass,$database);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "";

?>