var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname + "/demo",
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9000',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: __dirname + '/demo',
    filename: "bundle.js"
  },

  devServer: {
    // contentBase
    colors: true,
    historyApiFallback: true,
    inline: false,
    port: 9000,
    hot: true
  },
  module: {
    loaders: [
   // font-awesome
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      { test: /\.js$|\.jsx$/,
        exclude: [/node_modules/, /onsenui.js/],
        loaders: [ 'react-hot',
          'babel?' + JSON.stringify({presets: ['stage-2', 'es2015', 'react']})
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
