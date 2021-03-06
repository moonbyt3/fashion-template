var gulp = require('gulp');

var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');

gulp.task('sass', function(){
  return gulp.src('app/stylesheets/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/stylesheets/css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/stylesheets/css'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/stylesheets/sass/*.scss', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/stylesheets/javascripts/**/*.js', browserSync.reload); 
});