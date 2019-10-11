<?php

include "../sys/MYSQL_Model.php";

$arr =[
    'host'=>'localhost',
    'port'=>'3306',
	'user'=>'root',
    'passwd'=>'fankai',
    'dbname'=>'t2'
];

$m =new MMysql($arr);

$username =$_POST['username'];

$sql = "select * from kfz where username='$username';";
$info=$m->doSql($sql);

if($info){
    $arr=[
        'status'=>'ok',
        'message'=>'已被注册'
    ];
    echo json_encode($arr);
}else{
    $arr=[
        'status'=>'fail',
        'message'=>'未被注册'
    ];
    echo json_encode($arr);
}