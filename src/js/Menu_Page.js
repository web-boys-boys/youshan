import '../less/index.less';
import '../less/util.less';
import '../less/Menu_Page.less';
import './JsHtml.js';

//选择菜单
$('.fr_menu li').click(function(){
    $(this).children('a').addClass('active').parent().siblings().children('a').removeClass('active');
    //获取鼠标当前移入这个li标签的索引
    let idx=$(this).index()
    console.log(idx);
    $(this).eq(idx).addClass('show').siblings('.list').removeClass('hidd')
})

