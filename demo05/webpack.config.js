module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test:/\.(png|jpg)$/,
                use:[
                    {
                        loader: 'url-loader',
                        query: {
                            limit: 10000,
                            name: 'img/[name].[hash:7].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};