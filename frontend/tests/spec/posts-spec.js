describe("Posts Module", function() {

    var testPost;
    var testPostData;
    var nextTestPost;
    var $controller;

    beforeEach(function() {
        angular.mock.module('omnimusic');
        testPostData = [{ artworkFileName : 'karol-conka.jpg', artist : "Karol Conka",
            title: "Tombei (ft. Tropkillaz)", album: "Tombei (Single)", year : "2014",
            youtubeId : 'SdYXMyJEKZs'}, { artworkFileName : 'jungle.jpg', artist : "Jungle",
            title: "The Heat", album: "Jungle", year : "2014", youtubeId : 'Y4UckOGdZtI'}];
        testPost = testPostData[0];
        nextTestPost = testPostData[1];
    });

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    it('should have a postsCtrl', function() {
        var $scope = {};
        var controller = $controller('postsCtrl', { $scope: $scope });
        expect(controller).toBeDefined();
    });

    it('should have initiated the model variables', function() {
        var $scope = {};
        $controller('postsCtrl', { $scope: $scope });
        $scope.setPostsData(testPostData);

        expect($scope.currentPlaying).not.toBeDefined();
        expect($scope.pausedPlayer).toBe(true);
        expect($scope.postsCollapsed).toBe(false);
        expect($scope.volumeHeight).toBe(100);
        expect($scope.playProgress).toBe(0);
        expect($scope.seekTo).toBe(false);
    });

    it('when a post has been played', function() {
        var $scope = {};
        $controller('postsCtrl', { $scope: $scope });
        $scope.setPostsData(testPostData);

        $scope.playPost(testPost);
        expect($scope.currentPlaying).toBe(testPost);
        expect($scope.isThisPostPlaying(testPost)).toBe(true);
        expect($scope.pausedPlayer).toBe(false);
        expect($scope.postsCollapsed).toBe(false);
        expect($scope.volumeHeight).toBe(100);
        expect($scope.playProgress).toBe(0);
        expect($scope.seekTo).toBe(false);
    });

    it('when trying to play a unexistent post', function() {
        var unexistentPost = {};
        var $scope = {};
        $controller('postsCtrl', { $scope: $scope });
        $scope.setPostsData(testPostData);

        $scope.playPost(unexistentPost);
        expect($scope.currentPlaying).not.toBeDefined();
        expect($scope.isThisPostPlaying(unexistentPost)).toBe(false);
        expect($scope.pausedPlayer).toBe(true);
        expect($scope.postsCollapsed).toBe(false);
        expect($scope.volumeHeight).toBe(100);
        expect($scope.playProgress).toBe(0);
        expect($scope.seekTo).toBe(false);
    });

    it('when a post has been paused and played', function() {
        var $scope = {};
        $controller('postsCtrl', { $scope: $scope });
        $scope.setPostsData(testPostData);

        $scope.playPost(testPost);
        $scope.playCurrentPlayingPost();
        expect($scope.isThisPostPlaying(testPost)).toBe(false);
        expect($scope.pausedPlayer).toBe(true);
        expect($scope.postsCollapsed).toBe(false);
        expect($scope.volumeHeight).toBe(100);
        expect($scope.playProgress).toBe(0);
        expect($scope.seekTo).toBe(false);

        $scope.playCurrentPlayingPost();
        expect($scope.isThisPostPlaying(testPost)).toBe(true);
        expect($scope.pausedPlayer).toBe(false);
        expect($scope.postsCollapsed).toBe(false);
        expect($scope.volumeHeight).toBe(100);
        expect($scope.playProgress).toBe(0);
        expect($scope.seekTo).toBe(false);
    });

    it('when a played post has ended', function() {
        var $scope = {};
        $controller('postsCtrl', { $scope: $scope });
        $scope.setPostsData(testPostData);

        $scope.playPost(testPost);
        $scope.playEnded();
        expect($scope.isThisPostPlaying(testPost)).toBe(false);
        expect($scope.isThisPostPlaying(nextTestPost)).toBe(true);
        expect($scope.pausedPlayer).toBe(false);
        expect($scope.postsCollapsed).toBe(false);
        expect($scope.volumeHeight).toBe(100);
        expect($scope.playProgress).toBe(0);
        expect($scope.seekTo).toBe(false);

        $scope.playEnded();
        expect($scope.isThisPostPlaying(testPost)).toBe(true);
        expect($scope.isThisPostPlaying(nextTestPost)).toBe(false);
        expect($scope.pausedPlayer).toBe(false);
        expect($scope.postsCollapsed).toBe(false);
        expect($scope.volumeHeight).toBe(100);
        expect($scope.playProgress).toBe(0);
        expect($scope.seekTo).toBe(false);
    });

});