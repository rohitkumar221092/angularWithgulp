app.directive("goToTop", function ($window) {

    return {
        restrict:'E',
        template: '<div><button id="goToTop">go Top</button></div>',
        link: function (scope, element, attrs) {
            var coordinates = document.body.getBoundingClientRect();
            element.bind('click', function () {
                
                window.scrollTo(0, 0);
                
            })
            element.bind("scroll", function () {
                var coordinates = document.body.getBoundingClientRect();
                if (coordinates !== 0)
                    document.getElementById("goToTop").style.display = 'block';
                else
                    document.getElementById("goToTop").style.display = 'none';

            })
        }
    }
})