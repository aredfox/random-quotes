(function () {
    'use strict';

    angular.module('app')
        .component('quote', {
            css: './app/quote/quote.style.css',
            templateUrl: './app/quote/quote.component.html',
            controllerAs: 'vm',
            controller: ['$log', 'quoteService', controller]
        });

    function controller($log, quoteService) {
        $log.debug('Constructed controller for quote component.');
        var vm = this;

        vm.quote = null;
        vm.author = null;
        vm.wikipediaUrl = null;
        quoteService.getRandomQuote().then(
            function (quoteData) {
                vm.quote = quoteData.quote;
                vm.author = quoteData.author;
                vm.wikipediaUrl = quoteData.wikipediaUrl;
            },
            function (error) { vm.quote = error }
        );
    }

}());