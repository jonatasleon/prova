angular.module("trackerMoviesApp").config(["$routeProvider",
    function($routerProvider) {
        $routerProvider
            .when("/", {
                templateUrl: "assets/partial/main.html"
            });
    }
]);
