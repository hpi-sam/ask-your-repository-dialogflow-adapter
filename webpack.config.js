const path = require('path');
const nodeExternals = require('webpack-node-externals');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/app.js', './src/index.js'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new FlowBabelWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|spec)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-flow'],
            },
          },
        ],
      },
    ],
  },
};
