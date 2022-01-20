const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './js/main.js', 
    
    output: {
      clean: true
    },

    module: {
      rules: [
        {
          test: /\.s?css$/, // .scss 또는 .css 확장자로 끝나는 파일을 찾는 정규 표현식
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.js$/,
          use: [
            'babel-loader'
          ]
        }
      ]
    },

    plugins: [
      new HtmlPlugin({
        template: './index.html'
      }),
      new CopyPlugin({
        patterns: [
          { from: 'static' }
        ]
      })
    ],

    devServer: {
      host: '0.0.0.0'
    }
}