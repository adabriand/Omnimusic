(function () {
    'use strict';

    angular.module('omnimusic.header').directive('header', function() {
        return {
            restrict : 'E',
            templateUrl : 'app/header/header.html'
        };
    });
}());