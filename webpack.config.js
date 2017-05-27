const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/app/');
const BUILD_DIR = path.resolve(__dirname, 'dist/');

module.exports = {
  entry: APP_DIR,
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
      {
        test: /\.s?css$/,
        include: path.resolve(APP_DIR, '../style'),
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};
