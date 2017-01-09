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
