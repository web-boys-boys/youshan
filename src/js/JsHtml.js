let userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
// console.log(JSON.parse(userinfo));
let fun_header = function (page_url) {
    let username = "";
    let login_rigster_html = `<span class="login_rigster user_info_sec">
<a href="${page_url}login.html">登录</a> |
<a href="${page_url}register.html">注册</a>
</span>`;
    if (userinfo != null) {
        username = userinfo.username;
        login_rigster_html = `<span class="login_rigster user_info_sec">
        <div class="user_info_sec_div">
            <section class="atc"><a href="${page_url}user_info.html">用户中心</a></section>
            <div class="hahan">
                <section class="atc"><a href="${page_url}user_collection.html">我的收藏</a></section>
                <section class="atc"><a href="${page_url}user_order.html">我的订单</a></section>
                <section class="atc" id="outlogin"><a>退出登录</a></section>
            </div>

        </div>
    </span>`
    }
    let html = `<div class="areasize header_top">
    <section class="header_main flex-between-b">
        <div class="header_left flex-between-b">
            <span class="address"><img src="${require('../images/address.png')}" alt="" sizes="" srcset=""></span>
            <select class="address_list" name="" id="">
                <option value="">成都</option>
                <option value="">简阳</option>
                <option value="">绵阳</option>
            </select>
            <span class="welcome_text">你好<span>${username}</span>，欢迎来到友膳</span>
        </div>
        <div class="header_logo"><a href="../../index.html"><img src="${require('../images/YOUSHAN.svg')}" alt=""></a></div>
        <div class="header_right flex-between-b">
            <section class="flex-between-b ">
                <span class="login_rigster_img"><img src="${require('../images/login_register.png')}" alt="" sizes=""
                        srcset=""></span>
                ${
        login_rigster_html
        }
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
    $(".atc").mouseenter(function () {
        $(this).addClass("atcs");
    })
    $(".atc").mouseleave(function () {
        $(this).removeClass("atcs");
    })
    $("#outlogin").click(function () {
        sessionStorage.removeItem("userinfo");
        window.location.reload();
    })
}
let fun_banner = function (page_url) {
    let htmlone = `<div class="banner">
<div class="swiper-container swiper1">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img class="swiper_img_click" src="${require('../images/08bOYnH_r_E.png')}" alt="">
        </div>
        <div class="swiper-slide">
            <img class="swiper_img_click" src="${require('../images/Banner-2.png')}" alt="">
        </div>
    </div>
    <div class="swiper-pagination swp1"></div>
</div>
<div class="banner_text areasize">
    <div class="xiha">
        <img class="logo" src="${require('../images/YOUSHAN.svg')}" alt="">
        <span class="text_one">开启友好烹饪每一天</span>
        <span class="text_two">Open friendly cooking every day</span>
        <span class="text_car _car flex-between-c">
            <img class="car_img" src="${require('../images/v_car.svg')}" alt="">
            <span><a href="${page_url}shopping_cart.html">我的购物车</a></span>
            <section class="car_num flex-between-c"><span>2</span></section>
        </span>
        <span class="banner_search_div flex-between-b">
            <img class="search_img" src="${require('../images/search.svg')}" alt="">
            <input class="search_input" type="text">
            <select class="search_list" name="" id="">
                <option value="recipes  ·1">搜索菜谱</option>
                <option value="goods">搜索商品</option>
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
        <section class="menu_grop_s"><div>
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
    </div></section>
        <section class="menu_grop_s">123</section>
        <section class="menu_grop_s">1234</section>
        <section class="menu_grop_s">12345</section>
        <section class="menu_grop_s">123456</section>
    </div>
</div>
</div>`;
    $(".main").prepend(htmlone);
    get_list(page_url);
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
    <img src="${require('../images/wecatimg.svg')}" alt="">
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
export {
    fun_header,
    fun_banner,
    fun_footer
}
let fun_user = function (count_h) {
    let text_h = "";
    let text_html = ``;
    if (count_h == 0) {
        text_h = "个人信息";
        text_html = `<section class="user_meau_font user_meau_dis"><a class="user_link" href="./user_info.html">个人<br>信息</a></section>
        <section class="user_meau_font"><a class="user_link" href="./user_order.html">我的<br>订单</a></section>
        <section class="user_meau_font"><a class="user_link" href="./user_collection.html">我的<br>收藏</a>
        </section>
        <section class="user_meau_font"><a class="user_link">退出<br>登录</a></section>`;
    }
    if (count_h == 1) {
        text_h = "我的订单";
        text_html = `<section class="user_meau_font"><a class="user_link" href="./user_info.html">个人<br>信息</a></section>
        <section class="user_meau_font user_meau_dis"><a class="user_link" href="./user_order.html">我的<br>订单</a></section>
        <section class="user_meau_font"><a class="user_link" href="./user_collection.html">我的<br>收藏</a>
        </section>
        <section class="user_meau_font"><a class="user_link">退出<br>登录</a></section>`;
    }
    if (count_h == 2) {
        text_h = "我的收藏";
        text_html = `<section class="user_meau_font"><a class="user_link" href="./user_info.html">个人<br>信息</a></section>
        <section class="user_meau_font"><a class="user_link" href="./user_order.html">我的<br>订单</a></section>
        <section class="user_meau_font user_meau_dis"><a class="user_link" href="./user_collection.html">我的<br>收藏</a>
        </section>
        <section class="user_meau_font"><a class="user_link">退出<br>登录</a></section>`;
    }
    if (count_h == 3) {
        text_h = "订单评价";
        text_html = `<section class="user_meau_font"><a class="user_link" href="./user_info.html">个人<br>信息</a></section>
        <section class="user_meau_font user_meau_dis"><a class="user_link" href="./user_order.html">我的<br>订单</a></section>
        <section class="user_meau_font"><a class="user_link" href="./user_collection.html">我的<br>收藏</a>
        </section>
        <section class="user_meau_font"><a class="user_link">退出<br>登录</a></section>`;
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
</div>`;
    $(".user_content").prepend(html_left);
}
export {
    fun_user
}


