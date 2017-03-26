(function () {
    'use strict';

    angular.module('app')
        .factory('quoteService', ['$timeout', '$log', '$http', quoteService]);

    function quoteService($timeout, $log, $http) {
        $log.debug('Constructed quoteService.');

        var createQuoteData = function (quote, author, wikipediaUrl, imageUrl) {
            return {
                quote: quote,
                author: author,
                wikipediaUrl: wikipediaUrl,
                imageUrl: imageUrl
            };
        }

        var getRandomQuoteFromQuotzzy = function () {
            var url = 'http://www.quotzzy.co/api/quote?lang=en';
            $log.debug('Loading quotes from "' + url + '"."');
            return $http.get(url)
                .then(function (response) {
                    $log.debug(response.data);
                    if (response.data.author) {
                        var quoteData = createQuoteData(
                            response.data.text, response.data.author.name,
                            response.data.author.wiki, null
                        );
                    } else {
                        var quoteData = createQuoteData(
                            response.data.text, 'unknown',
                            null, null
                        );
                    }
                    $log.info(quoteData);
                    return quoteData;
                }, function (response) {
                    $log.warn(response);
                    return createQuoteData('Relax. Something went wrong, try again later...', 'Yves Schelpe');
                });
        }

        var getRandomQuote = function () {
            return $timeout(getRandomQuoteFromQuotzzy, 10);
        };

        return {
            getRandomQuote: getRandomQuote
        }
    }
}());