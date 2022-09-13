const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/public`,
    filename: 'app.js',
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: `${__dirname}/src/index.html`,
          to: `${__dirname}/public/index.html`,
        },
      ]
    })
  ],
};
