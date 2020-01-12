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
function getadd_one() {
    $.myAjaxGet("/address/", callback_get)

    function callback_get(response_data) {
        console.log(response_data);
        let s = ` <label class="det" for="name">收&nbsp;&nbsp;货&nbsp;&nbsp;人：</label>
    <span class="receiver" renid="${response_data[0].id}">${response_data[0].name}</span><br>
    <label class="det" for="tel">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</label>
    <span class="re_tel">${response_data[0].tell}</span><br>
    <label class="det" for="dq">所在地区：</label>
    <span class="re_add">${response_data[0].area.area_name}</span><br>
    <label class="det" for="dqs">详情地址：</label>
    <span class="re_adds">${response_data[0].detail}</span>`
        $('.uer_info').html(s)
        //修改框拿到值
        $('#inputusername').val(response_data[0].name);
        $('#inputYTel').val(response_data[0].tell);
        $('#inputdq').val(response_data[0].area.area_name);
        $('#inputdqs').val(response_data[0].detail);
        //动态加载区域
        $('#address').html(response_data[0].area.area_name)


        get_add(response_data[0].area.id);
    }
}
getadd_one();

function get_add(area_id) {
    $.myAjaxGet("/area/", callbacks_s);

    function callbacks_s(response_data) {
        let a = ``;
        let list_area = response_data;
        console.log(list_area);
        xunhaun(area_id);

        function xunhaun(id) {
            $.each(list_area, (index, item) => {
                // console.log(item)
                if (item.id == id) {
                    console.log(item);

                    a = `${item.area_name}-` + a;
                    if (item.area_parent != null) {
                        xunhaun(item.area_parent)
                    }
                }
            })
        }
        console.log(a);
        $(".re_add").html(a);

    }
}


//==============================清单动态加载数据=======================================

$.myAjaxGet("/carts/", callback_get2)

function callback_get2(response_data) {
    console.log(response_data);
    let list = ""
    // console.log(JSON.parse(sessionStorage.getItem("goodscart")))
    $.each(response_data, (index, item) => {
        $.each(JSON.parse(sessionStorage.getItem("goodscart")), (index, items) => {
            if (items.cartid == item.id) {
                list += `<div class="col-sm-4">${item.goods.goods_name}</div>
                <div class="col-sm-2 t_price">${ (item.goods.goods_price *item.quantity)
                    .toFixed(2)}</div>
                <div class="col-sm-2">2盒一斤/盒</div>
                <div class="col-sm-2">￥0.00</div>
                <div class="col-sm-2">￥${ (item.goods.goods_price *item.quantity)
                    .toFixed(2)}</div>
                `
            }
        })
    })
    $(".row_content").html(list);
    //清单加载总价


    //   $('.price word').html( (item.goods.goods_price *item.quantity)
    //   .toFixed(2))
}


//================================结算数据======================================



// =====================================修改信息=========================================

$.myAjaxGet("/area/", callbacks);

function callbacks(response_data) {
    // console.log(response_data);
    let list_area = response_data;
    // get_add(response_data);
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

$('.modf').click(function () {
    $('.uerinfo_modify,.define_modf').show(500).siblings(".uer_info,.modf").hide(500)
    // $('.define_modf').show(500)

})
$('.define_modf').click(function () {
    $('.uer_info,.modf').show(500).siblings(".uerinfo_modify,.define_modf").hide(500);
    let inputusername = $("#inputusername").val();
    let inputYTel = $("#inputYTel").val();
    let addressthree = $("#addressthree").val();
    let inputdqs = $("#inputdqs").val();
    console.log($("#inputusername").val(), $("#inputYTel").val(), $("#addressthree").val(), $("#inputdqs").val());
    let ren_data = {
        "name": inputusername,
        "tell": inputYTel,
        "area_id": addressthree,
        "detail": inputdqs

    }
    upadd(ren_data);
})

function upadd(data) {
    let receiverid = $(".receiver").attr("renid");
    $.myAjaxPut(`/address/${receiverid}/`, data, callback_three);
}

function callback_three(res) {
    console.log(res);
    getadd_one();
}