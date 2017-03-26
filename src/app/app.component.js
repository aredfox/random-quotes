(function () {
    'use strict';

    angular.module('app')
        .component('app', {
            templateUrl: './app/app.component.html',
            controllerAs: 'vm',
            controller: ['$log', controller]
        });

    function controller($log) {
        $log.debug('Constructed controller for app component.');
        var vm = this;
    }

}());