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


//编辑按钮
$(".editor_btn").click(function () {
    $(".user_list_info").css({ display: "block" })
    $(".user_editor_info").css({ display: "none" })
})
//关闭编辑页面
$(".editor_close").click(function () {
    $(".user_list_info").css({ display: "none" })
    $(".user_editor_info").css({ display: "block" })
})
//删除每个口味标签
function del_kouwwei_fun() {
    $('.del_kouwwei').click(function () {
        $(this).parent().remove();
        isnull();
    })
}
del_kouwwei_fun();

//查看口味列表的子元素个数
function isnull() {
    // if ($(".kouwei_div").children().length == 0) {
    //     $(".kouwei_div").html(`<span class="isnullspan">请先选择口味...</span>`);
    // }
}

//添加口味标签
$(".choose_taete").click(function () {
    let taetespan = `<button type="button" class="btn btn-outline-dark btn-sm" disabled>${$("#Taste_list").val()}<span
    class="del_kouwwei">×</span></button>`
    $(".kouwei_div").append(taetespan);
    del_kouwwei_fun();
})



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
