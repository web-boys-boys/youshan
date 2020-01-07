import '../less/index.less';
import '../less/util.less';
import '../less/user_info.less';
import './JsHtml.js';
//加载头部尾部
import { fun_header, fun_banner, fun_footer } from "./JsHtml"
fun_header("");
fun_footer();
import { fun_user } from "./JsHtml";
fun_user(0);

import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

$(".editor_btn").click(function () {
    $(".user_list_info").css({ display: "block" })
    $(".user_editor_info").css({ display: "none" })
})
$(".editor_close").click(function () {
    $(".user_list_info").css({ display: "none" })
    $(".user_editor_info").css({ display: "block" })
})

//tab选项卡
$.each($(".user_meau_fonts").children(), (index, el) => {
    $(el).data("user_index", index);
    console.log($(el).data("user_index"))
})
$(".user_meau_fonts").children().click(function () {
    let ins = $(this).data("user_index");
    $.each($(".user_meau_list").children(), (index, el) => {
        console.log(index);
        if (index == ins) {
            $(el).addClass("user_ds");
        }
        else {
            $(el).removeClass("user_ds");
        }
    })
})
// $.each($(".user_meau_list").children(), (index, el) => {
//     $(el).data("user_index_s", index);
// })




//评星
let xxshu;
$('.comment_star>.star_s').mouseenter(function () {
    xxshu = $(this).parent().children(".star_h").length;
    $(this).parent().children().removeClass("star_h");
    // console.log($(this).parent().children());
    let this_index = $(this).data("index");
    $.each($(this).parent().children(), (index, el) => {
        if (index <= this_index) {
            $(el).addClass("star");
        }
    })
})
$('.comment_star>.star_s').mouseleave(function () {
    $('.comment_star>.star_s').removeClass("star");
    $.each($(this).parent().children(), (index, el) => {
        if (index < xxshu) {
            $(el).addClass("star_h");
        }
    })
})
$('.comment_star>.star_s').click(function () {
    let this_index = $(this).data("index");
    xxshu = this_index + 1;
})

$.each($(".comment_star"), (index, el) => {
    $.each($(el).children(), (index_s, el_s) => {
        $(el_s).data("index", index_s);
        // console.log($(el_s).data("index"));
    })
})
$(".fbpl").click(() => {
    let hsxfcount = $(".hsxf").children(".star_h").length;
    console.log(hsxfcount);
    let wlfwcount = $(".wlfw").children(".star_h").length;
    console.log(wlfwcount);
    let fwtdcount = $(".fwtd").children(".star_h").length;
    console.log(fwtdcount);
    let comment_font = $(".comment_font").val();
    console.log(comment_font);
})
