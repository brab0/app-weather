(function () {
  'use strict';

  // Filter para transformar C˚->F˚ e F˚->C˚
  angular.module('AppWeather')
      .filter('formatTemperature', formatTemperatureFilter);

  var degreesSymbol = '\u00B0';

  function convertCelsiusToFahrenheit(value) {
    // valor padrão do objeto já é Fahrenheit
    return value;
  }

  function convertFahrenheitToCelsius(value) {
      return Math.round((value - 32) * 5.0 / 9.0);
  }

  //concatena simbolo de ˚ graus
  function addDegreesSymbol(value) {
      return value += degreesSymbol;
  }

  function formatTemperatureFilter() {
      return function (input, scale) {
          if(!input)
            return;

          var value = parseInt(input, 10),
              convertedValue;

          if (scale === 'F˚') {
              convertedValue = addDegreesSymbol(convertCelsiusToFahrenheit(value));
          } else if (scale === 'C˚') {
              convertedValue = addDegreesSymbol(convertFahrenheitToCelsius(value));
          } else {
              // caso a unidade passada não seja válida
              throw new Error('Ops! Unidade inválida!');
          }

          // retorna valor convertido concatenado com ˚
          return convertedValue;
      };
  }
})();
