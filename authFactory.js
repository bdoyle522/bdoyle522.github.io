var app = angular.module('longhornSublease');

// let's create a re-usable factory that generates the $firebaseAuth instance
app.factory('Auth',function($firebaseAuth, fb) {
    var ref = new Firebase(fb.url);
    return $firebaseAuth(ref);
});