const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // publicPath: './dist/' //在打包时自动在url前面拼接./dist/
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new webpack.BannerPlugin('版权设置'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //文件大小   当小于这个值时将会转成base64字符串进行展示
                            //当大于 limit时 将在dist文件夹里生成一个文件
                            limit: 500,
                            //配置文件存放路径与名称格式
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.js$/,
                //排除
                exclude: /(node_modules|bower_components)/,
                use: {
                    //转成es5
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }, {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }

        ]
    },
    resolve: {
        //别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}