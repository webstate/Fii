var landingTextService = angular.module('landingTextService', []);

landingTextService.factory('landingTextService', function($q, $http){
    return{
        addOrUpdateLandingText: addOrUpdateLandingText,
        getLandingText: getLandingText
    }
    function addOrUpdateLandingText(place, text, lan){
        var d = $q.defer();
        $http.post('food/landingText/add', {place:place, text:text, lan:lan})
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getLandingText(place, lan){
        var d = $q.defer();
        $http.post('food/landingText/get', {place:place, lan:lan})
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
})
