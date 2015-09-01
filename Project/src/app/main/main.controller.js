(function() {
  'use strict';
    var app=angular.module('template');
    app.controller('MainController',  function (ArticleResource,$window) {

        var self = this;
        var resourceObject = ArticleResource;
        self.name ='Dashboard';
        self.body=false;

        self.redirectToLink = function(link){
            $window.open(link, 'newwindow', 'width=600, height=850, top= 50, left=900');
            console.log(link);
            };

        var myArticle = {
        	heading: 'Rambler Maker Increases Profit ',
        	dating: '1958'
            };

        self.tabs = [{
                title: 'Dashboard',
                url: 'Dashboard.tpl.html'
                }, {
                title: 'Aiding',
                url: 'Aiding.tpl.html'
                }];

        self.filters=[{
                title:'Economy',
                url: 'Economy.tpl.html'
                },{
                title:'Industry',
                url: 'Industry.tpl.html'
                },{
                title:'Company',
                url: 'Company.tpl.html'
                },{
                title:'Car',
                url: 'Car.tpl.html'
                }];

        self.currentTab = 'Dashboard.tpl.html';
        self.onClickTab = function (tab) {
            self.currentTab = tab.url;
            };

        self.isActiveTab = function(tabUrl) {
            return tabUrl == self.currentTab;
            };

        self.currentFilter = 'Economy.tpl.html';
        self.onClickFilter = function (filter) {
            self.currentFilter = filter.url;
            };

        self.isActiveFilter = function(filterUrl) {
            return filterUrl == self.currentFilter;
            };

        self.getArticles = function() {
    	  resourceObject.getArticles(myArticle).$promise
    	  .then(function (response) {
    	  	self.articles = response;
    	  }).catch(function (errorResponse) {
    	  	console.log(errorResponse);
    	  });
        };

      });

    app.directive('ngIntro', function() {
      return {
        restrict: 'A',
        templateUrl: 'app/introduction/introduction.html'
            };
        });

    app.directive('ngResult', function() {
      return {
        restrict: 'A',
        templateUrl: 'app/result/result.html',
        controller: 'ModalDemoCtrl',
        controllerAs: 'mctrl'
            };
        });



})();



