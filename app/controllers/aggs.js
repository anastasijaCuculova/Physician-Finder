(function () {
    'use strict';
    angular
        .module('bolnica')
        .controller('AggsController', AggsController);
    AggsController.$inject = ['$http'];
    /* @ngInject */
    function AggsController($http) {
        var vm = this;
        vm.query = {
            "size": 0,
            "query": {"match_all": {}},
            "aggs": {
                "location": {
                    "terms": {"field": "location"}

                }
            }
        };
        $http.post('http://localhost:9200/bolnica/doktor/_search', vm.query)
            .then(function (response) {
                console.log('response');
                console.log(response);
                vm.results = response.data;
            }, function (error) {
            console.log(error);
        });




    }
})();
