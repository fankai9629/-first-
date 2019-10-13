// 判断cookie
window.onload = function () {
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

// 二级
$($('.left_conte_f')).mouseenter(function () {
    $(this).css('border', '2px solid  #8c222c');
    $(this).siblings().css('border', '2px solid transparent');
    $(this).css('border-right', 'none');
    $('.detiail_f').css('display', 'block');
    $('.detail_main_1').eq($(this).index()).css('display', 'block');
    $('.detail_main_1').eq($(this).index()).siblings().css('display', 'none');
})

    $($('.left_conte_f')).mouseleave(function () {
        $('.detiail_f').css('display', 'none');
        $(this).css('border', '2px solid  transparent');
        var that = this;
        $('.detiail_f').mouseenter(function () {
            $('.detiail_f').css('display', 'block');
            $(that).css('border', '2px solid  #8c222c');
            $(that).siblings().css('border', '2px solid transparent');
            $(that).css('border-right','none');
        })
})


$('.detiail_f').mouseleave(function () {
    $('.detiail_f').css('display', 'none');
    $('.left_conte_f').css('border','2px solid transparent');
})


// 第二个二级
$($('.left_conte_s')).mouseenter(function () {
    $(this).css('border', '2px solid  #8c222c');
    $('.detiail_s').css('display','block');
    $(this).siblings().css('border', '2px solid transparent');
    $(this).css('border-right', 'none');
    $('.detail_main_s').eq($(this).index()).css('display','block');
    $('.detail_main_s').eq($(this).index()).siblings().css('display','none');
})

$($('.left_conte_s')).mouseleave(function () {
    $('.detiail_s').css('display', 'none');
    $(this).css('border', '2px solid  transparent');
    var that = this;
    $('.detiail_s').mouseenter(function () {
        $('.detiail_s').css('display', 'block');
        $(that).css('border', '2px solid  #8c222c');
        $(that).siblings().css('border', '2px solid transparent');
        $(that).css('border-right','none');
    })
})
$('.detiail_s').mouseleave(function () {
    $('.detiail_s').css('display', 'none');
    $('.left_conte_s').css('border','2px solid transparent');
})

// 三级二级
$($('.left_conte_la')).mouseenter(function () {
    $(this).css('border', '2px solid  #8c222c');
    $('.detiail_la').css('display','block');
    $(this).siblings().css('border', '2px solid transparent');
    $(this).css('border-right', 'none');
    $('.detail_main_la').eq($(this).index()).css('display','block');
    $('.detail_main_la').eq($(this).index()).siblings().css('display','none');
})
$($('.left_conte_la')).mouseleave(function () {
    $('.detiail_la').css('display', 'none');
    $(this).css('border', '2px solid  transparent');
    var that = this;
    $('.detiail_la').mouseenter(function () {
        $('.detiail_la').css('display', 'block');
        $(that).css('border', '2px solid  #8c222c');
        $(that).siblings().css('border', '2px solid transparent');
        $(that).css('border-right','none');
    })
})
$('.detiail_la').mouseleave(function () {
    $('.detiail_la').css('display', 'none');
    $('.left_conte_la').css('border','2px solid transparent');
})

// 轮播
$($('.xiaotu')).mouseenter(function(){
    clearInterval(timer);
    $(this).addClass('active')
    $(this).siblings().removeClass('active');
    $('.big_pic').css('transition','.6s');
    $('.big_pic').css('opacity',0);
    $('.big_pic').eq($(this).index()).css('opacity',1);
    num = $(this).index()+1;
})
var num=1;
function move(){

    for(let i=0;i<$('.big_pic').length;i++){
        $('.big_pic').eq(i).css('opacity',0);
        $('.xiaotu').eq(i).removeClass('active');
        $('.big_pic').eq(i).css('transition','.4s');
    }
    $('.big_pic').eq(num).css('opacity',1);
    $('.xiaotu').eq(num).addClass('active');
    num++;
    num=num%8;
}
timer= setInterval(move,2000);

// 划过暂停
$('.banner_box_bg').mouseenter(function(){
    clearInterval(timer);
})

// 移开继续
$('.banner_box_bg').mouseleave(function(){
    clearInterval(timer);
    timer= setInterval(move,2000);
})

// 请求json文件
$.ajax({
    url:"../1_json.json",
    type:"GET",
    dataType:"json",
    success:function(a){
        console.log(a);
    }
})