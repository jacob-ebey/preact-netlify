const { dest, src } = require("gulp");

exports.copyDevContent = function() {
  return src(["mocks/content/**/*"]).pipe(dest("content"));
};
