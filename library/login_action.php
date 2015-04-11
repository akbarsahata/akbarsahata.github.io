<?php
	session_start();
	include_once"connector.php";
	
	$dbh = PDOStarter();
	
	$username = $_POST['username'];
	$password = $_POST['password'];

	$data[] = $username;
	$data[] = $password;

	$q = "SELECT * FROM rpl.user WHERE username = ? AND password = MD5(?) AND role = 'user'";
	$ps = $dbh->prepare($q);
	$ps->execute($data);
	$jml = $ps->rowCount();
	

	if ($jml == 1)
	{
    	$member = $ps->fetch();
    	$_SESSION['member'] = $member;
    	header('location:../index.php');
	} else {
    	echo'<script>alert("Maaf user/password anda salah");history.go(-1);</script>';
}
?>