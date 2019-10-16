

function fn1(){  //综合
        $.ajax({
            url:"../json/json1.xlsm.json",
            type:"GET",
            dataType:"json",
            success:function(a){
                for(let i =0; i<12;i++){
                    $('.listBox').eq(0).append("<div class='result_cont'></div>");
                    $('.result_cont').eq(i).append("<div class='item-img'></div><div class='item-info'></div><div class='item-other-info'></div>")
                    $('.item-img').eq(i).append("<a href='javascript:;' class='item-img-i'><img></a>");
                    $('.item-img-i').eq(i).find('img').attr('src',a.contents[i][0]); //插图
                    $('.item-img').eq(i).append("<div class='big-img-box'><img class='big-img'></div>");
                    $('.big-img-box').eq(i).attr("src",a.contents[i][0]);   //查大图
                    $('.item-info').eq(i).append("<div class='item-info-title'><a href='javascript:;'></a></div>");
                    $('.item-info-title').eq(i).find('a').html(a.contents[i][1]); //插介绍
                    $('.item-info').eq(i).append("<div class='item-info-ind'><span class='info-text'></span></div>")
                    $('.info-text').eq(i).html(a.contents[i][2]); // 插详细介绍
                    $('.item-other-info').eq(i).append("<div class='price-box'></div><div class='price-box1'></div>");
                    $('.price-box').eq(i).append("<div class='price-info'><a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a></div>");
                    $('.price-box').eq(i).find('.book-type').html(a.contents[i][3]); //新书
                    $('.price-box').eq(i).find('.new-price').html("￥"+a.contents[i][4]); //价格
                    $('.price-box').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>");
                    $('.price-box').eq(i).find('.book-shop').html(a.contents[i][5]); //书店有售；
                    $('.price-box1').eq(i).append("<div class='price-info'></div><div class='shop-num-info'></div>");
                    $('.price-box1').eq(i).find('.price-info').append("<a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a>")
                    $('.price-box1').eq(i).find('.book-type').html(a.contents[i][6]); //旧书
                    $('.price-box1').eq(i).find('.new-price').html("￥"+a.contents[i][7]); //价格
                    $('.price-box1').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>")
                    $('.price-box1').eq(i).find('.book-shop').html(a.contents[i][8]);  //有售
                }   
            }
    })
} 

$('.guanbi').click(function(){
    $('.adv_img').css('display','none');
})

// 点击综合排序
$($('.res_hv')).click(function(){
    if($(this).index()!='3'){
    }
    $('.icon-arrow-down-').css('color','#aaa')
    $(this).css('color','#bf7f5f');
    $(this).siblings().css('color','#666');
})
fn1();


//综合
$('.res_hv1').click(function(){
    $('.listBox').html('');
    fn1();
})
//人气
$('.res_hv2').click(function(){
    $('.listBox').html('');
    $.ajax({
        url:"../json/json1_renqi.xlsm.json",
        type:"GET",
        dataType:"json",
        success:function(a){
            for(let i =0; i<12;i++){
                $('.listBox').eq(0).append("<div class='result_cont'></div>");
                $('.result_cont').eq(i).append("<div class='item-img'></div><div class='item-info'></div><div class='item-other-info'></div>")
                $('.item-img').eq(i).append("<a href='javascript:;' class='item-img-i'><img></a>");
                $('.item-img-i').eq(i).find('img').attr('src',a.contents[i][0]); //插图
                $('.item-img').eq(i).append("<div class='big-img-box'><img class='big-img'></div>");
                $('.big-img-box').eq(i).attr("src",a.contents[i][0]);   //查大图
                $('.item-info').eq(i).append("<div class='item-info-title'><a href='javascript:;'></a></div>");
                $('.item-info-title').eq(i).find('a').html(a.contents[i][1]); //插介绍
                $('.item-info').eq(i).append("<div class='item-info-ind'><span class='info-text'></span></div>")
                $('.info-text').eq(i).html(a.contents[i][2]); // 插详细介绍
                $('.item-other-info').eq(i).append("<div class='price-box'></div><div class='price-box1'></div>");
                $('.price-box').eq(i).append("<div class='price-info'><a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a></div>");
                $('.price-box').eq(i).find('.book-type').html(a.contents[i][3]); //新书
                $('.price-box').eq(i).find('.new-price').html("￥"+a.contents[i][4]); //价格
                $('.price-box').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>");
                $('.price-box').eq(i).find('.book-shop').html(a.contents[i][5]); //书店有售；
                $('.price-box1').eq(i).append("<div class='price-info'></div><div class='shop-num-info'></div>");
                $('.price-box1').eq(i).find('.price-info').append("<a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a>")
                $('.price-box1').eq(i).find('.book-type').html(a.contents[i][6]); //旧书
                $('.price-box1').eq(i).find('.new-price').html(a.contents[i][7]); //价格
                $('.price-box1').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>")
                $('.price-box1').eq(i).find('.book-shop').html(a.contents[i][8]);  //有售
            }   
        }
    })
})

