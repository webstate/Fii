var workerService = angular.module('workerService', []);

workerService.factory('workerService', function($q, $timeout, $http){
    function addWorker(name, occupation, info, picture, infoEng, occupationEng,
        infoFin, occupationFin, infoRus, occupationRus){
        var d = $q.defer();
        $http.post('worker/add', {
            name: name,
            occupation: occupation,
            info: info, picture: picture,
            infoEng: infoEng,
            occupationEng: occupationEng,
            infoFin: infoFin,
            occupationFin: occupationFin,
            infoRus: infoRus,
            occupationRus: occupationRus,
        }
        ).success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getWorkers(){
        var d = $q.defer();
        $http.get('worker/all')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function removeWorker(id){
        var d = $q.defer();
        $http.get('worker/worker/remove/'+id)
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getWorkerById(id){
        var d = $q.defer();
        $http.post('worker/worker/getbyid', {id:id})
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function updateWorker(id, name, position, info, engPosition, engInfo, finPosition, finInfo, rusPosition, rusInfo){
        var d = $q.defer();
        $http.post('worker/worker/update', {
            id:id,
            name:name,
            position:position,
            info:info,
            engPosition:engPosition,
            engInfo:engInfo,
            finPosition:finPosition,
            finInfo:finInfo,
            rusPosition:rusPosition,
            rusInfo:rusInfo
        }
        ).success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    return({
        addWorker:addWorker,
        getWorkers:getWorkers,
        removeWorker:removeWorker,
        getWorkerById: getWorkerById,
        updateWorker: updateWorker
    })
})
