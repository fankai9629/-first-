$(function () {

    // 登录我的cookie编辑
    function fn(){
        if(getCookie('username')=="樊凯77"){
            $('.order_content').html(' ');
            $.ajax({url:'../server/shoping.php',
            type:"GET",
            dataType:"json",
            success:function(a){
                var a = a;
                fn2(a);
                fn3();
            }
        })
        }else if(getCookie('username')==''){
            $('.order_content').html(' ');
            $('.order_content').append("<p class='ti_s'>请<a class='ti_shi' href = './login_regist.html'>登录</a>再添加购物车<p>");
            
        }else{
            $('.order_content').html(' ');
            $('.order_content').append("<p class='ti_s'>您购物车为空！请<a class='ti_shi' href = './index.html'>切换用户</a>查看购物车内容<p>");
        }
    }
    fn();


    // function fn1(url, name, price) {
    //     var data = "url=" + url + "&name=" + name + "&price=" + price;

    //     ajax('post', '../server/shopingad.php', function (a) {
            
    //     })
    // }

    /构建插入一个节点/
    function fn2(a) { //把长度插进去
        for (let i = 0; i < a.length; i++) {
            $('.order_content').append("<ul></ul>");
            $('ul').eq(i).append("<li class='pull_left td-check'><div class='check_top'><div class='check-box'><input type='checkbox'><label><span class='iconfont icon-gouxuankuang'></span></label></div></div></li>");//搜索框
            $('ul').eq(i).append("<li class='pull_left td-item'><div class='td-inner'><div class='cart_pic pull_left'><a href='javascript:;'><img class='gouwuche_img'></a></div><div class='text_box'><a href='' class='shopname'></a></div></div></li>")//图片地址
            $('ul').eq(i).append("<li class='pull_left td-pin'><div class='td-inner td-inner_new'></div></li>");//全新
            $('ul').eq(i).append("<li class='pull_left td-price'><div class='td-inner td-inner_pri'></div></li>");//单价
            $('ul').eq(i).append("<li class='pull_left td-num'><div class='td-inner '><div class='input_box'><a href='javascript:;' class='btn_book_minus'>-</a><input type='text' value='1' maxlength='3'><a href='avascrpt:;' class='btn_book_plus'>+</a></div><div class='stock_info'></div></div></li>")//数量
            $('ul').eq(i).append("<li class='pull_left td-price-rig'><div class='td-price-rig-title'></div></li>");//总价
            $('ul').eq(i).append("<li class='pull_right th-edit'><div class='td-inner'><p><a href='javascript:;' class ='del_shanchu'>删除</a></p></div><div class='td_hide'><p>确定删除吗？</p><div class='m_t10'><a href='javascript:;' class='btn_cancel'>取消</a><a href='javascript:;' class='btn_del'>删除</a></div></div></li>");//操作
            $('.td-item').eq(i).find('img').attr('src',a[i].url);
            $('.td-item').eq(i).find('.shopname').html(a[i].name);
            $('.td-inner_new').eq(i).html("全新");
            $('.td-inner_pri').eq(i).html(a[i].price);
            $('.td-price-rig-title').eq(i).html(a[i].price);

        }
        $($('.del_shanchu')).click(function(){
            $(this).css('display','none');
            $(this).parent().parent().next().css({'display':'block'});
        });
            $('.btn_cancel').click(function(){
                $(this).parent().parent().css('display','none');
                $(this).parent().parent().prev().find('a').css('display','block');
            })
            $('.btn_del').click(function(){  //点击删除数据并且数据库删除
                 var m = ($(this).parent().parent().parent().parent().index());
                 console.log(m);
                 
                ($('ul').eq(m)).remove();
                $('.order_content').remove($(this).parent().parent().parent().parent());
                $(this).css('display','block');
                $(this).parent().parent().next().css({'display':'block'});
                // 将数据库值删除
                var del_src = $('order_content').find('ul').eq(m).find('img')[0];
                console.log(del_src);
                var data = "src="+del_src;
                $.ajax('post','../server/shopingdel.php',data,function(a){
                    console.log(a);
                })
            })
    }   
    function fn3(){
        $('.main_header').append("<div class='gray_box'><div class='gray_box_cont'><div class='clearfix'><div class='cart_opration'><div class='m_r12'><div class='section_all'><div class='check_box'><input type='checkbox' name value><label><span class='iconfont icon-gouxuankuang'></span></label></div></div></div></div><div class='btn_submit'><a href='javascript:;' class='btn_pay'>去结算</a></div><div class='cart_sta_box'><span class='pull-left'>已选<span class='red fb' name='cartSecBookNum'>0</span>件商品,</span><span>合计(不含运费):</span><div class='m_r20 red'><span class='font18'>￥</span><span class='font26' name='cartTotalPrice'>0</span></div></div></div></div></div>")
    }

   
})