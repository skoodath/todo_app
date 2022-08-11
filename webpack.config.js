const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.tsx"),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        },
        {
          loader: "ts-loader"
        }
      ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".tsx", ".ts"]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ]
}