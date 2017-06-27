module.exports = {
    entry: './main.js',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: 'es2015'
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js'
    }
};