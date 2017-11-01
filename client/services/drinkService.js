var drinkService = angular.module('drinkService', []);

drinkService.factory('drinkService', function($q, $http){
    return{
        getDrink: getDrink,
        addDrink: addDrink,
        getBeer: getBeer,
        getWine: getWine,
        getHot: getHot,
        getHard: getHard,
        getCocktails: getCokctails,
        getNonAlco: getNonAlco,
        removeDrink: removeDrink,
        getDrinkById: getDrinkById,
        updateDrink: updateDrink
    }
    function getWine(){
        var d = $q.defer();
        $http.get('drink/drink/wine')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getBeer(){
        var d = $q.defer();
        $http.get('drink/drink/beer')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getCokctails(){
        var d = $q.defer();
        $http.get('drink/drink/cocktail')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getNonAlco(){
        var d = $q.defer();
        $http.get('drink/drink/nonalco')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getHot(){
        var d = $q.defer();
        $http.get('drink/drink/hot')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getHard(){
        var d = $q.defer();
        $http.get('drink/drink/hardalco')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function addDrink(name, type, price, description,nameEng, descEng, sub, nameFin, descFin, nameRus, descRus){
        var d = $q.defer();
        $http.post('drink/drink/add', {
            name: name,
            type:type,
            price:price,
            description: description,
            nameEng: nameEng,
            descEng: descEng,
            sub: sub,
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
    function getDrink(){
        var d = $q.defer();
        $http.get('drink/drink/all')
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function getDrinkById(id){
        var d = $q.defer();
        $http.post('drink/drink/byid', {id:id})
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function updateDrink(id, estName, estDesc, price, selection, engName, engDesc, finName, finDesc, rusName, rusDesc){
        var d = $q.defer();
        $http.post('drink/drink/update',
         {
             id:id,
             name: estName,
             description: estDesc,
             type: selection,
             price: price,
             nameEng: engName,
             descEng: engDesc,
             nameFin: finName,
             descFin: finDesc,
             nameRus: rusName,
             descRus: rusDesc

         })
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    function removeDrink(id){
        var d = $q.defer();
        $http.get('drink/drink/remove/'+id)
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
})
