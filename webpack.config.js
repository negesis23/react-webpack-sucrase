const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      use: {
        loader: '@sucrase/webpack-loader',
        options: {
          transforms: ['jsx']
        }
      }
    }
  ]
}
};

