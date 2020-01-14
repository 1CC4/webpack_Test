const path = require('path');  //nodejs内置模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  /**
   * 入口
   */
  entry: './src/main.js',
  /**
   * 出口
   */

  output: {
    path: path.resolve(__dirname, 'dist'),  // d://webpakc/dist
    filename: 'bundle.js'   // d://webpakc/dist/bundle.js
  },
  /**
   * 本地服务
   */
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080, //端口号
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  /**
   * loader
   */
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },

      {
        test: /\.(ttf|eot|woff|woff2|svg)/,
        use: ['file-loader']
      },
      
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000,
      //     name: utils.assetsPath('fonts/[name].[ext]')
      //   }
      // },
    ]
  },
  /**
   * 插件
   */
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + "/public/index.html"
    }),
    new VueLoaderPlugin(),
  ]
};