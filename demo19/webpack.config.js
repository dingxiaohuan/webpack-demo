const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin');
// import {Configuration} from 'webpack'
// /**
//  * @type Configuration
//  */

const webpackConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [path.resolve(__dirname, '../index.jsx')],
  output: {
    filename: '[name].bundle.js'
  },
  devServer: {
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ]
}


module.exports = webpackConfig;