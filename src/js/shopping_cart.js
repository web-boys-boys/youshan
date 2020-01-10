//x0popup插件弹出框
import "./sweet-alert.js";
import "../css/sweet-alert.css";
import "../css/example.css";

import '../less/index.less';
import '../less/util.less';
import './JsHtml.js';
import '../less/user_info.less';
import '../less/shopping_cart.less';
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";


$(".All_del").click(function () {
    swal({
        title: "是否删除所勾选的全部商品",
        text: "购物车所勾选商品将会被清空!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    }, function () {
        swal("Deleted!",
            "Your imaginary file has been deleted.",
            "success");
        dels()
    });
})





//上边全选
$('.trr th input').click(function () {
    let checkValue = $(this).prop('checked');
    console.log(checkValue);
    $('.list li input').prop('checked', checkValue)

})
//下边全选
$('.pay li input').click(function () {
    let checkValue = $(this).prop('checked');
    console.log(checkValue);
    $('.list li input').prop('checked', checkValue)

})
//inptu数量增加
$('.jia').click(function () {
    console.log($(this).siblings(".ipt").val());
    let iptvalue = $(this).siblings(".ipt").val();
    iptvalue++;
    $(this).siblings(".ipt").val(iptvalue);
    console.log($(this).parent().siblings(".d_price").children("#d_price").html());
    let danjia = $(this).parent().siblings(".d_price").children("#d_price").html();
    let totprice = (iptvalue * danjia).toFixed(2);
    $(this).parent().siblings(".tot_price").children("#tot_price").html(totprice);
    jishuan();
})
//inptu数量增加
$('.jian').click(function () {
    console.log($(this).siblings(".ipt").val());
    let iptvalue = $(this).siblings(".ipt").val();
    iptvalue--;
    if (iptvalue < 1) {
        return;
    }
    $(this).siblings(".ipt").val(iptvalue);
    console.log($(this).parent().siblings(".d_price").children("#d_price").html());
    let danjia = $(this).parent().siblings(".d_price").children("#d_price").html();
    let totprice = (iptvalue * danjia).toFixed(2);
    $(this).parent().siblings(".tot_price").children("#tot_price").html(totprice);
    jishuan();
})

//删除单个
$(".del").click(function () {
    del(this);
})

function del(el) {
    $(el).parents(".list").remove();
    // console.log();
    jishuan();
}

//批量删除
function dels() {
    $.each($('.footContent li input[type="checkbox"]'), (index, item) => {
        console.log($(item).prop('checked'));
        if ($(item).prop('checked')) {
            del(item);
        }
    })
    // $('.All_del').click(function () {
    // console.log($('.list li input').prop('checked'));
    // })
}

// $('.All_del').click(function () {
//     dels()
// })

console.log($('input[type="checkbox"]'))
let zongjia; //总价
$('input[type="checkbox"]').click(function () {
    // console.log($('.footlist input[type="checkbox"]:checked'));  
    jishuan();
})


function jishuan() {
    zongjia = 0;
    let gou_count = 0;
    $.each($('.footlist input[type="checkbox"]:checked'), (index, item) => {
        console.log($(item).parent().siblings(".tot_price").children("#tot_price").html());
        zongjia += Number($(item).parent().siblings(".tot_price").children("#tot_price").html());
        // jishuan();
        gou_count++;
        console.log(gou_count);
    })
    $("#Alltot_price").html(zongjia);
    // console.log(zongjia);
    $(".gou_count").html(gou_count);
    count_fun();
}

$('#Alltot_price')
let danjia = $('#d_price').text()
console.log(danjia);

//统计全部商品
function count_fun() {
    $('.counts').html($('.list .img').length)
    console.log($('.list .img').length);
};
count_fun();
//统计已选商品数量





//加载头部尾部
import {
    fun_header,
    fun_footer
} from "./JsHtml"
fun_header("./static/pages/");
fun_footer();