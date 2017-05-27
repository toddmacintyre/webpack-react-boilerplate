const path = require('path');

const APP_DIR = path.resolve(__dirname, 'app');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './app',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module : {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }]
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }
};
