// // 资源地址
export const BASE_URL = "http://127.0.0.1:8081";
// // $.myAjaxGet('/login/',function () {
// //     window.location.href='index.html'
// //   })
// $.extend({
//    myAjaxGet: function (url, data, callback) {
//         if (callback == undefined) {
//             callback = data;
//             data = {}
//         }
//         $.ajax({
//             url: BASES_URL + url,
//             type: 'get',
//             headers: {
//                 Authorization: 'Bearer ' + localStorage.getItem('access')
//             },
//             data: data,
//             cache: false,
//             success: function (rsp_data) { //2xx
//                 callback(rsp_data);
//             },
//             error: function (jqXHR, textStatus, errorThrown) { //4xx 5xx
//                 if (jqXHR.status == 400) {
//                     console.log(jqXHR)
//                     if("non_field_errors" in JSON.parse(jqXHR.responseText)){
//                         let errmessage = JSON.parse(jqXHR.responseText)["non_field_errors"][0];
//                         popup({type:'error',msg:errmessage,delay:2000,bg:true,clickDomCancel:true});
//                     }else if ('new_password' in JSON.parse(jqXHR.responseText)) {
//                         let errmessage = JSON.parse(jqXHR.responseText)["new_password"][0];
//                         popup({type:'error',msg:`密码${errmessage}`,delay:2000,bg:true,clickDomCancel:true});
//                     }else if ('new_password_too' in JSON.parse(jqXHR.responseText)) {
//                         let errmessage = JSON.parse(jqXHR.responseText)["new_password_too"][0];
//                         popup({type:'error',msg:`密码${errmessage}`,delay:2000,bg:true,clickDomCancel:true});
//                     }
//                 } else if (jqXHR.status == 401) {
//                     $.ajax({
//                         url: BASES_URL + '/system_user/refresh/',
//                         type: 'post',
//                         data: { 'refresh': localStorage.getItem('refresh') },
//                         success: function (rsp_data) {
//                             localStorage.setItem('access', rsp_data['access']);
//                             $.myAjaxGet(url, callback)
//                         },
//                         error: function (jqXHR, textStatus, errorThrown) {
//                             localStorage.clear();
//                             window.location.href = projectName + '/static/pages/login.html'
//                         }
//                     })
//                 }
//             }
//         })
//     }
//  myAjaxPost: function (url, data, callback) {
//         $.ajax({
//             url: BASES_URL + url,
//             type: 'post',
//             headers: {
//                 Authorization: 'Bearer ' + localStorage.getItem('access')
//             },
//             data: data,
//             cache: false,
//             success: function (rsp_data) {
//                 callback(rsp_data);
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR)
//                 if (jqXHR.status == 400) {
//                     console.log(jqXHR)
//                     if("non_field_errors" in JSON.parse(jqXHR.responseText)){
//                         let errmessage = JSON.parse(jqXHR.responseText)["non_field_errors"][0];
//                         popup({type:'error',msg:errmessage,delay:2000,bg:true,clickDomCancel:true});
//                     }else if ('new_password' in JSON.parse(jqXHR.responseText)) {
//                         let errmessage = JSON.parse(jqXHR.responseText)["new_password"][0];
//                         popup({type:'error',msg:`密码${errmessage}`,delay:2000,bg:true,clickDomCancel:true});
//                     }else if ('new_password_too' in JSON.parse(jqXHR.responseText)) {
//                         let errmessage = JSON.parse(jqXHR.responseText)["new_password_too"][0];
//                         popup({type:'error',msg:`密码${errmessage}`,delay:2000,bg:true,clickDomCancel:true});
//                     }
//                 } else if (jqXHR.status == 401) {
//                     $.ajax({
//                         url: BASES_URL + '/system_user/refresh/',
//                         type: 'post',
//                         data: { 'refresh': localStorage.getItem('refresh') },
//                         success: function (rsp_data) {
//                             localStorage.setItem('access', rsp_data['access']);
//                             $.myAjaxGet(url, callback)
//                         },
//                         error: function (jqXHR, textStatus, errorThrown) {
//                             localStorage.clear();
//                             window.location.href = projectName + '/static/pages/login.html'
//                         }
//                     })
//                 }
//             }
//         })
//  }
