// 判断cookie
window.onload = function () {
    setCookie('hei','',0);

    if (getCookie('username')) {
        var m = getCookie('username');
        $('.login_show_h').css('display', 'none');
        $('.login_show_name').css('display', 'block');
        $('.login_show_name').find('a').html(m);
    } else {
        $('.login_show_h').css('display', 'block');
        $('.login_show_name').css('display', 'none');
        $('.login_show_name').find('a').html(m);
    }
}
// 点击退出登录
$('.click_out').click(function () {
    var a = confirm('是否退出');
    if (a) {
        setCookie('username', '', 0);
        window.location.href = "./login_regist.html";
    }
})
// 点击登录跳转登录页面
$('.login_re_0').click(function () {
    setCookie('lo_re', 1, 0.0005);
    window.location.href = "./login_regist.html";
})
$('.login_re_2').click(function () {
    setCookie('lo_re', 0, 0.0005);
    window.location.href = "./login_regist.html";
})

// 送货地址存入
$($('.bc_cc')).click(function () {
    $('.dizhi').html($(this).html());

    $(this).css('background', '#7b111b');
    $(this).css('color', 'white');

    $(this).siblings().css('background', 'white');
    $(this).siblings().css('color', '#333');

})

$('.n_r_choice_p1').click(function () {
    $('.n_r_jiaobiao').css('left', '12px');
    $('.search_inp').val("商品名称、作者、出版社、ISBN");
    $('.search_inp').css('color', '#999');

    $(this).css('color', '#7b111b');
    $(this).siblings().css('color', '#333');
})
$('.n_r_choice_p2').click(function () {
    $('.n_r_jiaobiao').css('left', '46px');
    $('.search_inp').val("拍品名称、拍品作者、拍主昵称");
    $('.search_inp').css('color', '#999');

    $(this).css('color', '#7b111b');
    $(this).siblings().css('color', '#333');
})
$('.n_r_choice_p3').click(function () {
    $('.n_r_jiaobiao').css('left', '80px');
    $('.search_inp').val("");

    $(this).css('color', '#7b111b');
    $(this).siblings().css('color', '#333');
})

$('.search_inp').focus(function () {
    $('.search_inp').val("");
    $('.search_inp').css('color', '#333');
})