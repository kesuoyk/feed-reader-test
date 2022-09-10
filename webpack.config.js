module.exports = {
  mode: 'development',
  entry: './index.ts',
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
};
