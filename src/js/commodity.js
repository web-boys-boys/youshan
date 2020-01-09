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

//单价
let danjia = Number($(".price").text());
// console.log(danjia);

//点击到购物车
$(".shopping-buy-left").on("click", function() {
  // location.href = ' ';
});

//点击到购买页面
$(".shopping-buy-right").on("click", function() {
  // location.href = ' ';
});

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


// 點擊切換評論頁
import './comment.js';
