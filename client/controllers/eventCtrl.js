var eventCtrl = angular.module('eventCtrl', []);

eventCtrl.controller('eventCtrl', function($scope, eventService){
    eventService.getNextEvents().then(function(data){
        console.log(data[0]);
        $scope.event = data[0];
        if(data.length === 0){
            $scope.eventDialog = true;
        }else{
            $scope.eventDialog = false;
        }
    }, function(err){
        console.log(err);
    })
})
