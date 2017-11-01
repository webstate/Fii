var foodAdminController = angular.module('foodAdminController', []);

foodAdminController.controller('foodAdminController', function($scope, $rootScope, foodService){
    $scope.addFoodModal = false;
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

    $scope.showModal = function(){
        $scope.addFoodModal = true;
    }
    $scope.hideModal = function(){
        $scope.addFoodModal = false;
    }

    $scope.courses = ["Vali käik","Eelroog", "Pearoog", "Magustoit"];
    $scope.selected = $scope.courses[0];

    foodService.getFood().then(function(data){
        console.log(data);
        $scope.foodList = data;
    }, function(err){
        console.log(err);
    })

    $scope.submitFood = function(){

        foodService.addFood($scope.food.nameEst, $scope.selected, $scope.food.price,
            $scope.food.descriptionEst,
            $scope.food.nameEng, $scope.food.descriptionEng,
            $scope.food.nameFin, $scope.food.descriptionFin,
            $scope.food.nameRus, $scope.food.descriptionRus)
        .then(function(data){
            foodService.getFood().then(function(data){
                $scope.foodList = data;
            }, function(err){
                console.log(err);
            })
            $scope.selected = $scope.courses[0];
            $scope.food = {};
        }, function(err){
            console.log(err);
        })
    }

    $scope.editFood = function(id){
        $scope.changeFoodModal = true;
        foodService.getFoodById(id).then(function(data){
            $scope.nameEst = data.name;
            $scope.price = data.price;
            $scope.descriptionEst = data.description;
            $scope.descriptionEng = data.descEng;
            $scope.nameEng = data.nameEng;
            $scope.descriptionFin = data.descFin;
            $scope.nameFin = data.nameFin;
            $scope.descriptionRus = data.descRus;
            $scope.nameRus = data.nameRus;
            $scope.selected = data.course;
            $scope.foodId = id;
        }, function(err){
            console.log(err);
        })
    }
    $scope.changeFood = function(){

        var estName = "";
        var estDesc = "";
        var editPrice = "";
        var selection = "";
        var engName = "";
        var engDesc = "";
        var finName = "";
        var finDesc = "";
        var rusName = "";
        var rusDesc = "";

        estName = $scope.nameEst;
        editPrice = $scope.price;
        estDesc = $scope.descriptionEst;
        engName = $scope.nameEng;
        engDesc = $scope.descriptionEng;
        finName = $scope.nameFin;
        finDesc = $scope.descriptionFin;
        rusName = $scope.nameRus;
        rusDesc = $scope.descriptionRus;

        if($scope.nameEst === "{{nameEstEdit}}"){
            estName = $scope.nameEstEdit;
        }
        if($scope.price === "{{priceEdit}}"){
            editPrice = $scope.priceEdit;
        }
        if($scope.descriptionEst === "{{descriptionEstEdit}}"){
            estDesc = $scope.descriptionEstEdit
        }
        if($scope.nameEng ==="{{nameEngEdit}}"){
            engName = $scope.nameEngEdit;
        }
        if($scope.descriptionEng === "{{descriptionEngEdit}}"){
            engDesc = $scope.descriptionEngEdit;
        }
        if($scope.nameFin ==="{{nameFinEdit}}"){
            finName = $scope.nameFinEdit;
        }
        if($scope.descriptionFin === "{{descriptionFinEdit}}"){
            finDesc = $scope.descriptionFinEdit;
        }
        if($scope.nameRus ==="{{nameRusEdit}}"){
            rusName = $scope.nameRusEdit;
        }
        if($scope.descriptionRus === "{{descriptionRusEdit}}"){
            rusDesc = $scope.descriptionRusEdit;
        }
        console.log(estName);
        console.log(editPrice);
        console.log(estDesc);
        console.log(engName);
        console.log(engDesc);
        console.log(finName);
        console.log(finDesc);
        console.log(rusName);
        console.log(rusDesc);

        foodService.updateFood($scope.foodId, estName, $scope.selected, editPrice, estDesc,
            engName, engDesc,
            finName, finDesc,
            rusName, rusDesc).then(function(data){
            $scope.changeFoodModal = false;
            foodService.getFood().then(function(data){
                $scope.foodList = data;
            }, function(err){
                console.log(err);
            })
        })

    }
    $scope.removeFood = function(id){
        foodService.removeFood(id).then(function(data){
            foodService.getFood().then(function(data){
                $scope.foodList = data;
            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
});
