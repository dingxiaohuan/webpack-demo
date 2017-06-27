//用模块化代替全局变量的获取方式，可以cdn上挂载
module.exports = {
    entry: './main.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js[x]$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015', 'react']
                }
            }
        ]
    },
    //externals中不会打包到bundle中而是在运行时从外部获取这些全局变量进行赋值
    externals:{
        'data2':'data'// requore('data2') <=> require('data')
    }
};