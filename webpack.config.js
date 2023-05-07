const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "index.js"),
  target: 'node',
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "index.js"
  },
  optimization: {
    minimize: true
  }
}