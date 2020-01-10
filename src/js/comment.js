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

$(".my-comment").click(function() {
    let el = $(this).attr("data-tab");
    console.log(el);
    yonghu(el);
  });
  
  function yonghu(el) {
    let html = `<section class="yonghu-main-pinglun">
    <!-- pinglunxianq -->
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
          <img src="${require('../images/details/Rectangle 20.png')}"  alt=""/>
          </div>
          <div class="comment-photo">
          <img src="${require('../images/details/Rectangle 20.png')}"  alt=""/>
          </div>
          <div class="comment-photo">
          <img src="${require('../images/details/Rectangle 20.png')}"  alt=""/>
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
          <img src="${require('../images/details/Rectangle 20.png')}"  alt=""/>
          </div>
          <div class="comment-photo">
          <img src="${require('../images/details/Rectangle 20.png')}"  alt=""/>
          </div>
          <div class="comment-photo">
          <img src="${require('../images/details/Rectangle 20.png')}"  alt=""/>
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
          <img src="${require('../images/details/Rectangle 20.png')}"  alt=""/>
          </div>
          <div class="comment-photo">
          <img src="${require('../images/details/Rectangle 20.png')}"  alt=""/>
          </div>
          <div class="comment-photo">
            <img src="${require('../images/details/Rectangle 20.png')}"  alt=""/>
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
    $(`#${el}`).html(html);
  };
  yonghu("home");