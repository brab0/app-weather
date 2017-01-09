(function () {
  'use strict';

  // Filter para retornar somente as horas restantes do dia passado como parâmetro
  angular.module('AppWeather')
    .filter('hoursByDate', function() {
      return function(input, data) {
        if(input){
          return input.filter(function(h, i){
            // retorna array filtrado com somente os horários do dia em questão (até 23hrs)
            // e que não sejam a hora corrente (maior que o primeiro objeto do array; i>0)
            return (new Date(h.time * 1000).getDay() == new Date(data * 1000).getDay()) && i > 0;
          });
        }
      }
  });
})();
