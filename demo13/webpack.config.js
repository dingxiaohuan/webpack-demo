const webpack = require('webpack');
module.exports =  {
    entry: {
        app: './main.js',
        vendor: ['jquery']
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ]
    },
    plugins: [
        //Uncaught ReferenceError: webpackJsonp is not defined 如果提示这个表示页面没有进入公共的vendor
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',//对应entry.vendor
            filename: 'vendor.js'
        }),
        //自动加载模块，而不必在任何地方导入。
        new webpack.ProvidePlugin({
            $: 'jquery',//$表示调用的变量名  jquery 表示模块名==》require(jquery)
            jQuery: 'jquery'
        })
    ]
};