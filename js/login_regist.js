// 点击右边切换注册登录

// 点击注册,登录消失
$('.to_login_in2').click(function () {
    $('.right_box2').addClass('right_box_hide');
    $('.right_box1').removeClass('right_box_hide');

    $('.main_login').css('display', 'none'); //登录消失
    $('.main_regist').css('display', 'block'); //注册出现
    $('.scan').css('display', 'none'); //扫码消失
})

// 点击登录 注册消失
$('.to_login_in1').click(function () {
    $('.right_box1').addClass('right_box_hide');
    $('.right_box2').removeClass('right_box_hide');

    $('.main_regist').css('display', 'none'); //注册消失

    $('.main_login').css('display', 'block'); //登录出现
    $('.login_box').css('display', 'block'); // 必须出现
    $('#login').css('display', 'block'); //用户账号密码登录
    $('#login_ph').css('display', 'none'); //手机登录消失
    $('.scan').css('display', 'none'); //扫码消失
    $('.youbiandianji_f').css('display', 'block'); //手机登录
    $('.youbiandianji_l').css('display', 'none'); //其他方式
})

// 扫码点击切换


$('.img_scan').click(function () {
    $('.login_box').css('display', 'none'); //登录消失
    $('.scan').css('display', 'block'); //扫码出现
    $('.youbiandianji_f').css('display', 'block'); //手机登录
    $('.youbiandianji_l').css('display', 'none'); //其他方式

})
$('.scan_img').click(function () {
    $('.login_box').css('display', 'block'); //登录出现
    $('.scan').css('display', 'none'); //扫码消失
    $('#login').css('display', 'block') //用户账号密码登录出现
    $('#login_ph').css('display', 'none'); //手机登录消失

})


// 手机验证码登录和账号登录来回切换
$('.yanzhengma_f').click(function () {
    $('.show_pass').parent().css('display', 'block');
    $('.dis_hide').css('display', 'none');
    $('#login_ph').css('display', 'block'); //手机登录出现
    $('#login').css('display', 'none') //用户账号密码登录消失

    $('.youbiandianji_f').css('display', 'none'); //手机登录
    $('.youbiandianji_l').css('display', 'block'); //其他方式

})

$('.yanzhengma_l').click(function () {

    $('#login_ph').css('display', 'none'); //手机登录消失
    $('#login').css('display', 'block') //用户账号密码登录出现

    $('.youbiandianji_f').css('display', 'block'); //手机登录
    $('.youbiandianji_l').css('display', 'none'); //其他方式
})

// 开始和数据库交互

// 手机号正则
var re_p = /^1[35789]\d{9}$/;

// 手机号注册

// 手机号框
var sendInsz = document.getElementsByClassName('sendInsz')[0];
$('#phone').keyup(function () {
    $('.pos_info').eq(0).css('display', 'none');
    if ($(this).val().length == '11' && re_p.test($(this).val())) {
        // 数据库判断
        var data = "phone=" + $(this).val();
        ajax('post', '../server/regist_ph.php', data, function (a) {
            var date = JSON.parse(a);
            if (date.status == 'ok') { //手机号已经被注册
                $('.font_14').css('display', 'block');
            } else {
                $('.font_14').css('display', 'none'); //手机号可以使用
                $('.sendInsz').click(function () { //获取验证码
                    clearInterval(timer);
                    // 验证码
                    var code = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
                    var code_arr = Array.from(code);
                    var count = "";
                    for (let i = 0; i < 4; i++) {
                        var ran = code_arr[(Math.floor(Math.random() * code_arr.length))];
                        count += ran;
                    }
                    sendInsz.nextElementSibling.innerHTML = count;
                    alert('验证码为' + ':' + count);
                    // 循环
                    var m = 60;
                    var timer = setInterval(function () {
                        m--;
                        sendInsz.innerHTML = m + '秒后可重发';
                        var that = this;
                        if (m == 0) {
                            sendInsz.innerHTML = '获取验证码';
                            clearInterval(timer);
                        }
                    }, 500)
                })
            }
        })
    } else if ($(this).val().length > '11') { //位数太多
        $('.font_14').css('display', 'none');
        $('.pos_info').eq(0).css('display', 'block');
        $('.pos_info').eq(0).find('span').html('请输入正确手机号');
    }
})



