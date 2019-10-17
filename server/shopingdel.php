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

$sql ="delete  from shoping where url='$url';";

$info =$m->doSql($sql);


if($info){
    $arr=[
        "status"=>"ok",
        "message"=>"删除成功"
    ];
    echo json_encode($arr);
}else{
    $arr=[
        "status"=>"fail",
        "message"=>"删除失败"
    ];
    echo json_encode($arr);
}