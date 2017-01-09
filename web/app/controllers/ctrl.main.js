angular.module('AppWeather')
    .controller('MainCtrl', ['$scope', 'settings', '$filter', '$http', 'PlacesInitializer', function($scope, settings, $filter, $http, placesInitializer) {
        var placeSearch, autocomplete;
        $scope.load = true;
        // array para popular dropdown de unidades de medidas
        $scope.medidas = ('C˚ F˚').split(' ').map(function (medida) { return medida; });

        $scope.selectedMedida = 'C˚';

        $scope.selectedPlace = '';

        // Carrega script do google maps para buscar lugares
        // e dá um bind no input para utilizar componente de autocomplete
        placesInitializer.placesInitialized
        .then(function(){
          autocomplete = new google.maps.places.Autocomplete(
                              (document.getElementById('autocomplete')),
                              {types: ['geocode']});

          // quando selecionar uma opção do autocomplete
          // carrega valor selecionado no input
          autocomplete.addListener('place_changed', fillInAddress);
        })
        .then(function(){
          // carrega a geolocalização do browser somente após do carregamento do autocomplete
          geolocate();
        });

  			function fillInAddress() {
          // carrega detalhes do lugar selecionado
  				var place = autocomplete.getPlace();
          $scope.selectedPlace = place.formatted_address;
          // busca detalhes do clima pela latitude e longitude do lugar
          $scope.getWeather(place.geometry.location.lat(), place.geometry.location.lng(), setWeather);
  			}

        $scope.getWeather = function(lat, lng, cb){
          $scope.load = true;
          // faz requisição ao proxy server para carregar detalhes do clima
          $http.get(settings.api + '/weather/' + lat + "/" + lng).then(function(res){
            $scope.load = false;
            cb(res.data);
          });
        }

        var setWeather = function(data){
          // carrega variável de escopo para utilizar nas views
          $scope.weather = {
            currently : data.currently,
            daily: data.daily.data,
            hourly : data.hourly.data
          }
        }

        // chama o 'navigator.geolocation' object do browser
        // para popular o input do autocomplete
        var geolocate = function() {

          //verifica se o usuário permitiu acesso a geolocalização
  				if (navigator.geolocation) {
  					navigator.geolocation.getCurrentPosition(function(position) {
              placesInitializer.reverseGeocode(position.coords.latitude, position.coords.longitude).then(function(res){
                $scope.selectedPlace = res.data.results[3].formatted_address;
              });

              // carrega o clima baseado na latitude e longitude
              $scope.getWeather(position.coords.latitude, position.coords.longitude, setWeather);
  					},function (error) {
              if (error.code == error.PERMISSION_DENIED)
                  $scope.load = false;
            });
  				}
  			}
    }]);
