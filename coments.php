<?php

  $con=mysql_connect("localhost","root","");

	$base=mysql_select_db('pilascoments',$con);

	$comentario=$_POST['comentario'];
	
	$sql="INSERT INTO pilascomentarios VALUE('$comentario')";
	
?>