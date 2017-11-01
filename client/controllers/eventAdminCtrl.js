var eventAdminCtrl = angular.module('eventAdminCtrl', []);

eventAdminCtrl.controller('eventAdminCtrl', function($scope, eventService){
    $scope.addEventModal = false;
    $scope.changeEventModal = false;
    $scope.event = {};

    $scope.showModal = function(){
        $scope.addEventModal = true;
    }
    $scope.hideModal = function(){
        $scope.addEventModal = false;
    }
    $scope.hideEditModal = function(){
        $scope.changeEventModal = false;
    }

    $scope.estModal = true;
    $scope.engModal = false;
    $scope.finModal = false;
    $scope.rusModal = false;

    $scope.estEditModal = true;
    $scope.engEditModal = false;
    $scope.finEditModal = false;
    $scope.rusEditModal = false;


    $scope.showEst = function(){

        $scope.estModal = true;
        $scope.engModal = false;
        $scope.finModal = false;
        $scope.rusModal = false;
    }

    $scope.showEng = function(){

        $scope.engModal = true;
        $scope.estModal = false;
        $scope.finModal = false;
        $scope.rusModal = false;
    }

    $scope.showFin = function(){

        $scope.finModal = true;
        $scope.engModal = false;
        $scope.estModal = false;
        $scope.rusModal = false;
    }
    $scope.showRus = function(){

        $scope.rusModal = true;
        $scope.finModal = false;
        $scope.engModal = false;
        $scope.estModal = false;
    }

    $scope.showEstEdit = function(){

        $scope.estEditModal = true;
        $scope.engEditModal = false;
        $scope.finEditModal = false;
        $scope.rusEditModal = false;
    }

    $scope.showEngEdit = function(){

        $scope.engEditModal = true;
        $scope.estEditModal = false;
        $scope.finEditModal = false;
        $scope.rusEditModal = false;
    }

    $scope.showFinEdit = function(){

        $scope.finEditModal = true;
        $scope.engEditModal = false;
        $scope.estEditModal = false;
        $scope.rusEditModal = false;
    }

    $scope.showRusEdit = function(){

        $scope.rusEditModal = true;
        $scope.finEditModal = false;
        $scope.engEditModal = false;
        $scope.estEditModal = false;
    }
    eventService.getEvents().then(function(data){
        console.log(data);
        $scope.events = data;
    }, function(err){
        console.log(err);
    })
    $scope.submitEvent = function(){
        var date = new Date();
        var hours = $scope.event.time.getHours();
        var minutes = $scope.event.time.getMinutes();
        var offset = date.getTimezoneOffset() / 60;
        if(minutes.toString().length == 1){
            console.log("me here");
            minutes = "0" + $scope.event.time.getMinutes();
        }

        eventService.addEvent($scope.event.name, $scope.event.description, $scope.event.date, hours+offset+":"+minutes+":00",
        $scope.event.nameEng, $scope.event.descEng,
        $scope.event.nameFin, $scope.event.descFin,
        $scope.event.nameRus, $scope.event.descRus).then(function(){
            eventService.getEvents().then(function(data){
                $scope.events = data;
                $scope.event = {};

            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        });
    }
    $scope.removeEvent = function(id){
        eventService.deleteEvent(id).then(function(data){
            eventService.getEvents().then(function(data){
                $scope.events = data;
            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
    $scope.changeEvent = function(id){
        $scope.changeEventModal = true;
        $scope.event = {};
        eventService.findByIdEvent(id).then(function(data){
            console.log(data);
            $scope.dateEdit = new Date(data.date);
            $scope.timeEdit = new Date(data.time);
            $scope.editNameEst = data.name;
            $scope.editDescEst = data.description;
            $scope.editNameEng = data.nameEng;
            $scope.editDescEng = data.descEng;
            $scope.editNameFin = data.nameFin;
            $scope.editDescFin = data.descFin;
            $scope.editNameRus = data.nameRus;
            $scope.editDescRus = data.descRus;
            $scope.eventId = data.id;
        })
    }
    $scope.updateEvent  = function(){
        var estName = "";
        var estDesc = "";
        var engName = "";
        var engDesc = "";

        estName = $scope.editNameEst;
        estDesc = $scope.editDesEst;
        engName = $scope.editNameEng;
        engDesc = $scope.editDescEng;
        finName = $scope.editNameFin;
        finDesc = $scope.editDescFin;
        rusName = $scope.editNameRus;
        rusDesc = $scope.editDescRus;

        console.log(estName);
        console.log(estDesc);
        console.log(engName);
        console.log(engDesc);
        console.log(finName);
        console.log(finDesc);
        console.log(rusName);
        console.log(rusDesc);

        if($scope.editNameEst === "{{nameEstEdit}}"){
            estName = $scope.nameEstEdit;
        }
        if($scope.editDescEst === "{{descEstEdit}}"){
            estDesc = $scope.descEstEdit
        }
        if($scope.editNameEng ==="{{nameEngEdit}}"){
            engName = $scope.nameEngEdit;
        }
        if($scope.editDescEng === "{{descEngEdit}}"){
            engDesc = $scope.descEngEdit;
        }
        if($scope.editNameFin ==="{{nameFinEdit}}"){
            finName = $scope.nameFinEdit;
        }
        if($scope.editDescFin === "{{descFinEdit}}"){
            finDesc = $scope.descFinEdit;
        }
        if($scope.editNameRus ==="{{nameRusEdit}}"){
            rusName = $scope.nameRusEdit;
        }
        if($scope.editDescRus === "{{descRusEdit}}"){
            rusDesc = $scope.descRusEdit;
        }
        eventService.updateEvent($scope.eventId, estName, estDesc, $scope.dateEdit,
        $scope.timeEdit, engName, engDesc,
        finName, finDesc,
        rusName, rusDesc).then(function(data){
            console.log(data);
            $scope.changeEventModal = false;
            eventService.getEvents().then(function(data){
                $scope.events = data;
            }, function(err){
                console.log(err);
            })

        })
    }
    function toUTC(/*Date*/date) {
        return Date.UTC(
            date.getFullYear()
            , date.getMonth()
            , date.getDate()
            , date.getHours()
            , date.getMinutes()
            , date.getSeconds()
            , date.getMilliseconds()
        );
    }
})
