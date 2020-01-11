import '../less/index.less';
import '../less/util.less';
import '../less/Menu_Page.less';
import './JsHtml.js';

//选择菜单
$('.fr_menu li').click(function () {
    $(this).children('a').addClass('active').parent().siblings().children('a').removeClass('active');
    //获取鼠标当前移入这个li标签的索引
    let idx = $(this).index()
    console.log(idx);
    // $(this).eq(idx).addClass('show').siblings('.list').removeClass('hidd')
})

//加载头部尾部
import { fun_header, fun_banner, fun_footer } from "./JsHtml"
fun_header("./");
fun_banner("./");
fun_footer();

//加载list


//获取参数
function geturlparam() {
    let params = location.search;
    let paramarry = params.slice(1).split("&");
    let sparam = {};
    paramarry.forEach(item => {
        let itmes = item.split('=');
        sparam[itmes[0]] = itmes[1];
    })
    return sparam;
}
let a = geturlparam();
console.log(a);
// $.ajax({
//     url: "http://192.168.7.170:8000/mainrecipes/",
//     type: "get",
//     async: false, //异步请求关闭，就变为了同步
//     success: function (response_data) {
//         console.log(response_data);
//     },
//     error: function (response_data) {
//         console.log(response_data);
//         swal({
//             title: "服务器异常，稍后再试!",
//             type: "error",
//             timer: 2000
//         });
//     }
// }) //ajax就不等待