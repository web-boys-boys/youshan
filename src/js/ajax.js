import {
  BASE_URL
} from "./BASE_URL";
export let b = $.extend({
  //全局封装，把函数直接封装到jquery的属性上
  myAjaxGet: function (url, data, callback) {
    if (callback == undefined) {
      callback = data;
      data = {};
    }
    $.ajax({
      url: BASE_URL + url,
      type: "get",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("access")
      },
      data: data,
      cache: false,
      success: function (rsp_data) {
        // console.log(rsp_data)
        callback(rsp_data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status == 400) {
          console.log(jqXHR);
          if ("non_field_errors" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)[
              "non_field_errors"
            ][0];
            popup({
              type: "error",
              msg: errmessage,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          } else if ("new_password" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)["new_password"][0];
            popup({
              type: "error",
              msg: `密码${errmessage}`,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          } else if ("new_password_too" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)[
              "new_password_too"
            ][0];
            popup({
              type: "error",
              msg: `密码${errmessage}`,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          }
        } else if (jqXHR.status == 401) {
          $.ajax({
            url: BASE_URL + "/api/token/refresh/",
            type: "post",
            data: { refresh: sessionStorage.getItem("refresh") },
            success: function (rsp_data) {
              sessionStorage.setItem("access", rsp_data["access"]);
              $.myAjaxGet(url, callback);
            },
            error: function (jqXHR, textStatus, errorThrown) {
              window.location.href = "../../../static/pages/login.html";
            }
          });
        }
      }
    });
  },
  myAjaxPost: function (url, data, callback) {
    $.ajax({
      url: BASE_URL + url,
      type: "post",
      headers: {
        Authorization: "Bearer" + " " + sessionStorage.getItem("access")
      },
      data: data,
      cache: false,
      success: function (rsp_data) {
        console.log(rsp_data);
        callback("添加成功，可前往查看");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        if (jqXHR.status == 400) {
          console.log(jqXHR);
          if ("non_field_errors" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)[
              "non_field_errors"
            ][0];
            popup({
              type: "error",
              msg: errmessage,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          } else if ("new_password" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)["new_password"][0];
            popup({
              type: "error",
              msg: `密码${errmessage}`,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          } else if ("new_password_too" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)[
              "new_password_too"
            ][0];
            popup({
              type: "error",
              msg: `密码${errmessage}`,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          }
        } else if (jqXHR.status == 401) {
          $.ajax({
            url: BASE_URL + "/api/token/refresh/",
            type: "post",
            data: { refresh: sessionStorage.getItem("refresh") },
            success: function (rsp_data) {
              sessionStorage.setItem("access", rsp_data["access"]);
              $.myAjaxGet(url, callback);
            },
            error: function (jqXHR, textStatus, errorThrown) {
              window.location.href = "../../../static/pages/login.html";
            }
          });
        }
      }
    });
  },
  myAjaxPut: function (url, data, callback) {
    if (callback == undefined) {
      callback = data;
      data = {};
    }
    $.ajax({
      url: BASE_URL + url,
      type: "put",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("access")
      },
      data: data,
      cache: false,
      success: function (rsp_data) {
        callback(rsp_data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status == 400) {
          console.log(jqXHR);
          if ("non_field_errors" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)[
              "non_field_errors"
            ][0];
            popup({
              type: "error",
              msg: errmessage,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          } else if ("new_password" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)["new_password"][0];
            popup({
              type: "error",
              msg: `密码${errmessage}`,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          } else if ("new_password_too" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)[
              "new_password_too"
            ][0];
            popup({
              type: "error",
              msg: `密码${errmessage}`,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          }
        } else if (jqXHR.status == 401) {
          $.ajax({
            url: BASE_URL + "/api/token/refresh/",
            type: "post",
            data: { refresh: sessionStorage.getItem("refresh") },
            success: function (rsp_data) {
              sessionStorage.setItem("access", rsp_data["access"]);
              $.myAjaxGet(url, callback);
            },
            error: function (jqXHR, textStatus, errorThrown) {
              window.location.href = "../../../static/pages/login.html";
            }
          });
        }
      }
    });
  },
  myAjaxDel: function (url, data, callback) {
    if (callback == undefined) {
      callback = data;
      data = {};
    }
    $.ajax({
      url: BASE_URL + url,
      type: "delete",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("access")
      },
      data: data,
      cache: false,
      success: function (rsp_data) {
        callback(1);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status == 400) {
          console.log(jqXHR);
          if ("non_field_errors" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)[
              "non_field_errors"
            ][0];
            popup({
              type: "error",
              msg: errmessage,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          } else if ("new_password" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)["new_password"][0];
            popup({
              type: "error",
              msg: `密码${errmessage}`,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          } else if ("new_password_too" in JSON.parse(jqXHR.responseText)) {
            let errmessage = JSON.parse(jqXHR.responseText)[
              "new_password_too"
            ][0];
            popup({
              type: "error",
              msg: `密码${errmessage}`,
              delay: 2000,
              bg: true,
              clickDomCancel: true
            });
          }
        } else if (jqXHR.status == 401) {
          $.ajax({
            url: BASE_URL + "/api/token/refresh/",
            type: "post",
            data: { refresh: sessionStorage.getItem("refresh") },
            success: function (rsp_data) {
              sessionStorage.setItem("access", rsp_data["access"]);
              $.myAjaxGet(url, callback);
            },
            error: function (jqXHR, textStatus, errorThrown) {
              window.location.href = "../../../static/pages/login.html";
            }
          });
        }
      }
    });
  }
});