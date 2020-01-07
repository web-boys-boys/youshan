import '../less/index.less';
import '../less/util.less';
import './JsHtml.js';
import '../less/user_info.less';
import '../less/shopping_cart.less';
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

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
    $(this).parents(".list").remove();
    // console.log();
})
//删除全部
$('.All_del').click(function () {
    $('.list').remove();
  })

console.log($('input[type="checkbox"]'))
let zongjia; //总价
$('input[type="checkbox"]').click(function () {
    // console.log($('.footlist input[type="checkbox"]:checked'));  
    jishuan();
})

function jishuan() {
    zongjia = 0;
    $.each($('.footlist input[type="checkbox"]:checked'), (index, item) => {
        console.log($(item).parent().siblings(".tot_price").children("#tot_price").html());
        zongjia += Number($(item).parent().siblings(".tot_price").children("#tot_price").html());
    })
    $("#Alltot_price").html(zongjia);
    // console.log(zongjia);
}

$('#Alltot_price')
let danjia = $('#d_price').text()
console.log(danjia);

//统计全部商品
(function(){
    $('.counts').html($('.list .img').length)
    console.log($('.list .img').length);
  })();
//统计已选商品数量





//加载头部尾部
import {
    fun_header,
    fun_footer
} from "./JsHtml"
fun_header("./static/pages/");
fun_footer();