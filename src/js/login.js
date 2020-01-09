import "../less/login-register.less";
import "../less/reset.less";

$("input").on("change", function () {
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
$(".svg-img").click(function () {
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
$("#submit").click(function () {
  let a = false;
  let reg;
  $.each([...$("input")], function (index, element) {
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
  });

  if (a) {
    login_ajax($("#username").val(), $("#password").val());
    // let obj = {};
    // obj.id = $("input").val();
    // sessionStorage.setItem($("input").val(), JSON.stringify(obj));
    // location.href = "../index.html";
  } else {
    alert("请完善信息");
  }
});
function login_ajax(username, userpass) {
  let data = {
    "username": username,
    "password": userpass,
  }
  $.ajax({
    url: "http://192.168.7.170:8000/login/",
    type: "post",
    async: false, //异步请求关闭，就变为了同步
    data: data,
    //传纯字符串表单
    // data:$('#login_form').serialize(),  //序列化 ，serialize把对象转化为json
    //传包含文件的表单
    // data: new FormData($("login_form")[0]),
    // cache: false,
    // processData: false,
    // contentType: false,
    success: function (response_data) {
      console.log(response_data);
      alert("登陆成功");
      // let obj = data;
      // obj.id = $("input").val();
      sessionStorage.setItem("userinfo", JSON.stringify(data));
      location.href = "../../index.html";
    },
    error: function (response_data) {
      console.log(response_data);
    }

    // beforeSend: function (xhr) {
    //   if (/\w{6,20}/.test($("#username").val())) {
    //     console.log("验证成功");
    //     return true;
    //   }
    //   else {
    //     console.log("验证失败");
    //     return false;
    //   }
    // }
  })//ajax就不等待
}
//点击登录
// $('.btn').click(function () {
//     alert('登录成功');
//     // sessionStorage.LOGIN_USER = {
//     // }
//     location.href = '../../index.html'
// })
