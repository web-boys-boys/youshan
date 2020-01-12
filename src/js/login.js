import "../less/login-register.less";
import "../less/reset.less";

import "./sweet-alert.js";
import "../css/sweet-alert.css";
import { BASE_URL } from "./BASE_URL";
// import "../css/example.css";

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
  // login_ajax($("#username").val(), $("#password").val());
  // swal({
  //   title: "用户名或密码不正确!",
  //   type: "error",
  //   timer: 2000
  // });
  // let a = false;
  // let reg;
  // $.each([...$("input")], function (index, element) {
  //   // console.log(RegExp($(element).data("reg")));
  //   reg = new RegExp($(element).data("reg"));
  //   // console.log($(element));
  //   // console.log($(element).attr("id"));
  //   if (reg.test($(element).val())) {
  //     a = true;
  //     $(this)
  //       .parent()
  //       .removeClass("err");
  //   } else {
  //     a = false;
  //     $(this)
  //       .parent()
  //       .addClass("err");
  //     return;
  //   }
  // });

  // if (a) {
  login_ajax($("#username").val(), $("#password").val());
  //   // let obj = {};
  //   // obj.id = $("input").val();
  //   // sessionStorage.setItem($("input").val(), JSON.stringify(obj));
  //   // location.href = "../index.html";
  // } else {
  //   alert("请完善信息");
  // }
});
function login_ajax(username, userpass) {
  let data = {
    username: username,
    password: userpass
  };
  // 192.168.110.43
  $.ajax({
    url: `${BASE_URL}/login/`,
    type: "post",
    async: false, //异步请求关闭，就变为了同步
    data: data,
    success: function(response_data) {
      console.log(response_data);
      // alert("登陆成功");
      // let obj = data;
      // obj.id = $("input").val();
      localStorage.setItem("access", response_data["access"]);
      sessionStorage.setItem("userinfo", JSON.stringify(data));
      // swal({
      //   title: "登录成功！",
      //   text: "2秒后自动跳转首页",
      //   type: "success",
      //   // showCancelButton: true,
      //   // confirmButtonColor: "#DD6B55",
      //   confirmButtonText: "立即跳转",
      //   // cancelButtonText: "No, cancel plx!",
      //   closeOnConfirm: false,
      //   // closeOnCancel: false
      //   timer: 1500
      // },
      //   function () {
      //     location.href = "../../index.html";
      //   });
      // setTimeout(function () {
      //   location.href = "../../index.html";
      // }, 2000)
    },
    error: function(response_data) {
      console.log(response_data);
      swal({
        title: "用户名或密码不正确!",
        type: "error",
        timer: 2000
      });
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
  }); //ajax就不等待
}
//点击登录
// $('.btn').click(function () {
//     alert('登录成功');
//     // sessionStorage.LOGIN_USER = {
//     // }
//     location.href = '../../index.html'
// })
