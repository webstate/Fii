var drinkCtrl = angular.module('drinkCtrl', []);

drinkCtrl.controller('drinkCtrl', function($scope, drinkService, $rootScope){
    $rootScope.activeDrinkTab = "wine";
    $rootScope.activeSubTab = "white";
    $rootScope.activeSubTabSpirit = "conac";

    drinkService.getWine().then(function(data){
        var holder = [];
        angular.forEach(data, function(value){
            if(value.subCategory === "Valge"){
                holder.push(value);
            }
        })
        $scope.drinks = holder;
    }, function(err){
        console.log(err);
    })

    $scope.wineSub = true;
    $scope.$watch('$root.lang', function(){
        if($rootScope.lang ==="ee"){
            $scope.$watch('$root.activeDrinkTab', function(){
                if($rootScope.activeDrinkTab ==="wine"){
                    $scope.wineSubEst = true;
                    $scope.wineSubEng = false;
                    $scope.wineSubFin = false;
                    $scope.wineSubRus = false;

                    $scope.spiritSubFin = false;
                    $scope.spiritSubRus = false;
                    $scope.spiritSubEst = false;
                    $scope.spiritSubEng = false;
                }
                if($rootScope.activeDrinkTab === "hardalco"){
                    $scope.spiritSubEst = true;
                    $scope.spiritSubEng = false;
                    $scope.spiritSubFin = false;
                    $scope.spiritSubRus = false;

                    $scope.wineSubEst = false;
                    $scope.wineSubEng = false;
                    $scope.wineSubFin = false;
                    $scope.wineSubRus = false;
                }
                if($rootScope.activeDrinkTab === "beer"){
                    $scope.wineSubEst = false;
                    $scope.spiritSubEst = false;
                }
                if($rootScope.activeDrinkTab === "nonalco"){
                    $scope.wineSubEst = false;
                    $scope.spiritSubEst = false;
                }
                if($rootScope.activeDrinkTab === "hotdrink"){
                    $scope.wineSubEst = false;
                    $scope.spiritSubEst = false;
                }
                if($rootScope.activeDrinkTab === "cocktail"){
                    $scope.wineSubEst = false;
                    $scope.spiritSubEst = false;
                }
            })
        }
        if($rootScope.lang ==="en"){
            $scope.$watch('$root.activeDrinkTab', function(){
                if($rootScope.activeDrinkTab === "wine"){
                    $scope.wineSubEst = false;
                    $scope.wineSubEng = true;

                    $scope.wineSubFin = false;
                    $scope.wineSubRus = false;
                    $scope.spiritSubFin = false;
                    $scope.spiritSubRus = false;

                    $scope.spiritSubEst = false;
                    $scope.spiritSubEng = false;
                }
                if($rootScope.activeDrinkTab ==="hardalco"){
                    $scope.spiritSubEst = false;
                    $scope.spiritSubEng = true;

                    $scope.wineSubEst = false;
                    $scope.wineSubEng = false;
                    $scope.wineSubFin = false;
                    $scope.wineSubRus = false;
                    $scope.spiritSubFin = false;
                    $scope.spiritSubRus = false;
                }
                if($rootScope.activeDrinkTab === "beer"){
                    $scope.wineSubEng = false;
                    $scope.spiritSubEng = false;
                }
                if($rootScope.activeDrinkTab === "nonalco"){
                    $scope.wineSubEng = false;
                    $scope.spiritSubEng = false;
                }
                if($rootScope.activeDrinkTab === "hotdrink"){
                    $scope.wineSubEng = false;
                    $scope.spiritSubEng = false;
                }
                if($rootScope.activeDrinkTab === "cocktail"){
                    $scope.wineSubEng = false;
                    $scope.spiritSubEng = false;
                }
            })
        }
        if($rootScope.lang ==="fi"){
            $scope.$watch('$root.activeDrinkTab', function(){
                if($rootScope.activeDrinkTab === "wine"){
                    $scope.wineSubEst = false;
                    $scope.wineSubEng = false;

                    $scope.wineSubFin = true;
                    $scope.wineSubRus = false;
                    $scope.spiritSubFin = false;
                    $scope.spiritSubRus = false;

                    $scope.spiritSubEst = false;
                    $scope.spiritSubEng = false;
                }
                if($rootScope.activeDrinkTab ==="hardalco"){
                    $scope.spiritSubEst = false;
                    $scope.spiritSubEng = false;

                    $scope.wineSubEst = false;
                    $scope.wineSubEng = false;
                    $scope.wineSubFin = false;
                    $scope.wineSubRus = false;
                    $scope.spiritSubFin = true;
                    $scope.spiritSubRus = false;
                }
                if($rootScope.activeDrinkTab === "beer"){
                    $scope.wineSubFin = false;
                    $scope.spiritSubFin = false;
                }
                if($rootScope.activeDrinkTab === "nonalco"){
                    $scope.wineSubFin = false;
                    $scope.spiritSubFin = false;
                }
                if($rootScope.activeDrinkTab === "hotdrink"){
                    $scope.wineSubFin = false;
                    $scope.spiritSubFin = false;
                }
                if($rootScope.activeDrinkTab === "cocktail"){
                    $scope.wineSubFin = false;
                    $scope.spiritSubFin = false;
                }
            })
        }
        if($rootScope.lang ==="ru"){
            $scope.$watch('$root.activeDrinkTab', function(){
                if($rootScope.activeDrinkTab === "wine"){
                    $scope.wineSubEst = false;
                    $scope.wineSubEng = false;

                    $scope.wineSubFin = false;
                    $scope.wineSubRus = true;
                    $scope.spiritSubFin = false;
                    $scope.spiritSubRus = false;

                    $scope.spiritSubEst = false;
                    $scope.spiritSubEng = false;
                }
                if($rootScope.activeDrinkTab ==="hardalco"){
                    $scope.spiritSubEst = false;
                    $scope.spiritSubEng = false;

                    $scope.wineSubEst = false;
                    $scope.wineSubEng = false;
                    $scope.wineSubFin = false;
                    $scope.wineSubRus = false;
                    $scope.spiritSubFin = false;
                    $scope.spiritSubRus = true;
                }
                if($rootScope.activeDrinkTab === "beer"){
                    $scope.wineSubRus = false;
                    $scope.spiritSubRus = false;
                }
                if($rootScope.activeDrinkTab === "nonalco"){
                    $scope.wineSubRus = false;
                    $scope.spiritSubRus = false;
                }
                if($rootScope.activeDrinkTab === "hotdrink"){
                    $scope.wineSubRus = false;
                    $scope.spiritSubRus = false;
                }
                if($rootScope.activeDrinkTab === "cocktail"){
                    $scope.wineSubRus = false;
                    $scope.spiritSubRus = false;
                }
            })
        }
    })

    $scope.sortBySubSpirit = function(sub){
        drinkService.getHard().then(function(data){
            var holder2 = data;
            console.log(holder2);
            var test2 = [];
            if(sub ==="conac"){
                $rootScope.activeSubTabSpirit = "conac";
                angular.forEach(holder2, function(value, key){
                    if(value.subCategory === "Konjak"){
                        test2.push(value);
                    }
                })
                $scope.drinks = test2;
            }
            if(sub ==="calv"){
                $rootScope.activeSubTabSpirit = "calv";
                angular.forEach(holder2, function(value, key){
                    if(value.subCategory === "Kalvados"){
                        test2.push(value);
                    }
                })
                $scope.drinks = test2;

            }
            if(sub ==="brand"){
                $rootScope.activeSubTabSpirit = "brand";
                angular.forEach(holder2, function(value, key){
                    if(value.subCategory === "Brändi"){
                        test2.push(value);
                    }
                })
                $scope.drinks = test2;
            }
            if(sub ==="whisk"){
                $rootScope.activeSubTabSpirit = "whisk";
                angular.forEach(holder2, function(value, key){
                    if(value.subCategory === "Viski"){
                        test2.push(value);
                    }
                })
                $scope.drinks = test2;
            }
            if(sub ==="rum"){
                $rootScope.activeSubTabSpirit = "rum";
                angular.forEach(holder2, function(value, key){
                    if(value.subCategory === "Rumm"){
                        test2.push(value);
                    }
                })
                $scope.drinks = test2;

            }
            if(sub ==="gin"){
                $rootScope.activeSubTabSpirit = "gin";
                angular.forEach(holder2, function(value, key){
                    if(value.subCategory === "Džinn"){
                        test2.push(value);
                    }
                })
                $scope.drinks = test2;

            }
            if(sub ==="vod"){
                $rootScope.activeSubTabSpirit = "vod";
                angular.forEach(holder2, function(value, key){
                    if(value.subCategory === "Viin"){
                        test2.push(value);
                    }
                })
                $scope.drinks = test2;

            }
            if(sub ==="teq"){
                $rootScope.activeSubTabSpirit = "teq";
                angular.forEach(holder2, function(value, key){
                    if(value.subCategory === "Tekiila"){
                        test2.push(value);
                    }
                })
                $scope.drinks = test2;

            }
            if(sub ==="liq"){
                $rootScope.activeSubTabSpirit = "liq";
                angular.forEach(holder2, function(value, key){
                    if(value.subCategory === "Liköör"){
                        test2.push(value);
                    }
                })
                $scope.drinks = test2;

            }
            if(sub ==="ver"){
                $rootScope.activeSubTabSpirit = "ver";
                angular.forEach(holder2, function(value, key){
                    if(value.subCategory === "Vermut"){
                        test2.push(value);
                    }
                })
                $scope.drinks = test2;

            }
            if(sub ==="bit"){
                $rootScope.activeSubTabSpirit = "bit";
                angular.forEach(holder2, function(value, key){
                    if(value.subCategory === "Bitter"){
                        test2.push(value);
                    }
                })
                $scope.drinks = test2;
            }
        })
    }
    $scope.sortBySub = function(sub){
        drinkService.getWine().then(function(data){
            $scope.drinks = data;
            var holder = $scope.drinks;
            var test = [];
            if(sub === "white"){
                $rootScope.activeSubTab = "white";
                angular.forEach(holder, function(value, key){
                    if(value.subCategory === "Valge"){
                        test.push(value);
                    }
                })
                $scope.drinks = test;
                console.log($scope.drinks);
            }
            if(sub === "red"){
                $rootScope.activeSubTab = "red";
                angular.forEach(holder, function(value, key){
                    if(value.subCategory === "Punane"){
                        test.push(value);
                    }
                })
                $scope.drinks = test;
            }
            if(sub === "rose"){
                $rootScope.activeSubTab = "rose";
                console.log(holder);
                angular.forEach(holder, function(value, key){
                    if(value.subCategory === "Roosa"){
                        test.push(value);
                    }
                })
                $scope.drinks = test;
            }
            if(sub === "champ"){
                $rootScope.activeSubTab = "champ";
                angular.forEach(holder, function(value, key){
                    if(value.subCategory === "Šampanja"){
                        test.push(value);
                    }
                })
                $scope.drinks = test;
            }
            if(sub === "prose"){
                $rootScope.activeSubTab = "prose";
                angular.forEach(holder, function(value, key){
                    if(value.subCategory === "Vahuvein"){
                        test.push(value);
                    }
                })
                $scope.drinks = test;
            }
            if(sub === "port"){
                $rootScope.activeSubTab = "port";
                angular.forEach(holder, function(value, key){
                    if(value.subCategory === "Portvein ja šerri"){
                        test.push(value);
                    }
                })
                $scope.drinks = test;
            }
        }, function(err){
            console.log(err);
        })


    }
    $scope.changeDrinks = function(type){
        if(type === "beer"){
            drinkService.getBeer().then(function(data){
                $rootScope.activeDrinkTab = "beer";
                console.log(data);
                $scope.drinks = data;
            })
        }
        if(type === "wine"){
            drinkService.getWine().then(function(data){
                $rootScope.activeDrinkTab = "wine";
                $rootScope.activeSubTab = "white";
                var holder = [];
                angular.forEach(data, function(value){
                    if(value.subCategory === "Valge"){
                        holder.push(value);
                    }
                })
                $scope.drinks = holder;
            })
        }
        if(type === "cocktail"){
            drinkService.getCocktails().then(function(data){
                $rootScope.activeDrinkTab = "cocktail";
                console.log(data);
                $scope.drinks = data;
            })
        }
        if(type === "nonalco"){
            drinkService.getNonAlco().then(function(data){
                $rootScope.activeDrinkTab = "nonalco";
                console.log(data);
                $scope.drinks = data;
            })
        }
        if(type === "hardalco"){
            drinkService.getHard().then(function(data){
                $rootScope.activeSubTabSpirit = "conac";
                $rootScope.activeDrinkTab = "hardalco";
                var holder2 = [];
                angular.forEach(data, function(value){
                    if(value.subCategory === "Konjak"){
                        holder2.push(value);
                    }
                })
                $scope.drinks = holder2;

            })
        }
        if(type === "hotdrink"){
            drinkService.getHot().then(function(data){
                $rootScope.activeDrinkTab = "hotdrink";
                console.log(data);
                $scope.drinks = data;
            })
        }
    }
})
