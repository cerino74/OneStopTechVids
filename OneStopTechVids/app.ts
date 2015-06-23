///<reference path="scripts/typings/angularjs/angular.d.ts"/> 
///<reference path="scripts/typings/angularjs/angular-route.d.ts"/>

module OneStopTechVidsApp {

    var app = angular.module("techVidsApp", ['ngRoute']);
   
    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/list", {
                templateUrl: "App/Templates/VideoList.html",
                controller: "TechVidsListCtrl"
            })
                .when("/list/:id", {
                    templateUrl: "App/Templates/VideoList.html",
                    controller: "TechVidsListCtrl"
                })
                .when("/add", {
                    templateUrl: "App/Templates/AddVideo.html",
                    controller: "AddTechVideoCtrl"
                })
                .when("/edit/:id", {
                    templateUrl: "App/Templates/EditVideo.html",
                    controller: "EditTechVideoCtrl"
                })
                .otherwise({
                    redirectTo: '/list'
                });
        }
    }
    Config.$inject = ['$routeProvider'];
    app.config(Config);
} 