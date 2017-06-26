<?php
	try {
	  $dbh = new PDO("mysql:host=localhost;dbname=dkroyer6_calendar", 'dkroyer6_david', 'Dance4life');
	}
	catch(PDOException $e) {
	    echo $e->getMessage();
	}