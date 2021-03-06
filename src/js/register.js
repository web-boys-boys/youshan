import "../less/login-register.less";
import "../less/reset.less";

//x0popup插件弹出框
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
    // console.log("我是粉色");
    b = true;
  } else {
    // console.log("我是灰色");
    swal("请您阅读后勾选用户同意协议!");
    b = false;
  }

  if (a && b) {
    // console.log("全是ture");
    // var def = {
    //   content: "欢迎来到A5素材!",
    //   time: 1000
    // }
    // $.Prompt(def);

    // setTimeout(function () {
    //   location.href = "../../index.html";
    // }, 1500)

    register_ajax(
      $("#username").val(),
      $("#email").val(),
      $("#password").val()
    );

    // location.href = "./login.html";
    // alert("注册成功");
  } else {
  }
});

function register_ajax(username, email, password) {
  // let datas = new FormData();
  // datas.append("username", username);
  // datas.append("email", email);
  // datas.append("password", password);
  // datas.append("repeat_password", password);
  let datas = {
    username: username,
    email: email,
    password: password,
    repeat_password: password
  };
  // sessionStorage.removeItem("userinfo");
  sessionStorage.setItem("userinfo", JSON.stringify(datas));
  $.ajax({
    url: `${BASE_URL}/register/`,
    type: "post",
    // async: true, //异步请求关闭，就变为了同步
    // contentType: "application/json",
    // processData: false,
    dataType: "JSON",
    data: datas,
    //传纯字符串表单
    // data:$('#login_form').serialize(),  //序列化 ，serialize把对象转化为json
    //传包含文件的表单
    // data: new FormData($("login_form")[0]),
    // cache: false,
    // processData: false,
    // contentType: false,
    success: function(response_data) {
      // alert(response_data);
      console.info(response_data);
      sessionStorage.setItem("userinfo", JSON.stringify(datas));
      $.ajax({
        url: `${BASE_URL}/login/`,
        type: "post",
        async: false, //异步请求关闭，就变为了同步
        data: {
          username: username,
          password: password
        },
        success: function(response_data) {
          console.log(response_data);
          // alert("登陆成功");
          // let obj = data;
          // obj.id = $("input").val();
          sessionStorage.setItem("refresh", response_data["refresh"]);
          sessionStorage.setItem("access", response_data["access"]);
          swal(
            {
              title: "注册成功！",
              text: "2秒后自动跳转首页",
              type: "success",
              // showCancelButton: true,
              // confirmButtonColor: "#DD6B55",
              confirmButtonText: "立即跳转",
              // cancelButtonText: "No, cancel plx!",
              closeOnConfirm: false,
              // closeOnCancel: false
              timer: 1500
            },
            function() {
              location.href = "../../index.html";
            }
          );
          setTimeout(function() {
            location.href = "../../index.html";
          }, 2000);
        },
        error: function(response_data) {
          console.log(response_data);
          swal({
            title: "服务器有误，稍后再试",
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
      // swal({
      //   title: "注册成功！",
      //   text: "2秒后自动跳转首页",
      //   type: "success",
      //   // showCancelButton: true,
      //   // confirmButtonColor: "#DD6B55",
      //   confirmButtonText: "立即跳转",
      //   // cancelButtonText: "No, cancel plx!",
      //   closeOnConfirm: false,
      //   // closeOnCancel: false
      // },
      //   function () {
      //     location.href = "../../index.html";
      //   });
      // setTimeout(function () {
      //   location.href = "../../index.html";
      // }, 2000)
    },
    error: function(response_data) {
      console.log(response_data.responseJSON);
      swal(response_data.responseJSON.username[0]);
      // alert(response_data.responseJSON.username[0]);
    }
    // beforeSend: function (xhr) {
    //   // if (/\w{6,20}/.test($("#username").val())) {
    //   //   console.log("验证成功");
    //   //   return true;
    //   // }
    //   // else {
    //   //   console.log("验证失败");
    //   //   return false;
    //   // }
    //   return true
    // }
  }); //ajax就不等待
}
