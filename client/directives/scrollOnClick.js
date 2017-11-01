var scrollOnClick = angular.module('scrollOnClick', []);

scrollOnClick.directive('scrollOnClick', function(){
    return {
        restrict: "A",
        scope: {
            elementId: '@'
        },
        link: function(scope, $elm, attrs){
            var idToScroll = attrs.elementId;

            $elm.on('click', function(){
                var $target;
                if(idToScroll){
                    $target = $(idToScroll);
                }else{
                    $target = $elm;
                }
                console.log(angular.element($target));
                console.log($elm);
                //$("body").animate({scrollTop: $target.offset().top}, "slow");
            })
        }
    }
})
