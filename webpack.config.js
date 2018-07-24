const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    module: "./src/index.js"
  },
  output: {
    path: __dirname + "/dist/",
    filename: "js/main.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html"
    })
  ],
  devServer: {
    contentBase: "dist/",
    watchContentBase: true,
    inline: true,
    host: "127.0.0.1",
    port: 3001
  }
};
