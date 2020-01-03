import '../less/index.less';
import '../less/util.less';
import '../less/Product_Page.less';
<<<<<<< HEAD
$('.fr_menu li').click(function(){
    $(this).find('a').css({color:'orange'})
}, 
function(){
    $(this).find('a').css({color:'blue'})
}
).click(function(){
    $(this).css({letterSpacing:"3px",fontWeight:"bold"}).siblings().css({letterSpacing:"0px",fontWeight:"normal"})
}).first().trigger("click");


=======
//选择菜单
$('.fr_menu li').click(function(){
    $(this).children('a').addClass('active').parent().siblings().children('a').removeClass('active');
  
})
>>>>>>> 003076587bae703e837b70e5f87f175c9175176c
