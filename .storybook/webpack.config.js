// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require("path");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "../src"),
        loader: require.resolve("awesome-typescript-loader")
      },
      {
        test: /\.stories\.js?$/,
        loaders: [
          {
            loader: require.resolve("@storybook/addon-storysource/loader"),
            options: { parser: "typescript" }
          }
        ],
        enforce: "pre"
      }
    ]
  }
};
