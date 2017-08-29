var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

gulp.task('script', function(){
    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js','src/js/*js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('style', function(){
    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css', 'src/sass/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css/'));
});


gulp.task('watch', function(){
    gulp.watch('src/sass/*.scss', ['style']);
});
gulp.task('default', ['script','style', 'watch']);