$('#phone').blur(function () {
    if ($(this).val() == "") {
        $('.pos_info').eq(0).css('display', 'block');
        $('.pos_info').eq(0).find('span').html('请输入手机号');
    } else if (!re_p.test($('#phone').val())) {
        $('.pos_info').eq(0).css('display', 'block');
        $('.pos_info').eq(0).find('span').html('请输入正确的手机号');
    }
})

// 验证码匹配
$('#message').blur(function () {
    if ($(this).val() == sendInsz.nextElementSibling.innerHTML && $(this).val() != '') { //匹配
        $('.pos_info').eq(1).css('display', 'none');
    } else if ($(this).val() == '') { //没输入值
        $('.pos_info').eq(1).css('display', 'block');
        $('.pos_info').eq(1).find('span').html('请输入验证码');
    } else { //不匹配
        $('.pos_info').eq(1).css('display', 'block');
        $('.pos_info').eq(1).find('span').html('验证码不正确');

    }
})

// 手机号下用户名填写
var re = /^[\u4e00-\u9fa5_a-zA-Z0-9]{4,30}$/; //数字字母中文
var re_n = /^\d+$/; //数字开头
var re_r = /[^\u4e00-\u9fa5_a-zA-Z0-9]$/; //非数字字母中文
$('#username').keyup(function () {
    $('.pos_info').eq(2).css('display', 'block');
    $('.pos_info').eq(2).css('color', '#666');
    $('.pos_info').eq(2).find('span').html('中文英文数字下划线都可以,注册后用户名不可更改');
})
$('#username').blur(function () {
    var data = $('#username').val();
    if (data == '') {
        $('.pos_info').eq(2).css('display', 'block');
        $('.pos_info').eq(2).css('color', '#D13333');
        $('.pos_info').eq(2).find('span').html('请输入用户名');
    } else if (re_n.test(data)) { //数字开头
        $('.pos_info').eq(2).css('display', 'block');
        $('.pos_info').eq(2).css('color', '#D13333');
        $('.pos_info').eq(2).find('span').html('首字母不能为数字');
    } else if (data.length < 4) { //长度不够
        $('.pos_info').eq(2).css('display', 'block');
        $('.pos_info').eq(2).css('color', '#D13333');
        $('.pos_info').eq(2).find('span').html('至少4个字符');
    } else if (data.length > 15) { //太长
        $('.pos_info').eq(2).css('display', 'block');
        $('.pos_info').eq(2).css('color', '#D13333');
        $('.pos_info').eq(2).find('span').html('最多15个字符');
    } else if (re_r.test(data)) { //非数字字母英文
        $('.pos_info').eq(2).css('display', 'block');
        $('.pos_info').eq(2).css('color', '#D13333');
        $('.pos_info').eq(2).find('span').html('用户名只能包含汉字数字下划线和英文');
    } else if (re.test(data)) { //匹配啦
        $('.pos_info').eq(2).css('display', 'block');
        $('.pos_info').eq(2).css('color', '#666');
        $('.pos_info').eq(2).find('span').html('中文英文数字下划线都可以,注册后用户名不可更改');

        // 数据库判断
        var date = "username=" + data;
        ajax('post', '../server/regist_user.php', date, function (a) {
            var info = JSON.parse(a);
            if (info.status == 'ok') { //用户名已有
                $('.pos_info').eq(2).css('display', 'block');
                $('.pos_info').eq(2).css('color', '#D13333');
                $('.pos_info').eq(2).find('span').html('用户名已存在');
            } else {
                $('.pos_info').eq(2).css('display', 'block');
                $('.pos_info').eq(2).css('color', '#666');
                $('.pos_info').eq(2).find('span').html('中文英文数字下划线都可以,注册后用户名不可更改');
            }
        })
    }
})

// 设置密码
// 密码框小眼睛

