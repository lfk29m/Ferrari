const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLReg = /([a-zA-Z1-9]+)\.html/
const JSReg = /([a-zA-Z1-9]+)\.js/

const entry = glob.sync("./src/js/*.js").reduce((acc, cur) => {
  let filename = cur.match(JSReg)[1]
  acc[filename] = cur
  return acc
}, {})

const html = glob.sync('./src/html/*/*.html').map(path => {
  let filename = path.match(HTMLReg)[1],
    folder = path.match(/page|component/)[0]
  console.log(filename)
  inject = folder == 'page',
    option = {
      template: path,
      filename: 'html/' + folder + '/' + filename + '.html',
      chunks: [filename],
    }
  if (inject) {
    option.templateParameters = {
      htmlWebpackPlugin: {
        tags: {
          headTags: `<meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"></link>

          <script src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
          `,
        },
      },
    }
  }
  return new HtmlWebpackPlugin(option)
})

const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 還需要在package.json中定義browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()]
    }
  },
];


module.exports = (env) => {
  return {
    entry,
    output: {
      filename: 'js/[name].js',
      path: resolve(__dirname, 'docs'),
    },
    module: {
      rules: [
        // loader的配置
        {
          test: /\.scss$/,
          use: [...commonCssLoader, 'sass-loader']
        },
        {
          test: /\.css$/,
          use: [...commonCssLoader]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            // 將可傳遞選項移至 .babelrc
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          type: 'asset/resource',
          generator: {
            filename: 'static/img/[name][ext]'
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: 'static/font/[name][ext]'
          },
        }
      ]
    },
    plugins: [
      ...html,
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        // 輸出於 build/css/built.css
        filename: 'css/[name].css'
      }),
    ],
    devServer: {
      compress: true,
      port: 3000,
      open: true
    },
    mode: process.env.NODE_ENV,
    devtool: process.env.NODE_ENV == 'development' ? 'source-map' : false
  }
};
