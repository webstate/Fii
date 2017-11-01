var foodService = angular.module('foodService', []);

foodService.factory('foodService', function($q, $http){
    return{
        addFood: addFood,
        getFood: getFood,
        getStarters: getStarters,
        getMain: getMain,
        getDessert: getDessert,
        removeFood: removeFood,
        getFoodById: getFoodById,
        updateFood: updateFood
    }
    function getFoodById(id){
        var d = $q.defer();
        $http.get('food/food/byid/'+id)
        .success(function(data){
            d.resolve(data);
        })
        .error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getStarters(){
        var d = $q.defer();
        $http.get('food/food/starters')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getMain(){
        var d = $q.defer();
        $http.get('food/food/main')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getDessert(){
        var d = $q.defer();
        $http.get('food/food/dessert')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function addFood(name, course, price, description, nameEng, descEng, nameFin, descFin, nameRus, descRus){
        var d = $q.defer();
        $http.post('food/food/add', {
            name: name,
            course:course,
            price:price,
            description: description,
            nameEng: nameEng,
            descEng: descEng,
            nameFin: nameFin,
            descFin: descFin,
            nameRus: nameRus,
            descRus: descRus
        })
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function updateFood(id,name, course, price, description, nameEng, descEng, nameFin, descFin, nameRus, descRus){
        var d = $q.defer();
        $http.post('food/food/update', {
            id: id,
            name: name,
            course:course,
            price:price,
            description: description,
            nameEng: nameEng,
            descEng: descEng,
            nameFin: nameFin,
            descFin: descFin,
            nameRus: nameRus,
            descRus: descRus
        })
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getFood(){
        var d = $q.defer();
        $http.get('food/food/all')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }

    function removeFood(id){
        var d = $q.defer();
        $http.get('food/food/remove/'+id)
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
})
