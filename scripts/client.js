var myApp = angular.module('myApp', ['ngMaterial']);
console.log('myapp loaded');

myApp.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default').primaryPalette('orange')
        .accentPalette('orange');
});