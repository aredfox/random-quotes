(function () {
    'use strict';

    angular.module('app')
        .component('background', {
            css: './app/background/background.style.css',
            templateUrl: './app/background/background.component.html',
            controllerAs: 'vm',
            controller: ['$log', controller]
        });

    function controller($log) {
        $log.debug('Constructed controller for background component.');
        var vm = this;
    }

}());