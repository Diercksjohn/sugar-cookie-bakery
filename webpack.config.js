var path = require('path');

var jsConfig = {
  mode: 'development',
  entry: {
    main: './index.js'
  },
  output: {
    filename: 'main.js',
    path: path.resolve('./build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ], 
      }
    ],
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

// export configuration
module.exports = jsConfig;