const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

//compile scss into css
const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
  .pipe(plumber())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
  .pipe(browserSync.stream());
}

// reload

const reload = (done) => {
  browserSync.reload();
  done();
}

// Server

const watch = () => {
  browserSync.init({
    server: {
      baseDir: "source",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  gulp.watch('source/sass/**/*.scss', styles)
  gulp.watch('*source/*.html').on('change',browserSync.reload);
  gulp.watch('source/js/*.js').on('change', browserSync.reload);
}

exports.default = gulp.series(
  styles, watch,reload
);
