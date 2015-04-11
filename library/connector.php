<?php
function PDOstarter() {
	$dsn = 'mysql:dbname=rpl;host=127.0.0.1;charset=utf8';
	$user = 'root';
	$password = '';

	try {
		$dbh = new PDO($dsn, $user, $password);
		$dbh -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$dbh -> setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, TRUE);
		return $dbh;
		
	} catch (PDOException $e) {
		echo 'Connection failed: ' . $e -> getMessage();
	}
}
?>