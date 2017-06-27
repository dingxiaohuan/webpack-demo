module.exports = {
    entry: './main.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:'babel-loader?presets[]=es2015&presets[]=react',
                        //上面的参数可以下面的形式
                        // query: {
                        //     presets: ['es2015', 'react']
                        // }
                    }
                ]
            },{
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
};