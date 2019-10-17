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

$url = $_POST['url'];
$name = $_POST['name'];
$price = $_POST['price'];
$num = $_POST['num'];



$sql="insert into shoping(url,name,price,num) values('$url','$name','$price','$num');";

$info=$m->doSql($sql);

if($info){
    $arr=[
        "status"=>"ok",
        "message"=>"添加成功"
    ];
    echo json_encode($arr);
}else{
    $arr=[
        "status"=>"ok",
        "message"=>"添加失败"
    ];
    echo json_encode($arr);
}