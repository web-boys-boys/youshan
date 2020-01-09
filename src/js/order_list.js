import '../less/index.less';
import '../less/util.less';
import './JsHtml';
import '../less/user_info.less';
import '../less/shopping_cart.less';
import '../less/order_list.less'
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

//加载头部尾部
import {
    fun_header,
    fun_footer
} from "./JsHtml"
fun_header("./");
fun_footer();