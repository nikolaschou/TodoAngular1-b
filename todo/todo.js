angular.module('todo', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('todo').config(function($stateProvider) {

    $stateProvider.state('todo2', {
        url: '/todo2',
        templateUrl: 'todo/partial/todo2/todo2.html'
    });
    /* Add New States Above */

});

