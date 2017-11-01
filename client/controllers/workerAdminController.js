var workerAdminController = angular.module('workerAdminController', []);

workerAdminController.controller('workerAdminController', function($scope, workerService, pictureService){
    $scope.workerModal = false;
    $scope.estModal = true;
    $scope.engModal = false;
    $scope.engEditModal = false;
    $scope.estEditModal = true;
    workerService.getWorkers().then(function(data){
        $scope.workers = data;
    }, function(err){
        console.log(err);
    })
    $scope.showModal = function(){
        $scope.workerModal = true;
    }
    $scope.hideModal = function(){
        $scope.workerModal = false;
    }
    $scope.filesChanged = function(elm){
        $scope.pictureElm = elm;
        var fd = new FormData();
        $scope.files = elm.files;
        angular.forEach($scope.files, function(file){
            fd.append('file', file);
        })
        pictureService.saveImage(fd).then(function(file){
            $scope.picture = file;
            elm.parentNode.childNodes[7].style.backgroundImage = "url("+file+")";
            elm.parentNode.childNodes[7].style.border = "none";
        }, function(err){
            console.log(err);
        })
    }
    $scope.submitWorker = function(){
        workerService.addWorker($scope.worker.name, $scope.worker.occupation, $scope.worker.info, $scope.picture,
             $scope.worker.infoEng, $scope.worker.occupationEng, $scope.worker.infoFin, $scope.worker.occupationFin,
             $scope.worker.infoRus, $scope.worker.occupationRus).then(function(data){

            $scope.pictureElm.parentNode.childNodes[7].style.backgroundImage = "none";
            $scope.pictureElm.parentNode.childNodes[7].style.border = "1px dashed #CCCCCC";
            $scope.worker = {};
            workerService.getWorkers().then(function(data){
                $scope.workers = data;
            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
    $scope.removeWorker = function(id){
        workerService.removeWorker(id).then(function(data){
            workerService.getWorkers().then(function(data){
                $scope.workers = data;
            }, function(err){
                console.log(err);
            })
        }, function(err){
            console.log(err);
        })
    }
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

    $scope.getWorker = function(id){
        $scope.workerModalEdit = true;
        workerService.getWorkerById(id).then(function(data){
            $scope.workerId = data._id;
            $scope.editNameEst = data.name;
            $scope.editOccupationEst = data.position;
            $scope.editInfoEst = data.information;
            $scope.editOccupationEng = data.occupationEng;
            $scope.editInfoEng = data.infoEng;
            $scope.editOccupationFin = data.occupationFin;
            $scope.editInfoFin = data.infoFin;
            $scope.editOccupationRus = data.occupationRus;
            $scope.editInfoRus = data.infoRus;
        })
    }
    $scope.updateWorker = function(){
        var name = "";
        var estOccupation = "";
        var editInfo = "";
        var engOccupation = "";
        var engInfo = "";
        var finOccupation = "";
        var finInfo = "";
        var rusOccupation = "";
        var rusInfo = "";

        estName = $scope.editNameEst;
        estOccupation = $scope.editOccupationEst;
        estInfo = $scope.editInfoEst;
        engOccupation = $scope.editOccupationEng;
        engInfo = $scope.editInfoEng;
        finOccupation = $scope.editOccupationFin;
        finInfo = $scope.editInfoFin;
        rusOccupation = $scope.editOccupationRus;
        rusInfo = $scope.editInfoRus;
        console.log(engInfo);

        if($scope.editNameEst === "{{nameEditEst}}"){
            estName = $scope.nameEditEst;
        }
        if($scope.editOccupationEst === "{{editOccupationEst}}"){
            estOccupation = $scope.editOccupationEst;
        }
        if($scope.editInfoEst === "{{infoEditEst}}"){
            estInfo = $scope.descEstEdit
        }
        if($scope.editOccupationEng ==="{{editOccupationEng}}"){
            engOccupation = $scope.editOccupationEng;
        }
        if($scope.editInfoEng === "{{infoEditEng}}"){
            engInfo = $scope.infoEditEng;
        }
        if($scope.editOccupationFin ==="{{editOccupationFin}}"){
            finOccupation = $scope.editOccupationFin;
        }
        if($scope.editInfoFin === "{{infoEditFin}}"){
            finInfo = $scope.infoEditFin;
        }
        if($scope.editOccupationRus ==="{{editOccupationRus}}"){
            rusOccupation = $scope.editOccupationRus;
        }
        if($scope.editInfoRus === "{{infoEditRus}}"){
            rusInfo = $scope.infoEditRus;
        }
        console.log(estName);
        console.log(estOccupation);
        console.log(estInfo);
        console.log(engOccupation);
        console.log(engInfo);
        console.log(finOccupation);
        console.log(finInfo);
        console.log(rusOccupation);
        console.log(rusInfo);

        workerService.updateWorker($scope.workerId, estName, estOccupation, estInfo,
            engOccupation, engInfo, finOccupation, finInfo, rusOccupation, rusInfo).then(function(data){
            workerService.getWorkers().then(function(data){
                $scope.workers = data;
            }, function(err){
                console.log(err);
            })
        })

    }


})
