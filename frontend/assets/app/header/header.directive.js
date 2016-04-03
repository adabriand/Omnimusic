(function () {
    'use strict';

    angular.module('omnimusic.header').directive('header', function() {
        return {
            restrict : 'E',
            templateUrl : 'assets/app/header/header.html'
        };
    });
}());