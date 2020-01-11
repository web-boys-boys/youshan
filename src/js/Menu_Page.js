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
    url: "http://print.oicp.vip/recipes/?search=" + searchid,
    type: "get",
    async: false, //异步请求关闭，就变为了同步
    success: function (response_data) {
        console.log(response_data.results);
        //记载数据
        let html = ``;
        $.each(response_data.results, (index, item) => {
            console.log(item)
            html += `<li class="item">
                        <div class="goods_img"><img src="${item.recipe_icon}" alt=""></div>
                        <h2>${item.recipe_name}</h2>
                        <div class="desc">${item.recipe_title}</div><br><br>
                        <span class="star"><i class="iconfont">&#xe602;</i></span>
                        <span class="star"><i class="iconfont">&#xe602;</i></span>
                        <span class="star"><i class="iconfont">&#xe602;</i></span>
                        <span class="star"><i class="iconfont">&#xe602;</i></span>
                        <span class="star"><i class="iconfont">&#xe602;</i></span>
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