// 豆瓣
$('.res_hv3').click(function(){
    $('.listBox').html('');
    $.ajax({
        url:"../json/json1_pf.json",
        type:"GET",
        dataType:"json",
        success:function(a){
            for(let i =0; i<11;i++){
                $('.listBox').eq(0).append("<div class='result_cont'></div>");
                $('.result_cont').eq(i).append("<div class='item-img'></div><div class='item-info'></div><div class='item-other-info'></div>")
                $('.item-img').eq(i).append("<a href='javascript:;' class='item-img-i'><img></a>");
                $('.item-img-i').eq(i).find('img').attr('src',a.contents[i][0]); //插图
                $('.item-img').eq(i).append("<div class='big-img-box'><img class='big-img'></div>");
                $('.big-img-box').eq(i).attr("src",a.contents[i][0]);   //查大图
                $('.item-info').eq(i).append("<div class='item-info-title'><a href='javascript:;'></a></div>");
                $('.item-info-title').eq(i).find('a').html(a.contents[i][1]); //插介绍
                $('.item-info').eq(i).append("<div class='item-info-ind'><span class='info-text'></span></div>")
                $('.info-text').eq(i).html(a.contents[i][2]); // 插详细介绍
                $('.item-other-info').eq(i).append("<div class='price-box'></div><div class='price-box1'></div>");
                $('.price-box').eq(i).append("<div class='price-info'><a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a></div>");
                $('.price-box').eq(i).find('.book-type').html(a.contents[i][3]); //新书
                $('.price-box').eq(i).find('.new-price').html("￥"+a.contents[i][4]); //价格
                $('.price-box').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>");
                $('.price-box').eq(i).find('.book-shop').html(a.contents[i][5]); //书店有售；
                $('.price-box1').eq(i).append("<div class='price-info'></div><div class='shop-num-info'></div>");
                $('.price-box1').eq(i).find('.price-info').append("<a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a>")
                $('.price-box1').eq(i).find('.book-type').html(a.contents[i][6]); //旧书
                $('.price-box1').eq(i).find('.new-price').html(a.contents[i][7]); //价格
                $('.price-box1').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>")
                $('.price-box1').eq(i).find('.book-shop').html(a.contents[i][8]);  //有售
            }   
        }
    })
})

