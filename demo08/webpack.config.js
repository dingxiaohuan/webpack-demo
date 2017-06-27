const HtmlwebpackPulgin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                        query:{
                            presets:['es2015']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //自动生成html插件
        new HtmlwebpackPulgin({
            title: 'Webpack-demos',
            filename: 'index.html'
        }),
        //自动打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ]
}