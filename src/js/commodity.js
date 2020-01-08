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
$('.shopping-buy-left').on('click',function(){
    // location.href = ' ';
})

//点击到购买页面
$('.shopping-buy-right').on('click',function(){
    // location.href = ' ';
})


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

//点击评论页面
$.each($('.my-comment'),(index,item) =>{
  // 储存下标
  $(item).data("index", index);
  // 头部变色
  $(item).on('click',function(){
    $(this).addClass('commentator').siblings().removeClass('commentator');
 //换页面
    let _comment = $(this).data('index');
  $.each($('.yonghu-main-allpinglun').children(), (index,item) => {
    if( _comment == index) {
      $(item).children().show().siblings().hide();
    }
  })
  });
});




  let observer = document.querySelector(".yonghu-main-allpinglun");
  let htmlStr = "";
  res.data.forEach(item => {
      htmlStr += `<section class="yonghu-main-pinglun">
      <!-- pinglunxianq -->
      <div class="evaluate">
        <div class="portrait">
          <img src="../images/details/touxiang.png" alt="" />
        </div>
        <div class="comment-area">
          <div class="five-pointed">
            <!-- 星星数量 -->
            <div class="five-pointed-star">
              <img src="../images/details/Star 5.svg" alt="" />
            </div>
            <div class="five-pointed-star">
              <img src="../images/details/Star 5.svg" alt="" />
            </div>
          </div>

          <div class="comment-text">
            <span
              >王者这款游戏本来我是不想接的，但我试玩了一下，哇！爆率真的好高诶，王者荣耀，蛮好打的</span
            >
          </div>
          <div class="comment-img">
            <!-- photo -->
            <div class="comment-photo">
              <img
                src="../images/details/Rectangle 20.png"
                alt=""
              />
            </div>
            <div class="comment-photo">
              <img
                src="../images/details/Rectangle 20.png"
                alt=""
              />
            </div>
            <div class="comment-photo">
              <img
                src="../images/details/Rectangle 20.png"
                alt=""
              />
            </div>
          </div>

          <div class="report">
            <div class="report-time">
              <span class="vegetable">薄皮青椒500g</span>
              <span>2019-12-21</span>
              <span style="letter-spacing: 0.1em;">10:48</span>
            </div>

            <div class="report-inf">
              <span class="jubao">举报</span>
              <span class="jubao"
                ><img
                  src="../images/details/pinglun.png"
                  alt=""
                /><span class="report-inf-quit">10</span></span
              >
              <span
                ><img
                  src="../images/details/dianzan.png"
                  alt=""
                /><span class="report-inf-quit">10</span></span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="evaluate">
        <div class="portrait">
          <img src="../images/details/touxiang.png" alt="" />
        </div>
        <div class="comment-area">
          <div class="five-pointed">
            <!-- 星星数量 -->
            <div class="five-pointed-star">
              <img src="../images/details/Star 5.svg" alt="" />
            </div>
            <div class="five-pointed-star">
              <img src="../images/details/Star 5.svg" alt="" />
            </div>
          </div>

          <div class="comment-text">
            <span
              >王者这款游戏本来我是不想接的，但我试玩了一下，哇！爆率真的好高诶，王者荣耀，蛮好打的</span
            >
          </div>
          <div class="comment-img">
            <!-- photo -->
            <div class="comment-photo">
              <img
                src="../images/details/Rectangle 20.png"
                alt=""
              />
            </div>
            <div class="comment-photo">
              <img
                src="../images/details/Rectangle 20.png"
                alt=""
              />
            </div>
            <div class="comment-photo">
              <img
                src="../images/details/Rectangle 20.png"
                alt=""
              />
            </div>
          </div>

          <div class="report">
            <div class="report-time">
              <span class="vegetable">薄皮青椒500g</span>
              <span>2019-12-21</span>
              <span style="letter-spacing: 0.1em;">10:48</span>
            </div>

            <div class="report-inf">
              <span class="jubao">举报</span>
              <span class="jubao"
                ><img
                  src="../images/details/pinglun.png"
                  alt=""
                /><span class="report-inf-quit">10</span></span
              >
              <span
                ><img
                  src="../images/details/dianzan.png"
                  alt=""
                /><span class="report-inf-quit">10</span></span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="evaluate">
        <div class="portrait">
          <img src="../images/details/touxiang.png" alt="" />
        </div>
        <div class="comment-area">
          <div class="five-pointed">
            <!-- 星星数量 -->
            <div class="five-pointed-star">
              <img src="../images/details/Star 5.svg" alt="" />
            </div>
            <div class="five-pointed-star">
              <img src="../images/details/Star 5.svg" alt="" />
            </div>
          </div>

          <div class="comment-text">
            <span
              >王者这款游戏本来我是不想接的，但我试玩了一下，哇！爆率真的好高诶，王者荣耀，蛮好打的</span
            >
          </div>
          <div class="comment-img">
            <!-- photo -->
            <div class="comment-photo">
              <img
                src="../images/details/Rectangle 20.png"
                alt=""
              />
            </div>
            <div class="comment-photo">
              <img
                src="../images/details/Rectangle 20.png"
                alt=""
              />
            </div>
            <div class="comment-photo">
              <img
                src="../images/details/Rectangle 20.png"
                alt=""
              />
            </div>
          </div>

          <div class="report">
            <div class="report-time">
              <span class="vegetable">薄皮青椒500g</span>
              <span>2019-12-21</span>
              <span style="letter-spacing: 0.1em;">10:48</span>
            </div>

            <div class="report-inf">
              <span class="jubao">举报</span>
              <span class="jubao"
                ><img
                  src="../images/details/pinglun.png"
                  alt=""
                /><span class="report-inf-quit">10</span></span
              >
              <span
                ><img
                  src="../images/details/dianzan.png"
                  alt=""
                /><span class="report-inf-quit">10</span></span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- jiesu -->
    </section>`;
  })
  observer.innerHTML = htmlStr;
