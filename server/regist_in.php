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

$phone=$_POST['phone'];
$username=$_POST['username'];
$password=$_POST['password'];

$sql="insert into kfz(phone,username,password) values('$phone','$username','$password');";

$info=$m->doSql($sql);

if($info){
    $arr=[
        "status"=>"ok",
        "message"=>"注册成功,正在跳转登录页面"
    ];
    echo json_encode($arr);
}else{
    $arr=[
        "status"=>"ok",
        "message"=>"注册失败"
    ];
    echo json_encode($arr);
}