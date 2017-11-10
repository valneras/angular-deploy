# AngularDeploy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Deploy Angular project on Azure
- create CircleCI, GitHub and Azure accounts
- deploy on CircleCI the GitHub project
- build on CircleCI a docker tag on Azure
- configure Azure container and webserver

## Docker
Build Angular App without deleting output path and build when files change.

    ng build --dop false --watch
    
Test Docker image on local machine

    docker build -t angular_deploy:latest .
    docker run -it -p 80:80 angular_deploy:latest
    
Build a tag on the Azure container registry

    docker build -t angulardeploy.azurecr.io/angular-cli-nginx:1.0 .
    docker login --username __DOCKER_USER__ --password __DOCKER_PASS__ angulardeploy.azurecr.io
    docker push awesomeapp.azurecr.io/angular-cli-nginx:1.0

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# angular-deploy" 
