var textService = angular.module('textService', []);

textService.factory('textService', function($q, $timeout, $http){
    function updateContent(category, title, text){
        var d = $q.defer();
        $http.post('user/texts/update', {category: category, title: title, text: text}
        ).success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;
    }
    return({
        updateContent:updateContent
    })
})
