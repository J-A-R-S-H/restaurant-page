const path = require("path");

module.exports = {
  entry: "./src/index.html",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
