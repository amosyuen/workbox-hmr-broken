const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const config = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    main: [
      path.resolve(__dirname, "app/main"),
      require.resolve("webpack-hot-middleware/client")
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Process application JS with Babel.
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "app")],
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
              highlightCode: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: "index.html",
      template: path.resolve(__dirname, "app/index.html")
    }),
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: path.join(__dirname, "app/service-worker.js"),
      // Don't precache sourcemaps (they're large) and build asset manifest:
      exclude: [/\.map$/, /asset-manifest\.json$/]
    })
  ]
};

module.exports = config;
