import '../less/index.less';
import '../less/util.less';
import './JsHtml.js';
import '../less/user_info.less';
import '../less/shopping_cart.less';
import '../less/success_page.less';
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

//获取订单支付时间

function timeDown() {
    let nowTime = new Date();
    console.log(nowTime);
        
}





//加载头部尾部
import {
    fun_header,
    fun_footer
} from "./JsHtml"
fun_header("./static/pages/");
fun_footer();