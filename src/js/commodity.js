import "../less/index.less";
import "../less/util.less";
import "./JsHtml.js";
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
import "./apply.js";

//
import "../css/animation.css";
import "./lazy_load.js";

function allPrice() {
//点击增加按钮
$(".jia").each(function() {
  $(this).on("click", function() {
    let count = parseFloat(
      $(this)
        .siblings(".num")
        .html()
    );
    count++;
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
}
// allPrice();


//单价
let danjia = Number($(".price").text());
console.log(danjia);

console.log(location.search);

$.ajax({
  url: `http://print.oicp.vip/singlegoods/3/`,
  //数据格式
  dataType: "json"
})
  .done(res => {
    console.log(res);
    $(".com-title").html(res.goods_name);
    $(".com-introduce").html(res.goods_title);
    $(".com-specification .fen").html(res.goods_unit);
    $('.main-top-left img').attr("src",res.goods_icon);
    $('.price').html(res.goods_price);
//单价
let danjia = Number(res.goods_price);
console.log(danjia);

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
