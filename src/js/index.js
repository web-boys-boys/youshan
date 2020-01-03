import '../less/index.less';
import '../less/util.less';
import Swiper from "swiper";
import "swiper/css/swiper.css";
import './JsHtml.js';

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
    $(".menu_bottom").css({ opacity: "0", zIndex: "0" });
})

