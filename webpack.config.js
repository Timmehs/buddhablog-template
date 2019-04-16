const path = require("path");
const webpack = require("webpack");
require("./webpack/loaders/buddha-page-loader");
require("./webpack/loaders/buddha-post-loader");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "assets"),
    publicPath: "/assets"
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: process.env.NODE_ENV
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin() // Merge chunks
  ],
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "webpack", "loaders")]
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        include: [path.resolve(__dirname, "posts")],
        use: ["buddha-post-loader"]
      },
      {
        test: /\.md$/,
        include: [path.resolve(__dirname, "pages")],
        use: ["buddha-page-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
            plugins: [
              "import-glob",
              "@babel/plugin-proposal-object-rest-spread"
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          { loader: "sass-loader" } // compiles Sass to CSS
        ]
      }
    ]
  }
};
