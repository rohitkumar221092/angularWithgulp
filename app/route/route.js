app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partialTemplate/home.html',
            controller:'homeController'
          
        })
        .state('home.list', {
            url: '/list',
            templateUrl: 'partialTemplate/homeList.html',
            controller:'homeListController'            
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'partialTemplate/about.html',
            controller:'aboutController'
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);