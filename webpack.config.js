const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
   open: true,
   port: 9000,
   hot: true,
   liveReload: true,
   historyApiFallback: true,
   static: {
    directory: path.resolve(__dirname, 'dist'),
   },
  },
  module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: {
        loader: '@sucrase/webpack-loader',
        options: {
          transforms: ['jsx']
        }
      }
    }
  ]
},
 resolve: {
  extensions: ['.js',
    '.jsx'],
  },
};

