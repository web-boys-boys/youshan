import '../less/index.less';
import '../less/util.less';
import './JsHtml.js';
import '../less/user_info.less';
import '../less/shopping_cart.less';
import '../less/payment_page.less';
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
//tab选项支付方式
// $('.zf_box').click(function(){
//     $(this).show()
// })
$.each($('.shows'),(index,item)=>{
    $(item).data('index',index)
},
$(".shows").click(function(){
    let ss=$(this).data('index')
$.each($('.zf_box'),(index,item)=>{
    if(ss==index){
        $(item).show().siblings('.zf_box').hide()
    }
    
})
})
)
// $('.zfbbtn').click(function(){
//     $('.zfb').show().siblings().hide()
// })

//加载头部尾部
import {
    fun_header,
    fun_footer
} from "./JsHtml"
fun_header("./static/pages/");
fun_footer();