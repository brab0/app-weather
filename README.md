# app-weather
## Install
- sudo git clone https://github.com/brab0/app-weather.git
- cd app-weather
- cd proxy
- sudo npm install
- node server
- cd ../web
- sudo bower install --allow-root
- sudo npm install
- ./node_modules/http-server/bin/http-server

## Estrutura de Diretórios
Devido a requisições a apis externas (https://darksky.net/dev/), optou-se por criar e separar uma camada de backend que servirá somente como proxy dessas requisiçes para que se evitem restriçes de CORS.
```html
|- proxy
|  |- controllers
|  |- routers
|- web
|  |- app
|  |  |- controllers
|  |  |- factories
|  |  |- filters
|  |  |- tests
|  |  |- views
|  |- assets
|  |  |- bower_components
|  |  |- css
```

## Testes
Não foram implementados testes por motivos de tempo. Porém, foi configurada uma estrutura de teste utilizando Karma + Jasmine + PhantonJS:

- cd web/app/tests
- sudo npm install
- sudo ./node_modules/karma/bin/karma start my.conf.js
