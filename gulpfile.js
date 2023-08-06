const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");

gulp.task("minify-css", () => {
  return gulp
    .src("css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("minify"));
});

gulp.task("minify-js", function () {
  return gulp.src("js/script.js").pipe(uglify()).pipe(gulp.dest("minify"));
});
