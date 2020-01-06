import '../less/index.less';
import '../less/util.less';
import './JsHtml.js';
//加载头部尾部
import { fun_header, fun_banner, fun_footer } from "./JsHtml"
fun_header("./static/pages/");
fun_banner("./static/pages/");
fun_footer();