import "../less/index.less";
import "../less/util.less";
import "./JsHtml.js";
import { BASE_URL } from "./BASE_URL.js";

//加载头部尾部
import { fun_header, fun_banner, fun_footer } from "./JsHtml";
fun_header("");
// fun_banner("./static/pages/");
fun_footer();

import "../less/commodity.less";

// bootstrap
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

// 點擊切換評論頁
import "./comment.js";

//跳轉交錢頁面
// import "./apply.js";

//
import "../css/animation.css";
import "./lazy_load.js";
import { b } from "./ajax.js";
b();
function allPrice() {
  //单价
  let danjia = Number($(".price").text());
  console.log(danjia);
  //点击增加按钮
  $(".jia").each(function() {
    $(this).on("click", function() {
      let count = parseFloat(
        $(this)
          .siblings(".num")
          .html()
      );
      count++;
      console.log(count);
      $(this)
        .siblings(".num")
        .html(count);
      $(".price").text((danjia * count).toFixed(2));
    });
  });

  // 点击减少按钮
  $(".jian").each(function() {
    $(this).on("click", function() {
      let count = parseFloat(
        $(this)
          .siblings(".num")
          .html()
      );
      count--;
      if (count < 1) {
        return;
      }
      $(this)
        .siblings(".num")
        .html(count);
      $(".price").text((danjia * count).toFixed(2));
    });
  });
  //加入购物车
  $(".shopping-buy-left").click(function() {
    console.log($(this).data("id"));
    console.log($(".num").html());
    let data = {
      is_checked: false,
      goods: $(this).data("id"),
      quantity: $(".num").html()
    };
    $.myAjaxPost("/cart/", data, callback);
  });
  function callback(titel) {
    swal({
      title: titel,
      type: "success",
      timer: 2000
    });
  }
}
// allPrice();

//获取参数
function geturlparam() {
  let params = location.search;
  let paramarry = params.slice(1).split("&");
  let sparam = {};
  paramarry.forEach(item => {
    let itmes = item.split("=");
    sparam[itmes[0]] = decodeURI(itmes[1]);
  });
  return sparam;
}
let a = geturlparam();
let searchid = "";
if (a.id) {
  searchid = a.id;
}

console.log(location.search);

$.ajax({
  url: `${BASE_URL}/singlegoods/${searchid}/`,
  //数据格式
  // type: 'post',
  dataType: "json"
})
  .done(res => {
    console.log(res);
    $(".com-title").html(res.goods_name);
    $(".com-introduce").html(res.goods_title);
    $(".com-specification .fen").html(res.goods_unit);
    $(".main-top-left img").attr("src", res.goods_icon);
    $(".price").html(res.goods_price);
    $(".shopping-buy-left").data("id", res.id);
    allPrice();
  })
  .fail(err => {
    console.log(err);
  });

// //原生 get
// //创建对象
// let detailPage = new XMLHttpRequest();
// //配置
// detailPage.open("GET","http://www.",true);
// //设置相应类型
// detailPage.responseType = 'json';
// //超时时间
// detailPage.timeout = 10000;
// //发送
// detailPage.send();
// //事件监听
// detailPage.onload = function(){
//   if(detailPage.readyState == 4 && detailPage.status == 200){
//     //打印
//     console.log(detailPage.response);
//   }else{
//     console.log(`XMLHttpRequest_ERROR_STATUS: ${detailPage.status}`);
//   }
// }
