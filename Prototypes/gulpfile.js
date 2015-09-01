var gulp = require('gulp');
var util = require('gulp-util');
var sass = require('gulp-sass');
var prefix = require ('gulp-autoprefixer');
var browserSync = require('browser-sync');

//Compile files from scss to css.

gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass({
            includePaths: ['sass'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 3 versions', '> 1%'], { cascade: true }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest('css/'));
});

// use default task to launch Browsersync and watch scss files
gulp.task('serve', ['sass'], function () {

    // Serve files from the root of this project
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8000
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("sass/*.scss", ['sass']);
});

//Handle Errors
function handleError(err) {
    console.log(err.message.toString());
    this.emit('end');
};

gulp.task('files-watch', function(){
    gulp.watch(['*.html'], ['browser-reload']);
});

gulp.task('browser-reload', function(){
    browserSync.reload();
});


// Default task.
gulp.task('default', ['serve', 'files-watch']);