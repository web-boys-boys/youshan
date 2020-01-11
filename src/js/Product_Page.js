import '../less/index.less';
import '../less/util.less';
import '../less/Product_Page.less';
import './JsHtml.js';
//选择菜单
$('.fr_menu li').click(function () {
    $(this).children('a').addClass('active').parent().siblings().children('a').removeClass('active');

})
//加载头部尾部
import { fun_header, fun_banner, fun_footer } from "./JsHtml"
fun_header("./");
fun_banner("./");
fun_footer();

//获取参数
function geturlparam() {
    let params = location.search;
    let paramarry = params.slice(1).split("&");
    let sparam = {};
    paramarry.forEach(item => {
        let itmes = item.split('=');
        sparam[itmes[0]] = decodeURI(itmes[1]);
    })
    return sparam;
}
let a = geturlparam();
let searchid = '';
if (a.id) {
    searchid = a.id;
}
// console.log(a.id);

$.ajax({
    url: "http://print.oicp.vip/goods/?search=" + searchid,
    type: "get",
    async: false, //异步请求关闭，就变为了同步
    success: function (response_data) {
        console.log(response_data.results);
        //记载数据
        let html = ``;
        $.each(response_data.results, (index, item) => {
            console.log(item);
            html += `<li class="item">
                        <div class="xin fr"><i class="iconfont">&#xe60d;</i></div>
                        <div class="goods_img"><img src="${item.goods_icon}" alt=""></div>
                        <h2>${item.goods_name}</h2>
                        <div class="desc" >${item.goods_title}</div>
                        <h3 class="price">￥${item.goods_price}</h3>
                        <div class="chart fr"><img src="${require("../images/product_page/Vector.png")}" alt=""></div>
                    </li>`;
        })
        // console.log(html)
        $(".list .ad").after(html);
        
        // .append(123);
    },
    error: function (response_data) {
        console.log(response_data.results);
        swal({
            title: "服务器异常，稍后再试!",
            type: "error",
            timer: 2000
        });
    }
}) //ajax就不等待