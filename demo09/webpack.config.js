const webpack = require('webpack');
const devFlagPlugin = new webpack.DefinePlugin({
    __DIV__: JSON.stringify(JSON.parse((process.env.DEBUG || true)))
});
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                //如果匹配的是以.js结尾的文件一定要加上exclude配置
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
    plugins:[
        devFlagPlugin
    ]
};