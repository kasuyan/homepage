const HtmlWebpackPlugin = require("html-webpack-plugin");
const env = require("dotenv").config();

const isProd = process.env.NODE_ENV === "production";
console.log("process.env.HOST=", process.env.HOST);
// console.log("isProd=", isProd);
// console.log("process.env.NODE_ENV", process.env.NODE_ENV);

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    module: "./src/index.tsx"
  },
  output: {
    path: __dirname + "/dist/",
    filename: isProd ? "./js/main.js" : "js/main.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: "dist/",
    watchContentBase: true,
    inline: true,
    host: "127.0.0.1",
    port: 3001
  }
};
