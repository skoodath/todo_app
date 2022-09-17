const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
});
