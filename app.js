var app = angular.module('myApp', []);

app.directive('optIn', function() {
    return {
        restrict: 'E',
        controller: function(){
            console.log("it works")
        },
        transclude: true,
        template: 	'<div><span ng-transclude></span> First Name<input type="text" name="First Name"><br>Last Name<input type="text" name="Last Name"><br>Email<input type="text" name="Email"><br> </div>',
        replace: true,
    }
}); 

