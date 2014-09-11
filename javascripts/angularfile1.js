angular.module('cougarApp', ['ui.bootstrap'])

    // controller for the list in the left hand column of index.html
    .controller('CougarController', ['$scope', function($scope){

        $scope.cougarItems = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];

        $scope.alerts = [
        ];

        $scope.addAlert = function(alertText){
            $scope.alerts.push({type: 'danger', msg: alertText});
        };

        $scope.closeAlert = function(index){
            $scope.alerts.splice(index, 1);
        };

        $scope.addCougar = function() {
            if($scope.todoText == null || $scope.todoText == ''){
                if($scope.alerts.length < 5) {
                    $scope.addAlert("you shouldn't add blank list items!");
                }
            } else {
                $scope.cougarItems.push({text:$scope.todoText, done:false});
                $scope.todoText = '';
            }
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.cougarItems, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.clearCougars = function() {
            $scope.cougarItems = [];
        };

        $scope.status = {
            isopen: false
        };

    }])


    //controller for todos in the right hand column of index.html
    .controller('TodoController', ['$scope', function($scope) {
        $scope.todos = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];

        $scope.addTodo = function() {
            $scope.todos.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) $scope.todos.push(todo);
            });
        };
    }]);

