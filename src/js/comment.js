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
$.each($(".my-comment"), (index, item) => {
  // 储存下标
  $(item).data("index", index);
  // 头部变色
  $(item).on("click", function() {
    $(this)
      .addClass("commentator")
      .siblings()
      .removeClass("commentator");
  });
});

//動態加載評論頁
$(".my-comment").click(function() {
  let el = $(this).attr("data-tab");
  console.log(el);
  yonghu(el);
});

function yonghu(el) {
  // ren.type = el;
  // let liet = [];
  // $.each(ren, function(index, item) {
  //   if (item.type == el) {
  //     liet.push(item);
  //   }
  // });
  let html = `<section class="yonghu-main-pinglun">
    <div class="evaluate">
      <div class="portrait">
      <img src="${require("../images/details/touxiang.png")}" alt="" />
      </div>
      <div class="comment-area">
        <div class="five-pointed">
          <!-- 星星数量 -->
          <div class="five-pointed-star">
          <img src="${require("../images/details/Star 5.svg")}" alt="" />
          </div>
          <div class="five-pointed-star">
          <img src="${require("../images/details/Star 5.svg")}" alt="" />
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
          <img src="${require("../images/details/Rectangle 20.png")}"  alt=""/>
          </div>
          <div class="comment-photo">
          <img src="${require("../images/details/Rectangle 20.png")}"  alt=""/>
          </div>
          <div class="comment-photo">
          <img src="${require("../images/details/Rectangle 20.png")}"  alt=""/>
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
              ><img src="${require("../images/details/pinglun.png")}"  alt=""/><span class="report-inf-quit">10</span></span
            >
            <span
              > <img src="${require("../images/details/dianzan.png")}" alt="" /><span class="report-inf-quit">9
  </span></span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="evaluate">
      <div class="portrait">
      <img src="${require("../images/details/touxiang.png")}" alt="" />
      </div>
      <div class="comment-area">
        <div class="five-pointed">
          <!-- 星星数量 -->
          <div class="five-pointed-star">
          <img src="${require("../images/details/Star 5.svg")}" alt="" />
          </div>
          <div class="five-pointed-star">
          <img src="${require("../images/details/Star 5.svg")}" alt="" />
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
          <img src="${require("../images/details/Rectangle 20.png")}"  alt=""/>
          </div>
          <div class="comment-photo">
          <img src="${require("../images/details/Rectangle 20.png")}"  alt=""/>
          </div>
          <div class="comment-photo">
          <img src="${require("../images/details/Rectangle 20.png")}"  alt=""/>
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
              ><img src="${require("../images/details/pinglun.png")}"  alt=""/><span class="report-inf-quit">10</span></span
            >
            <span
              > <img src="${require("../images/details/dianzan.png")}" alt="" /><span class="report-inf-quit">10</span></span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="evaluate">
      <div class="portrait">
        <img src="${require("../images/details/touxiang.png")}" alt="" />
      </div>
      <div class="comment-area">
        <div class="five-pointed">
          <!-- 星星数量 -->
          <div class="five-pointed-star">
          <img src="${require("../images/details/Star 5.svg")}" alt="" />
          </div>
          <div class="five-pointed-star">
          <img src="${require("../images/details/Star 5.svg")}" alt="" />
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
          <img src="${require("../images/details/Rectangle 20.png")}"  alt=""/>
          </div>
          <div class="comment-photo">
          <img src="${require("../images/details/Rectangle 20.png")}"  alt=""/>
          </div>
          <div class="comment-photo">
            <img src="${require("../images/details/Rectangle 20.png")}"  alt=""/>
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
            <span class="jubao" >
            <img src="${require("../images/details/pinglun.png")}"  alt=""/>
             <span class="report-inf-quit">10</span></span>
            <span>
            <img src="${require("../images/details/dianzan.png")}" alt="" />
              <span class="report-inf-quit">10</span></span>
          </div>
        </div>
      </div>
    </div>
    <!-- jiesu -->
  </section>`;
  //字符串拼接
  $("#home").html(html);
}
yonghu("qb");
