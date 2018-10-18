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
        ]
      }
    ]
  }
};

// export configuration
module.exports = jsConfig;