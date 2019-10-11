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

$username =$_POST['username'];
$password=$_POST['password'];

// $password="fankai123";

$sql="select *from kfz where username='$username';";

$info=$m->doSql($sql);

if($info){
    $pwd = $info[0]['password'];
    if($pwd==$password){
        $arr=[
            'status'=>'ok',
            'message'=>'登录成功'
        ];
        echo json_encode($arr);
    }else {
		// 密码不相等 
		$arr = [
			"status"=>"fail_1",
			"message"=>"密码错误"
		];
        echo json_encode($arr);
    }
}else {
    // 用户不存在 
    $arr = [
        "status"=>"fail_2",
        "message"=>"无用户名"
    ];
    echo json_encode($arr);
}