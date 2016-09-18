var gulp = require('gulp');
var concat = require('gulp-concat');
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
    var tsProject = ts.createProject('./src/tsconfig.json', {
        declaration: true
    });
    var tsResult = tsProject.src()
        .pipe(ts(tsProject, {
            sortOutput: true
        }));

    return merge([
        tsResult.dts
            .pipe(gulp.dest('./dist')),
        tsResult.js
            .pipe(gulp.dest('./dist'))
    ]);
});