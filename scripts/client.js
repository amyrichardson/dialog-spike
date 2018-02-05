var myApp = angular.module('myApp', ['ngMaterial']);
console.log('myapp loaded');

myApp.config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo', {
        'default': '400', // by default use shade 400 from the pink palette for primary intentions
        'hue-1': '200', // use shade 100 for the <code>md-hue-1</code> class
        'hue-2': '900', // use shade 600 for the <code>md-hue-2</code> class
      })
      // If you specify less than all of the keys, it will inherit from the
      // default shades
      .accentPalette('orange', {
        'default': '600', // use shade 200 for default, and keep all other shades the same
      });

    });

