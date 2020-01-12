import '../less/index.less';
import '../less/util.less';
import '../less/user_info.less';
import './JsHtml.js';
//加载头部尾部
import { fun_header, fun_banner, fun_footer } from "./JsHtml"
fun_header("");
fun_footer();
import { fun_user } from "./JsHtml";
fun_user(0,"./");
import { BASE_URL } from './BASE_URL';
import { b } from "./ajax"
b()

import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

//传头像
$('.imgPreview').change(function () {
    imgPreview(this);
})
function imgPreview(fileDom) {
    // 判断是否支持FileReader 
    let reader = null;
    if (window.FileReader) {
        reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
        return;
    }
    // 获取选中的文件
    let file = fileDom.files[0];
    // 判断是否是图片类型
    let imageType = /^image\//;
    if (!imageType.test(file.type)) {
        alert("请选择图片！");
        return;
    }
    // 读取完成
    reader.onload = function (e) {
        // 图片路径设置为读取的图片
        // img.src = e.target.result;
        let box = document.querySelector(".box");
        // 回显图片
        box.style.backgroundImage = `url(${e.target.result})`;
    }
    // 读取图片 => 将图片转换成base64
    reader.readAsDataURL(file);
}
function uploadImage() {
    let file = document.querySelector("input").files[0];
    if (!file) {
        alert("点击上方方框选择图片！");
        return;
    }
    let formData = new FormData();
    formData.append("photo", file);
    // ajax
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8800/up_image", true);
    xhr.send(formData);
    xhr.onload = function (res) {
        console.log(res);
    }
}

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

$.myAjaxGet("/area/", callback);
function callback(response_data) {
    // console.log(response_data);
    getarea(response_data)
}
function getarea(area) {
    console.log(area);
    let addone = ``;
    $.each(area, (index, item) => {
        if (item.area_parent == null) {
            console.log(item)
            addone += `<option value="${item.id}">${item.area_name}</option>`;

        }
    })
    $('#addressone').append(addone);
    getareatwo(area);
}
function getareatwo(area) {
    $('#addressone').change(function () {
        console.log($(this).val())
        $('#addresstwo').html("<option>---请选择---</option>");
        $('#addressthree').html("<option>---请选择---</option>");
        let addone = `"<option>---请选择---</option>"`;
        $.each(area, (index, item) => {
            if (item.area_parent == $(this).val()) {
                console.log(item)
                addone += `<option value="${item.id}">${item.area_name}</option>`;
            }
        })
        console.log($(this).parent().next().children().html(addone));
        // $(this).next().append(addone);
    })
    $('#addresstwo').change(function () {
        console.log($(this).val())
        let addone = `"<option>---请选择---</option>"`;
        $.each(area, (index, item) => {
            if (item.area_parent == $(this).val()) {
                console.log(item)
                addone += `<option value="${item.id}">${item.area_name}</option>`;
            }
        })
        console.log($(this).parent().next().children().html(addone));
        // $(this).next().append(addone);
    })
}
$.ajax({
    url: `${BASE_URL}/menu/`,
    type: "get",
    // type: "post",
    async: false,
    success: function (response_data) {
        console.log(response_data);
        let htmls = ``;
        $.each(response_data, (index, item) => {
            if (item.menu_type == 3) {
                htmls += `<option value="${item.menu_name}">${item.menu_name}</option>`;
            }
        })
        $("#Taste_list").html(htmls);
    },
    error: function (response_data) {

        console.log(response_data);
    }
})

// $.ajax({
//     url: `${BASE_URL}/area/`,
//     type: "get",
//     // type: "post",
//     async: false,
//     success: function (response_data) {
//         console.log(response_data.content);
//         console.info('22222');
//     },
//     error: function (response_data) {
//         console.log(response_data.content);
//     }
// })

// function ajaxfun() {
//     $.ajax({
//         url: "data.json",
//         // type:"get",
//         type: "post",
//         async: false, //异步请求关闭，就变为了同步
//         // data:{
//         //     "usernme":"",
//         //     "password":"",
//         //     "email":"",
//         //     "usernme":"",
//         // }
//         //传纯字符串表单
//         // data:$('#login_form').serialize(),  //序列化 ，serialize把对象转化为json
//         //传包含文件的表单
//         data: new FormData($("login_form")[0]),
//         cache: false,
//         processData: false,
//         contentType: false,
//         success: function (response_data) {
//             console.log(response_data.content);
//             console.info('22222');
//         },
//         beforeSend: function (xhr) {
//             if (/\w{6,20}/.test($("#username").val())) {
//                 console.log("验证成功");
//                 return true;
//             }
//             else {
//                 console.log("验证失败");
//                 return false;
//             }
//         }
//     })//ajax就不等待
// }