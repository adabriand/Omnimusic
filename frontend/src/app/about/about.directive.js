(function () {
    'use strict';

    angular.module('omnimusic.about').directive('about', function() {
        return {
            restrict : 'E',
            templateUrl : 'app/about/about.html'
        };
    });
}());