const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  mode: 'production',
  entry: './src/server.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js' ],
    mainFields:["main"],
  },
  target: 'async-node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CheckerPlugin()
  ]
};