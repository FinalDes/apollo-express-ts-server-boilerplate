const path = require("path");
const fs = require("fs");
const MinifyPlugin = require("babel-minify-webpack-plugin");

const nodeModules = {};
fs.readdirSync("node_modules")
  .filter(x => [".bin"].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

module.exports = {
  target: "node",
  entry: "./src/server.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?$/,
        loader: "tslint-loader",
        exclude: /node_modules/,
        options: {
          emitErrors: false,
          failOnHint: true,
          tsConfigFile: "tsconfig.json",
        },
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  externals: nodeModules,
  plugins: [
    new MinifyPlugin(),
  ],
};