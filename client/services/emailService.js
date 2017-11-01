var emailService = angular.module('emailService', []);

emailService.factory('emailService', function($q, $http){
    return{
        sendFeedBack: sendFeedBack
    }
    function sendFeedBack(email, name, message, lang){
        var d = $q.defer();
        $http.post('drink/email/feedback', {
            name: name,
            email: email,
            message: message,
            lang: lang
        })
        .success(function(data){
            d.resolve(data);
        }).error(function(err){
            d.reject(err);
        })
        return d.promise;

    }
})
