var gulp = require('gulp');
var sass = require('gulp-sass');
var jasmine = require('gulp-jasmine');
var karmaServer = require('karma').Server;
var shell = require('gulp-shell');

var stylesFiles = 'frontend/assets/sass/**/*.sass';
gulp.task('styles', function() {
    gulp.src(stylesFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('frontend/assets/css/'));
});

// Watch Sass files
gulp.task('styles-watch',function() {
    gulp.watch(stylesFiles, ['styles']);
});

function _createKarmaServer(callback, isSingleRun) {
    return new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: isSingleRun
    }, callback);
}

gulp.task('test', function(done) {
    _createKarmaServer(done, true).start();
});

gulp.task('tdd', ['styles-watch'], function(done) {
    _createKarmaServer(done, false).start();
});

gulp.task('start', shell.task([
    'node index.js'
]));

