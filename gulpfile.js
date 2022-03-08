const gulp = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  pug = require("gulp-pug"),
  autoprefixer = require("gulp-autoprefixer"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  minify = require("gulp-minify");

gulp.task("pug", function () {
  return gulp
    .src("workflow/pug/pages/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(livereload());
});

gulp.task("sass", function () {
  return gulp
    .src("workflow/sass/pages/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/assets/styles"))
    .pipe(livereload());
});

/*
gulp.task("scripts", function () {
  return gulp
    .src("workflow/scripts/*.js")
    .pipe(concat("scripts.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/assets/scripts"))
    .pipe(livereload());
});
*/

gulp.task("watch", function () {
  require("./server");
  livereload.listen();
  gulp.watch("workflow/pages/*.pug", ["pug"]);
  gulp.watch("workflow/sass/*.scss", ["sass"]);
  // gulp.watch("workflow/scripts/*.js", ["scripts"]);
});

gulp.task("default", ["watch"]);