$(".yanjing").click(function () {
    var hClass = $("#togglePassword").hasClass("icon-kaiyanjing");
    if (hClass == true) {
        $("#togglePassword").removeClass("icon-kaiyanjing");
        $("#togglePassword").addClass("icon-biyan");
        $("#password").attr("type", "password");
    } else if (hClass == false) {
        $("#togglePassword").addClass("icon-kaiyanjing");
        $("#togglePassword").removeClass("icon-biyan");
        $("#password").attr("type", "text");
    }
})
$(".yanjing1").click(function () {
    var hClass = $("#togglePassword1").hasClass("icon-kaiyanjing");
    if (hClass == true) {
        $("#togglePassword1").removeClass("icon-kaiyanjing");
        $("#togglePassword1").addClass("icon-biyan");
        $("#login_password").attr("type", "password");
    } else if (hClass == false) {
        $("#togglePassword1").addClass("icon-kaiyanjing");
        $("#togglePassword1").removeClass("icon-biyan");
        $("#login_password").attr("type", "text");
    }
})
$(".yanjing2").click(function () {
    var hClass = $("#togglePassword2").hasClass("icon-kaiyanjing");
    if (hClass == true) {
        $("#togglePassword2").removeClass("icon-kaiyanjing");
        $("#togglePassword2").addClass("icon-biyan");
        $("#ph_password").attr("type", "password");
    } else if (hClass == false) {
        $("#togglePassword2").addClass("icon-kaiyanjing");
        $("#togglePassword2").removeClass("icon-biyan");
        $("#ph_password").attr("type", "text");
    }
})



$('#password').keyup(function () {
    var re_n_p = /^\d+$/; //全为数字
    var re_w_p = /^[a-zA-Z]+$/; //全为字母
    var re_s_p = /^[^0-9a-zA-Z]+$/; //不是数字和字母 
    var re_2_n = /^[0-9a-zA-Z]+$/; //只有数字和字母；
    // var re_2_s = /\W]+/; //不为数字和字母
    var re_3_a = /[0-9][a-zA-Z][\W_]+/;
    $('.pos_info').eq(3).css('display', 'block');
    $('.pos_info').eq(3).css('color', '#666');
    $('.pos_info').eq(3).siblings().css('display', 'none');
    $('.pos_info').eq(3).find('span').html('6~20个字，请使用字母、数字、符号组合密码');
    var re_pwd = $('#password').val();
    if (re_n_p.test(re_pwd) && re_pwd.length >= 6) {
        $('.pos_info').eq(4).css('display', 'block');
        $('.pos_info').eq(4).siblings().css('display', 'none');

    } else if (re_w_p.test(re_pwd) && re_pwd.length >= 6) {
        $('.pos_info').eq(4).css('display', 'block');
        $('.pos_info').eq(4).siblings().css('display', 'none');

    } else if (re_s_p.test(re_pwd) && re_pwd.length >= 6) {
        $('.pos_info').eq(4).css('display', 'block');
        $('.pos_info').eq(4).siblings().css('display', 'none');
    } else if (re_pwd.length > '20') { //超过20位字符
        $('.pos_info').eq(4).css('display', 'block');
        $('.pos_info').eq(4).css('color', '#D13333');
        $('.pos_info').eq(4).find('span').html('密码须为6-20个字符');
        $('.pos_info').eq(4).siblings().css('display', 'none');

    } else if (re_2_n.test(re_pwd) && re_pwd.length >= 6) {
        $('.pos_info').eq(5).css('display', 'block');
        $('.pos_info').eq(5).siblings().css('display', 'none');

    } else if (re_pwd.length < 6) {

    } else {
        $('.pos_info').eq(6).css('display', 'block');
        $('.pos_info').eq(6).siblings().css('display', 'none');
    }
})
$('#password').blur(function () {
    if ($('#password').val() == '') {
        $('.pos_info').eq(3).css('display', 'block');
        $('.pos_info').eq(3).css('color', '#D13333');
        $('.pos_info').eq(3).siblings().css('display', 'none');
        $('.pos_info').eq(3).find('span').html('请输入密码');

    }
})


// 协议点击
$('.dianji_xieyi').click(function () {
    if ($('.dianji_xieyi').is(':checked')) {
        $('#submit').css('cursor', 'pointer');
        $('#submit').css('background', '#8c222c');
    } else {
        $('#submit').css('background', '#ccc');
        $('#submit').css('cursor', 'not-allowed');
    }
})



