import path from 'path';
import fs from 'node:fs';

import type Webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// Extends the `Webpack.Configuration` type with devServer
import 'webpack-dev-server';

import tsConfig from './tsconfig.json';


const isDevelopment = process.env.NODE_ENV !== 'production';

const distDirectory = path.resolve(__dirname, './dist');
const baseDirectory = path.resolve(__dirname, tsConfig.compilerOptions.baseUrl);
const directoriesInBase = fs.readdirSync(baseDirectory, { withFileTypes: true })
  .filter((dirEntry) => dirEntry.isDirectory())
  .map(({ name }) => ({ name, path: path.resolve(baseDirectory, name) }));

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

const config: Webpack.Configuration = {
  entry: './src/main.tsx',
  output: {
    path: distDirectory,
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: distDirectory,
    },
    hot: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: directoriesInBase.reduce((aliasMap, { name, path }) => ({
      ...aliasMap,
      [name]: path,
    }), {}),
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    htmlPlugin,
  ].filter(Boolean) as Array<Webpack.WebpackPluginInstance>,
};

export default config;
