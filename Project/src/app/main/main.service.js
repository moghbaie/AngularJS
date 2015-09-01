(function() {
  'use strict';

  angular.module('template')
  
  .factory('ArticleResource', function ($resource) {
  	return $resource('/assets/Rambler-data.json', {
  		heading: ' '
  	}, {
  		getArticles: {
  			method: 'GET',
  			isArray: true
  		}
  	});
  });



})();