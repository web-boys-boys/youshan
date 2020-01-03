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

//点击注册
$("#submit").click(function() {
  let a = false;
  let reg;
  $.each([...$("input")], function(index, element) {
    // console.log(RegExp($(element).data("reg")));
    reg = new RegExp($(element).data("reg"));
    // console.log($(element));
    // console.log($(element).attr("id"));
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
    //判断两次密码是否一致
    if ($(element).attr("id") == "confirmPsw") {
      // console.log($(this).val());
      if ($(element).val() == $("#password").val()) {
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
    }
    // console.log(a);
  });
  let b = false;

  //强制勾选用户同意协议
  // console.log($("svg"));
  console.log($(".svg-img>path").attr("fill"));
  if ($(".svg-img>path").attr("fill") == "#FF416C") {
    console.log("我是粉色");
    b = true;
  } else {
    console.log("我是灰色");
    b = false;
  }

  if (a && b) {
    // console.log("全是ture");
    location.href = "./login.html";
    alert("注册成功");
  } else {
    // console.log("我是灰色");
    alert("注册失败");
  }
});
