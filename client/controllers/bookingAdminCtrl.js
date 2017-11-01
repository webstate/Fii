var bookingAdminCtrl = angular.module('bookingAdminCtrl', []);

bookingAdminCtrl.controller('bookingAdminCtrl', function($scope, bookingService){
    $scope.form = {
        showStartTime: false,
        showEndTime: false
    }
    $scope.startTimes = ["10:00","10:30","11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30","15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30","20:00", "20:30", "21:00", "21:30"];;
    $scope.startTime = $scope.startTimes[0];

    $scope.endTimes = ["10:00","10:30","11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30","15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30","20:00", "20:30", "21:00", "21:30"];;
    $scope.endTime = $scope.endTimes[0];

    $scope.showStartTime = function(){
        $scope.form.showStartTime = true;
    }
    $scope.changeStartTime = function(item){
        $scope.startTime = item;
        $scope.form.showStartTime = false;
    }
    $scope.showEndTime = function(){
        $scope.form.showEndTime = true;
    }
    $scope.changeEndTime = function(item){
        $scope.endTime = item;
        $scope.form.showEndTime = false;
    }
    bookingService.getClosedTimes().then(function(data){
        console.log(data);
        $scope.closedTimes = data;
    })
    bookingService.getBookings().then(function(data){
        $scope.bookings = data;
    })
    $scope.showModal = function(){
        $scope.closeTimeModal = true;
    }
    $scope.hideModal = function(){
        $scope.closeTimeModal = false;
    }
    $scope.removeBooking = function(id){
        bookingService.deleteBooking(id).then(function(data){
            bookingService.getBookings().then(function(data){
                $scope.bookings = data;
            })
        })
    }
    $scope.deleteClosedTime = function(id){
        bookingService.deleteTime(id).then(function(data){
            console.log(data);
            bookingService.getClosedTimes().then(function(data){
                $scope.closedTimes = data;
            })
        })
    }
    $scope.submitClosedTime = function(){
        var date = new Date();
        var offset = date.getTimezoneOffset() / 60;

        /*var startHours = $scope.event.startTime.getHours();
        var startMinutes = $scope.event.startTime.getMinutes();

        var endHours = $scope.event.endTime.getHours();
        var endMinutes = $scope.event.endTime.getMinutes();*/

        /*if(startMinutes.toString().length == 1){
            console.log("me here");
            startMinutes = "0" + $scope.event.startTime.getMinutes();
        }*/
        /*if(endMinutes.toString().length == 1){
            console.log("me here");
            endMinutes = "0" + $scope.event.endTime.getMinutes();
        }*/
        console.log($scope.event.date);
        console.log("START: " + $scope.startTime + ":00");
        console.log("END: " + $scope.endTime + ":00");
        var officialdate = new Date($scope.event.date.split("-")[2], parseInt($scope.event.date.split("-")[1])-1, $scope.event.date.split("-")[0]);
        console.log($scope.event.date.split("-"));
        console.log((parseInt($scope.startTime.split(":")[0])+offset).toString() + ":"+$scope.startTime.split(":")[1] + ":00");
        console.log((parseInt($scope.endTime.split(":")[0])+offset).toString() + ":"+$scope.endTime.split(":")[1] + ":00");
        bookingService.addClosedTime(officialdate, (parseInt($scope.startTime.split(":")[0])+offset).toString() + ":"+$scope.startTime.split(":")[1] + ":00",
        (parseInt($scope.endTime.split(":")[0])+offset).toString() + ":"+$scope.endTime.split(":")[1] + ":00", $scope.event.reason)
        .then(function(data){
            console.log(data);
            bookingService.getClosedTimes().then(function(data){
                console.log(data);
                $scope.closedTimes = data;
            })
        })
    }

})
