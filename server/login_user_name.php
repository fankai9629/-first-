<?php

include "../sys/MySQL_Model.php";

$arr =[
    'host'=>'localhost',
    'port'=>'3306',
	'user'=>'root',
    'passwd'=>'fankai',
    'dbname'=>'t2'
];

$m =new MMysql($arr);

$phone =$_POST['phone'];
$password=$_POST['password'];

// $password="fankai123";

$sql="select username from kfz where phone='$phone';";

$info=$m->doSql($sql);

echo json_encode($info[0]);