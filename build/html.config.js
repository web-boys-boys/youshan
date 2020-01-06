// -> 处理Html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    // —> 主页
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/index.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "index.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["main"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // —> 登录页面
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/login.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/login.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["login"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // —> 注册页面
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/register.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/register.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["register"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
     // —> Product_page
     new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/Product_Page.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/Product_Page.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["Product_Page"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // —> Menu_Page
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/Menu_Page.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/Menu_Page.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["Menu_Page"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    
     // —> 所以订单页面
     new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/order-pages.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/order-pages.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["orderPages"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // —> 所以订单页面
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/user_info.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/user_info.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["user_info"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
      // —> shopping cart
      new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/shopping_cart.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/shopping_cart.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["shopping_cart"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // —> shopping cart
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/order_list.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/order_list.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["order_list"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    })
]