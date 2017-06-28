const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
});
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname,'sass/app.scss'),
    output: {
        filename: "bundle.extractText.js"
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use:[
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'}
                    ],
                    // 应用于当 css 没有被提取(则在页面插入到页面style标签内)
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'sass-loader demo',
            inject:'html'
        })
    ]
};