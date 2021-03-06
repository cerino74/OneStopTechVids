﻿///<reference path="scripts/typings/angularjs/angular.d.ts"/>
///<reference path="scripts/typings/angularjs/angular-route.d.ts"/>
var OneStopTechVidsApp;
(function (OneStopTechVidsApp) {
    var app = angular.module("techVidsApp", ['ngRoute']);

    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when("/list", {
                templateUrl: "App/Templates/VideoList.html",
                controller: "TechVidsListCtrl"
            }).when("/list/:id", {
                templateUrl: "App/Templates/VideoList.html",
                controller: "TechVidsListCtrl"
            }).when("/add", {
                templateUrl: "App/Templates/AddVideo.html",
                controller: "AddTechVideoCtrl"
            }).when("/edit/:id", {
                templateUrl: "App/Templates/EditVideo.html",
                controller: "EditTechVideoCtrl"
            }).otherwise({
                redirectTo: '/list'
            });
        }
        return Config;
    })();
    OneStopTechVidsApp.Config = Config;
    Config.$inject = ['$routeProvider'];
    app.config(Config);
})(OneStopTechVidsApp || (OneStopTechVidsApp = {}));
//# sourceMappingURL=app.js.map
