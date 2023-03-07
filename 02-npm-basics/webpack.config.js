// CommonJS Module pattern - default in Node
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "./js/app.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    mode: "development"
}