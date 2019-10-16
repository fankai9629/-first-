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
    url:"../json/1_json.json",
    type:"GET",
    dataType:"json",
    success:function(a){
        for(let i=0;i<a.fir.length;i++){
            let b = a.fir[i].url;
            let c = a.sec[i].ind;
            let d = a.third[i].author;
            let e = a.four[i].price;
            let f = a.last[i].qi;
          $('.good_bgc').eq(i).append("<img >");
        $('.good_bgc').eq(i).find('img').attr("src",b);
        $('.good_bgc').eq(i).next('a').html(c);
        $('.book_author').eq(i).html(d);
        $('.book_price').eq(i).html(e);
        $('.qi').eq(i).html(f);
    }
    }
})

$.ajax({
    url:"../json/2_json.json",
    type:"GET",
    dataType:"json",
    success:function(a){
        for(let i =0;i<a.f.length;i++){
            let b = a.f[i].url;
            let c = a.s[i].ind;
            let d = a.t[i].des;
           
            let e = a.p[i].pp;
            let f = a.p_by[i].by;
            let g = a.qg[i].qgl;
            $('.newSquare_box_con').append($("<span class='item'></span>"));
            $('.item').eq(i).append($("<div class='item_img'></div>")) //添加上面部分
            $('.item_img').eq(i).append("<img>");
            $('.item_img').eq(i).find('img').attr("src",b); //图
            
            $('.item').eq(i).append($("<div class='item-con'></div>")); //标题
            $('.item-con').eq(i).append("<div class='item-con-title'><a href='javascript:;'></a></div>") 
            $('.item-con-title').eq(i).find('a').html(c); //介绍

            

            $('.item-con').eq(i).append("<div class='des'></div>")//描述
            $('.des').eq(i).html(d); //描述

            $('.item-con').eq(i).append("<div class='tag'></div>")//标签

            $('.item-con').eq(i).append("<div class='item-bottom'></div>")//底部
            $('.item-bottom').eq(i).append("<div class='item-bottom-zuoyou'></div><div class='qianggou'></div>")//左边+右边
            $('.item-bottom-zuoyou').eq(i).append("<span class='jiage'></span><span class='by'></span>");
            $('.jiage').eq(i).html(e); //价格
            $('.by').eq(i).html(f); //包邮
            $('.qianggou').eq(i).append("<div class='btn'></div>");
            $('.btn').eq(i).html(g);  
        }
                for(let m = 0;m<a.four_1.length;m++){
                let h = a.four_1[m].tag;
                $('.tag').eq(0).append("<span></span>");
                $('.tag').eq(0).find('span').eq(m).html(h);
            }
              for(let n = 0;n<a.four_2.length;n++){
                let j = a.four_2[n].tag2;
                $('.tag').eq(1).append("<span></span>");
                $('.tag').eq(1).find('span').eq(n).html(j);
            }
            for(let o = 0;o<a.four_3.length;o++){
                let k = a.four_3[o].tag3;
                $('.tag').eq(2).append("<span></span>");
                $('.tag').eq(2).find('span').eq(o).html(k);
            }

            for(let i=0;i<a.x.length;i++){
                let r = a.x[i].url;
                $('.three-column-con').append("<a href=''><img></a>");
                $('.three-column-con').find("a").eq(i).find('img').attr("src",r)
            }
            $('.three-column-con').find("a").eq(2).css('margin-right',0)
    }

})

// $(function(){
//     var scrollTop = $(this).scrollTop();
//         var scrollHeight = $(document).height();
//         var windowHeight = $(this).height();
//         if (scrollTop + windowHeight >= scrollHeight) {
//             $('.pm_company').prepend("<div class='jiazai'><img></div>");
//             setTimeout(function(){
//                 $('.jiazai').css('display','none');
//                 fn1();
//             },3000);
//         }
// })

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    var hei = getCookie('hei');
    if (scrollTop + windowHeight >= scrollHeight && hei=="") {
        setCookie('hei',1,0.054);
        $('.pm_company').prepend("<div class='jiazai'><img></div>");
        setTimeout(function(){
            $('.jiazai').css('display','none');
            fn1();
        },3000);
    }
})

