import '../less/index.less';
import '../less/util.less';
import '../less/Menu_Page.less';

//选择菜单
$('.fr_menu li').click(function(){
    $(this).children('a').addClass('active').parent().siblings().children('a').removeClass('active');
    //获取鼠标当前移入这个li标签的索引
    let idx=$(this).index()
    console.log(idx);
    $(this).eq(idx).addClass('show').siblings('.list').removeClass('hidd')
})
//评星
$('.star')(function(){
    var aSpan=document.getElementsByClassName(".star")[0];
    var aStxt=document.getElementsByClassName(".star-txt")[0];
    var aBstar=aSpan.getElementsByTagName("span");
    var arrBtxt=["很差","较差","还行","推荐","力荐"];
    var num=0;
    let onOff=true;
    for(var i= 0;i<aBstar.length;i++){
            aBstar[i].index=i;
            //鼠标移入
            aBstar[i].onmouseover=function(){
                if(onOff) {
                    num = this.index;
                    aStxt.innerHTML = arrBtxt[num];
                    for (var i = 0; i <=this.index; i++) {
                        aBstar[i].style.backgroundPosition = "0 0";
                    }
                }
            };
            //鼠标移开
            aBstar[i].onmouseout=function(){
             if(onOff){//设定个开关，等开关为真就执行鼠标移除的代码
                 aStxt.innerHTML="";
                 for(var i=0;i<=this.index;i++){
                     aBstar[i].style.backgroundPosition="-39px 0";
                 }
               }
             };
            //鼠标点击
            aBstar[i].onclick=function(){
                onOff=false;//开关为假就不执行鼠标移除的代码
                //先清空
                aStxt.innerHTML="";
                for(var i=0;i<aBstar.length;i++){
                    aBstar[i].style.backgroundPosition="-39px 0";
                }
                //点击当前星星，之前的都点亮包含自己
                num = this.index ;
                aStxt.innerHTML=arrBtxt[num];
                for(var i=0;i<=this.index;i++){
                    aBstar[i].style.backgroundPosition="0 0";

                }

            };
        }
})
