const path = require("path");
const webpack = require("webpack");
const package = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    blog: "./src/store.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("assets"),
    publicPath: process.env.NODE_ENV === "development" ? "/" : "assets"
  },
  devServer: {
    contentBase: path.resolve(__dirname),
    hot: true
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /highlight\.js\/lib\/languages$/,
      new RegExp(`^./(ruby|javascript|css|scss|bash)`)
    ),
    new HtmlWebpackPlugin({
      title: package.name,
      filename:
        process.env.NODE_ENV === "development" ? "index.html" : "../index.html",
      template: path.resolve("src", "index.ejs"),
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolveLoader: {
    modules: ["node_modules", "node_modules/buddhablog-cli/lib/webpack/loaders"]
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
              "@babel/plugin-proposal-object-rest-spread",
              "react-hot-loader/babel"
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          { loader: "sass-loader" } // compiles Sass to CSS
        ]
      }
    ]
  }
};
