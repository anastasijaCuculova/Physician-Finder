(function () {
    'use strict';
    angular
        .module('bolnica')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http', '$state'];
    /* @ngInject */
    function HomeController($http, $state) {
        var vm = this;
    vm.numberOfAvg ="";
     vm.keywords="";
        vm.search = function () {
            console.log('search: ' + vm.keywords);
            $http.get('http://localhost:9200/bolnica/doktor/_search?q=' + vm.keywords)
                .then(function (response) {
                    vm.results = response.data;
                });



        };

        vm.query = {
            "size": 0,
            "query": {"match_all": {}},
            "aggs": {
                "avg_grade" : { "avg" : {"field" :"name"}}
            }
        };
      vm.searchAvg = function () {
          $http.post('http://localhost:9200/bolnica/doktor/_search', + vm.query).then(function(response)
          {
              vm.numberOfAvg = response.data;
          });
      }
    }
})();
