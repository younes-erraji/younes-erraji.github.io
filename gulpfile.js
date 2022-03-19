const gulp = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
  autoprefixer = require("gulp-autoprefixer"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  minify = require("gulp-minify");

var paths = {
  sass: {
    src: "workflow/sass/pages/*.scss",
    dest: "dist/assets/styles",
  },
  pug: {
    src: "workflow/pug/pages/*.pug",
    dest: "dist",
  },
  script: {
    src: "workflow/scripts/*.js",
    dest: "dist/assets/scripts",
  },
};

function pugTask() {
  return gulp
    .src(paths.pug.src)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(paths.pug.dest))
    .pipe(livereload());
}

function sassTask() {
  return gulp
    .src(paths.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(livereload());
}

function scriptsTask() {
  return gulp
    .src(paths.script.src)
    .pipe(minify())
    .pipe(gulp.dest(paths.script.dest))
    .pipe(livereload());
}

function watch() {
  require("./server");
  livereload.listen();
  gulp.watch(paths.pug.src, pugTask);
  gulp.watch(paths.sass.src, sassTask);
  gulp.watch(paths.script.src, scriptsTask);
}

let build = gulp.series(gulp.parallel(pugTask, sassTask, scriptsTask));

exports.pugTask = pugTask;
exports.sassTask = sassTask;
exports.scriptsTask = scriptsTask;
exports.watch = watch;
exports.build = build;

exports.default = build;
