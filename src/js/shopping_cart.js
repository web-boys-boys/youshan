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

function quanel() {
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
            dels();
        });
    })


    //上边全选
    $('.trr th input').click(function () {
        let checkValue = $(this).prop('checked');
        console.log(checkValue);
        $('.list li input').prop('checked', checkValue)
        $.each($(".footlist input[type='checkbox']"), (index, item) => {
            danxuan(item);
            sessionStorage.setItem("goodscart", JSON.stringify(goodsArr));
        })
    })
    //下边全选
    $('.pay li input').click(function () {
        let checkValue = $(this).prop('checked');
        console.log(checkValue);
        $('.list li input').prop('checked', checkValue);
        $.each($(".footlist input[type='checkbox']"), (index, item) => {
            danxuan(item);
        })
    })

    $(".footlist input[type='checkbox']").click(function () {
        danxuan(this);
        sessionStorage.setItem("goodscart", JSON.stringify(goodsArr));
    })
    //单选
    let goodsArr = [];

    function danxuan(el) {
        if ($(el).prop('checked')) {
            $(el).parents(".footlist").addClass("listchecked");
        } else {
            $(el).parents(".footlist").removeClass("listchecked");
        }
        pu_carts(el);
        sessionStorage.setItem("goodscart", JSON.stringify(goodsArr));
    }

    function pu_carts(el) {
        let sss = $(el).prop('checked');
        console.log(sss)
        let cartid = $(el).attr("cartid");
        let goods = $(el).attr("goodsid");
        let quantity = $(el).parents(".list").find(".ipt").val();
        let data = {
            "cartid": cartid,
            "goods": goods,
            "quantity": quantity
        }
        if (sss) {
            if (goodsArr.length != 0) {
                let ais = true;
                $.each(goodsArr, (index, item) => {
                    console.log(item);
                    if (item.cartid == $(el).attr("cartid")) {
                        goodsArr.splice(index, 1, data);
                        ais = false;
                        return;
                    }
                })
                if (ais) {
                    goodsArr.push(data);
                }
            } else {
                goodsArr.push(data);
            }
        } else {
            goodsArr.splice($.inArray(data, goodsArr), 1);
        }
        // console.log()
        // $.myAjaxPut(`/cart/${$(el).attr("cartid")}/`, data, callback)

        // function callback(res) {
        //     console.log(res);
        // }
    }
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
        pu_carts($(this).parents(".list").find(".goodscheck"));
        sessionStorage.setItem("goodscart", JSON.stringify(goodsArr));
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
        pu_carts($(this).parents(".list").find(".goodscheck"));
        sessionStorage.setItem("goodscart", JSON.stringify(goodsArr));
    })
    //删除单个
    $(".del").click(function () {
        del(this);
    })
    function del(el) {
        del_el($(el).parents(".list").find(".goodscheck"));
    }
    function del_el(el) {
        console.log(el)
        $.myAjaxDel(`/cart/${$(el).attr("cartid")}/`, es)
        function es(res) {
            if (res == 1) {
                $(el).parents(".list").remove();
                jishuan();
            }
            else {
                swal({
                    title: "服务器异常，稍后再试！",
                    // text: "购物车所勾选商品将会被清空!",
                    type: "warning"
                })
            }
        }
    }
    //批量删除
    function dels() {
        $.each($('.footContent li input[type="checkbox"]'), (index, item) => {
            console.log($(item).prop('checked'));
            if ($(item).prop('checked')) {
                console.log($(item));
                del(item);
            }
        })

    }
    console.log($('input[type="checkbox"]'));
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
        $("#Alltot_price").html(zongjia.toFixed(2));
        // console.log(zongjia);
        $(".gou_count").html(gou_count);
        count_fun();
    }

    $('#Alltot_price');
    let danjia = $('#d_price').text()
    // console.log(danjia);

    //统计全部商品
    function count_fun() {
        $('.counts').html($('.list .img').length)
        console.log($('.list .img').length);
    };
    count_fun();
}
/*=============================前后端交互=========================================*/
//购物车动态加载数据

$.myAjaxGet("/carts/", callback_get)

function callback_get(response_data) {
    console.log(response_data);
    let s = ""
    $.each(response_data, (index, item) => {
        // console.log(item.goods.goods_icon)
        s += `<ul class="list footlist" >
            <li>
                <input type="checkbox" class="goodscheck" cartId="${item.id}" goodsID="${item.goods.id}">
            </li>
            <li class="img">
                <img src="${item.goods.goods_icon}" alt="">
            </li>
            <li class="desc">
                ${item.goods.goods_name}
                <br>${item.goods.goods_title}
                
            </li>
            <li class="d_price">
                ￥<span id="d_price"> ${item.goods.goods_price}</span>
            </li>
            <li class="count">
                <button class="butn jia fl">+</button>
                <input class="ipt" type="text" value="${item.quantity}">
                <button class="butn jian fr">-</button>
            </li>
            <li class="tot_price">￥ <span id="tot_price">${ (item.goods.goods_price * item.quantity)
                .toFixed(2)}</span> </li>
            <li cat_id="${item.id}" class="del">删除</li>   
        </ul>
    `
    })
    $(".footContent").html(s);
    quanel();
}