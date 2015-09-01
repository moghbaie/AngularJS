(function() {
  'use strict';
  var app=angular. module('template',[]);
 

 app.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items=[{
      reason:"Skills", answer:""},{
      reason:"Processes", answer:""},{
      reason:"Technology", answer:""},{
      reason:"Strategy", answer:""},{
      reason:"Costs", answer:""},{
      reason:"Perception", answer:""},{
      reason:"Offerings", answer:""},{
      reason:"Markets", answer:""},{
      reason:"Activity", answer:""},{
      reason:"Function", answer:""},{
      reason:"Organization", answer:""},{
      reason:"Enterprize", answer:""}
    ];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


});

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
   
    
  })();





