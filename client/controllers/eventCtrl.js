var eventCtrl = angular.module('eventCtrl', []);

eventCtrl.controller('eventCtrl', function($scope, eventService){
    eventService.getEvents().then(function(data){
        console.log(data);
        $scope.events = data;
        data.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });
        var tday = new Date();
        var day = new Date().setDate(tday.getDate()-1);
        var dateTime = new Date(day);
        var dateTime1 = new Date(data[0]['date']);
        if (dateTime1 > dateTime){
            $scope.eventNavbar = false;
            $scope.eventContainer = false;
        }else{
            $scope.eventNavbar = true;
            $scope.eventContainer = true;
        }
        angular.forEach($scope.events, function(value) {
            value.date = new Date(value.date);
        });
        $scope.filterDate = function(events) {
            var today = new Date();
            var today_plus_one_day = new Date().setDate(today.getDate()-1);
            return events.date >= today_plus_one_day;
        };
    }, function(err){
        console.log(err);
    });
    $scope.activeEventImg = '';
    $scope.openModal = function(path){
        $scope.activeEventImg = path;
    }

});