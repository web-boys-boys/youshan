import '../less/index.less';
import '../less/util.less';
import '../less/user_info.less';
// import './JsHtml.js';
//加载头部尾部
import { fun_header, fun_banner, fun_footer } from "./JsHtml"
fun_header("");
fun_footer();
import { fun_user } from "./JsHtml";
fun_user(2);

import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

$(".nav-link").click(function () {
    let el = $(this).attr('aria-controls');
    htmlTab(el);
})
function htmlTab(el) {
    let html = `<table class="table tabs_style">
    <thead class="thead-light">
        <tr>
            <th scope="col">
                <div class="flex-between-d">
                    <div class="m_left">
                        <select class="form-control" id="inputOneaddress">
                            <option>近三天</option>
                            <option>近一周</option>
                        </select>
                    </div>
                    <!-- <div class="m_left">订单信息</div> -->
                </div>
            </th>
            <th scope="col">订单信息</th>
            <th scope="col">收货人</th>
            <th scope="col">金额</th>
            <th scope="col">状态</th>
            <th scope="col">操作</th>
        </tr>
    </thead>
    <tbody class="foot-grups">
        <tr class="ont_tr">
            <td colspan="6"></td>
        </tr>
        <tr>
            <td colspan="6" class="td_style td_top">
                <section class="tabel_grup_top flex-between-b">
                    <div>
                        <span>时间：2019-11-11
                            08:12:12</span>
                        <span class="m_left">订单号：20154541450</span>
                    </div>
                    <div class="tabel_grup_cle">
                        <button type="button"
                            class="btn btn-outline-dark btn-sm m_right del_btn">删除</button>
                    </div>
                </section>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="td_style">
                <div class="foot-infrmation flex-between-d">
                    <div class="foot-img"><img src="${require('../images/users/niupai.png')}" alt="">
                    </div>
                    <div class="foot-font">
                        <div><span>M12级雪花牛排</span></div>
                        <div><span>上等进口牛排</span></div>
                        <div><span>半斤</span></div>
                    </div>
                </div>
            </td>
            <td class="td_style">
                <div class="foot-user">李某某</div>
            </td>
            <td class="td_style">
                <div class="foot-user">总金额：￥18</div>
            </td>
            <td class="td_style">
                <div class="foot-users">已完成</div>
            </td>
            <td class="td_style">
                <div class="foot-users"><button type="button"
                        class="btn btn-outline-dark btn-sm" data-id="20">再次购买</button></div>
            </td>
        </tr>
    </tbody>
    <tbody class="foot-grups">
        <tr class="ont_tr">
            <td colspan="6"></td>
        </tr>
        <tr>
            <td colspan="6" class="td_style td_top">
                <section class="tabel_grup_top flex-between-b">
                    <div>
                        <span>时间：2019-11-11
                            08:12:12</span>
                        <span class="m_left">订单号：20154541450</span>
                    </div>
                    <div class="tabel_grup_cle">
                        <button type="button"
                            class="btn btn-outline-dark btn-sm m_right del_btn" data-id="18">删除</button>
                    </div>
                </section>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="td_style">
                <div class="foot-infrmation flex-between-d">
                    <div class="foot-img"><img src="${require('../images/users/niupai.png')}" alt="">
                    </div>
                    <div class="foot-font">
                        <div><span>M12级雪花牛排</span></div>
                        <div><span>上等进口牛排</span></div>
                        <div><span>半斤</span></div>
                    </div>
                </div>
            </td>
            <td rowspan="2" class="td_style">
                <div class="foot-user">李某某</div>
            </td>
            <td rowspan="2" class="td_style">
                <div class="foot-user">总金额：￥18</div>
            </td>
            <td rowspan="2" class="td_style">
                <div class="foot-users">已完成</div>
            </td>
            <td rowspan="2" class="td_style">
                <div class="foot-users"><button type="button" data-id="25"
                        class="btn btn-outline-dark btn-sm zcgm">再次购买</button></div>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="td_style">
                <div class="foot-infrmation flex-between-d">
                    <div class="foot-img"><img src="${require('../images/users/niupai.png')}" alt="">
                    </div>
                    <div class="foot-font">
                        <div><span>M12级雪花牛排</span></div>
                        <div><span>上等进口牛排</span></div>
                        <div><span>半斤</span></div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>`;
    $(`#${el}`).html(html);
    fun_click();
}
htmlTab("home");
//再次购买
function fun_click() {
    $(".zcgm").click(function () {
        let id = $(this).data("id");
        window.location.href = `./user_order_evau.html?id=${id}`;
    })
    //删除
    $(".del_btn").click(function () {
        let id = $(this).data("id");
        // window.location.href = `./user_order_evau.html?id=${id}`;
        $($(this).parents("tbody")).remove();
    })
}

import Swiper from "swiper";
import "swiper/css/swiper.css";
var swiper = new Swiper('.swiper2', {
    loop: true,
    // 一行显示slider的个数
    slidesPerView: 5,
    // 定义slides的数量多少为一组
    slidesPerGroup: 5,

    // 分页
    pagination: {
        el: '.swp2',

        // 设为true, 点击分页器的指示点分页器会控制Swiper切换
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

