const gulp = require("gulp");
const babel = require("gulp-babel");
const changed = require('gulp-changed');
const del = require('del');

gulp.task("default", ['clean'], function () {
    return gulp.src("src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task("auto", ['clean'], function () {
    gulp.watch('src/**/*.js', ['build']);
});

gulp.task("build", function () {
    return gulp.src("src/**/*.js")
        .pipe(changed("dist"))
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task('clean', function () {
    return del(['dist/**', '!dist']);
});