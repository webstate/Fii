var pictureService = angular.module('pictureService', []);

pictureService.factory('pictureService', function($q, $timeout, $http){
    function saveImage(fd){
        var d = $q.defer();
        $http.post('user/picture/add', fd, {
            transformRequest: angular.identity,
            headers: {'Content-type': undefined}
        }).success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function addBannerPicture(path){
        var d = $q.defer();
        $http.post('user/bannerpicture/add', {picturePath: path}
        ).success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getBannerPicture(){
        var d = $q.defer();
        $http.get('user/bannerpicture/get'
        ).success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function addMenuPicture(menuPosition, path){
        var d = $q.defer();
        $http.post('user/design/add', {menuPosition:menuPosition, path: path})
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getMenuPicture(menuPosition){
        var d = $q.defer();
        $http.post('user/design/get', {menuPosition:menuPosition})
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    return({
        saveImage:saveImage,
        addBannerPicture:addBannerPicture,
        getBannerPicture: getBannerPicture,
        addMenuPicture: addMenuPicture,
        getMenuPicture: getMenuPicture
    })
})
