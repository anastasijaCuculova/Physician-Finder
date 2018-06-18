(function () {
    'use strict';
    /**
     * Creating the ng-app module
     */
    angular
        .module('bolnica',['ui.router']);
    /**
     * Configuring states using ui-router
     */
    angular.module('bolnica')
        .config(StatesConfig);

    StatesConfig.$inject = ['$stateProvider'];
    function StatesConfig($stateProvider) {
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'

        };
        var aboutState = {
            name: 'aggregations',
            url: '/aggregations',
            templateUrl: 'app/views/aggs.html',
            controller: 'AggsController',
            controllerAs: 'vm'
        };

        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);
    }
})();