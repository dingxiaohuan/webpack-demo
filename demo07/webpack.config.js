const webpack = require('webpack');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        //代码压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
    ]
};