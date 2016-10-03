var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('copy-images', function () {
  return gulp.src('./images/**/*')
    .pipe(gulp.dest('./dist/images/'));
}); 

gulp.task('copy-fonts', function () {
  return gulp.src('./font/**/*')
    .pipe(gulp.dest('./dist/font/'));
}); 

gulp.task('sass', function () {
  return gulp.src('./coderdojo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['copy-images', 'copy-fonts', 'sass']);
