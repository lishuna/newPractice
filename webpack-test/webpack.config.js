const path = require('path');
const MyPlugin = require('./MyPlugin.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

console.log('========', path.resolve(__dirname, 'dist'));
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    // index: './src/index.js',
    // base: './src/base.js',
    // vendor: 'jquery'
    // index: './src/index_new.js'
    index: './src/module.js'
    // treeShaking: './src/treeShaking.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/'
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        include: path.resolve("node_modules"),
        sideEffects: false
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }, {
        test: /jquery/,
        use: {
          loader: 'expose-loader',
          options: '$'
        }
      }, {
        test: /\.(png|jpg|gif|jpeg)/,
        use: 'file-loader'
      }, {
        test: /\.(html|htm)/,
        use: 'html-withimg-loader'
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 4011,
    contentBase: './dist'
  },
  plugins: [
    // 项模块内部自动注入变量
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new CleanWebpackPlugin(/*{
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')]
    }*/),
    // new MyPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: 'index',
      hash: true,
      // 引入多个模块
      chunks: ['vendor', 'index']
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "base.html",
      title: 'base',
      hash: true,
      chunks: ['vendor', 'base']
    })
  ]
};

