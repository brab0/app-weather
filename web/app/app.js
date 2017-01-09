// app.js arquivo de configs e contants

angular.module('AppWeather', ['ngMaterial'])
    .config(function() {
      //config
    })
    .constant("settings", {      
      api: "http://localhost:3000"
    });
