(function () {
  'use strict';

  // Filter para tranformar data por extenso
  angular.module('AppWeather')
    .filter('formatDateToExtenso', function() {
      // popula arrays de possibilidades
      var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
      var semana = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");

      return function(selectedDate, showHour) {
        // se não existir parâmetro (ainda), retorna vazio
        if(!selectedDate)
          return;

        var newData = new Date(selectedDate);
        var dia = newData.getDate();
        var dias = newData.getDay();
        var mes = newData.getMonth();
        mes = newData.getMonth();

        var hr = newData.getHours();
        var min = newData.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        var ampm = hr < 12 ? "am" : "pm";

        var diaext = semana[dias] + ", " + dia + " de " + meses[mes];

        // concatena horas somente se o parâmetro showHour existir
        if(showHour){
          diaext += " às " + hr + ":" + min;
        }

        if (semana[dias] == undefined) {
          return selectedDate;
        } else {

          // retorna data por extenso
          return diaext;
        }
      }
  });
})();
