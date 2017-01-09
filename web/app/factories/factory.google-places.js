// $window usado pra carregar o Google async
angular.module('AppWeather')
    .factory('PlacesInitializer', ['$window', '$q', '$http', function($window, $q, $http){

        // maps loader
        var placesDefer = $q.defer();

        // a chave é utilizada no client pois a api do google não
        // possui restrições de CORS nem de quantidade de requisições
        var key = 'AIzaSyCmlmoDV52OA5KHqgV3wwgOXu5Pb1-YHL0';

        // url do Google com callback
        var asyncUrl = 'https://maps.googleapis.com/maps/api/js?key='+ key +'&libraries=places&language=pt-br&callback=';

        // async loader e append no DOM
        var asyncLoad = function(asyncUrl, callbackName) {
          var script = document.createElement('script');
          script.src = asyncUrl + callbackName;
          document.body.appendChild(script);
        };

        // callback para resolver a promessa
        $window.placesInitialized = function () {
            placesDefer.resolve();
        };

        // carrega
        asyncLoad(asyncUrl, 'placesInitialized');

        // carrega nome do lugar através da latitude e da longitude
        var reverseGeocode = function(lat, lng){
          return $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key='+ key);
        }

        return {
            placesInitialized : placesDefer.promise,
            reverseGeocode : reverseGeocode
        };
    }]);