import Swiper from "swiper";
import "swiper/css/swiper.css";
// 轮播图
setTimeout(function () {
    let mySwiper = new Swiper('.swiper1', {
        loop: true, // 循环模式选项
        // 自动播放
        autoplay: true,
        // 切换效果
        effect: 'coverflow',
        // 如果需要分页器
        pagination: {
            el: '.swp1'
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
    $(".swiper_img_click").on("click", function () {
        // console.log($(this).attr("src"))
    })

    // console.log($(".menu_grop"));
    $(".menu_grop").each((index, itme) => {
        // console.log(index);
        $(itme).data("id", index);
        // $(".menu_grop_s").css({opacity: "1" });
    })

    $(".menu_grop").mouseenter(function () {
        $(".menu_bottom").css({
            opacity: "1",
            zIndex: "10"
        });
        // console.log($(".menu_grop_s")[$(this).index()])
        $(".menu_grop_s").hide();
        let index = $(this).data("id");
        $($(".menu_grop_s")[index]).show();
        // $(".menu_grop_s").html($(this).data("id"));
    })
    $(".menu_bar").mouseleave(function () {
        $(".menu_bottom").css({
            opacity: "0",
            zIndex: "-10"
        });
    })

}, 50)

// 拿分类列表
let response_data = [
    {
        "id": 1,
        "menu_name": "精选菜谱",
        "menu_type": 1,
        "menu_sort": 0,
        "menu_parent": null
    },
    {
        "id": 2,
        "menu_name": "蔬菜蛋品",
        "menu_type": 1,
        "menu_sort": 0,
        "menu_parent": null
    },
    {
        "id": 3,
        "menu_name": "精选肉类",
        "menu_type": 1,
        "menu_sort": 0,
        "menu_parent": null
    },
    {
        "id": 4,
        "menu_name": "海鲜水产",
        "menu_type": 1,
        "menu_sort": 0,
        "menu_parent": null
    },
    {
        "id": 5,
        "menu_name": "新鲜瓜果",
        "menu_type": 1,
        "menu_sort": 0,
        "menu_parent": null
    },
    {
        "id": 6,
        "menu_name": "冷饮冻食",
        "menu_type": 1,
        "menu_sort": 0,
        "menu_parent": null
    },
    {
        "id": 7,
        "menu_name": "家常菜谱",
        "menu_type": 2,
        "menu_sort": 0,
        "menu_parent": 1
    },
    {
        "id": 8,
        "menu_name": "中华菜系",
        "menu_type": 2,
        "menu_sort": 0,
        "menu_parent": 1
    },
    {
        "id": 9,
        "menu_name": "各地小吃",
        "menu_type": 2,
        "menu_sort": 0,
        "menu_parent": 1
    },
    {
        "id": 10,
        "menu_name": "国外菜谱",
        "menu_type": 2,
        "menu_sort": 0,
        "menu_parent": 1
    },
    {
        "id": 11,
        "menu_name": "烘焙菜谱",
        "menu_type": 2,
        "menu_sort": 0,
        "menu_parent": 1
    },
    {
        "id": 12,
        "menu_name": "家常菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 13,
        "menu_name": "私家菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 14,
        "menu_name": "凉菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 15,
        "menu_name": "海鲜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 16,
        "menu_name": "热菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 17,
        "menu_name": "热粥",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 18,
        "menu_name": "素食",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 19,
        "menu_name": "酱料",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 20,
        "menu_name": "蘸料",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 21,
        "menu_name": "微波炉",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 22,
        "menu_name": "火锅底料",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 23,
        "menu_name": "甜品点心",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 24,
        "menu_name": "糕点",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 25,
        "menu_name": "主食",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 26,
        "menu_name": "干果制作",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 27,
        "menu_name": "卤酱",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 28,
        "menu_name": "时尚饮品",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 7
    },
    {
        "id": 29,
        "menu_name": "川菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 30,
        "menu_name": "湘菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 31,
        "menu_name": "粤菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 32,
        "menu_name": "东北菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 33,
        "menu_name": "鲁菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 34,
        "menu_name": "浙菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 35,
        "menu_name": "京菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 36,
        "menu_name": "湖北菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 37,
        "menu_name": "徽菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 38,
        "menu_name": "豫菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 39,
        "menu_name": "西北菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 40,
        "menu_name": "云贵菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 41,
        "menu_name": "江西菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 42,
        "menu_name": "山西菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 43,
        "menu_name": "广西菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 44,
        "menu_name": "港台菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 45,
        "menu_name": "其他菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 8
    },
    {
        "id": 46,
        "menu_name": "四川",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 47,
        "menu_name": "广东",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 48,
        "menu_name": "北京",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 49,
        "menu_name": "陕西",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 50,
        "menu_name": "山东",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 51,
        "menu_name": "山西",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 52,
        "menu_name": "湖南",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 53,
        "menu_name": "河南",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 54,
        "menu_name": "上海",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 55,
        "menu_name": "江苏",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 56,
        "menu_name": "湖北",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 57,
        "menu_name": "重庆",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 58,
        "menu_name": "天津",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 59,
        "menu_name": "河北",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 60,
        "menu_name": "浙江",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 61,
        "menu_name": "新疆",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 62,
        "menu_name": "江西",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 64,
        "menu_name": "福建",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 9
    },
    {
        "id": 65,
        "menu_name": "叶菜类",
        "menu_type": 2,
        "menu_sort": 0,
        "menu_parent": 2
    },
    {
        "id": 66,
        "menu_name": "根茎类",
        "menu_type": 2,
        "menu_sort": 0,
        "menu_parent": 2
    },
    {
        "id": 67,
        "menu_name": "鲜菌菇",
        "menu_type": 2,
        "menu_sort": 0,
        "menu_parent": 2
    },
    {
        "id": 68,
        "menu_name": "生菜",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 65
    },
    {
        "id": 69,
        "menu_name": "菜心",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 65
    },
    {
        "id": 70,
        "menu_name": "西兰花",
        "menu_type": 3,
        "menu_sort": 0,
        "menu_parent": 65
    },
    {
        "id": 71,
        "menu_name": "新鲜肉类",
        "menu_type": 2,
        "menu_sort": 0,
        "menu_parent": 3
    },
    {
        "id": 72,
        "menu_name": "新",
        "menu_type": 71,
        "menu_sort": 0,
        "menu_parent": 65
    }
]

import "../js/sweet-alert.js";
import "../css/sweet-alert.css";

function get_list(url_s) {

    // let caipu = [];
<<<<<<< HEAD
    // http://192.168.110.43:8000/menu/
    $.ajax({
        url: "http://192.168.110.43:8000/menu/",
        type: "get",
        async: false, //异步请求关闭，就变为了同步
        // dataType: "json",
        //传纯字符串表单
        // data:$('#login_form').serialize(),  //序列化 ，serialize把对象转化为json
        //传包含文件的表单
        // data: new FormData($("login_form")[0]),
        // cache: false,
        // processData: false,
        // contentType: false,
        success: function (response_data) {
            console.log(response_data);
            console.log($(".menu_grop"));
            let erjihtml = ``;
            // 一级菜单
            $.each($(".menu_grop"), (index, item) => {
                erjihtml += `<section class="menu_grop_s" data-jicount="${index + 1}"></section>`;
            })
            $(".menu_bottom").html(erjihtml);
            //二级菜单
            $.each($('.menu_grop_s'), (index, item) => {
                // console.log(item);
                let html = ``;
                $.each(response_data, (index_s, item_s) => {
                    // console.log(index);
                    // console.log(item_s.menu_parent);
                    if (item_s.menu_parent == index + 1) {
=======
    // http://192.168.7.170:8000/menu/
    // $.ajax({
    //     url: "node.json",
    //     type: "get",
    //     async: false, //异步请求关闭，就变为了同步
    //     // dataType: "json",
    //     //传纯字符串表单
    //     // data:$('#login_form').serialize(),  //序列化 ，serialize把对象转化为json
    //     //传包含文件的表单
    //     // data: new FormData($("login_form")[0]),
    //     // cache: false,
    //     // processData: false,
    //     // contentType: false,
    //     success: function (response_data) {
    //         console.log(response_data);
    //         console.log($(".menu_grop"));
    let erjihtml = ``;
    // 一级菜单
    $.each($(".menu_grop"), (index, item) => {
        erjihtml += `<section class="menu_grop_s" data-jicount="${index + 1}"></section>`;
    })
    $(".menu_bottom").html(erjihtml);
    //二级菜单

    $.each($('.menu_grop_s'), (index, item) => {
        let cpid = [1];//菜谱菜单
        // console.log(item);
        let html = ``;
        $.each(response_data, (index_s, item_s) => {

            // console.log(index);
            // console.log(item_s.menu_parent);
            if (item_s.menu_parent == 1) {
                cpid.push(item_s.id);
            }
            if (item_s.menu_parent == index + 1) {
>>>>>>> c54a00e7bccbecd36bb28f59efe44d59aaf53970

                let shtml = ``;
                let ercount = 0;//计算三级菜单的个数
                //三级菜单
                $.each(response_data, (index_rs, item_rs) => {

                    // console.log(index_rs);
                    if (item_rs.menu_parent == item_s.id) {
                        ercount++;
                        let tml = ``;
                        let btn_ty = "";
                        if ($.inArray(item_s.menu_parent, cpid) >= 0) {
                            btn_ty = "cp_btn";
                        }
                        else {
                            btn_ty = "sp_btn";
                        }
                        if (ercount == 10) {
                            tml = `</section>
                            <section>
                                <p class="thr_menu_pu ${btn_ty}" menuId="${item_rs.id}">${item_rs.menu_name}</p>`;
                        }
                        else {
                            tml = `<p class="thr_menu_pu ${btn_ty}" menuId="${item_rs.id}">${item_rs.menu_name}</p>`;
                        }
                        shtml += tml;
                    }
                })
                // console.log(item_s);
                let erhrml = `<section>${shtml}</section>`;
                if ($.inArray(item_s.menu_parent, cpid) >= 0) {
                    html += `<div>
                            <span class="menu_two thr_menu_pu cp_btn" menuid="${item_s.id}">${item_s.menu_name}</span>
                            <div class="menu_two_s">
                                ${erhrml}
                            </div>
                        </div>`;
                } else {
                    html += `<div>
                            <span class="menu_two thr_menu_pu sp_btn" menuid="${item_s.id}">${item_s.menu_name}</span>
                            <div class="menu_two_s">
                                ${erhrml}
                            </div>
                        </div>`;
                }
            }
        })
        console.log(cpid);
        $(item).append(html);
    })
    //点击跳转列表页
    $('.sp_btn').click(function () {
        console.log($(this).text());
        location.href = url_s + "Product_Page.html?id=" + $(this).text();
    })
    $('.cp_btn').click(function () {
        console.log($(this).text());
        location.href = url_s + "Menu_Page.html?id=" + $(this).text();
    })
    //     },
    //     error: function (response_data) {
    //         console.log(response_data);
    //     }
    // }) //ajax就不等待


    $(".search_img").click(function () {
        console.log(this);
        let seach = $(".search_input").val();
        console.log($(".search_list").val());
        // let types = "";

        if (seach.trim() != "" && seach != undefined && seach != null) {
            if ($(".search_list").val() == "goods") {
                // types = "goods";
                location.href = url_s + "Product_Page.html?id=" + seach.trim();
            }
            else {
                // types = "recipes";
                location.href = url_s + "Menu_Page.html?id=" + seach.trim();
            }
            // console.log(seach);
            // $.ajax({
            //     url: `http://192.168.7.170:8000/${types}/?search=` + seach.trim(),
            //     type: "get",
            //     async: false, //异步请求关闭，就变为了同步
            //     success: function (response_data) {
            //         console.log(response_data);
            //         location.href = url_s + "Menu_Page.html?id=" + $(this).attr("menuId");
            //     },
            //     error: function (response_data) {
            //         console.log(response_data);
            //         swal({
            //             title: "服务器异常，稍后再试!",
            //             type: "error",
            //             timer: 2000
            //         });
            //     }
            // }) //ajax就不等待
        }
        else {
            swal({
                title: "请输入正确的搜索内容!",
                type: "error",
                timer: 2000
            });
        }
    })
}