import "../less/index.less";
import "../less/util.less";
import "./JsHtml.js";
import { BASE_URL } from "./BASE_URL.js";
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

// 點擊切換評論頁
import "./comment.js";

//跳轉交錢頁面
// import "./apply.js";

function totalPrice() {
  //食材明细加减按钮
  //jia
  $(".jia").each(function () {
    $(this).click(function () {
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
  $(".jian").each(function () {
    $(this).click(function () {
      // let danjia = Number($(this).data("price"));
      // console.log(danjia);
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
      zongjia_fun();
    });
  });
}
totalPrice();

function zongjia_fun() {
  let zongjia = 0;
  // console.log(el)
  // let danjia = $(el).parent().siblings(".shicai-text").data("price");
  // console.log(danjia);
  $.each($(".shicai"), (index, item) => {
    zongjia +=
      $(item)
        .find(".num")
        .html() *
      $(item)
        .find(".shicai-text")
        .data("price");
    // console.log(zongjia);
  });
  $(".price").html(zongjia.toFixed(2));
}

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

//获取参数
function geturlparam() {
  let params = location.search;
  console.log(params);
  let paramarry = params.slice(1).split("&");
  // console.log(paramarry)
  let sparam = {};

  paramarry.forEach(item => {
    let itmes = item.split("=");
    console.log(itmes);
    //对象表达式 id:3
    sparam[itmes[0]] = decodeURI(itmes[1]);
    console.log(decodeURI(itmes[1]));
  });
  console.log(sparam);
  return sparam;
}
let a = geturlparam();
let searchid = "";
if (a.id) {
  searchid = a.id;
}
// console.log(searchid);
// ============前后端交互==================
$.ajax({
  url: `${BASE_URL}/singlerecipe/${searchid}/`,
  //数据格式
  dataType: "json"
})
  .done(res => {
    console.log(res);
    $(".main-top-left-img-text").html(res.recipe_name);
    $(".com-introduce").attr("src", res.recipe_icon);
    $(".jieshao").html(res.recipe_detail);
    $(".jieshao img").each((index, item) => {
      let img_url = $(item).attr("src");
      $(item).attr("src", BASE_URL + img_url);
      console.log(item);
    });
    let html = ``;
    $(res.recipegoodsr_set).each((index, item) => {
      // let danjia = $(item)[0].goods.goods_price;
      // console.log(danjia)
      html += ` <section class="shicai yutou" data-goods=${item.goods.id}}>
      <div class="shicai-text" data-price=${item.goods.goods_price}>${
        item.goods.goods_name
        }<span>${item.goods.goods_unit}</span></div>
      <div class="range">
        <img
          class="jia"
          src="${require("../images/commodity/jia.png")}"
          alt="loding"
        />
        <span class="num">1</span>
        <img
          class="jian"
          src="${require("../images/commodity/jian.png")}"
          alt="loding"
        />
      </div>
    </section> `;
    });
    $(".ingredients-details-inf").html(html);
    zongjia_fun();
    totalPrice();
  })
  .fail(err => {
    console.log(err);
  });

//加入购物车
//
import { b } from "./ajax.js";
b();

$(".shopping-buy-left").click(function () {
  console.log($(this).data("id"));
  let isture = false;
  $(".shicai").each((index, item) => {
    let data = {
      is_checked: false,
      goods: $(this).data("goods"),
      quantity: $(this)
        .children(".num")
        .html()
    };
    $.myAjaxPost("/cart/", data, e);
    function e(res) {
      isture = true;
      console.log(res);
    }
    if (index == $(".shicai").length - 1) {
      swal({
        title: "添加成功，可前往查看",
        type: "success",
        timer: 2000
      });
    }
  });
  // console.log(isture);
  // if (isture) {

  // }
  // let data = {
  //   is_checked: false,
  //   goods: $(this).data("id")
  //   // console.log(goods)0
  // };
});
