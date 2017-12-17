// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');

gulp.task('scripts',function(){
gulp.src(['app/module.js','app/run/run.js','app/directives/*.js','app/config.js','app/route/route.js','app/controller/*.js'])
    .pipe(concat('minified.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/minifiedJS'))

})

gulp.task('connect', function () {
    connect.server({
        root: 'app/',
        port: 8888,
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('app/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['app/*.html'], ['html']);
});
gulp.task('run', ['scripts', 'connect','watch']);