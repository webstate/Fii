var eventService = angular.module('eventService', []);

eventService.factory('eventService', function($q, $http){
    return({
        addEvent: addEvent,
        getEvents: getEvents,
        deleteEvent: deleteEvent,
        getNextEvents:getNextEvents,
        findByIdEvent:findByIdEvent,
        updateEvent: updateEvent
    })
    function addEvent(name, description, date, time, nameEng, descEng, nameFin, descFin, nameRus, descRus){
        var d = $q.defer();
        $http.post('drink/event/add', {
            name: name,
            description: description,
            date: date,
            time: time,
            descEng: descEng,
            nameEng: nameEng,
            descFin: descFin,
            nameFin: nameFin,
            descRus: descRus,
            nameRus: nameRus
        })
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;

    }
    function updateEvent(id, name, description, date, time, nameEng, descEng, nameFin, descFin, nameRus, descRus){
        var d = $q.defer();
        $http.post('drink/event/update', {
            id: id,
            name: name,
            description: description,
            date: date,
            time: time,
            descEng: descEng,
            nameEng: nameEng,
            descFin: descFin,
            nameFin: nameFin,
            descRus: descRus,
            nameRus: nameRus
        })
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;

    }
    function getEvents(){
        var d = $q.defer();
        $http.get('food/event/get')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getNextEvents(){
        var d = $q.defer();
        $http.get('food/event/getnext')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function findByIdEvent(id){
        var d = $q.defer();
        $http.post('food/event/findbyid', {id:id})
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function deleteEvent(id){
        var d = $q.defer();
        $http.get('food/event/delete/'+id)
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
})
