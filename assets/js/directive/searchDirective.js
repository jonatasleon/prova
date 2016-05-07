angular.module("trackerMoviesApp").directive("search", [
    function() {
        return {
            restrict: "E",
            templateUrl: "assets/js/directive/searchDirective.html"
        }
    }
])
