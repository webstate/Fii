var designViewController = angular.module('designViewController', []);

designViewController.controller('designViewController', function($scope, pictureService, landingTextService){
    $scope.activeTab = 'est';
    $scope.changeActiveTab = function(item){
        $scope.activeTab = item;
    }
    $scope.estDesign = true;
    $scope.engDesign = false;
    $scope.finDesign = false;
    $scope.rusDesign = false;

    $scope.changeEng = function(){
        $scope.estDesign = false;
        $scope.engDesign = true;
        $scope.finDesign = false;
        $scope.rusDesign = false;
    }

    $scope.changeEst = function(){
        $scope.estDesign = true;
        $scope.engDesign = false;
        $scope.finDesign = false;
        $scope.rusDesign = false;
    }

    $scope.changeFin = function(){
        $scope.finDesign = true;
        $scope.estDesign = false;
        $scope.engDesign = false;
        $scope.rusDesign = false;
    }

    $scope.changeRus = function(){
        $scope.finDesign = false;
        $scope.estDesign = false;
        $scope.engDesign = false;
        $scope.rusDesign = true;
    }



    // LANDING PAGE ESTONIAN VERSION

    landingTextService.getLandingText("workerTitle", "ee").then(function(data){
        if(data.text == null){
            $scope.workerTitle = {
                title: "There is nothing yet inserted"
            }

        }else{
            $scope.workerTitle = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('workerTitle.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitle", val, "ee");
    })

    landingTextService.getLandingText("workerText", "ee").then(function(data){
        if(data.text == null){
            $scope.worker = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.worker = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('worker.text', function(val){
        landingTextService.addOrUpdateLandingText("workerText", val, "ee");
    })

    landingTextService.getLandingText("menuTitle", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTitle = {
                title: "There is nothint yet inserted"
            }
        }else{
            $scope.menuTitle = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('menuTitle.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitle", val, "ee");
    })

    landingTextService.getLandingText("menuText", "ee").then(function(data){
        if(data.text == null){
            $scope.menuText = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.menuText = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('menuText.text', function(val){
        landingTextService.addOrUpdateLandingText("menuText", val, "ee");
    })

    landingTextService.getLandingText("tastingText", "ee").then(function(data){
        if(data.text == null){
            $scope.tastingText = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.tastingText = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('tastingText.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingText", val, "ee");
    })

    landingTextService.getLandingText("eventTitle", "ee").then(function(data){
        if(data.text == null){
            $scope.eventTitle = {
                title: "There is nothint yet inserted"
            }
        }else{
            $scope.eventTitle = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('eventTitle.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitle", val, "ee");
    })

    landingTextService.getLandingText("contactCall", "ee").then(function(data){
        if(data.text == null){
            $scope.contactCall = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactCall = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactCall.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCall", val, "ee");
    })

    $scope.$watch('contactCallEst.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallEst", val, "ee");
    })

    landingTextService.getLandingText("contactVisitEst", "ee").then(function(data){
        if(data.text == null){
            $scope.contactVisitEst = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactVisitEst = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactVisitEst.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitEst", val, "ee");
    })

    landingTextService.getLandingText("contactEmailEst", "ee").then(function(data){
        if(data.text == null){
            $scope.contactEmailEst = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactEmailEst = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactEmailEst.text', function(val){
        landingTextService.addOrUpdateLandingText("contactEmailEst", val, "ee");
    })

    landingTextService.getLandingText("contactTimeWorkWeek", "ee").then(function(data){
        if(data.text == null){
            $scope.workWeekTime = "Nothing here";
        }
        $scope.workWeekTime = data.text;
    })

    landingTextService.getLandingText("contactTimeWeekend", "ee").then(function(data){
        if(data.text == null){
            $scope.weekendTime = "Nothing here";
        }
        $scope.weekendTime = data.text;
    })
    $scope.insertWeekend = function(){
        var update = "";
        update = $scope.weekendTime;
        if($scope.weekendTime === "{{editWeekendTime}}"){
            update = $scope.editWeekendTime;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWeekend", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWeekend", "ee").then(function(data){
                if(data.text == null){
                    $scope.weekendTime = "Nothing here";
                }
                $scope.weekendTime = data.text;
            })
        });
    }
    $scope.insertWorkWeek = function(){
        var update = "";
        update = $scope.workWeekTime;
        if($scope.workWeekTime === "{{editWorkWeekTime}}"){
            update = $scope.editWorkWeekTime;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeek", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWorkWeek", "ee").then(function(data){
                if(data.text == null){
                    $scope.workWeekTime = "Nothing here";
                }
                $scope.workWeekTime = data.text;
            })
        });
    }

    // LANDING PAGE ENGLISH VERSION


    landingTextService.getLandingText("workerTitleEng", "ee").then(function(data){
        if(data.text == null){
            $scope.workerTitleEng = {
                title: "There is nothing yet inserted"
            }

        }else{
            $scope.workerTitleEng = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('workerTitleEng.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitleEng", val, "ee");
    })

    landingTextService.getLandingText("workerTextEng", "ee").then(function(data){
        if(data.text == null){
            $scope.workerEng = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.workerEng = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('workerEng.text', function(val){
        landingTextService.addOrUpdateLandingText("workerTextEng", val, "ee");
    })

    landingTextService.getLandingText("menuTitleEng", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTitleEng = {
                title: "There is nothint yet inserted"
            }
        }else{
            $scope.menuTitleEng = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('menuTitleEng.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitleEng", val, "ee");
    })

    landingTextService.getLandingText("menuTextEng", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTextEng = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.menuTextEng = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('menuTextEng.text', function(val){
        landingTextService.addOrUpdateLandingText("menuTextEng", val, "ee");
    })

    landingTextService.getLandingText("tastingTextEng", "ee").then(function(data){
        if(data.text == null){
            $scope.tastingTextEng = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.tastingTextEng = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('tastingTextEng.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingTextEng", val, "ee");
    })

    landingTextService.getLandingText("eventTitleEng", "ee").then(function(data){
        if(data.text == null){
            $scope.eventTitleEng = {
                title: "There is nothint yet inserted"
            }
        }else{
            $scope.eventTitleEng = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('eventTitleEng.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitleEng", val, "ee");
    })

    landingTextService.getLandingText("contactCallEst", "ee").then(function(data){
        if(data.text == null){
            $scope.contactCallEst = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactCallEst = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })

    landingTextService.getLandingText("contactCallEng", "ee").then(function(data){
        if(data.text == null){
            $scope.contactCallEng = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactCallEng = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactCallEng.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallEng", val, "ee");
    })

    landingTextService.getLandingText("contactVisitEng", "ee").then(function(data){
        if(data.text == null){
            $scope.contactVisitEng = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactVisitEng = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactVisitEng.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitEng", val, "ee");
    })


    landingTextService.getLandingText("contactEmailEng", "ee").then(function(data){
        if(data.text == null){
            $scope.contactEmailEng = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactEmailEng = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactEmailEng.text', function(val){
        landingTextService.addOrUpdateLandingText("contactEmailEng", val, "ee");
    })


    landingTextService.getLandingText("contactTimeWorkWeekEng", "ee").then(function(data){
        if(data.text == null){
            $scope.workWeekTimeEng = "Nothing here";
        }
        $scope.workWeekTimeEng = data.text;
    })

    landingTextService.getLandingText("contactTimeWeekendEng", "ee").then(function(data){
        if(data.text == null){
            $scope.weekendTimeEng = "Nothing here";
        }
        $scope.weekendTimeEng = data.text;
    })
    $scope.insertWeekendEng = function(){
        var update = "";
        update = $scope.weekendTimeEng;
        if($scope.weekendTimeEng === "{{editWeekendTimeEng}}"){
            update = $scope.editWeekendTimeEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWeekendEng", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWeekendEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.weekendTimeEng = "Nothing here";
                }
                $scope.weekendTimeEng = data.text;
            })
        });
    }
    $scope.insertWorkWeekEng = function(){
        var update = "";
        update = $scope.workWeekTimeEng;
        if($scope.workWeekTimeEng === "{{editWorkWeekTimeEng}}"){
            update = $scope.editWorkWeekTimeEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeekEng", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWorkWeekEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.workWeekTimeEng = "Nothing here";
                }
                $scope.workWeekTimeEng = data.text;
            })
        });
    }

////// FINNISH LANGUAGE DESIGN VIEW

    landingTextService.getLandingText("workerTitleFin", "ee").then(function(data){
        if(data.text == null){
            $scope.workerTitleFin = {
                title: "There is nothing yet inserted"
            }

        }else{
            $scope.workerTitleFin = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('workerTitleFin.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitleFin", val, "ee");
    })

    landingTextService.getLandingText("workerTextFin", "ee").then(function(data){
        if(data.text == null){
            $scope.workerFin = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.workerFin = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('workerFin.text', function(val){
        landingTextService.addOrUpdateLandingText("workerTextFin", val, "ee");
    })

    landingTextService.getLandingText("menuTitleFin", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTitleFin = {
                title: "There is nothint yet inserted"
            }
        }else{
            $scope.menuTitleFin = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('menuTitleFin.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitleFin", val, "ee");
    })

    landingTextService.getLandingText("menuTextFin", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTextFin = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.menuTextFin = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('menuTextFin.text', function(val){
        landingTextService.addOrUpdateLandingText("menuTextFin", val, "ee");
    })

    landingTextService.getLandingText("tastingTextFin", "ee").then(function(data){
        if(data.text == null){
            $scope.tastingTextFin = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.tastingTextFin = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('tastingTextFin.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingTextFin", val, "ee");
    })

    landingTextService.getLandingText("eventTitleFin", "ee").then(function(data){
        if(data.text == null){
            $scope.eventTitleFin = {
                title: "There is nothint yet inserted"
            }
        }else{
            $scope.eventTitleFin = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('eventTitleFin.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitleFin", val, "ee");
    })

    landingTextService.getLandingText("contactCallFin", "ee").then(function(data){
        if(data.text == null){
            $scope.contactCallFin = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactCallFin = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactCallFin.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallFin", val, "ee");
    })

    landingTextService.getLandingText("contactVisitFin", "ee").then(function(data){
        if(data.text == null){
            $scope.contactVisitFin = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactVisitFin = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactVisitFin.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitFin", val, "ee");
    })


    landingTextService.getLandingText("contactEmailFin", "ee").then(function(data){
        if(data.text == null){
            $scope.contactEmailFin = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactEmailFin = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactEmailFin.text', function(val){
        landingTextService.addOrUpdateLandingText("contactEmailFin", val, "ee");
    })


    landingTextService.getLandingText("contactTimeWorkWeekFin", "ee").then(function(data){
        if(data.text == null){
            $scope.workWeekTimeFin = "Nothing here";
        }
        $scope.workWeekTimeFin = data.text;
    })

    landingTextService.getLandingText("contactTimeWeekendFin", "ee").then(function(data){
        if(data.text == null){
            $scope.weekendTimeFin = "Nothing here";
        }
        $scope.weekendTimeFin = data.text;
    })
    $scope.insertWeekendFin = function(){
        var update = "";
        update = $scope.weekendTimeFin;
        if($scope.weekendTimeFin === "{{editWeekendTimeFin}}"){
            update = $scope.editWeekendTimeFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWeekendFin", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWeekendFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.weekendTimeFin = "Nothing here";
                }
                $scope.weekendTimeFin = data.text;
            })
        });
    }
    $scope.insertWorkWeekFin = function(){
        var update = "";
        update = $scope.workWeekTimeFin;
        if($scope.workWeekTimeFin === "{{editWorkWeekTimeFin}}"){
            update = $scope.editWorkWeekTimeFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeekFin", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWorkWeekFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.workWeekTimeFin = "Nothing here";
                }
                $scope.workWeekTimeFin = data.text;
            })
        });
    }

//// RUSSIAN DESIGN VIEW


    landingTextService.getLandingText("workerTitleRus", "ee").then(function(data){
        if(data.text == null){
            $scope.workerTitleRus = {
                title: "There is nothing yet inserted"
            }

        }else{
            $scope.workerTitleRus = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('workerTitleRus.title', function(val){
        landingTextService.addOrUpdateLandingText("workerTitleRus", val, "ee");
    })

    landingTextService.getLandingText("workerTextRus", "ee").then(function(data){
        if(data.text == null){
            $scope.workerRus = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.workerRus = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('workerRus.text', function(val){
        landingTextService.addOrUpdateLandingText("workerTextRus", val, "ee");
    })

    landingTextService.getLandingText("menuTitleRus", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTitleRus = {
                title: "There is nothint yet inserted"
            }
        }else{
            $scope.menuTitleRus = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('menuTitleRus.title', function(val){
        landingTextService.addOrUpdateLandingText("menuTitleRus", val, "ee");
    })

    landingTextService.getLandingText("menuTextRus", "ee").then(function(data){
        if(data.text == null){
            $scope.menuTextRus = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.menuTextRus = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('menuTextRus.text', function(val){
        landingTextService.addOrUpdateLandingText("menuTextRus", val, "ee");
    })

    landingTextService.getLandingText("tastingTextRus", "ee").then(function(data){
        if(data.text == null){
            $scope.tastingTextRus = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.tastingTextRus = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('tastingTextRus.text', function(val){
        landingTextService.addOrUpdateLandingText("tastingTextRus", val, "ee");
    })

    landingTextService.getLandingText("eventTitleRus", "ee").then(function(data){
        if(data.text == null){
            $scope.eventTitleRus = {
                title: "There is nothint yet inserted"
            }
        }else{
            $scope.eventTitleRus = {
                title: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('eventTitleRus.title', function(val){
        landingTextService.addOrUpdateLandingText("eventTitleRus", val, "ee");
    })

    landingTextService.getLandingText("contactCallRus", "ee").then(function(data){
        if(data.text == null){
            $scope.contactCallRus = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactCallRus = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactCallRus.text', function(val){
        landingTextService.addOrUpdateLandingText("contactCallRus", val, "ee");
    })

    landingTextService.getLandingText("contactVisitRus", "ee").then(function(data){
        if(data.text == null){
            $scope.contactVisitRus = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactVisitRus = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactVisitRus.text', function(val){
        landingTextService.addOrUpdateLandingText("contactVisitRus", val, "ee");
    })


    landingTextService.getLandingText("contactEmailRus", "ee").then(function(data){
        if(data.text == null){
            $scope.contactEmailRus = {
                text: "There is nothint yet inserted"
            }
        }else{
            $scope.contactEmailRus = {
                text: data.text
            }
        }
    }, function(err){
        console.log(err);
    })
    $scope.$watch('contactEmailRus.text', function(val){   // watch is so-called digest cycle, considered as a loop during which angular checks if there are any changes to all the variables watched
        landingTextService.addOrUpdateLandingText("contactEmailRus", val, "ee");
    })


    landingTextService.getLandingText("contactTimeWorkWeekRus", "ee").then(function(data){ // This is a service. Once the program has the promice "getLandingText" it does the following function
        if(data.text == null){  //"ee" is a language, "contactTimeForWeekRus" is a place
            $scope.workWeekTimeRus = "Nothing here";
        }
        $scope.workWeekTimeRus = data.text;
    })

    landingTextService.getLandingText("contactTimeWeekendRus", "ee").then(function(data){
        if(data.text == null){
            $scope.weekendTimeRus = "Nothing here";
        }
        $scope.weekendTimeRus = data.text;
    })
    $scope.insertWeekendRus = function(){
        var update = "";
        update = $scope.weekendTimeRus;
        if($scope.weekendTimeRus === "{{editWeekendTimeRus}}"){
            update = $scope.editWeekendTimeRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWeekendRus", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWeekendRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.weekendTimeRus = "Nothing here";
                }
                $scope.weekendTimeRus = data.text;
            })
        });
    }
    $scope.insertWorkWeekRus = function(){
        var update = "";
        update = $scope.workWeekTimeRus;
        if($scope.workWeekTimeRus === "{{editWorkWeekTimeRus}}"){
            update = $scope.editWorkWeekTimeRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("contactTimeWorkWeekRus", update, "ee").then(function(data){
            landingTextService.getLandingText("contactTimeWorkWeekRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.workWeekTimeRus = "Nothing here";
                }
                $scope.workWeekTimeRus = data.text;
            })
        });
    }

    landingTextService.getLandingText("bannerTitleEst", "ee").then(function(data){
        console.log(data);
        if(data.text == null){
            console.log("data.text on nulll: " + data.text);
            $scope.bannerTitleEst = "Nothing here";
        }
        console.log("data.text niisama: " + data.text);
        $scope.bannerTitleEst = data.text;
    })

    $scope.insertBannerTitleEst = function(){
        var update = "";
        update = $scope.bannerTitleEst;
        if($scope.bannerTitleEst === "{{editBannerTitleEst}}"){
            update = $scope.editBannerTitleEst;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("bannerTitleEst", update, "ee").then(function(data){
            landingTextService.getLandingText("bannerTitleEst", "ee").then(function(data){
                if(data.text == null){
                    $scope.bannerTitleEst = "Nothing here";
                }
                $scope.bannerTitleEst = data.text;
            })
        });
    }



    landingTextService.getLandingText("bannerTitleEng", "ee").then(function(data){
        console.log(data);
        if(data.text == null){
            console.log("data.text on nulll: " + data.text);
            $scope.bannerTitleEng = "Nothing here";
        }
        console.log("data.text niisama: " + data.text);
        $scope.bannerTitleEng = data.text;
    })

    $scope.insertBannerTitleEng = function(){
        var update = "";
        update = $scope.bannerTitleEng;
        if($scope.bannerTitleEng === "{{editBannerTitleEng}}"){
            update = $scope.editBannerTitleEng;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("bannerTitleEng", update, "ee").then(function(data){
            landingTextService.getLandingText("bannerTitleEng", "ee").then(function(data){
                if(data.text == null){
                    $scope.bannerTitleEng = "Nothing here";
                }
                $scope.bannerTitleEng = data.text;
            })
        });
    }

    landingTextService.getLandingText("bannerTitleFin", "ee").then(function(data){
        console.log(data);
        if(data.text == null){
            console.log("data.text on nulll: " + data.text);
            $scope.bannerTitleFin = "Nothing here";
        }
        console.log("data.text niisama: " + data.text);
        $scope.bannerTitleFin = data.text;
    })

    $scope.insertBannerTitleFin = function(){
        var update = "";
        update = $scope.bannerTitleFin;
        if($scope.bannerTitleFin === "{{editBannerTitleFin}}"){
            update = $scope.editBannerTitleFin;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("bannerTitleFin", update, "ee").then(function(data){
            landingTextService.getLandingText("bannerTitleFin", "ee").then(function(data){
                if(data.text == null){
                    $scope.bannerTitleFin = "Nothing here";
                }
                $scope.bannerTitleFin = data.text;
            })
        });
    }

    landingTextService.getLandingText("bannerTitleRus", "ee").then(function(data){
        console.log(data);
        if(data.text == null){
            console.log("data.text on nulll: " + data.text);
            $scope.bannerTitleRus = "Nothing here";
        }
        console.log("data.text niisama: " + data.text);
        $scope.bannerTitleRus = data.text;
    })

    $scope.insertBannerTitleRus = function(){
        var update = "";
        update = $scope.bannerTitleRus;
        if($scope.bannerTitleFin === "{{editBannerTitleRus}}"){
            update = $scope.editBannerTitleRus;
        }
        console.log(update);
        landingTextService.addOrUpdateLandingText("bannerTitleRus", update, "ee").then(function(data){
            landingTextService.getLandingText("bannerTitleRus", "ee").then(function(data){
                if(data.text == null){
                    $scope.bannerTitleRus = "Nothing here";
                }
                $scope.bannerTitleRus = data.text;
            })
        });
    }



    pictureService.getMenuPicture('map').then(function(data){
        $scope.mapPicturePath = data.picturePath;
    })
    pictureService.getMenuPicture('event').then(function(data){
        $scope.eventPicturePath = data.picturePath;
    })
    pictureService.getMenuPicture('eventEst').then(function(data){
        $scope.eventPicturePathEst = data.picturePath;
    })
    pictureService.getMenuPicture('eventFin').then(function(data){
        $scope.eventPicturePathFin = data.picturePath;
    })
    pictureService.getMenuPicture('eventEng').then(function(data){
        $scope.eventPicturePathEng = data.picturePath;
    })
    pictureService.getMenuPicture('eventRus').then(function(data){
        $scope.eventPicturePathRus = data.picturePath;
    })
    pictureService.getMenuPicture('second').then(function(data){
        $scope.secondPicturePath = data.picturePath;
    })
    pictureService.getMenuPicture('first').then(function(data){
        $scope.firstPicturePath = data.picturePath;
    })
    pictureService.getMenuPicture('third').then(function(data){
        $scope.thirdPicturePath = data.picturePath;
    })
    $scope.user = {
        name: 'awesome user'
    };
    $scope.$watch('user.name', function(val){
        console.log(val);
    })
    pictureService.getBannerPicture().then(function(data){
        var item = data.length-1;
        $scope.bannerImage = data[item].picturePath;
    }, function(err){
        console.log(err);
    })
    $scope.filesChanged = function(elm){
        console.log("tulen siia");
        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function(file){
            $scope.bannerImage = file;
            pictureService.addBannerPicture(file).then(function(data){
                console.log(data);
            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
    $scope.menuPicChanged = function(elm, type){
        console.log(elm, type);
        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function(file){
            if(type==="first"){
                $scope.firstPicturePath = file;
            }
            if(type==="second"){
                $scope.secondPicturePath = file;
            }
            if(type==="third"){
                $scope.thirdPicturePath = file;
            }
            if(type==="eventEst"){
                $scope.eventPicturePathEst = file;
            }
            if(type==="eventEng"){
                $scope.eventPicturePathEng = file;
            }
            if(type==="eventFin"){
                $scope.eventPicturePathFin = file;
            }
            if(type==="eventRus"){
                $scope.eventPicturePathRus = file;
            }
            pictureService.addMenuPicture(type, file).then(function(data){
                console.log(elm.parentNode);
                elm.parentNode.style.backgroundImage = "url("+data+")";
            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
    $scope.eventPicChanged = function(elm, type){

        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function(file){
            if(type==="event"){
                $scope.eventPicturePath = file;
            }
            if(type==="eventEst"){
                $scope.eventPicturePathEst = file;
            }
            if(type==="eventEng"){
                $scope.eventPicturePathEng = file;
            }
            if(type==="eventFin"){
                $scope.eventPicturePathFin = file;
            }
            if(type==="eventRus"){
                $scope.eventPicturePathRus = file;
            }
            pictureService.addMenuPicture(type, file).then(function(data){
                elm.parentNode.style.backgroundImage = "url("+data+")";
                $timeout(function(){
                    $scope.$apply();
                }, 100);
            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
    $scope.mapPicChanged = function(elm, type){

        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function(file){
            console.log(type);
            if(type==="map"){
                $scope.mapPicturePath = file;
            }
            if(type==="event"){
                $scope.eventPicturePath = file;
            }
            if(type==="eventEst"){
                $scope.eventPicturePathEst = file;
            }
            if(type==="eventEng"){
                $scope.eventPicturePathEng = file;
            }
            if(type==="eventFin"){
                $scope.eventPicturePathFin = file;
            }
            if(type==="eventRus"){
                $scope.eventPicturePathRus = file;
            }
            if(type==="first"){
                $scope.firstPicturePath = file;
            }
            if(type==="second"){
                $scope.secondPicturePath = file;
            }
            if(type==="third"){
                $scope.thirdPicturePath = file;
            }
            pictureService.addMenuPicture(type, file).then(function(data){

            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
})
