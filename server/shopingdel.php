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

$src = $_POST['src'];

$sql ="delete * from shoping where src='$src';";

$info =$m->doSql($sql);

if($info){
    $arr=[
        "status":"ok";
    ];
    echo $arr;

}else{
    $arr=>[
        "status":'fail';
    ];
};