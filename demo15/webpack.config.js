const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
      rules:[
          {
              test: /\.js[x]?$/,
              exclude: /node_modules/,
              loader:'babel-loader',
              query:{
                  presets:['es2015','react']
              },
              include: path.resolve(__dirname, '.')
          }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};