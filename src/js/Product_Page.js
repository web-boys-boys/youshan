import '../less/index.less';
import '../less/util.less';
import '../less/Product_Page.less';
import './JsHtml.js';
//选择菜单
$('.fr_menu li').click(function(){
    $(this).children('a').addClass('active').parent().siblings().children('a').removeClass('active');
  
})
