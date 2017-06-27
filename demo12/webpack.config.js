const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
    entry: {
        bundle1: './main1.jsx',
        bundle2: './main2.jsx',
        // vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test:/\.js[x]$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        query:{
                            presets:['es2015', 'react']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
       // CommonsChunkPlugins是webpack自身的方法,功能是提取两个方法公共的外码模块
        new CommonsChunkPlugin('init.js'),

        // new webpack.optimize.CommonsChunkPlugin({
        //    name: 'vendor'
        // }),
        //代码压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};