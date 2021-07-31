const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.tsx',
    vendors: ['moment', 'lodash'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 3 versions'],
                  },
                  useBuiltIns: 'usage',
                  corejs: 3,
                  shippedProposals: true,
                },
              ],
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin(), new HtmlWebpackPlugin({ title: 'Development'  })],
  // optimization: {
  //   minimize: true,
  //   // minimizer: [
  //   //   new TerserPlugin({
  //   //     terserOptions: {
  //   //       ecma: undefined,
  //   //       parse: {},
  //   //       compress: {},
  //   //       mangle: true, // Note `mangle.properties` is `false` by default.
  //   //       module: false,
  //   //       // Deprecated
  //   //       output: null,
  //   //       format: null,
  //   //       toplevel: false,
  //   //       nameCache: null,
  //   //       ie8: true,
  //   //       keep_classnames: undefined,
  //   //       keep_fnames: false,
  //   //       safari10: false,
  //   //     },
  //   //   }),
  //   // ],
  // },
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
