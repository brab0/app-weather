// Não deu tempo de fazer =/
// mas as asserções seriam estas

describe('App Weather', function() {

  beforeEach(module('AppWeather'));

  var MainCtrl, scope, $http;

  beforeEach(inject(function ($rootScope, $controller, _$http_) {
    scope = $rootScope.$new();
    $http = _$http_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  // necessário

  it('should show the weather details of the current day and time', function() {});
  it('should show the weather details of the current day in next hours', function() {});
  it('should show the weather details of tomorrow', function() {});
  it('should show the weather details of tomorrow in next hours', function() {});
  it('should show the weather details of other days', function() {});
  it('should convert to celsius', function() {});
  it('should convert to fahrenheit', function() {});

  // legal, mas não realmente necessário
  it('should find a place by geolocate.navigators browser', function() {});
});
