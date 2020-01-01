import '../less/index.less';
import '../less/util.less';
import '../less/Menu_Page.less';
//一级菜单
$('.fr_menu li').click(function(){
    $(this).find('a').css({color:'orange'})
}, 
function(){
    $(this).find('a').css({color:'blue'})
}
).click(function(){
    $(this).css({letterSpacing:"3px",fontWeight:"bold"}).siblings().css({letterSpacing:"0px",fontWeight:"normal"})
}).first().trigger("click");
//评星

