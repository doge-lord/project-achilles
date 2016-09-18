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
    var tsProject = ts.createProject('./tsconfig.json', {
        declaration: true
    });
    var tsResult = tsProject.src()
        .pipe(ts(tsProject, {
            sortOutput: true
        }));

    return merge([
        tsResult.dts
            .pipe(concat('project-achilles.d.ts'))
            .pipe(gulp.dest('./release')),
        tsResult.js
            .pipe(concat('project-achilles.js'))
            .pipe(gulp.dest('./release'))
    ]);
});