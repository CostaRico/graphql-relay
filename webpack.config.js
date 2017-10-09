const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    'bundle': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    proxy: {
      "/graphql": "https://api.graph.cool/simple/v1/cj07pfjjj1nbq0148rutjhxd5",
      secure: true
    }
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}
