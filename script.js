var app = angular.module("myApp",[]);

app.directive("welcomeMessage", function() {
    return{
        template : "<h1>Welcome</h1>"
    }
});

app.controller("username", function($scope){
    $scope.showMe= false;
$scope.myFunc = function(){
    $scope.showMe= !$scope.showMe;
}
});