// 注册
$('#submit').click(function () {
    var font_14 = document.getElementsByClassName('font_14')[0];
    var pos_info = document.getElementsByClassName('pos_info')[0];
    var pos_info1 = document.getElementsByClassName('pos_info')[1];
    var pos_info2 = document.getElementsByClassName('pos_info')[2];
    var pos_info3 = document.getElementsByClassName('pos_info')[3];
    var pos_info4 = document.getElementsByClassName('pos_info')[4];
    var pos_info5 = document.getElementsByClassName('pos_info')[5];
    var pos_info6 = document.getElementsByClassName('pos_info')[6];


    if (!$('.dianji_xieyi').is(':checked')) {
        return;
        console.log(1);
    } else if (font_14.style.display != 'none') {
        console.log(2);
        return;
    } else if (pos_info.style.display != 'none') {
        console.log(3);
        return;
    } else if (pos_info1.style.display != 'none') {
        console.log(4);
        return;
    } else if (pos_info2.children[0].innerHTML != '中文英文数字下划线都可以,注册后用户名不可更改') {
        console.log(5);
        return;
    } else if (pos_info3.style.display != 'none') {
        console.log(6);
        return;
    } else if (pos_info4.style.display == 'block' || pos_info5.style.display == 'block' || pos_info6.style.display == 'block') {
        var data = "phone=" + $('#phone').val() + "&username=" + $('#username').val() + "&password=" + $('#password').val();
        ajax('post', '../server/regist_in.php', data, function (a) {
            var date = JSON.parse(a);
            if (date.status == 'ok') {
                alert('注册成功,正在跳转登录页面..');
                window.location.href = "./login_regist.html";
            }
        })
    }
})


// 登录

// 用户名或则手机号登录
$('#login_username').keyup(function () {
    $('.pos_info').eq(7).css('display', 'none');
})


$('#login_username').blur(function () {
    if ($('#login_username').val() == '') {
        $('.pos_info').eq(7).css('display', 'block');
    }
})


$('#login_password').keyup(function () {
    $('.pos_info').eq(8).css('display', 'none');
})
$('#login_password').blur(function () {
    if ($('#login_password').val() == '') {
        $('.pos_info').eq(8).css('display', 'block');
    }
})
// 提交
$('#login_in_sub').click(function () {
    if ($('#login_username').val() == '' && ($('#login_password').val() == '')) {
        $('.pos_info').eq(7).css('display', 'block');
        $('.pos_info').eq(7).find('span').html('请输入用户名');
        $('.pos_info').eq(8).css('display', 'block');
        $('.pos_info').eq(8).find('span').html('请输入密码');

        return false;
    } else if ($('#login_username').val() == '' && ($('#login_password').val() != '')) {
        $('.pos_info').eq(7).css('display', 'block');
        $('.pos_info').eq(7).find('span').html('请输入用户名');
        $('#login_username').focus();

        return false;
    } else if (($('#login_username').val() != '' && ($('#login_password').val() == ''))) {
        $('.pos_info').eq(8).css('display', 'block');
        $('.pos_info').eq(8).find('span').html('请输入密码');
        $('#login_password').focus();
        return false;
    } else { //2个框都有值就进行判定
        var re = /^1/;

        if (re.test($('#login_username').val())) { //手机号登录
            var data = "phone=" + $('#login_username').val() + "&password=" + $('#login_password').val();
            ajax('post', '../server/login_user.php', data, function (a) {
                var mess = JSON.parse(a);
                if (mess.status == 'ok') {
                    ajax('post', '../server/login_user_name.php', data, function (b) {
                        var mess_name = JSON.parse(b);
                        setCookie('username', 'mess_name.username', 7);
                        alert('登录成功正在跳转首页');
                        window.location.href = "./index.html";
                    })
                } else if (mess.status == 'fail_1') {
                    $('.pos_info').eq(7).css('display', 'none');
                    $('.pos_info').eq(8).css('display', 'block');
                    $('.pos_info').eq(8).find('span').html('用户名和密码不匹配');
                    return false;

                } else {
                    $('.pos_info').eq(7).css('display', 'block');
                    $('.pos_info').eq(8).css('display', 'none');
                    $('.pos_info').eq(7).find('span').html('用户名不存在');
                    return false;
                }
            })
        } else {
            var data = "username=" + $('#login_username').val() + "&password=" + $('#login_password').val();
            ajax('post', '../server/login_ph.php', data, function (a) { //用户名登录
                var mess_info = JSON.parse(a);
                if (mess_info.status == 'ok') {
                    setCookie('username', $('#login_username').val(), 7);
                    alert('登录成功正在跳转首页...');
                    window.location.href = "./index.html";
                } else if (mess_info.status == 'fail_1') {
                    $('.pos_info').eq(7).css('display', 'none');
                    $('.pos_info').eq(8).css('display', 'block');
                    $('.pos_info').eq(8).find('span').html('用户名和密码不匹配');
                    return false;
                } else {
                    $('.pos_info').eq(7).css('display', 'block');
                    $('.pos_info').eq(8).css('display', 'none');
                    $('.pos_info').eq(7).find('span').html('用户名不存在');
                    return false;
                }
            })
        }
        return false;
    }
})

