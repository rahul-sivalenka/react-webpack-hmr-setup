const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: ['./src/index'],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   resolve: {
//     modules: ['node_modules'],
//     alias: {
//       'react-dom': '@hot-loader/react-dom',
//     },
//     extensions: ['.ts', '.tsx', '.js', '.jsx'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(j|t)s(x)?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             cacheDirectory: true,
//             babelrc: false,
//             presets: [
//               [
//                 '@babel/preset-env',
//                 { targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
//               ],
//               '@babel/preset-typescript',
//               '@babel/preset-react',
//             ],
//             plugins: [
//               // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
//               ['@babel/plugin-proposal-decorators', { legacy: true }],
//               ['@babel/plugin-proposal-class-properties', { loose: true }],
//               'react-hot-loader/babel',
//             ],
//           },
//         },
//       },
//     ],
//   },
//   devtool: 'eval-source-map',
//   plugins: [
//     new ForkTsCheckerWebpackPlugin(),
//     new webpack.NamedModulesPlugin(),
//     new HtmlWebpackPlugin(),
//   ],
// };

module.exports = (env, options) => {
  console.log('mode', options.mode);
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: './index.html',
      }),
    ],
  };
};
