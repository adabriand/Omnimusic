var gulp = require('gulp');
var sass = require('gulp-sass');
var jasmine = require('gulp-jasmine');
var karmaServer = require('karma').Server;
var shell = require('gulp-shell');
var jshint = require('gulp-jshint');
var stylesFiles = 'frontend/assets/sass/**/*.sass';
var sourceFiles = "frontend/assets/app/**/*.js";

function _createKarmaServer(callback, isSingleRun) {
    return new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: isSingleRun
    }, callback);
}

gulp.task('styles', function() {
    gulp.src(stylesFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('frontend/assets/css/'));
});

// Watch Sass files
gulp.task('styles-watch',function() {
    gulp.watch(stylesFiles, ['styles']);
});

gulp.task('lint', function() {
    gulp.src(sourceFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', ['lint'], function(done) {
    _createKarmaServer(done, true).start();
});

gulp.task('tdd', ['styles-watch'], function(done) {
    _createKarmaServer(done, false).start();
});

gulp.task('start', shell.task([
    'node index.js'
]));
