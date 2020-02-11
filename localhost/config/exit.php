<?php 
setcookie('user', $user['firstname'], time() - 3600, "/");
header("Location: ../index.php");
?>