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
      { include: APP_DIR },
      {
        test: /\.jsx?/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }]
      },
      // {
      //   test: /\.css$/,
      //   include: APP_DIR,
      //   use: [
      //     { loader: "style-loader" },
      //     { loader: "css-loader" }
      //   ]
      // },
      {
        test: /\.s?css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};
