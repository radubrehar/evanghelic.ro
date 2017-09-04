const path = require('path');
exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, './app_modules'),
        src: path.resolve(__dirname, './src')
      }
    }
  });

  return config;
};
