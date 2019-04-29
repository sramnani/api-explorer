# api-explorer
Custom component in angular for api-explorer
To install clone the repo
Run npm install inside the dir api-explorer
Run grunt dev:server
Application will launch on localhost:9002
The component is called in api-explorer/src/index.html on line 10
In order to import this component in another angular app  use ['swaggerUi'] as a dependency
        angular.module('myApp', ['swaggerUi'])
        });
