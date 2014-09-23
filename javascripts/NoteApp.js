/**
 * Created by hans4858 on 9/14/14.
 */
<!--Peter Lehet, Mark Hanson-->
var NoteApp = angular.module("NoteApp",[]);
NoteApp.controller("NotesControl", ['$scope', function($scope) {

    $scope.message = "";

    $scope.left  = function() {

        return 100 - $scope.message.length;
    };

    $scope.clear = function() {

        $scope.message = "";
    };

    $scope.save  = function() {

        alert("Get REKT");

    };
}]);