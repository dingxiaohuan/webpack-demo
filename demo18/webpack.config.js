const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: 'style/[name].[contenthash].css'
});
module.exports = {
    entry:path.resolve(__dirname,'./entry.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'[hash].js',
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:extractSass.extract({
                    use:['css-loader', 'sass-loader'],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.html/,
                loader: 'ejs-loader',
                include: path.resolve(__dirname,'index.html')
            }
        ]
    },
    plugins:[
        extractSass,
        new HtmlWebpackPlugin({
            filename:'index.html',
            title: 'html-webpack-plugin',
            template: './index.html',
            inject: false
        })
    ]
};