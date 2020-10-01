const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
   rules: [
     {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader',
       ],
     },
   ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /@blueprintjs\/(core|icons)/,
    }),
  ],

};
