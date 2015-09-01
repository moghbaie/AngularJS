

(function() {

  'use strict';
  var app=angular.module('article',[])
  

  app.controller('OverviewCtrl',  function ($scope, $http) {
      
      $scope.tags = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
      ];




      var myPDF = new PDFObject({
        url: "assets/5MorePlants.pdf",
        width: "1000px",
        height: "300px",

      }).embed("pdfDiv");
    

  });

})
();




