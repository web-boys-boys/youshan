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
    })
    //单选
    function danxuan(el) {
        if ($(el).prop('checked')) {
            $(el).parents(".footlist").addClass("listchecked");
        } else {
            $(el).parents(".footlist").removeClass("listchecked");
        }
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
        $("#Alltot_price").html(zongjia);
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

// let BASE_URL = "http://192.168.7.170:8000/"
// fetch(`${BASE_URL}carts/`).then(res => {
//     return res.json();
// }).then(data => {
//     console.log(data)
//     let s = ""
//     $.each(data, (index, item) => {
//         // console.log(item.goods.goods_icon)
//         s += `<ul class="list footlist">
//         <li>
//             <input type="checkbox">
//         </li>
//         <li class="img">
//             <img src="" alt="">
//         </li>
//         <li class="desc">
//             ${item.goods.goods_name}
//             <br>${item.goods.goods_name}
//             <br>${item.goods.goods_title}
//         </li>
//         <li class="d_price">
//             ￥<span id="d_price"> ${item.goods.goods_price}</span>
//         </li>
//         <li class="count">
//             <button class="butn jia fl">+</button>
//             <input class="ipt" type="text" value="${item.goods.goods_stock}">
//             <button class="butn jian fr">-</button>
//         </li>
//         <li class="tot_price">￥ <span id="tot_price">${item.goods.goods_price}</span> </li>
//         <li class="del">删除</li>   
//     </ul>
// `
//     })
//     $(".footContent").html(s);
//     //  console.log(data.data)

// })
let BASE_URL = "http://192.168.7.170:8000/"
$.ajax({
    type: 'get',
    url: `${BASE_URL}carts/`,
    // 数据格式
    dataType: "json",
    success: function (response_data) {
        console.log(response_data[0]);
        let s = ""
        // $.each(response_data, (index, item) => {

        // console.log(item.goods.goods_icon)
        s += `<ul class="list footlist">
        <li>
            <input type="checkbox">
        </li>
        <li class="img">
            <img src="" alt="">
        </li>
        <li class="desc">
            ${response_data[0].goods.goods_name}
            <br>${response_data[0].goods.goods_name}
            <br>${response_data[0].goods.goods_title}
        </li>
        <li class="d_price">
            ￥<span id="d_price"> ${response_data[0].goods.goods_price}</span>
        </li>
        <li class="count">
            <button class="butn jia fl">+</button>
            <input class="ipt" type="text" value="${response_data[0].goods.goods_stock}">
            <button class="butn jian fr">-</button>
        </li>
        <li class="tot_price">￥ <span id="tot_price">${response_data[0].goods.goods_price}</span> </li>
        <li class="del">删除</li>   
    </ul>
`
        // })
        $(".footContent").html(s);
        quanel();
    },
    error: function (err) {
        console.log(err);
    }
})

// res.data.forEach(item => {
//     htmlStr += `<li>
//         <img src="${item.avatar}">
//         <p>${item.name}</p>
//         <p>${item.location}</p>
//         <p>${item.position}</p>
//     </li>`;
// })
// heros.innerHTML = htmlStr;
// }).fail(err => {
//     console.log(err);
// });





//加载头部尾部
import {
    fun_header,
    fun_footer
} from "./JsHtml"
fun_header("./");
fun_footer();

//

// $('#top_Alldel').css()