//手机验证码登录
// var re_p = /^1[35789]\d{9}$/;
// 点击出现新密码
$('.show_pass').click(function () {
    $('.show_pass').parent().css('display', 'none');
    $('.dis_hide').css('display', 'block');
})
var sendInsy = document.getElementsByClassName('sendInsy')[0];
$('#ph_y').keyup(function () {
    $('.pos_info').eq(9).css('display', 'none');
    $('.font_15').css('display', 'none');
    if ($(this).val().length == '11' && re_p.test($(this).val())) {
        // 数据库判断
        var data = "phone=" + $(this).val();
        ajax('post', '../server/regist_ph.php', data, function (a) {
            var date = JSON.parse(a);
            if (date.status != 'ok') { //手机号未被注册
                $('.font_15').css('display', 'block');
            } else {
                $('.font_15').css('display', 'none'); //手机号可以登录
                $('.sendInsy').click(function () { //获取验证码
                    clearInterval(timer);
                    // 验证码
                    var code = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
                    var code_arr = Array.from(code);
                    var count = "";
                    for (let i = 0; i < 4; i++) {
                        var ran = code_arr[(Math.floor(Math.random() * code_arr.length))];
                        count += ran;
                    }
                    sendInsy.nextElementSibling.innerHTML = count;
                    alert('验证码为' + ':' + count);
                    // 循环
                    var m = 60;
                    var timer = setInterval(function () {
                        m--;
                        sendInsy.innerHTML = m + '秒后可重发';
                        var that = this;
                        if (m == 0) {
                            sendInsy.innerHTML = '获取验证码';
                            clearInterval(timer);
                        }
                    }, 500)
                })
            }
        })
    } else if ($(this).val().length > '11') { //位数太多
        $('.font_15').css('display', 'none');
        $('.pos_info').eq(9).css('display', 'block');
        $('.pos_info').eq(9).find('span').html('请输入正确手机号');
    }
})

// 验证码匹配
$('#message_y').blur(function () {
    if ($(this).val() == sendInsy.nextElementSibling.innerHTML && $(this).val() != '') { //匹配
        $('.pos_info').eq(10).css('display', 'none');
    } else if ($(this).val() == '') { //没输入值
        $('.pos_info').eq(10).css('display', 'block');
        $('.pos_info').eq(10).find('span').html('请输入验证码');
    } else { //不匹配
        $('.pos_info').eq(10).css('display', 'block');
        $('.pos_info').eq(10).find('span').html('验证码不正确');

    }
})

$('#ph_y').blur(function () {
    if($('#ph_y').val()==''){
        $('.pos_info').eq(9).css('display', 'block');
        $('.pos_info').eq(9).find('span').html('请输入手机号');

    }else if(!re_p.test($('#ph_y').val())){
        $('.pos_info').eq(9).css('display', 'block');
        $('.pos_info').eq(9).find('span').html('请输入正确的手机号');

    }else{
        
    }
})

//手机验证码登录按钮
    $('#login_ph_sub').click(function(){

        alert(1);
        return  false;
    })