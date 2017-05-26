const path = require('path');

const APP_DIR = path.resolve(__dirname, 'app');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        options: {
          presets: ["es2015", "react"]
        }
      }
    ],
  }
};
