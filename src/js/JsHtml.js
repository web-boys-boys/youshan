function headerHtml() {
    let html=`<div class="areasize header_top">
    <section class="header_main flex-between-b">
        <div class="header_left flex-between-b">
            <span class="address"><img src="${require('../images/address.png')}" alt="" sizes="" srcset=""></span>
            <select class="address_list" name="" id="">
                <option value="">成都</option>
                <option value="">简阳</option>
                <option value="">绵阳</option>
            </select>
            <span class="welcome_text">你好，欢迎来到友膳</span>
        </div>
        <div class="header_logo"><a href="../../index.html"><img src="${require('../images/YOUSHAN.svg')}" alt=""></a></div>
        <div class="header_right flex-between-b">
            <section class="flex-between-b">
                <span class="login_rigster_img"><img src="${require('../images/login_register.png')}" alt="" sizes=""
                        srcset=""></span>
                <span class="login_rigster">
                    <a href="../static/pages/login.html">登录</a> |
                    <a href="../static/pages/register.html">注册</a>
                </span>
            </section>
            <section class="car_div flex-between-b">
                <span><img src="${require('../images/shopping_car.png')}" alt="" sizes="" srcset=""></span>
                <span class="user_car">
                    <span>我的购物车</span>
                </span>
            </section>
        </div>
    </section>
</div>`;
$(".header").html(html);
let htmlone=`<div class="banner">
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img class="swiper_img_click" src="${require('../images/08bOYnH_r_E.png')}" alt="">
        </div>
        <div class="swiper-slide">
            <img class="swiper_img_click" src="${require('../images/Banner-2.png')}" alt="">
        </div>
    </div>
    <div class="swiper-pagination"></div>
</div>
<div class="banner_text areasize">
    <div class="xiha">
        <img class="logo" src="${require('../images/YOUSHAN.svg')}" alt="">
        <span class="text_one">开启友好烹饪每一天</span>
        <span class="text_two">Open friendly cooking every day</span>
        <span class="text_car _car flex-between-c">
            <img class="car_img" src="${require('../images/v_car.svg')}" alt="">
            <span>我的购物车</span>
            <section class="car_num flex-between-c"><span>2</span></section>
        </span>
        <span class="banner_search_div flex-between-b">
            <img class="search_img" src="${require('../images/search.svg')}" alt="">
            <input class="search_input" type="text">
            <select class="search_list" name="" id="">
                <option value="">搜索菜谱</option>
                <option value="">搜索商品</option>
            </select>
            <img class="list_img" src="${require('../images/list.svg')}" alt="">
        </span>
    </div>
</div>
<div class="menu_bar areasize">
    <div class="menu_top flex-between-a">
        <section class="menu_grop flex-between-c">
            <span class="menus"><img src="${require('../images/Menu.svg')}" alt=""></span>
            <span><a class="menus_a" href="../static/pages/Menu_Page.html">精选菜谱</a></span>
        </section>
        <section class="menu_grop flex-between-c">
            <span class="menus"><img src="${require('../images/Vegetables.svg')}" alt=""></span>
            <span><a class="menus_a" href="./static/pages/Product_Page.html">蔬菜蛋品</a></span>
        </section>
        <section class="menu_grop flex-between-c">
            <span class="menus"><img src="${require('../images/Meat.svg')}" alt=""></span>
            <span><a class="menus_a">精选肉类</a> </span>
        </section>
        <section class="menu_grop flex-between-c">
            <span class="menus"><img src="${require('../images/Seafood.svg')}" alt=""></span>
            <span><a class="menus_a">海鲜水产</a></span>
        </section>
        <section class="menu_grop flex-between-c">
            <span class="menus"><img src="${require('../images/Fruits.svg')}" alt=""></span>
            <span><a class="menus_a">新鲜瓜果</a></span>
        </section>
        <section class="menu_grop flex-between-c">
            <span class="menus"><img src="${require('../images/Drinks.svg')}" alt=""></span>
            <span><a class="menus_a">冷饮冻食</a></span>
        </section>
    </div>
    <div class="menu_bottom">
        <section class="menu_grop_s">
            <div>
                <span class="menu_two">家常菜谱</span>
                <div class="menu_two_s">
                    <section>
                        <p>你的大实话</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123sadsadsa</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </section>
                    <section>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </section>
                </div>
            </div>
            <div>
                <span class="menu_two">中华菜系</span>
                <div class="menu_two_s">
                    <section>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123sadsadsa</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </section>
                    <section>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>我的你的</p>
                    </section>
                    <section>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </section>
                </div>
            </div>
            <div>
                <span class="menu_two">各地小吃</span>
                <div class="menu_two_s">
                    <section>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123sadsadsa</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </section>
                    <section>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </section>
                </div>
            </div>
            <div>
                <span class="menu_two">国外菜谱</span>
                <div class="menu_two_s">
                    <section>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123sadsadsa</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </section>
                    <section>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </section>
                </div>
            </div>
            <div>
                <span class="menu_two">烘焙菜谱</span>
                <div class="menu_two_s">
                    <section>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123sadsadsa</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </section>
                    <section>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </section>
                </div>
            </div>
        </section>
        <!-- <section class="menu_grop_s">12</section>
        <section class="menu_grop_s">123</section>
        <section class="menu_grop_s">1234</section>
        <section class="menu_grop_s">12345</section>
        <section class="menu_grop_s">123456</section> -->
    </div>
</div>
</div>`;
$(".main").prepend(htmlone);
}
headerHtml();

import Swiper from "swiper";
import "swiper/css/swiper.css";
// 轮播图
let mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    // 自动播放
    autoplay: true,
    // 切换效果
    effect: 'coverflow',
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

$(".swiper_img_click").on("click", function () {
    console.log($(this).attr("src"))
})


console.log($(".menu_grop"));
$(".menu_grop").each((index, itme) => {
    console.log(index);
    $(itme).data("id", index);
    // $(".menu_grop_s").css({ opacity: "1" });
})

$(".menu_grop").mouseenter(function () {
    $(".menu_bottom").css({ opacity: "1", zIndex: "10" });
    // $(".menu_grop_s").css({ opacity: "0" });
    // let index = $(this).data("id");
    // $($(".menu_grop_s")[index]).css({ opacity: "1" });
    //    $(".menu_grop_s").html($(this).data("id"));
})
$(".menu_bar").mouseleave(function () {
    $(".menu_bottom").css({ opacity: "0", zIndex: "-10" });
})




