var drinkAdminCtrl = angular.module('drinkAdminCtrl', []);

drinkAdminCtrl.controller('drinkAdminCtrl', function($scope, drinkService){
    $scope.subDrinkWineShow = false;
    $scope.subDrinkSpiritShow = false;

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
    $scope.$watch('selected', function(){
        if($scope.selected ==="Vein ja mull"){
            console.log("vein selected");
            $scope.subDrinkWineShow = true;
            $scope.subDrinkSpiritShow = false;
        }
        else if($scope.selected ==="Kange alkohol"){
            console.log("kange selected");
            $scope.subDrinkSpiritShow = true;
            $scope.subDrinkWineShow = false;
        }else{
            console.log("else selected");
            $scope.subDrinkWineShow = false;
            $scope.subDrinkSpiritShow = false;
        }
    })

    $scope.addDrinkModal = false;
    $scope.changeDrinkModal = false;

    $scope.showModal = function(){
        $scope.addDrinkModal = true;
    }
    $scope.hideModal = function(){
        $scope.addDrinkModal = false;
    }
    drinkService.getDrink().then(function(data){
        console.log(data);
        $scope.drinks = data;
    }, function(err){
        console.log(err);
    })
    $scope.drinkSelection = ["Vali Liik", "Vein ja mull", "Lahja alkohol", "Kange alkohol", "Kokteilid", "Alkoholivabad joogid", "Kuumad joogid"];
    $scope.subDrinkWine = ["Vali alamkategooria", "Valge", "Punane", "Roosa", "Šampanja", "Vahuvein", "Portvein ja šerri"];
    $scope.subDrinkSpirit = ["Vali alamkategooria","Konjak", "Kalvados", "Brändi", "Viski", "Rumm", "Džinn", "Viin", "Tekiila", "Liköör", "Vermut", "Bitter"];
    $scope.selected = $scope.drinkSelection[0];
    $scope.selectedWine = $scope.subDrinkWine[0];
    $scope.selectedSpirit = $scope.subDrinkSpirit[0];


    $scope.submitDrink = function(){
        if($scope.selectedWine === "Vali alamkategooria" && $scope.selectedSpirit !=="Vali alamkategooria"){
            drinkService.addDrink($scope.drink.nameEst, $scope.selected,
                $scope.drink.price, $scope.drink.descEst,
                $scope.drink.nameEng, $scope.drink.descEng, $scope.selectedSpirit,
                $scope.drink.nameFin, $scope.drink.descFin,
                $scope.drink.nameRus, $scope.drink.descRus)
            .then(function(data){
                drinkService.getDrink().then(function(data){
                    $scope.drink = {};
                    $scope.drinks = data;
                    $scope.selectedSpirit = $scope.subDrinkSpirit[0];
                    $scope.selected = $scope.drinkSelection[0];
                }, function(err){
                    console.log(err);
                })
            }, function(err){
                console.log(err);
            })
        }
        else if($scope.selectedSpirit === "Vali alamkategooria" && $scope.selectedWine !=="Vali alamkategooria"){
            drinkService.addDrink($scope.drink.nameEst, $scope.selected,
                $scope.drink.price, $scope.drink.descEst,
                $scope.drink.nameEng, $scope.drink.descEng, $scope.selectedWine, $scope.drink.nameFin, $scope.drink.descFin,
                $scope.drink.nameRus, $scope.drink.descRus)
            .then(function(data){
                drinkService.getDrink().then(function(data){
                    $scope.drink = {};
                    $scope.drinks = data;
                    $scope.selectedWine = $scope.subDrinkWine[0];
                    $scope.selected = $scope.drinkSelection[0];
                }, function(err){
                    console.log(err);
                })
            }, function(err){
                console.log(err);
            })
        }
        else if($scope.selectedSpirit === "Vali alamkategooria" && $scope.selectedWine ==="Vali alamkategooria"){
            drinkService.addDrink($scope.drink.nameEst, $scope.selected,
                $scope.drink.price, $scope.drink.descEst,
                $scope.drink.nameEng, $scope.drink.descEng, "", $scope.drink.nameFin, $scope.drink.descFin,
                $scope.drink.nameRus, $scope.drink.descRus)
            .then(function(data){
                drinkService.getDrink().then(function(data){
                    $scope.drink = {};
                    $scope.drinks = data;
                }, function(err){
                    console.log(err);
                })
            }, function(err){
                console.log(err);
            })
        }

    }

    $scope.removeDrink = function(id){
        drinkService.removeDrink(id).then(function(data){
            console.log(data);
            drinkService.getDrink().then(function(data){
                console.log(data);
                $scope.drinks = data;
            }, function(err){
                console.log(err);
            })

        }, function(err){
            console.log(err);
        })
    }
    $scope.changeDrink = function(id){
        drinkService.getDrinkById(id).then(function(data){
            $scope.changeDrinkModal = true;
            $scope.nameEditEst = data.name;
            $scope.editPrice = data.price;
            $scope.selected = data.type;
            $scope.descEditEst = data.description;
            $scope.nameEditEng = data.nameEng;
            $scope.descEditEng = data.descEng;
            $scope.nameEditFin = data.nameFin;
            $scope.descEditFin = data.descFin;
            $scope.nameEditRus = data.nameRus;
            $scope.descEditRus = data.descRus;
            $scope.drinkId = id;
        })
    }
    $scope.updateDrink = function(){
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

        estName = $scope.nameEditEst;
        editPrice = $scope.editPrice;
        estDesc = $scope.descEditEst;
        engName = $scope.nameEditEng;
        engDesc = $scope.descEditEng;
        finName = $scope.nameEditFin;
        finDesc = $scope.descEditFin;
        rusName = $scope.nameEditRus;
        rusDesc = $scope.descEditRus;

        console.log(estName); 
        console.log(editPrice); 
        console.log(estDesc); 
        console.log(engName); 
        console.log(engDesc); 
        console.log(finName); 
        console.log(finDesc); 
        console.log(rusName); 
        console.log(rusDesc); 

        if($scope.nameEditEst === "{{nameEstEdit}}"){
            estName = $scope.nameEstEdit;
        }
        if($scope.editPrice === "{{priceEdit}}"){
            editPrice = $scope.priceEdit;
        }
        if($scope.descEditEst === "{{descEstEdit}}"){
            estDesc = $scope.descEstEdit
        }
        if($scope.nameEditEng ==="{{nameEngEdit}}"){
            engName = $scope.nameEngEdit;
        }
        if($scope.descEditEng === "{{descEngEdit}}"){
            engDesc = $scope.descEngEdit;
        }
        if($scope.nameEditFin ==="{{nameFinEdit}}"){
            finName = $scope.nameFinEdit;
        }
        if($scope.descEditFin === "{{descFinEdit}}"){
            finDesc = $scope.descFinEdit;
        }
        if($scope.nameEditRus ==="{{nameRusEdit}}"){
            rusName = $scope.nameFinEdit;
        }
        if($scope.descEditRus === "{{descRusEdit}}"){
            rusDesc = $scope.descRusEdit;
        }

        drinkService.updateDrink($scope.drinkId, estName, estDesc, editPrice,
        $scope.selected, engName, engDesc, finName, finDesc, rusName, rusDesc).then(function(data){
            console.log(data);
            $scope.changeDrinkModal = false;
            drinkService.getDrink().then(function(data){
                $scope.drinks = data;
            })
        })
    }
});
