import '../less/index.less';
import '../less/util.less';
import '../less/user_info.less';
import './JsHtml.js';
//加载头部尾部
import { fun_header, fun_banner, fun_footer } from "./JsHtml"
fun_header("./static/pages/");
fun_footer();

import "popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

$(".editor_btn").click(function () {
    $(".user_list_info").css({ display: "block" })
    $(".user_editor_info").css({ display: "none" })
})
$(".editor_close").click(function () {
    $(".user_list_info").css({ display: "none" })
    $(".user_editor_info").css({ display: "block" })
})