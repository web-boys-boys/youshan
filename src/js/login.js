import "../less/login-register.less";
import "../less/reset.less";

$("input").on("change", function() {
  //表单验证
  let reg = new RegExp($(this).data("reg"));

  if (reg.test($(this).val())) {
    $(this)
      .parent()
      .removeClass("err");
  } else {
    $(this)
      .parent()
      .addClass("err");
  }
});



//记住用户名按钮
let isf = 0;
$(".svg-img").click(function() {
  if (!isf) {
    $(this)
      .children()
      .attr("fill", "#FF416C");
    isf = 1;
  } else {
    $(this)
      .children()
      .attr("fill", "#999999");
    isf = 0;
  }
});

//点击登录
$("#submit").click(function() {
  let a = false;
  let reg;
  $.each([...$("input")], function(index, element) {
    console.log(RegExp($(element).data("reg")));
    reg = new RegExp($(element).data("reg"));
    console.log($(element));
    console.log($(element).attr("id"));
    if (reg.test($(element).val())) {
      a = true;
      $(this)
        .parent()
        .removeClass("err");
    } else {
      a = false;
      $(this)
        .parent()
        .addClass("err");
      return;
    }
  });

  if (a) {
    let obj = {};
    obj.id = $("input").val();
    sessionStorage.setItem($("input").val(),JSON.stringify(obj));
    location.href = "../index.html";
  } else {
    alert("登录失败");
  }
});

//点击登录
// $('.btn').click(function () {
//     alert('登录成功');
//     // sessionStorage.LOGIN_USER = {
//     // }
//     location.href = '../../index.html'
// })
