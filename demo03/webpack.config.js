module.exports =  {
    entry: './main.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    }
};