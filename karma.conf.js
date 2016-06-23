// karma.conf.js
module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['spec'],
        browsers: ['PhantomJS'],
        files: [
            'frontend/assets/js/jquery-*.min.js',
            'frontend/tests/lib/angular-*/angular.js',
            'frontend/tests/lib/angular-*/angular-mocks.js',
            'frontend/assets/app/**/*.module.js',
            'frontend/assets/app/**/*.directive.js',
            'frontend/assets/app/**/*.controller.js',
            'frontend/assets/app/**/*.service.js',
            'frontend/tests/spec/*.js'
        ]
    });
};