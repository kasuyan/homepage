const HtmlWebpackPlugin = require("html-webpack-plugin");
const history = require("connect-history-api-fallback");
const convert = require("koa-connect");
const env = require("dotenv").config();

const isProd = process.env.NODE_ENV === "production";

console.log("isProd=", isProd);
// console.log("process.env.NODE_ENV", process.env.NODE_ENV);

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    module: "./src/index.tsx"
  },
  output: {
    publicPath: "/",
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
  ]
};

if (!isProd) {
  module.exports.serve = {
    content: [__dirname],
    add: (app, middleware, options) => {
      const historyOptions = {};

      app.use(convert(history(historyOptions)));
    }
  };
}
