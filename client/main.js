var myApp = angular.module('myApp', [
    'ui.router',
    'designViewController',
    'pictureService',
    'bannerCtrl',
    'xeditable',
    'textService',
    'workerAdminController',
    'workerService',
    'workerCtrl',
    'foodAdminController',
    'foodService',
    'foodCtrl',
    'drinkService',
    'drinkAdminCtrl',
    'drinkCtrl',
    'eventAdminCtrl',
    'eventService',
    'eventCtrl',
    'menuCtrl',
    'sliderCtrl',
    'ngAnimate',
    'mapCtrl',
    'landingTextService',
    'bronAdminCtrl',
    '720kb.datepicker',
    'bronCtrl',
    'ngInitial',
    'bookingService',
    'bookingAdminCtrl',
    'scrollOnClick',
    'emailCtrl',
    'emailService',
    'scrollToBookmark',
    'menu',
    'menuItem',
    'modalDemoCtrl',
    'angularTrix',
    'ngSanitize'
]);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('landing', {
      url: '/{id:(?:ru|fi|en|broneerilaud|)}',
      templateUrl: 'partials/landing.html',
      access: {restricted: false}
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .state('logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .state('register', {
      url:'/register',
      templateUrl: 'partials/register.html',
      controller: 'registerController',
      access: {restricted: true}
    })
    .state('admin', {
        url: '/admin',
        abstract: true,
        templateUrl: 'partials/admin.html',
        access: {restricted: true}
    })
    .state('admin.products', {
        url:'/products',
        templateUrl: 'partials/products.html',
        access: {restricted:true}
    })
    .state('admin.design', {
        url:'/design',
        templateUrl: 'partials/design.html',
        access: {restricted:true},
        controller: "designViewController"
    })
    .state('admin.workers', {
        url:'/workers',
        templateUrl: 'partials/workers.html',
        access: {restricted:true},
        controller: "workerAdminController"
    })
    .state('admin.food', {
        url:'/food',
        templateUrl: 'partials/food.html',
        access: {restricted:true},
        controller: "foodAdminController"
    })
    .state('admin.drink', {
        url:'/drink',
        templateUrl: 'partials/drink.html',
        access: {restricted:true},
        controller: "drinkAdminCtrl"
    })
    .state('admin.event', {
        url:'/event',
        templateUrl: 'partials/event.html',
        access: {restricted:true},
        controller: "eventAdminCtrl"
    })
    .state('admin.bron', {
        url:'/bron',
        templateUrl: 'partials/bron.html',
        access: {restricted:true},
        controller: "bronAdminCtrl"
    })
});

myApp.run(function ($rootScope, $location,$state, AuthService, editableOptions, $window) {
    document.addEventListener("click", function(e) {
        $rootScope.$broadcast("documentClicked", e.target); // $rootScope.$broadcast is a convenient way to raise a "global" event which all child scopes can listen for.
    });
  $window.ga('create', 'UA-98229169-1', 'auto'); // Google analytics tracking
  $rootScope.$on('$stateChangeSuccess', function (event) { // listens to a particular event
            $window.ga('send', 'pageview', $location.path());
        });
  editableOptions.theme = 'bs3';
  $rootScope.$on('$stateChangeStart', //Route event that triggers statechange and the next stage
    function (event, next, current) {
      if(next.access.restricted && AuthService.isLoggedIn() === false){
          $location.path('/login');
      }
  });
});
