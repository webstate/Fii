var menuItem = angular.module('menuItem', []);

menuItem.directive("menuItem", function() {
     return {
         restrict: "E",
         template: "<div ng-click='navigate()' ng-transclude></div>",
         transclude: true,
         scope: {
             hash: "@"
         },
         link: function($scope) {
             console.log("coolbeans");
         }
     }
});
