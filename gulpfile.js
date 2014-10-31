var gulp        = require('gulp'),
  gutil         = require('gulp-util'),
  plumber       = require('gulp-plumber'),
  source        = require('vinyl-source-stream'),
  browserify    = require('browserify'),
  jshint        = require('gulp-jshint'),
  sass          = require('gulp-ruby-sass'),
  prefix        = require('gulp-autoprefixer');
  
var onError = function (err) {
  gutil.beep();
  gutil.log(gutil.colors.red(err));
};
  
  
gulp.task('default', function () {
  gulp.watch('./js/app.js', ['lint', 'browserify']);
  gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('./css/style.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({
      style: 'compact'
    }))
    .pipe(prefix("last 2 versions", "> 5%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./css/'));
});

gulp.task('lint', function () {
  return gulp.src('./js/app.js')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function () {
  return browserify('./js/app.js', {
      debug: true                        // with source maps
    })
    .transform('brfs')                   // include file system
    .transform({ global: true }, 'uglifyify')
    .bundle()
    .pipe(source('script.js'))             // Pass desired output filename to vinyl-source-stream
    .pipe(gulp.dest('./js/'));   // Start piping stream to tasks!
});