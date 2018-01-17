var bronCtrl = angular.module('bronCtrl', []);

bronCtrl.controller('bronCtrl', function($rootScope, $scope, bookingService){
    $scope.newsLetter = {
        status:true
    };
    $scope.bronFirst = true;
    $scope.bronSecond = false;
    $scope.dropDownTimeEst = "Vali kellaaeg";
    $scope.dropDownPeopleEst = "Vali inimeste arv";
    $scope.dropDownTime = "Pick a time";
    $scope.dropDownPeople = "Number of people";

    $scope.dropDownPeopleRus = "Выберите количество людей";
    $scope.dropDownPeopleFin = "Valitse joukko ihmisiä";
    $scope.dropDownTimeRus = "Подобрать время";
    $scope.dropDownTimeFin = "Valitse aika";

    $scope.form = {
        showDropDownTimeEng: false,
        showDropDownTime : false,
        showDropDownPeople: false,
        showDropDownPeopleEng : false,
        showDropDownPeopleFin : false,
        showDropDownPeopleRus : false,
        showDropDownTimeFin : false,
        showDropDownTimeRus : false
    }
    $scope.backToFirstModal = function(){
        $scope.bronFirst = true;
        $scope.bronSecond = false;
    }
    $scope.closeModal = function(){
        $rootScope.bookingModal = false;
        $scope.bronFirst = true;
        $scope.bronSecond = false;
        $scope.dropDownTimeEst = "Vali kellaaeg";
        $scope.dropDownTime = "Pick a time";
        $scope.dropDownTimeRus = "Подобрать время";
        $scope.dropDownTimeFin = "Valitse aika";



        $scope.dropDownPeopleEst = "Vali inimeste arv";
        $scope.dropDownPeopleRus = "Выберите количество людей";
        $scope.dropDownPeopleFin = "Valitse joukko ihmisiä";
        $scope.dropDownPeople = "Number of people";

        $rootScope.nameEst = "";
        $rootScope.emailEst = "";
        $rootScope.phoneEst = "";
        $rootScope.nameEng = "";
        $rootScope.emailEng = "";
        $rootScope.phoneEng = "";
        $rootScope.dateEng = "";
        $rootScope.dateEst = "";

    }
    $scope.showRusTime = function(){
        $scope.form.showDropDownTimeRus = true;
    }
    $scope.showRusPeople = function(){
        $scope.form.showDropDownPeopleRus = true;
    }

    $scope.test2 = function(){
        $scope.form.showDropDownTimeEng = true;
    }
    $scope.test1 = function(){
        $scope.form.showDropDownPeopleEng = true;
    }
    $scope.test = function(){
        $scope.form.showDropDownPeople  = true;
    }
    $scope.test3 = function(){
        $scope.form.showDropDownTime = true;
    }

    $scope.mouseLeave = function(){
        $scope.form.showDropDownPeople = false;
    }

    $scope.mouseLeave2 = function(){
        $scope.form.showDropDownTime = false;
    }

    $scope.mouseLeaveFin2 = function(){
        $scope.form.showDropDownTimeFin = false;
    }

    $scope.mouseLeaveEng2 = function(){
        $scope.form.showDropDownTimeEng = false;
    }

    $scope.mouseLeaveRus2 = function(){
        $scope.form.showDropDownTimeRus = false;
    }

    $scope.mouseLeaveDate = function() {
        $scope.hideCalendar = true;
    }

    $scope.mouseLeaveFin = function(){
        $scope.form.showDropDownPeopleFin = false;
    }

    $scope.mouseLeaveRus = function(){
        $scope.form.showDropDownPeopleRus = false;
    }

    $scope.mouseLeaveEng = function(){
        $scope.form.showDropDownPeopleEng = false;
    }

    $scope.openTimeFin = function(){
        $scope.form.showDropDownTimeFin = true;
    }
    $scope.openPeopleFin = function(){
        $scope.form.showDropDownPeopleFin = true;
    }

    $scope.times = ["10:00","10:30","11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
        "14:00", "14:30","15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30","20:00", "20:30", "21:00", "21:30"];
    $scope.people = ["1 people", "2 people", "3 people", "4 people", "5 people", "6 people", "7 people", "8 people"];
    $scope.peopleEst = ["1 inimene", "2 inimest", "3 inimest", "4 inimest", "5 inimest", "6 inimest", "7 inimest", "8 inimest"];
    $scope.peopleRus = ["1 человек", "2 человек", "3 человека", "4 человек", "5 человек", "6 человек", "7 человек", "8 человек"];
    $scope.peopleFin = ["1 henkilöä", "2 henkilöä", "3 henkilöä", "4 henkilöä", "5 henkilöä", "6 henkilöä", "7 henkilöä", "8 henkilöä"];

    $scope.changeTime = function(item){
        $scope.form.showDropDownTimeEng = false;
        $scope.dropDownTime = item;

    }

    $scope.changeTimeEst = function(item){
        $scope.form.showDropDownTime = false;
        $scope.dropDownTimeEst = item;
    }
    $scope.changePeople = function(item){
        $scope.dropDownPeople = item;
        $scope.form.showDropDownPeopleEng = false;
    }
    $scope.changePeopleEst = function(item){
        $scope.dropDownPeopleEst = item;
        $scope.form.showDropDownPeople = false;
    }
    $scope.changePeopleRus= function(item){
        $scope.dropDownPeopleRus = item;
        $scope.form.showDropDownPeopleRus = false;
    }
    $scope.changeTimeRus = function(item){
        $scope.form.showDropDownTimeRus = false;
        $scope.dropDownTimeRus = item;
    }
    $scope.changePeopleFin= function(item){
        $scope.dropDownPeopleFin = item;
        $scope.form.showDropDownPeopleFin = false;
    }
    $scope.changeTimeFin = function(item){
        $scope.form.showDropDownTimeFin = false;
        $scope.dropDownTimeFin = item;
    }

    $scope.validateDateEst = function(){
        $scope.dropDownPeopleEstError = false;
        $scope.dropDownTimeEstError = false;
        $scope.dateEstError = false;

        if($scope.dropDownPeopleEst === "Vali inimeste arv"){
            $scope.dropDownPeopleEstError = true;
        }
        if($scope.dropDownTimeEst === "Vali kellaaeg"){
            $scope.dropDownTimeEstError = true;
        }
        if(typeof($scope.dateEst) === 'undefined' ){
            $scope.dateEstError = true;
        }
        if(!$scope.dropDownTimeEstError && !$scope.dropDownTimeEstError && !$scope.dateEstError){
            console.log("tulen siisa");
            bookingService.validateBooking($scope.dropDownTimeEst, $scope.dateEst).then(function(data){
                if(data.error){
                    $scope.bronFrist = true;
                    $scope.bronSecond = false;
                    $scope.errorMsg = true;
                    $scope.errorMsg = true;
                }else{
                    $scope.bronFirst = false;
                    $scope.bronSecond = true;
                    $scope.validTime = $scope.dropDownTimeEst;
                    $scope.validDate = $scope.dateEst;
                    $scope.validPeople = $scope.dropDownPeopleEst;
                    console.log($scope.dateEst.split(','));
                    if($scope.dateEst.includes('January')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " Jaanuar," + $scope.dateEst.split(',')[1];
                    }
                    if($scope.dateEst.includes('February')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " Veebruar," + $scope.dateEst.split(',')[1];
                    }
                    if($scope.dateEst.includes('March')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " Märts," + $scope.dateEst.split(',')[1];
                    }
                    if($scope.dateEst.includes('April')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " Aprill," + $scope.dateEst.split(',')[1];
                    }
                    if($scope.dateEst.includes('May')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " Mai," + $scope.dateEst.split(',')[1];
                    }
                    if($scope.dateEst.includes('June')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " Juuni," + $scope.dateEst.split(',')[1];
                    }
                    if($scope.dateEst.includes('July')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " Juuli," + $scope.dateEst.split(',')[1];
                    }
                    if($scope.dateEst.includes('August')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " August," + $scope.dateEst.split(',')[1];
                    }
                    if($scope.dateEst.includes('September')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " September," + $scope.dateEst.split(',')[1];
                    }
                    if($scope.dateEst.includes('November')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " November," + $scope.dateEst.split(',')[1];
                    }
                    if($scope.dateEst.includes('October')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " Oktoober," + $scope.dateEst.split(',')[1];
                    }
                    if($scope.dateEst.includes('December')){
                        $scope.displayDate = $scope.dateEst.substring(0,2) + " Detsember," + $scope.dateEst.split(',')[1];
                    }
                }
            })
        }

    }
    $scope.validateDateEng = function(){
        $scope.dropDownPeopleEngError = false;
        $scope.dropDownTimeEngError = false;
        $scope.dateEngError = false;

        if($scope.dropDownPeople === "Number of people"){
            $scope.dropDownPeopleEngError = true;
        }
        if($scope.dropDownTime === "Pick a time"){
            $scope.dropDownTimeEngError = true;
        }
        if(typeof($scope.dateEng) === 'undefined' ){
            $scope.dateEngError = true;
        }
        if(!$scope.dropDownPeopleEngError && !$scope.dropDownTimeEngError && !$scope.dateEngError){
            bookingService.validateBooking($scope.dropDownTime, $scope.dateEng).then(function(data){
                if(data.error){
                    $scope.bronFrist = true;
                    $scope.bronSecond = false;
                    $scope.errorMsg = true;
                    $scope.errorMsg = true;
                }else{
                    $scope.bronFirst = false;
                    $scope.bronSecond = true;
                    $scope.validTime = $scope.dropDownTime;
                    $scope.validDate = $scope.dateEng;
                    $scope.validPeople = $scope.dropDownPeople;
                }
            })
        }
    }
    $scope.validateDateFin = function(){
        $scope.dropDownPeopleFinError = false;
        $scope.dropDownTimeFinError = false;
        $scope.dateFinError = false;

        if($scope.dropDownPeopleFin === "Valitse joukko ihmisiä"){
            $scope.dropDownPeopleFinError = true;
        }
        if($scope.dropDownTimeFin === "Valitse aika"){
            $scope.dropDownTimeFinError = true;
        }
        if(typeof($scope.dateFin) === 'undefined' ){
            $scope.dateFinError = true;
        }
        if(!$scope.dropDownPeopleFinError && !$scope.dropDownTimeFinError && !$scope.dateFinError){
            bookingService.validateBooking($scope.dropDownTimeFin, $scope.dateFin).then(function(data){
                if(data.error){
                    $scope.bronFrist = true;
                    $scope.bronSecond = false;
                    $scope.errorMsg = true;
                    $scope.errorMsg = true;
                }else{
                    $scope.bronFirst = false;
                    $scope.bronSecond = true;
                    $scope.validTime = $scope.dropDownTimeFin;
                    $scope.validDate = $scope.dateFin;
                    $scope.validPeople = $scope.dropDownPeopleFin;

                    if($scope.dateFin.includes('January')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " tammikuu," + $scope.dateFin.split(',')[1];
                    }
                    if($scope.dateFin.includes('February')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " helmikuu," + $scope.dateFin.split(',')[1];
                    }
                    if($scope.dateFin.includes('March')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " maaliskuu," + $scope.dateFin.split(',')[1];
                    }
                    if($scope.dateFin.includes('April')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " huhtikuu," + $scope.dateFin.split(',')[1];
                    }
                    if($scope.dateFin.includes('May')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " toukokuu," + $scope.dateFin.split(',')[1];
                    }
                    if($scope.dateFin.includes('June')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " kesäkuu," + $scope.dateFin.split(',')[1];
                    }
                    if($scope.dateFin.includes('July')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " heinäkuu," + $scope.dateFin.split(',')[1];
                    }
                    if($scope.dateFin.includes('August')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " elokuu," + $scope.dateFin.split(',')[1];
                    }
                    if($scope.dateFin.includes('September')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " syyskuu," + $scope.dateFin.split(',')[1];
                    }
                    if($scope.dateFin.includes('November')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " marraskuu," + $scope.dateFin.split(',')[1];
                    }
                    if($scope.dateFin.includes('October')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " lokakuu," + $scope.dateFin.split(',')[1];
                    }
                    if($scope.dateFin.includes('December')){
                        $scope.displayDateFin = $scope.dateFin.substring(0,2) + " joulukuu," + $scope.dateFin.split(',')[1];
                    }
                }
            })
        }
    }
    $scope.validateDateRus = function(){
        $scope.dropDownPeopleRusError = false;
        $scope.dropDownTimeRusError = false;
        $scope.dateRusError = false;

        if($scope.dropDownPeopleRus === "Выберите количество людей"){
            $scope.dropDownPeopleRusError = true;
        }
        if($scope.dropDownTimeRus === "Подобрать время"){
            $scope.dropDownTimeRusError = true;
        }
        if(typeof($scope.dateRus) === 'undefined' ){
            $scope.dateRusError = true;
        }
        if(!$scope.dropDownPeopleRusError && !$scope.dropDownTimeRusError && !$scope.dateRusError){
            bookingService.validateBooking($scope.dropDownTimeRus, $scope.dateRus).then(function(data){
                if(data.error){
                    $scope.bronFrist = true;
                    $scope.bronSecond = false;
                    $scope.errorMsg = true;
                    $scope.errorMsg = true;
                }else{
                    $scope.bronFirst = false;
                    $scope.bronSecond = true;
                    $scope.validTime = $scope.dropDownTimeRus;
                    $scope.validDate = $scope.dateRus;
                    $scope.validPeople = $scope.dropDownPeopleRus;
                    console.log($scope.validTime);
                    console.log($scope.validDate);
                    console.log($scope.validPeople);
                    if($scope.dateRus.includes('January')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " январь," + $scope.dateRus.split(',')[1];
                    }
                    if($scope.dateRus.includes('February')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " февраль," + $scope.dateRus.split(',')[1];
                    }
                    if($scope.dateRus.includes('March')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " март," + $scope.dateRus.split(',')[1];
                    }
                    if($scope.dateRus.includes('April')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " апрель," + $scope.dateRus.split(',')[1];
                    }
                    if($scope.dateRus.includes('May')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " май," + $scope.dateRus.split(',')[1];
                    }
                    if($scope.dateRus.includes('June')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " июнь," + $scope.dateRus.split(',')[1];
                    }
                    if($scope.dateRus.includes('July')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " июль," + $scope.dateRus.split(',')[1];
                    }
                    if($scope.dateRus.includes('August')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " август," + $scope.dateRus.split(',')[1];
                    }
                    if($scope.dateRus.includes('September')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " сентябрь," + $scope.dateRus.split(',')[1];
                    }
                    if($scope.dateRus.includes('November')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " ноябрь," + $scope.dateRus.split(',')[1];
                    }
                    if($scope.dateRus.includes('October')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " октябрь," + $scope.dateRus.split(',')[1];
                    }
                    if($scope.dateRus.includes('December')){
                        $scope.displayDateRus = $scope.dateRus.substring(0,2) + " декабрь," + $scope.dateRus.split(',')[1];
                    }
                }
            })
        }
    }
    $scope.backToFirst = function(){
        $scope.bronFirst = true;
        $scope.bronSecond = false;
    }
    $scope.bookEst = function(){
        var addInfoText = $scope.addInfo;
        $scope.nameEstError = false;
        $scope.emailEstError = false;
        $scope.phoneEstError = false;


        if(typeof($rootScope.nameEst) === 'undefined'){
            $scope.nameEstError = true;
        }
        if(typeof($rootScope.emailEst) === 'undefined'){
            $scope.emailEstError = true;
        }
        if(typeof($rootScope.phoneEst) === 'undefined'){
            $scope.phoneEstError = true;
        }
        if(typeof($scope.addInfo) === 'undefined'){
            addInfoText = "";
        }


        if(!$scope.nameEstError && !$scope.emailEstError && !$scope.phoneEstError){
            bookingService.addBooking($scope.validPeople, $scope.validTime,
                $scope.validDate, $rootScope.nameEst, $rootScope.emailEst, $rootScope.phoneEst, "ee", addInfoText, $scope.newsLetter.status).then(function(data){
                $rootScope.bookingModal = false;
                $scope.bronFirst = true;
                $scope.bronSecond = false;
                $rootScope.dateEst = "";
                $scope.dropDownTimeEst = "Vali kellaeg";
                $scope.dropDownPeopleEst = "Vali inimeste arv";
                $rootScope.nameEst = "";
                $rootScope.emailEst = "";
                $rootScope.phoneEst = "";


            });
        }
    }
    $scope.bookEng = function(){
        $scope.nameEngError = false;
        $scope.emailEngError = false;
        $scope.phoneEngError = false;

        if(typeof($rootScope.nameEng) === 'undefined'){
            console.log("nime pole");
            $scope.nameEngError = true;
        }
        if(typeof($rootScope.emailEng) === 'undefined'){
            console.log("emaili pole");
            $scope.emailEngError = true;
        }
        if(typeof($rootScope.phoneEng) === 'undefined'){
            console.log("telefoni pole");
            $scope.phoneEngError = true;
        }
        if(!$scope.nameEngError && !$scope.emailEngError && !$scope.phoneEngError){
            bookingService.addBooking($scope.validPeople, $scope.validTime,
                $scope.validDate, $rootScope.nameEng, $rootScope.emailEng, $rootScope.phoneEng, "en").then(function(data){
                $rootScope.bookingModal = false;
                $scope.bronFirst = true;
                $scope.bronSecond = false;
                $rootScope.dateEng = "";
                $scope.dropDownTime = "Pick a time";
                $scope.dropDownPeople = "Number of people";
                $rootScope.nameEng = "";
                $rootScope.emailEng = "";
                $rootScope.phoneEng = "";

            });
        }
    }
    $scope.bookRus = function(){
        $scope.nameRusError = false;
        $scope.emailRusError = false;
        $scope.phoneRusError = false;

        if(typeof($rootScope.nameRus) === 'undefined'){
            console.log("nime pole");
            $scope.nameRusError = true;
        }
        if(typeof($rootScope.emailRus) === 'undefined'){
            console.log("emaili pole");
            $scope.emailRusError = true;
        }
        if(typeof($rootScope.phoneRus) === 'undefined'){
            console.log("telefoni pole");
            $scope.phoneRusError = true;
        }
        if(!$scope.nameRusError && !$scope.emailRusError && !$scope.phoneRusError){
            bookingService.addBooking($scope.validPeople, $scope.validTime,
                $scope.validDate, $rootScope.nameRus, $rootScope.emailRus, $rootScope.phoneRus, "ru").then(function(data){
                $rootScope.bookingModal = false;
                $scope.bronFirst = true;
                $scope.bronSecond = false;
                $rootScope.dateRus = "";
                $scope.dropDownTimeRus = "Подобрать время";
                $scope.dropDownPeopleRus = "Выберите количество людей";
                $rootScope.nameRus = "";
                $rootScope.emailRus = "";
                $rootScope.phoneRus = "";

            });
        }
    }
    $scope.bookFin = function(){
        $scope.nameFinError = false;
        $scope.emailFinError = false;
        $scope.phoneFinError = false;

        if(typeof($rootScope.nameFin) === 'undefined'){
            console.log("nime pole");
            $scope.nameFinError = true;
        }
        if(typeof($rootScope.emailFin) === 'undefined'){
            console.log("emaili pole");
            $scope.emailFinError = true;
        }
        if(typeof($rootScope.phoneFin) === 'undefined'){
            console.log("telefoni pole");
            $scope.phoneFinError = true;
        }
        if(!$scope.nameFinError && !$scope.emailFinError && !$scope.phoneFinError){
            bookingService.addBooking($scope.validPeople, $scope.validTime,
                $scope.validDate, $rootScope.nameFin, $rootScope.emailFin, $rootScope.phoneFin, "fi").then(function(data){
                $rootScope.bookingModal = false;
                $scope.bronFirst = true;
                $scope.bronSecond = false;
                $rootScope.dateFin = "";
                $scope.dropDownTimeFin = "Valitse aika";
                $scope.dropDownPeopleFin = "Valitse joukko ihmisiä";
                $rootScope.nameFin = "";
                $rootScope.emailFin = "";
                $rootScope.phoneFin = "";

            });
        }
    }
    $scope.showInfoModal = false;
    $scope.openInfoModal = function(){
        $scope.showInfoModal = !$scope.showInfoModal;
    };

});
