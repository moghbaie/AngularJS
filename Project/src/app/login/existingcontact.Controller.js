(function() {
  'use strict';

  var app= angular.module('template')

  app.controller('ExistController', function (AdContactService) {
    var self = this;
  self.existinglist=AdContactService.getlist();


  });

})();

