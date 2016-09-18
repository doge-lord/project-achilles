var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

//==============================================================================
// Tasks
//==============================================================================
gulp.task('default', ['compile']);

gulp.task('watch', ['compile'], function () {
    gulp.watch('./src/**/*.ts', ['compile']);
});

gulp.task('compile', function () {
    var tsProject = ts.createProject('./tsconfig.json', {
        declaration: true
    });
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest('./release/definitions')),
        tsResult.js.pipe(gulp.dest('./release/js'))
    ]);
});