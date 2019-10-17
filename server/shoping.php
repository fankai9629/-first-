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

$sql = "select * from shoping";

$info=$m->doSql($sql);

echo json_encode($info);