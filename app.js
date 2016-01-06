angular.module('TodoAngular1', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'todo']);

angular.module('TodoAngular1').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/todo2');

});

angular.module('TodoAngular1').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
