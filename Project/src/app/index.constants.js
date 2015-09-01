(function() {
  'use strict';
  
  angular
    .module('template')

  .constant('STATE_VALS',{
    kHomeState:
      {stateName:'home'},
    kIntroductionState:
      {stateName:'introduction'},
    kResultState:
      {stateName:'result'},
    kGDP:
      {stateName:'GDP'},
    kArticle:
      {stateName:'article'},
    kContact:
      {stateName:'contact'},
    knewContact:
      {stateName:'contact.newcontact'},
    kexistingContact:
      {stateName:'contact.existingcontact'},
    kDashboard:
      {stateName:'home.dashboard'},
    kAiding:
      {stateName:'home.aiding'}
  });

})();

