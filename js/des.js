$(function(){
    // 放大镜
    $('.marjor_bg').mousemove(function(e){
        $('.xiaotudian').css('display','block');
        $('.marjor_img_hide').css('display','block');
        var e =event ||window.event;
        var mx=e.clientX;
        var my=e.clientY;

        var sX=$('.marjor_bg').offset().left;
        var sY=$('.marjor_bg').offset().top-$(window).scrollTop();

        var mw=$('.xiaotudian').width()/2;
         var mh=$('.xiaotudian').height()/2;

         $('.xiaotudian').css(
             {
                left:mx-sX-mw+'px',
                top:my-sY-mh+'px'
                }
             );

        var lw=$('.xiaotudian').position().left;
        var lh=$('.xiaotudian').position().top;

        // 判断边界
        var maxW=$('.marjor_bg').width()-$('.xiaotudian').width();
        var maxH=$('.marjor_bg').height()-$('.xiaotudian').height();
                // 左
        if(lw<=0){$('.xiaotudian').css('left','0px');}
        // 右边界
        if(lw>=maxW){
            $('.xiaotudian').css('left',maxW+'px');
        }
        // 上边界
        if(lh<=0){$('.xiaotudian').css('top','0px');}
        // 下边界
        if(lh>=maxH){
            $('.xiaotudian').css('top',maxH+'px');
        }

        var newX=-lw*1.3;
        var newY=-lh*1.3;
        newX>=0?0:newX;
        newY>=0?0:newY;

        $('.img_hide').css({left:newX+'px',top:newY+'px'});
        // 大图左边界
        if(newX>=0){
            $('.img_hide').css('left',0);
        }
        // 大图右边界
        if(newX<=-226){
            $('.img_hide').css('left','-226px');
        }
        // 大图上边界
        if(newY>=0){
            $('.img_hide').css('top',0);
        }
        // 大图下边界
        if(newY<=-298){
            $('.img_hide').css('top','-298px');
        }
    })
    $('.marjor_bg').mouseout(function(){
        $('.marjor_img_hide').css('display','none');
        $('.xiaotudian').css('display','none');
})

//选项卡
    $('.songzhi_yiji').click(function(){
        $('.hide_tap').css('display','block');
        $('.hide_tap_priv').css('display','block');
        $('.tap_title').html($('.sz_priv').html());
        $('.tap_content').html($('.sz_city').html());
    
    $($('.hide_tap_pp')).click(function(){
        $('.sz_priv').html($(this).html());
        $('.sz_city').html('');
        $('.tap_title').html($(this).html());
        $('.tap_content').html('');
        $('.hide_tap_priv').css('display','none');
        $('.tap_city_cont').eq($(this).index()).css('display','block');
        $(this).parent().next().find('.tap_city_cont').eq($(this).index()).css('display','block');
        var that = this;
        $($('.tap_city_cont').eq($(this).index()).find('a')).click(function(){
            $('.sz_city').html($(this).html());
            $($('.tap_city_cont')).css('display','none');
            $('.hide_tap').css('display','none');
        $('.songzhi_jiage').html($('.hide_exp').eq($(that).index()).html());

        })
    })
})
    $('.songzhi_yiji').blur(function(){
        $('.hide_tap_cont').css('display','none')
    })
})

$('.main_bot_t1').click(function(){
    $(this).css('border-top','1px solid #333');
    $('.main_bot_t2').css('border-top','1px solid transparent');
    $('.rh_cont_pic').css('display','block');
    $('.rh_cont_comments').css('display','none');
})
$('.main_bot_t2').click(function(){
    $(this).css('border-top','1px solid #333');
    $('.main_bot_t1').css('border-top','1px solid transparent');
    $('.rh_cont_comments').css('display','block');
    $('.rh_cont_pic').css('display','none');
})
$($('.rh_cont_ul').find('li')).click(function(){
    $('.iconquan').eq($(this).index()).css('background','red');
    $(this).siblings().find('.iconquan').css('background','#f2f6f5');
})