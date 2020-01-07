import '../less/index.less';
import '../less/util.less';
import './JsHtml.js';
import '../less/user_info.less';
import '../less/shopping_cart.less';
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
//上边全选
$('.trr th input').click(function(){
    let checkValue=$(this).prop('checked');
    console.log(checkValue);
    $('.list li input').prop('checked',checkValue)
    
})
//下边全选
$('.pay li input').click(function(){
    let checkValue=$(this).prop('checked');
    console.log(checkValue);
    $('.list li input').prop('checked',checkValue)
    
})
//inptu数量增加
$('.jia').each(function(){
   $(this).click(function(){
       let iptValue=parseFloat($(this).siblings('.ipt').val());
       console.log(iptValue);
        iptValue++;
       $(this).siblings('.ipt').val(iptValue);
       let totprice=iptValue*danjia
       $('#tot_price').html(totprice)
       
   }); 
})

$('.jian').each(function(){
    $(this).click(function(){
        let iptValue=parseFloat($(this).siblings('.ipt').val());
        console.log(iptValue);
         iptValue--;
        if( iptValue<1){
            return;
        }
        $(this).siblings('.ipt').val(iptValue);
        let totprice=iptValue*danjia
       $('#tot_price').html(totprice)
       
    }
    
    ); 
 })
 //
 $('#Alltot_price')

 let danjia= $('#d_price').text()
 console.log(danjia);
 


//加载头部尾部
import {
    fun_header,
    fun_footer
} from "./JsHtml"
fun_header("./static/pages/");
fun_footer();