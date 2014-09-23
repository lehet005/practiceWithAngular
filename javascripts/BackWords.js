/**
 * Created by hans4858 on 9/14/14.
 */
<!--Peter Lehet, Mark Hanson-->

var WordApp = angular.module('WordApp', []);

WordApp.controller('FirstCtrl', ['$scope', function($scope){
    $scope.data = "";

    $scope.reversedMessage = function(){
      return $scope.data.split("").reverse().join("");
    };

}]);