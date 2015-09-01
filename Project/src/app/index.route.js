(function() {
  'use strict';

  angular
    .module('template')

    .controller('NavigationCtrl', function(STATE_VALS) {
      var self=this;
      self.stateVals=STATE_VALS;
    })

    .config(function ($stateProvider, $urlRouterProvider, STATE_VALS) {
    
    $stateProvider
      .state(STATE_VALS.kHomeState.stateName, {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })

      .state(STATE_VALS.kIntroductionState.stateName,{
        url: '/introduction',
        templateUrl: 'app/introduction/introduction.html'
      })

      .state(STATE_VALS.kResultState.stateName,{
        url: '/result',
        templateUrl: 'app/result/result.html',
        controller: 'ModalDemoCtrl',
        controllerAs: 'mctrl'
      })

      .state(STATE_VALS.kGDP.stateName,{
        url: '/GDP',
        templateUrl: 'app/D3/GDP.html',
         controller: 'MainCtrl',
          controllerAs: 'ctrl'
      })

           .state(STATE_VALS.kArticle.stateName,{
        url: '/article',
        templateUrl: 'app/article/article.template.html',
        controller: 'OverviewCtrl',
        controllerAs: 'ctrl'
      })

      .state(STATE_VALS.kContact.stateName,{
          url: '/contact',
          templateUrl: 'app/login/contact.html'
      })

      .state(STATE_VALS.knewContact.stateName,{
          url: '/contact',
          templateUrl: 'app/login/newContact.html',
          controller: 'ContactController',
          controllerAs: 'ctrl'
      })

      .state(STATE_VALS.kexistingContact.stateName,{
          url: '/contact',
          templateUrl: 'app/login/existingContact.html',
          controller: 'ExistController',
          controllerAs: 'ctrl'       
      })
      ;

    $urlRouterProvider.otherwise('/');
  });  

})();
