let fun_header = function (page_url) {
    let html = `<div class="areasize header_top">
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
                    <a href="${page_url}login.html">登录</a> |
                    <a href="${page_url}register.html">注册</a>
                </span>
            </section>
            <section class="car_div flex-between-b">
                <span><img src="${require('../images/shopping_car.png')}" alt="" sizes="" srcset=""></span>
                <span class="user_car">
                    <span><a href="${page_url}user_info.html">我的购物车</a></span>
                </span>
            </section>
        </div>
    </section>
</div>`;
    $(".header").html(html);
}
let fun_banner = function (page_url) {
    let htmlone = `<div class="banner">
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
            <span><a class="menus_a" href="${page_url}Menu_Page.html">精选菜谱</a></span>
        </section>
        <section class="menu_grop flex-between-c">
            <span class="menus"><img src="${require('../images/Vegetables.svg')}" alt=""></span>
            <span><a class="menus_a" href="${page_url}Product_Page.html">蔬菜蛋品</a></span>
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
let fun_footer = function () {
    let htmltwo = `<div class="footer_content">
<section class="foot_logo">
    <img src="${require('../images/footer_logo.png')}" alt="">
</section>
<section>
    <span>国内领先的综合网上购物平台</span>
</section>
<section>
    <span> 送货更准时 好货更超值 上新货更快 全国联保 正品行货 门店自提 支持货到付款 智慧零售 服务美好生活！
    </span>
</section>
<section class="frame flex-between-c">
    <ul class="foot_con">
        <li><img src="${require('../images/Frame7.png')}" alt=""></li>
        <li><img src="${require('../images/Frame8.png')}" alt=""></li>
        <li><img src="${require('../images/Frame9.png')}" alt=""></li>
        <li><img src="${require('../images/Frame10.png')}" alt=""></li>
    </ul>
</section>
</div>
<div>
<section class="footer_bottom flex-between-c">
    <section class="footer_bottom_logo">
        <img src="${require('../images/YOUSHAN.svg')}" alt="">
    </section>
    <section class="tub_one footer_bottom_tub flex-between-c">
        <img src="${require('../images/cellimg.svg')}" alt="">
        <span>15282222222</span>
    </section>
    <section class="tub_two footer_bottom_tub flex-between-c">
        <img src="${require('../images/QQimg.svg')}" alt="">
        <img src="${require('../images/wecatimg.svg')}" alt="">
        <img src="${require('../images/weiboimg.svg')}" alt="">
    </section>
    <section class="footer_bottom_tub flex-between-c">
        <span>Copyright© 2002-2020，友膳集团股份有限公司版权所有</span>
    </section>
</section>
</div>`;
    $(".footer").prepend(htmltwo);
}
export { fun_header, fun_banner, fun_footer }
let fun_user = function (count_h) {
    let text_h = "";
    let text_html = ``;
    if (count_h == 0) {
        text_h = "个人信息";
        text_html = `<section class="user_meau_font user_meau_dis"><a class="user_link" href="./user_info.html">个人<br>信息</a></section>
        <section class="user_meau_font"><a class="user_link" href="./user_order.html">我的<br>订单</a></section>
        <section class="user_meau_font"><a class="user_link" href="./user_collection.html">我的<br>收藏</a>
        </section>
        <section class="user_meau_font"><a class="user_link">退出<br>登录</a></section>` ;
    }
    if (count_h == 1) {
        text_h = "我的订单";
        text_html = `<section class="user_meau_font"><a class="user_link" href="./user_info.html">个人<br>信息</a></section>
        <section class="user_meau_font user_meau_dis"><a class="user_link" href="./user_order.html">我的<br>订单</a></section>
        <section class="user_meau_font"><a class="user_link" href="./user_collection.html">我的<br>收藏</a>
        </section>
        <section class="user_meau_font"><a class="user_link">退出<br>登录</a></section>` ;
    }
    if (count_h == 2) {
        text_h = "我的收藏";
        text_html = `<section class="user_meau_font"><a class="user_link" href="./user_info.html">个人<br>信息</a></section>
        <section class="user_meau_font"><a class="user_link" href="./user_order.html">我的<br>订单</a></section>
        <section class="user_meau_font user_meau_dis"><a class="user_link" href="./user_collection.html">我的<br>收藏</a>
        </section>
        <section class="user_meau_font"><a class="user_link">退出<br>登录</a></section>` ;
    }
    if (count_h == 3) {
        text_h = "订单评价";
        text_html = `<section class="user_meau_font"><a class="user_link" href="./user_info.html">个人<br>信息</a></section>
        <section class="user_meau_font user_meau_dis"><a class="user_link" href="./user_order.html">我的<br>订单</a></section>
        <section class="user_meau_font"><a class="user_link" href="./user_collection.html">我的<br>收藏</a>
        </section>
        <section class="user_meau_font"><a class="user_link">退出<br>登录</a></section>` ;
    }
    let html = `<div class="user_ban areasize flex-between-b">
                            <section class="flex-between-a">
                                <div class="user_logo"><img src="${require('../images/users/ userinfo-YOUSHAN.png')}" alt=""></div>
                                    <div class="user_font"><span class="user_title">${text_h}</span></div>
    </section>
                                <section class="user_car">
                                    <span class="user_text_car _car flex-between-c">
                                        <img class="user_car_img" src="${require('../images/v_car.svg')}" alt="">
                                            <span>我的购物车</span>
                                            <section class="user_car_num flex-between-c"><span>2</span></section>
        </span>
    </section>
</div>
                                <div class="hrs"></div>`;
    $(".main").prepend(html);
    let html_left = `<div class="user_meau">
    <section><span class="user_content_title">用户中心</span></section>
    <section class="user_hr"></section>
    <div class="user_meau_fonts">
        ${text_html}
    </div>
</div>`
        ; $(".user_content").prepend(html_left);
}
export { fun_user }


import Swiper from "swiper";
import "swiper/css/swiper.css";
// 轮播图
setTimeout(function () {
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
        // $(".menu_grop_s").css({opacity: "1" });
    })

    $(".menu_grop").mouseenter(function () {
        $(".menu_bottom").css({ opacity: "1", zIndex: "10" });
        // $(".menu_grop_s").css({opacity: "0" });
        // let index = $(this).data("id");
        // $($(".menu_grop_s")[index]).css({opacity: "1" });
        //    $(".menu_grop_s").html($(this).data("id"));
    })
    $(".menu_bar").mouseleave(function () {
        $(".menu_bottom").css({ opacity: "0", zIndex: "-10" });
    })

}, 50)





