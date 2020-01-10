import '../less/index.less';
import '../less/util.less';
import './JsHtml';
import '../less/user_info.less';
import '../less/shopping_cart.less';
import '../less/order_list.less'
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

// 修改信息
$('.modf').click(function () { 
    $('.uerinfo_modify,.define_modf').show(500).siblings(".uer_info,.modf").hide(500)
    // $('.define_modf').show(500)
  
 })
 $('.define_modf').click( function (){ 
    $('.uer_info,.modf').show(500).siblings(".uerinfo_modify,.define_modf").hide(500)
 })

//加载头部尾部
import {
    fun_header,
    fun_footer
} from "./JsHtml"
fun_header("./");
fun_footer();