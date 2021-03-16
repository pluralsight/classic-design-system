const path = require('path');
const styleLoader = require.resolve('style-loader')
const cssLoader = require.resolve('css-loader')
const postcssLoader = require.resolve('postcss-loader')

module.exports = {
  addons: ['@pluralsight/ps-design-system-storybook-preset'],
  stories: ['../src/**/*.story.@(js|ts|tsx)'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript'
  },
  webpackFinal: (config) => {
    config.module.rules = config.module.rules.filter(
      f => f.test.toString() !== '/\\.css$/'
    );
    config.module.rules.push({
      test: /\.css$/,
      sideEffects: true,
      use: [styleLoader, {
        loader: cssLoader,
        options: {
          import: true,
        }
      }, {
        loader: postcssLoader,
        options: {
          config: {
            path: path.resolve(__dirname, '../'),
          }
        },
      }],
      include: [
        path.resolve(__dirname, '../'),
        path.resolve(__dirname, '../../normalize/dist/index.css')
      ],
    });
    return config;
  },
}
