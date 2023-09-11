// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/main.js", // 프로젝트의 진입점 파일
  output: {
    filename: "bundle.js", // 번들된 JavaScript 파일의 이름
    path: path.resolve(__dirname, "dist"), // 번들된 파일을 저장할 디렉토리 경로
  },
};
