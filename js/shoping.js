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
            $('.order_content').append("<p class='ti_s'>您购物车是空！可以<a class='ti_shi' href = './index.html'></a>去逛逛<p>");
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
            $('ul').eq(i).append("<li class='pull_left td-check'><div class='check_top'><div class='check-box'><input type='checkbox' class='sousuokuang'><label><span class='iconfont  icon-gouxuankuang'></span></label></div></div></li>");//搜索框
            $('ul').eq(i).append("<li class='pull_left td-item'><div class='td-inner'><div class='cart_pic pull_left'><a href='javascript:;'><img class='gouwuche_img'></a></div><div class='text_box'><a href='' class='shopname'></a></div></div></li>")//图片地址
            $('ul').eq(i).append("<li class='pull_left td-pin'><div class='td-inner td-inner_new'></div></li>");//全新
            $('ul').eq(i).append("<li class='pull_left td-price'><div class='td-inner td-inner_pri'></div></li>");//单价
            $('ul').eq(i).append("<li class='pull_left td-num'><div class='td-inner '><div class='input_box'><a href='javascript:;' class='btn_book_minus'>-</a><input type='text'  maxlength='3' class='gouwunum'><a href='javascript:;' class='btn_book_plus'>+</a></div><div class='stock_info'></div></div></li>")//数量
            $('ul').eq(i).append("<li class='pull_left td-price-rig'><div class='td-price-rig-title'></div></li>");//总价
            $('ul').eq(i).append("<li class='pull_right th-edit'><div class='td-inner'><p><a href='javascript:;' class ='del_shanchu'>删除</a></p></div><div class='td_hide'><p>确定删除吗？</p><div class='m_t10'><a href='javascript:;' class='btn_cancel'>取消</a><a href='javascript:;' class='btn_del'>删除</a></div></div></li>");//操作
            $('.td-item').eq(i).find('img').attr('src',a[i].url); //地址
            $('.td-item').eq(i).find('.shopname').html(a[i].name); //名称
            $('.td-inner_new').eq(i).html("全新"); //全新
            $('ul').eq(i).find('.gouwunum').val(a[i].num); //数量
            $('.td-inner_pri').eq(i).html(a[i].price);  
            $('.td-price-rig-title').eq(i).html(a[i].price);
            $('ul').eq(i).find('.td-price-rig-title').html((a[i].price)*(a[i].num));
        }

        $('.btn_del').click(function(){  //点击删除数据并且数据库删除
            var  m = ($(this).parent().parent().parent().parent().index());
           
           // 将数据库值删除
           var del_src = $('ul').eq(m).find('img').attr('src');
           var data = "url="+del_src;
           ajax('post','../server/shopingdel.php',data,function(b){
               window.location.href="./shoping.html";
           })
        //    ($('ul').eq(m)).remove(); //删除节点
           $(this).css('display','block');
           $(this).parent().parent().next().css({'display':'block'});
       })


        $('.btn_book_minus').click(function(){
            var m = $(this).next().val();
            m--;
            if(m<=1){
                m=1;
            $(this).next().val(m);
            }else{
            $(this).next().val(m);

            }
            var n = $(this).parent().parent().parent().prev().find('.td-inner_pri').html();
            $(this).parent().parent().parent().next().find('.td-price-rig-title').html(n*($(this).next().val()));
            fnc()
        })  
        $('.btn_book_plus').click(function(){
             var m = $(this).prev().val();
             m++;
             if(m>=6){
                 m=6;
                 $(this).prev().val(m);
            }else{
                $(this).prev().val(m);
                }
                var n = $(this).parent().parent().parent().prev().find('.td-inner_pri').html();
                $(this).parent().parent().parent().next().find('.td-price-rig-title').html(n*($(this).prev().val()));
                fnc();
            })

        $($('.del_shanchu')).click(function(){
            $(this).css('display','none');
            $(this).parent().parent().next().css({'display':'block'});
        });
            $('.btn_cancel').click(function(){
                $(this).parent().parent().css('display','none');
                $(this).parent().parent().prev().find('a').css('display','block');
            })
            // 点击价格综合
                // 有框就加一 并且把值给综合
            function fnc(){
                var count=0;
                var price = 0;
                    for(var i=0;i<$('ul').length;i++){
                        if($('ul').eq(i).find('.sousuokuang').is(":checked")){
                            count++;
                         price +=    Number($('ul').eq(i).find('.td-price-rig-title').html());
                        }
                    }
                    $('.fbb').html(count);
                    $('.font26').html(price);
                    

                }

            $($('ul')).find('.sousuokuang').click(function(){
                fnc();
                console.log($(this)); //input
            })
            $('.selectall').click(function(){
                console.log($(this));
                alert(1);
                $(this).toggleClass('icon-check-');
                $('.select-all').toggleClass('icon-check-');
                if($(this).hasClass('icon-check-')){
                    $('input[type=checkbox]').prop('checked',true);
                    fnc();
                }else{
                    $('input[type=checkbox]').prop('checked',false);
                    fnc();
                }
            })  //取不到这个值
             $('.select-all').click(function(){
                $('.selectall').toggleClass('icon-check-');
                $(this).toggleClass('icon-gouxuankuang');
                $(this).toggleClass('icon-check-');
                if($(this).hasClass('icon-check-')){
                    $('input[type=checkbox]').prop('checked',true);
                    fnc();
                }else{
                    $('input[type=checkbox]').prop('checked',false);
                    fnc();
                }
            })
           
            
    }   
    function fn3(){
        $('.main_header').append("<div class='gray_box'><div class='gray_box_cont'><div class='clearfix'><div class='cart_opration'><div class='m_r12'><div class='section_all'><div class='check_box'><input type='checkbox' name value><label><span class='iconfont selectall icon-gouxuankuang'></span></label></div>全选</div></div></div><div class='btn_submit'><a href='javascript:;' class='btn_pay'>去结算</a></div><div class='cart_sta_box'><span class='pull-left'>已选<span class='red fbb' name='cartSecBookNum'>0</span>件商品,</span><span>合计(不含运费):</span><div class='m_r20 red'><span class='font18'>￥</span><span class='font26' name='cartTotalPrice'>0</span></div></div></div></div></div>")
    }

     //加减固定1-6
    function fnadd(){
        var m = $(this).prev().val();
        m++;
        if(m>=6){
            m=6;
            $(this).prev().val(m);
       }else{
           $(this).prev().val(m);
           }
           var n = $(this).parent().parent().parent().prev().find('.td-inner_pri').html();
           $(this).parent().parent().parent().next().find('.td-price-rig-title').html(n*($(this).prev().val()));
       }



   
})
