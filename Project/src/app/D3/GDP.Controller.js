(function() {
  'use strict';
var app = angular.module('triangular', []);

app.controller('MainCtrl', function($scope) {
  $scope.graph = {'width': 100, 'height': 100}
  $scope.circles = [
    {'x': 15, 'y': 20, 'r':15},
    {'x': 50, 'y': 60, 'r':20},
    {'x': 80, 'y': 10, 'r':10},
  ]
});
 app.directive('bars', function ($parse) {
      return {
         restrict: 'E',
         replace: true,
         template: '<div id="chart"></div>',
         link: function (scope, element, attrs) {
           var data = attrs.data.split(','),
           chart = d3.select('#chart')
             .append("div").attr("class", "chart")
             .selectAll('div')
             .data(data).enter()
             .append("div")
             .transition().ease("elastic")
             .style("width", function(d) { return d + "%"; })
             .text(function(d) { return d + "%"; });
         } 
      };
   });

})();