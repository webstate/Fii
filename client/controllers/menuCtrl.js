var menuCtrl = angular.module('menuCtrl', []);

menuCtrl.controller('menuCtrl', function($scope, pictureService){
    pictureService.getMenuPicture('second').then(function(data){
        $scope.secondPicturePath = data.picturePath;
    })
    pictureService.getMenuPicture('first').then(function(data){
        $scope.firstPicturePath = data.picturePath;
    })
    pictureService.getMenuPicture('third').then(function(data){
        $scope.thirdPicturePath = data.picturePath;
    })
})