function fn1(){ $.ajax({
    url:"../json/json.xlsm.json",
    type:"GET",
    dataType:"json",
    success:function(a){
        for(var i=0;i<3;i++){
            let b = a.contents[0]; //标题
            let c = a.contents[1];// 标题后面小标题
            let d = a.contents[2];// 主体标题

            let e1 = a.contents[3];// 1-1
            let f1 = a.contents[4];//1-2
            let g1 = a.contents[5];//1-3
            let h1 = a.contents[6];//1-4
            
            let e2 = a.contents[7];// 2-1
            let f2 = a.contents[8];//2-2
            let g2 = a.contents[9];//2-3
            let h2 = a.contents[10];//2-4

            let e3 = a.contents[11];//3-1
            let f3 = a.contents[12];//3-2
            let g3 = a.contents[13];//3-3
            let h3 = a.contents[14];//3-4

          

            let e4 = a.contents[15];// 4-1
            let f4 = a.contents[16];// 4-2
            let g4 = a.contents[17];// 4-3
            let h4 = a.contents[18];// 4-4

            let e5 = a.contents[19];// 5-1
            let f5 = a.contents[20];// 5-2
            let g5 = a.contents[21];// 5-3
            let h5 = a.contents[22];// 5-4

            let e6 = a.contents[23];// 6-1
            let f6 = a.contents[24];// 6-2
            let g6 = a.contents[25];// 6-3
            let h6 = a.contents[26];// 6-4

            let e7 = a.contents[27];// 7-1
            let f7 = a.contents[28];// 7-2
            let g7 = a.contents[29];// 7-3
            let h7 = a.contents[30];// 7-4

            let e8 = a.contents[31];// 8-1
            let f8 = a.contents[32];// 8-2
            let g8 = a.contents[33];// 8-3
            let h8 = a.contents[34];// 8-4

            let e9 = a.contents[35];// 9-1
            let f9 = a.contents[36];// 9-2
            let g9 = a.contents[37];// 9-3
            let h9 = a.contents[38];// 9-4

            let e10 = a.contents[39];// 10-1
            let f10 = a.contents[40];// 10-2
            let g10 = a.contents[41];// 10-3
            let h10 = a.contents[42];// 10-4

            let j1 = a.contents[43];

            let j2 = a.contents[44];
            let j3 = a.contents[45];

            let j4 = a.contents[46];
            let j5 = a.contents[47];

            let j6 = a.contents[48];
            let j7 = a.contents[49];

            let j8 = a.contents[50];
            let j9 = a.contents[51];

            let i1 = a.contents[52];
            let i2 = a.contents[53];

            let i3 = a.contents[54];
            let i4 = a.contents[55];

            let i5 = a.contents[56];
            let i6 = a.contents[57];

            let i7 = a.contents[58];
            let i8 = a.contents[59];


            $('.bg_f7').append("<div class='index_shuji'></div>");
           $('.index_shuji').eq(i).append("<div class='ancient_box'></div>");
           $('.ancient_box').eq(i).append("<div class='ancient_title'></div><div class='ancient_left'></div><div class='ancient_right'></div>")
           $('.ancient_title').eq(i).append("<div class='floor_big'></div>");
           $('.floor_big').eq(i).append(("<ul class='floor_list'></ul>"));
            $('.floor_list').eq(i).append("<span class='floor_title_name'></span><li><a href='javascript:;'></a></li>");
            $('.floor_title_name').eq(i).html(b[i]);
            $('.floor_list').eq(i).find('li').find('a').html(c[i]);
            $('.ancient_left').eq(i).append("<div class='left_main_list'><p class='left_main_title'><span></span></p></div>")
            $('.left_main_title').eq(i).find('span').html(d[i]);

            $('.left_main_list').eq(i).append("<div class='left_main_cont'></div>")
            for(let x =0;x<10;x++){
                $('.left_main_cont').eq(i).append("<span class='shop_item'></span>");
            
                $('.left_main_cont').eq(i).find('span').eq(x).append("<a href='javascript:;' class='book_list_img'></a>");
                $('.left_main_cont').eq(i).find('span').eq(x).append("<a href='javascript:;' class='book_list_pro'></a>");
                $('.left_main_cont').eq(i).find('span').eq(x).append("<a href='javascript:;' class='book_list_time'></a>");
                $('.left_main_cont').eq(i).find('span').eq(x).append("<p class='pro_price'><i class='pro_price_re_br'></i></p>")
                $('.left_main_cont').eq(i).find('.book_list_img').eq(x).append("<img>");
                $('.left_main_cont').eq(i).find('.book_list_img').eq(0).find('img').attr("src",e1[i]);
                $('.left_main_cont').eq(i).find('.book_list_pro').eq(0).html(f1[i]);
                $('.left_main_cont').eq(i).find('.book_list_time').eq(0).html(g1[i]);
                $('.left_main_cont').eq(i).find('.pro_price_re_br').eq(0).html(h1[i]);

                $('.left_main_cont').eq(i).find('.book_list_img').eq(1).find('img').attr("src",e2[i]);
                $('.left_main_cont').eq(i).find('.book_list_pro').eq(1).html(f2[i]);
                $('.left_main_cont').eq(i).find('.book_list_time').eq(1).html(g2[i]);
                $('.left_main_cont').eq(i).find('.pro_price_re_br').eq(1).html(h2[i]);

                $('.left_main_cont').eq(i).find('.book_list_img').eq(2).find('img').attr("src",e3[i]);
                $('.left_main_cont').eq(i).find('.book_list_pro').eq(2).html(f3[i]);
                $('.left_main_cont').eq(i).find('.book_list_time').eq(2).html(g3[i]);
                $('.left_main_cont').eq(i).find('.pro_price_re_br').eq(2).html(h3[i]);

                $('.left_main_cont').eq(i).find('.book_list_img').eq(3).find('img').attr("src",e4[i]);
                $('.left_main_cont').eq(i).find('.book_list_pro').eq(3).html(f4[i]);
                $('.left_main_cont').eq(i).find('.book_list_time').eq(3).html(g4[i]);
                $('.left_main_cont').eq(i).find('.pro_price_re_br').eq(3).html(h4[i]);

                $('.left_main_cont').eq(i).find('.book_list_img').eq(4).find('img').attr("src",e5[i]);
                $('.left_main_cont').eq(i).find('.book_list_pro').eq(4).html(f5[i]);
                $('.left_main_cont').eq(i).find('.book_list_time').eq(4).html(g5[i]);
                $('.left_main_cont').eq(i).find('.pro_price_re_br').eq(4).html(h5[i]);

                $('.left_main_cont').eq(i).find('.book_list_img').eq(5).find('img').attr("src",e6[i]);
                $('.left_main_cont').eq(i).find('.book_list_pro').eq(5).html(f6[i]);
                $('.left_main_cont').eq(i).find('.book_list_time').eq(5).html(g6[i]);
                $('.left_main_cont').eq(i).find('.pro_price_re_br').eq(5).html(h6[i]);

                $('.left_main_cont').eq(i).find('.book_list_img').eq(6).find('img').attr("src",e7[i]);
                $('.left_main_cont').eq(i).find('.book_list_pro').eq(6).html(f7[i]);
                $('.left_main_cont').eq(i).find('.book_list_time').eq(6).html(g7[i]);
                $('.left_main_cont').eq(i).find('.pro_price_re_br').eq(6).html(h7[i]);

                $('.left_main_cont').eq(i).find('.book_list_img').eq(7).find('img').attr("src",e8[i]);
                $('.left_main_cont').eq(i).find('.book_list_pro').eq(7).html(f8[i]);
                $('.left_main_cont').eq(i).find('.book_list_time').eq(7).html(g8[i]);
                $('.left_main_cont').eq(i).find('.pro_price_re_br').eq(7).html(h8[i]);

                $('.left_main_cont').eq(i).find('.book_list_img').eq(8).find('img').attr("src",e9[i]);
                $('.left_main_cont').eq(i).find('.book_list_pro').eq(8).html(f9[i]);
                $('.left_main_cont').eq(i).find('.book_list_time').eq(8).html(g9[i]);
                $('.left_main_cont').eq(i).find('.pro_price_re_br').eq(8).html(h9[i]);

                $('.left_main_cont').eq(i).find('.book_list_img').eq(9).find('img').attr("src",e10[i]);
                $('.left_main_cont').eq(i).find('.book_list_pro').eq(9).html(f10[i]);
                $('.left_main_cont').eq(i).find('.book_list_time').eq(9).html(g10[i]);
                $('.left_main_cont').eq(i).find('.pro_price_re_br').eq(9).html(h10[i]);

            }
                $('.ancient_right').eq(i).append("<div class='ancient_right_cont'><p class='list_main_title'><span></span></p></div>")
                $('.ancient_right_cont').eq(i).find('span').html(j1[i]);
                $('.ancient_right_cont').eq(i).append("<ul></ul>")
            for(let y=0;y<8;y++){
                $('.ancient_right_cont').eq(i).find('ul').append("<li></li>");
                $('.ancient_right_cont').eq(i).find('li').eq(y).append("<div class='f_left'><span></span></div>")
                $('.ancient_right_cont').eq(i).find('li').eq(y).append("<div class='text_box'><a href='javascript:;' class='list_name'></a></div>")
                $('.ancient_right_cont').eq(i).find('li').eq(y).append("<p class='list_rem_intro'></p><p class='list_shop_line'></p>")
            }
            $('.ancient_right_cont').eq(i).find('li').eq(0).find('.list_name').html(j2[i]);
            $('.ancient_right_cont').eq(i).find('li').eq(0).find('.list_rem_intro').html(j3[i]);

            $('.ancient_right_cont').eq(i).find('li').eq(1).find('.list_name').html(j4[i]);
            $('.ancient_right_cont').eq(i).find('li').eq(1).find('.list_rem_intro').html(j5[i]);

            $('.ancient_right_cont').eq(i).find('li').eq(2).find('.list_name').html(j6[i]);
            $('.ancient_right_cont').eq(i).find('li').eq(2).find('.list_rem_intro').html(j7[i]);

            $('.ancient_right_cont').eq(i).find('li').eq(3).find('.list_name').html(j8[i]);
            $('.ancient_right_cont').eq(i).find('li').eq(3).find('.list_rem_intro').html(j9[i]);

            $('.ancient_right_cont').eq(i).find('li').eq(4).find('.list_name').html(i1[i]);
            $('.ancient_right_cont').eq(i).find('li').eq(4).find('.list_rem_intro').html(i2[i]);

              $('.ancient_right_cont').eq(i).find('li').eq(5).find('.list_name').html(i3[i]);
            $('.ancient_right_cont').eq(i).find('li').eq(5).find('.list_rem_intro').html(i4[i]);

              $('.ancient_right_cont').eq(i).find('li').eq(6).find('.list_name').html(i5[i]);
            $('.ancient_right_cont').eq(i).find('li').eq(6).find('.list_rem_intro').html(i6[i]);

              $('.ancient_right_cont').eq(i).find('li').eq(7).find('.list_name').html(i7[i]);
            $('.ancient_right_cont').eq(i).find('li').eq(7).find('.list_rem_intro').html(i8[i]);
                
        }
        $('.index_shuji').eq(1).css('background','#fff');
        $('.zhiding').css('display','block');
    }
})
}
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if(scrollTop>200){
            $('.zhiding').css('display','block');
        }else{
            $('.zhiding').css('display','none');
        }
    })

$($('.hover_img')).mouseenter(function(){
   $(this).find('.l_i_2').css('display','block');
})

$($('.hover_img')).mouseleave(function(){
    $(this).find('.l_i_2').css('display','none');
 })