//在售
$('.filter-status').click(function(){
    $('.icon-xuankuang_selected').toggle();
    if($('.icon-xuankuang_selected').css('display')!='none'){
        $('.listBox').html('');
       fn1();
    }else{
        $('.listBox').html('');
        $.ajax({
            url:"../json/json1.xlsm.json",
            type:"GET",
            dataType:"json",
            success:function(a){
                for(let i =0; i<28;i++){
                    $('.listBox').eq(0).append("<div class='result_cont'></div>");
                    $('.result_cont').eq(i).append("<div class='item-img'></div><div class='item-info'></div><div class='item-other-info'></div>")
                    $('.item-img').eq(i).append("<a href='javascript:;' class='item-img-i'><img></a>");
                    $('.item-img-i').eq(i).find('img').attr('src',a.contents[i][0]); //插图
                    $('.item-img').eq(i).append("<div class='big-img-box'><img class='big-img'></div>");
                    $('.big-img-box').eq(i).attr("src",a.contents[i][0]);   //查大图
                    $('.item-info').eq(i).append("<div class='item-info-title'><a href='javascript:;'></a></div>");
                    $('.item-info-title').eq(i).find('a').html(a.contents[i][1]); //插介绍
                    $('.item-info').eq(i).append("<div class='item-info-ind'><span class='info-text'></span></div>")
                    $('.info-text').eq(i).html(a.contents[i][2]); // 插详细介绍
                    $('.item-other-info').eq(i).append("<div class='price-box'></div><div class='price-box1'></div>");
                    $('.price-box').eq(i).append("<div class='price-info'><a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a></div>");
                    $('.price-box').eq(i).find('.book-type').html(a.contents[i][3]); //新书
                    $('.price-box').eq(i).find('.new-price').html("￥"+a.contents[i][4]); //价格
                    $('.price-box').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>");
                    $('.price-box').eq(i).find('.book-shop').html(a.contents[i][5]); //书店有售；
                    $('.price-box1').eq(i).append("<div class='price-info'></div><div class='shop-num-info'></div>");
                    $('.price-box1').eq(i).find('.price-info').append("<a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a>")
                    $('.price-box1').eq(i).find('.book-type').html(a.contents[i][6]); //旧书
                    $('.price-box1').eq(i).find('.new-price').html(a.contents[i][7]); //价格
                    $('.price-box1').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>")
                    $('.price-box1').eq(i).find('.book-shop').html(a.contents[i][8]);  //有售
               
                }  
            }
          
        })
      
    }
})
//价格排序
$('.xiala').click(function(){
    
    if($('.icon-arrow-up-1').css('display')!='none'){
        $('.icon-arrow-up-1').css('display','none');
        $('.icon-arrow-down-').css('color','#bf7f5f');
        $('.listBox').html('');
        $.ajax({
            url:"../json/json1_h_l.json",
            type:"GET",
            dataType:"json",
            success:function(a){
                for(let i =0; i<11;i++){
                    $('.listBox').eq(0).append("<div class='result_cont'></div>");
                    $('.result_cont').eq(i).append("<div class='item-img'></div><div class='item-info'></div><div class='item-other-info'></div>")
                    $('.item-img').eq(i).append("<a href='javascript:;' class='item-img-i'><img></a>");
                    $('.item-img-i').eq(i).find('img').attr('src',a.contents[i][0]); //插图
                    $('.item-img').eq(i).append("<div class='big-img-box'><img class='big-img'></div>");
                    $('.big-img-box').eq(i).attr("src",a.contents[i][0]);   //查大图
                    $('.item-info').eq(i).append("<div class='item-info-title'><a href='javascript:;'></a></div>");
                    $('.item-info-title').eq(i).find('a').html(a.contents[i][1]); //插介绍
                    $('.item-info').eq(i).append("<div class='item-info-ind'><span class='info-text'></span></div>")
                    $('.info-text').eq(i).html(a.contents[i][2]); // 插详细介绍
                    $('.item-other-info').eq(i).append("<div class='price-box'></div><div class='price-box1'></div>");
                    $('.price-box').eq(i).append("<div class='price-info'><a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a></div>");
                    $('.price-box').eq(i).find('.book-type').html(a.contents[i][3]); //新书
                    $('.price-box').eq(i).find('.new-price').html("￥"+a.contents[i][4]); //价格
                    $('.price-box').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>");
                    $('.price-box').eq(i).find('.book-shop').html(a.contents[i][5]); //书店有售；
                    $('.price-box1').eq(i).append("<div class='price-info'></div><div class='shop-num-info'></div>");
                    $('.price-box1').eq(i).find('.price-info').append("<a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a>")
                    $('.price-box1').eq(i).find('.book-type').html(a.contents[i][6]); //旧书
                    $('.price-box1').eq(i).find('.new-price').html(a.contents[i][7]); //价格
                    $('.price-box1').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>")
                    $('.price-box1').eq(i).find('.book-shop').html(a.contents[i][8]);  //有售
                }   
            }
        })

    }else{
        $('.icon-arrow-up-1').css('display','block');
        $('.icon-arrow-down-').css('color','#aaa');
        $('.listBox').html('');
        $.ajax({
            url:"../json/json1_l_h.json",
            type:"GET",
            dataType:"json",
            success:function(a){
                for(let i =0; i<11;i++){
                    $('.listBox').eq(0).append("<div class='result_cont'></div>");
                    $('.result_cont').eq(i).append("<div class='item-img'></div><div class='item-info'></div><div class='item-other-info'></div>")
                    $('.item-img').eq(i).append("<a href='javascript:;' class='item-img-i'><img></a>");
                    $('.item-img-i').eq(i).find('img').attr('src',a.contents[i][0]); //插图
                    $('.item-img').eq(i).append("<div class='big-img-box'><img class='big-img'></div>");
                    $('.big-img-box').eq(i).attr("src",a.contents[i][0]);   //查大图
                    $('.item-info').eq(i).append("<div class='item-info-title'><a href='javascript:;'></a></div>");
                    $('.item-info-title').eq(i).find('a').html(a.contents[i][1]); //插介绍
                    $('.item-info').eq(i).append("<div class='item-info-ind'><span class='info-text'></span></div>")
                    $('.info-text').eq(i).html(a.contents[i][2]); // 插详细介绍
                    $('.item-other-info').eq(i).append("<div class='price-box'></div><div class='price-box1'></div>");
                    $('.price-box').eq(i).append("<div class='price-info'><a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a></div>");
                    $('.price-box').eq(i).find('.book-type').html(a.contents[i][3]); //新书
                    $('.price-box').eq(i).find('.new-price').html("￥"+a.contents[i][4]); //价格
                    $('.price-box').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>");
                    $('.price-box').eq(i).find('.book-shop').html(a.contents[i][5]); //书店有售；
                    $('.price-box1').eq(i).append("<div class='price-info'></div><div class='shop-num-info'></div>");
                    $('.price-box1').eq(i).find('.price-info').append("<a href='javascript:;'><span class='book-type'></span><span class='new-price'></span></a>")
                    $('.price-box1').eq(i).find('.book-type').html(a.contents[i][6]); //旧书
                    $('.price-box1').eq(i).find('.new-price').html(a.contents[i][7]); //价格
                    $('.price-box1').eq(i).append("<div class='shop-num-info'><a href='javascript:;' class='book-shop'></a></div>")
                    $('.price-box1').eq(i).find('.book-shop').html(a.contents[i][8]);  //有售
                }   
            }
        })
    }
})
