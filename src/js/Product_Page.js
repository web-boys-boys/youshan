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