const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const notifier = require('node-notifier');
const c = require('ansi-colors');
const csso = require('gulp-csso');




function ourError(err) {
    //console.log(err.toString());
    console.log(    c.red(err.messageFormatted)    );

    notifier.notify({
        title: 'Sass error',
        message: err.messageFormatted
    });
}

const server = function(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false,
        offline : true
    });
    cb();
};


const css  = function() {
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle : "compressed" //nested, compact, expanded
         }).on('error', ourError))
         .pipe(autoprefixer({
            browsers: ['last 2 versions']
         }))
         .pipe(csso())
         .pipe(sourcemaps.write('.'))
         .pipe(gulp.dest('./css'))
         .pipe(browserSync.stream());

}

const watchFiles = function(cb) {
    gulp.watch('./scss/**/*.scss', gulp.series(css));
    gulp.watch('./*.html').on('change', browserSync.reload);

    cb();
}

exports.css = css;

exports.default = gulp.series(css, server, watchFiles);
