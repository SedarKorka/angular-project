var app = angular.module("myApp",[]);

app.directive("welcomeMessage", function() {
    return{
        template : "<h1>Welcome</h1>"
    }
});

app.controller("choseRegisterOrLogin", function($scope){
    $scope.name = false;
    $scope.funcToAddNameForRegisterForm = function(){
        $scope.name = true;
    }

    $scope.funcToRemveNameForLoginForm = function(){
        $scope.name = false;
    }
});