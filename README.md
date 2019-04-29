# api-explorer
Custom component in angular for api-explorer
- To install clone the repo
- Run npm install inside the dir api-explorer
- Run grunt dev:server
- Application will launch on localhost:9002
- Directive is currently imported in index.html.To call the directive in another angular application import it as below
```
angular
        .module('myApp', ['swaggerUi'])
        .controller('MyCtrl', function ($scope) {
       });
```

Next in your template file add the call to the directive.Currently its already called in index.html.You can change the parameters here.
```
 <div swagger-ui title="Add new user" url="https://jsonplaceholder.typicode.com/users" method="POST"
         body="[
            {
                name: 'email',
                type: 'email',
                max: 24,
                min: 3
            },
            {
               name: 'full-name',
               type: 'text',
               placeholder: 'John Doe',
               required: true
            },
            {
              name: 'phone',
              type: 'tel',
              pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}'
            }]">

    </div>
```
- Once you change index.html.Grunt will run automatically and halt as address is already in use.Please kill the process running on 9002 and make the change and grunt will now launch the app with the new config. 
