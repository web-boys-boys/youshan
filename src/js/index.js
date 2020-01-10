import '../less/index.less';
import '../less/util.less';
import './JsHtml.js';
//加载头部尾部
import {
    fun_header,
    fun_banner,
    fun_footer
} from "./JsHtml"
fun_header("./static/pages/");
fun_banner("./static/pages/");
fun_footer();

console.log($(".item").children());

// $(".item").children().attr("href", "./static/pages/commodity.html?id=13");
let list = [{
        id: 1,
        img: "./images/menu_one.png",
        title: " 好吃的的1",
        price: "18.51",
        content: "“这道美味一锅炖就像暖冬的能量煲。这道菜一共四个特点：美味、健康、营养、简单！",
        food: "鸡蛋、青菜、面粉、青瓜、鸡蛋、青菜"
    },
    {
        id: 2,
        img: "./images/menu_two.png",
        title: " 好吃的的2",
        price: "18.52",
        content: "“这道美味一锅炖就像暖冬的能量煲。这道菜一共四个特点：美味、健康、营养、简单！",
        food: "鸡蛋、青菜、面粉、青瓜、鸡蛋、青菜"
    },
    {
        id: 3,
        img: "./images/menu_three.png",
        title: " 好吃的的3",
        price: "18.53",
        content: "“这道美味一锅炖就像暖冬的能量煲。这道菜一共四个特点：美味、健康、营养、简单！",
        food: "鸡蛋、青菜、面粉、青瓜、鸡蛋、青菜"
    },
    {
        id: 4,
        img: "./images/menu_four.png",
        title: " 好吃的的4",
        price: "18.5",
        content: "“这道美味一锅炖就像暖冬的能量煲。这道菜一共四个特点：美味、健康、营养、简单！",
        food: "鸡蛋、青菜、面粉、青瓜、鸡蛋、青菜"
    },
    {
        id: 5,
        img: "./images/menu_five.png",
        title: " 好吃的的5",
        price: "18.54",
        content: "“这道美味一锅炖就像暖冬的能量煲。这道菜一共四个特点：美味、健康、营养、简单！",
        food: "鸡蛋、青菜、面粉、青瓜、鸡蛋、青菜"
    }
];
$.each(list, (index, item) => {
    let one_el = $($(".item").children()[index]);
    // console.log(index);
    // let imgs = item.img;
    // console.log(imgs);
    one_el.attr("href", "./static/pages/commodity.html?id=" + item.id);
    // $(one_el.children()[0]).attr("src", item.img);
})

get_list();

function get_list() {
    let caipu = [];
    // http://192.168.110.43:8000/mainrecipes/
    $.ajax({
        url: "http://192.168.7.170:8000/mainrecipes/",
        type: "get",
        async: false, //异步请求关闭，就变为了同步
        // dataType: "json",
        //传纯字符串表单
        // data:$('#login_form').serialize(),  //序列化 ，serialize把对象转化为json
        //传包含文件的表单
        // data: new FormData($("login_form")[0]),
        // cache: false,
        // processData: false,
        // contentType: false,
        success: function (response_data) {
            console.log(response_data);
            $.each(response_data, (index, item) => {
                let one_el = $($(".item").children()[index]);
                // console.log(index);
                // let imgs = item.img;
                console.log(one_el);
                one_el.attr("href", "./static/pages/commodity.html?id=" + item.id);
                // $(one_el.children()[0]).attr("src", item.recipe_icon);
                console.log()
                $($(one_el.children()[1]).find(".layer_text_title")).html(item.recipe_name);
                $($(one_el.children()[1]).find("._price")).html(`￥ ${item.gtype}`);
                $($(one_el).find(".text_content")).html(item.recipe_title);
            })
            console.log($(".menu_grop"));
        },
        error: function (response_data) {
            console.log(response_data);
        }
    }) //ajax就不等待
}