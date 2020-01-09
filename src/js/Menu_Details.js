import "../less/index.less";
import "../less/util.less";
import "./JsHtml.js";
//加载头部尾部
import { fun_header, fun_banner, fun_footer } from "./JsHtml";
fun_header("");
// fun_banner("./static/pages/");
fun_footer();

import "../less/Menu_Details.less";

// bootstrap
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

// 点击商品详情和用户信息
$(".introduction-onclick").on("click", function() {
  // console.log($(this));
  $(this)
    .addClass("get-ellipse")
    .siblings()
    .removeClass("get-ellipse");
});
// console.log($(".tab-choice-head").children(), 123);
//点击更换页面
$.each($(".tab-choice-head").children(), (index, item) => {
  $(item).data("index", index);
});

$(".tab-choice-head")
  .children()
  .click(function() {
    let ch_index = $(this).data("index");
    $.each($(".tab-main-container").children(), (index, item) => {
      if (index == ch_index) {
        $(item)
          .show()
          .siblings()
          .hide();
      }
    });
  });

//食材明细加减按钮
//jia
$(".jia").each(function() {
  $(this).click(function() {
    let count = parseFloat(
      $(this)
        .siblings(".num")
        .html()
    );
    count++;
    $(this)
      .siblings(".num")
      .html(count);

    zongjia_fun();
  });
});

//jian
$(".jian").each(function() {
  $(this).click(function() {
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
    zongjia_fun() ;
  });
});

function zongjia_fun() {
  let zongjia = 0;
  let danjia = 10;
  $.each($(".shicai"), (index, item) => {
    zongjia +=$(item)
        .find(".num")
        .html() * danjia;
    console.log(zongjia);
  });
  $(".price").html(zongjia.toFixed(2));
}

// 點擊切換評論頁
import './comment.js';

// 错误示例，同学们，要细心哦
// // 给每样食材10元单价
// function jisuan() {
//   let danjia = 10;
//   // 总价
//   let zongjia = Number($(".price").text()); 【这里的zongjia=0 ，不要写成zongjia = Number($(".price").text());不然加或者减都会遍历它的哦】
//   // console.log(zongjia);
//   $.each($ 【这里的$不要忘记】 (".shicai"),
//     (index, item) => {
//       zongjia += Number($(item).find(".num").html()) * danjia;【这里单价和html不要放反了，先取值在相乘】
//     });
//     $(".price").html(zongjia.toFixed(2));
// }
