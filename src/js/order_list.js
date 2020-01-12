import '../less/index.less';
import '../less/util.less';
import './JsHtml';
import '../less/user_info.less';
import '../less/shopping_cart.less';
import '../less/order_list.less'
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import {
    BASE_URL
} from './BASE_URL.js';
//加载头部尾部
import {
    fun_header,
    fun_footer
} from "./JsHtml"
fun_header("./");
fun_footer();
import {
    b
} from "./ajax";
b();

/*=============================前后端交互=========================================*/

//================================地址动态加载数据=====================================
$.myAjaxGet("/address/", callback_get)

function callback_get(response_data) {
    console.log(response_data);
    let s = ` <label class="det" for="name">收&nbsp;&nbsp;货&nbsp;&nbsp;人：</label>
    <span class="receiver">${response_data[0].name}</span><br>
    <label class="det" for="tel">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</label>
    <span class="re_tel">${response_data[0].tell}</span><br>
    <label class="det" for="dq">所在地区：</label>
    <span class="re_add">${response_data[0].area.area_name}</span><br>
    <label class="det" for="dqs">详情地址：</label>
    <span class="re_adds">${response_data[0].detail}</span>`
    $('.uer_info').html(s)
    $('#inputusername').val(response_data[0].name);
    $('#inputYTel').val(response_data[0].tell);
    $('#inputdq').val(response_data[0].area.area_name);
    $('#inputdqs').val(response_data[0].detail);
}

//==============================清单动态加载数据=======================================
$.myAjaxGet("/carts/", callback_get2)

function callback_get2(response_data) {
    console.log(response_data);
    let list = ""
    $.each(response_data, (index, item) => {
        list += `<div class="col-sm-4">${item.goods.goods_name}</div>
    <div class="col-sm-2">${ (item.goods.goods_price *item.quantity)
        .toFixed(2)}</div>
    <div class="col-sm-2">2盒一斤/盒</div>
    <div class="col-sm-2">￥0.00</div>
    <div class="col-sm-2">￥${ (item.goods.goods_price *item.quantity)
        .toFixed(2)}</div>
    `
    })
    $(".row_content").html(list);
}


//================================结算数据======================================



// =====================================修改信息=========================================
$('.modf').click(function () {
    $('.uerinfo_modify,.define_modf').show(500).siblings(".uer_info,.modf").hide(500)
    // $('.define_modf').show(500)

})
$('.define_modf').click(function () {
    $('.uer_info,.modf').show(500).siblings(".uerinfo_modify,.define_modf").hide(500)
})