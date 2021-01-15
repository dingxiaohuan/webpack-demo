let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  context: __dirname,
  mode: "development",
  entry: path.resolve(__dirname, "./index.js"),
  devtool: "source-map",
  output: {
    // publicPath: "http://localhost:3000",
    path: path.resolve(__dirname, "dist"),
    filename: "[hash].bundle.js",
  },
  devServer: {
    port: 3000,
    publicPath: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./NewList": "./NewList.js",
      },
      shares: {
        react: {
          singleton: true
        },
        "react-dom": { singleton: true }
      },
    }),
  ],
};
