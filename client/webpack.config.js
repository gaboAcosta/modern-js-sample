const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.jsx?/, use: ['babel-loader']},
      { test: /\.css$/, use: ['css-loader']}
    ]
  },
  devServer: {
    contentBase: './dist',
  },
};