module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders:1
                        }
                    }
                ]
            }
        ]
    }
};