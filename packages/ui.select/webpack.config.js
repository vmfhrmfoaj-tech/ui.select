/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const package = require('./package');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const minify = process.argv.indexOf('--minify') >= 0;

const commonConfig = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@t': path.resolve('types'),
    },
  },
  output: {
    library: ['ui', 'Select'],
    libraryTarget: 'umd',
    filename: `${package.name + (minify ? '.min' : '')}.js`,
    publicPath: '/dist',
    path: path.resolve(__dirname, 'dist'),
  },
};
module.exports = (env, { mode }) => {
  if (mode === 'production') {
    const { version, author, license } = package;
    const banner = [
      `vmfhrmfoaj UI SELECT BOX`,
      `@version ${version} | ${new Date().toDateString()}`,
      `@author ${author}`,
      `@license ${license}`,
    ].join('\n');
    const productionConfig = {
      mode,
      plugins: [
        new MiniCssExtractPlugin({
          filename: `${package.name + (minify ? '.min' : '')}.css`,
        }),
        new webpack.BannerPlugin({ banner, entryOnly: true }),
      ],
      module: {
        rules: [
          {
            test: /\.css$/,
            exclude: /node_modules(?!\/@vmfhrmfoaj\/ui.selectbox)/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
      },
      externals: {},
      optimization: {
        minimize: false,
      },
    };

    if (minify) {
      productionConfig.optimization = {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true, // eslint-disable-line @typescript-eslint/camelcase
                warnings: true,
              },
              output: {
                comments: /vmfhrmfoaj UI SELECT BOX/i,
              },
            },
          }),
          new OptimizeCSSAssetsPlugin({}),
        ],
      };
    }

    return merge(commonConfig, productionConfig);
  }

  // only add HtmlWebpackPlugin plugin when executing the test srcipt
  const plugins = mode === 'development' ? [] : [new HtmlWebpackPlugin({ template: 'index.html' })];

  return merge(commonConfig, {
    mode,
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
      ],
    },
    plugins,
    devServer: {
      inline: true,
      host: '0.0.0.0',
      port: 7000,
      disableHostCheck: true,
    },
  });
};
