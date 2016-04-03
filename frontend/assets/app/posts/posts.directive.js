(function () {
    'use strict';

    angular.module('omnimusic.posts').directive('posts', function() {
        return {
            restrict : 'E',
            templateUrl : 'assets/app/posts/posts.html',
            link: function(scope, element, attrs , ctrl) {
                var watch = scope.$watch(function() {
                    return element.children().length;
                }, function() {
                    scope.$evalAsync(function() {
                        $(element).find('.posts-container').smoothTouchScroll({
                            continuousScrolling: true
                        });
                        $(element).find('.posts-container').smoothDivScroll( {
                            mousewheelScrolling: 'allDirections',
                            visibleHotSpotBackgrounds: '',
                            manualContinuousScrolling: true
                        });
                        watch();
                    });
                });
            }
        };
    });
}());