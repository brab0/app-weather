# app-weather
## Install
- Abra o Terminal
- sudo git clone https://github.com/brab0/app-weather.git
- cd path/to/app-weather/proxy
- sudo npm install
- node server
- Abra outra janela de Terminal(ou use um gerenciador de abas ou processos. Ex: PM2)
- cd path/to/app-weather/web
- sudo bower install --allow-root
- sudo npm install
- ./node_modules/http-server/bin/http-server (ou somente http-server se já estiver instalado gloabalmente)
- rodando em: http://localhost:8080

## Estrutura de Diretórios
Devido a requisições a apis externas (https://darksky.net/dev/), optou-se por criar e separar uma camada de backend que servirá somente como proxy dessas requisições para que se evitem restrições de acesso de CORS.
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
