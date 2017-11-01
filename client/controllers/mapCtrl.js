var mapCtrl = angular.module('mapCtrl', []);

mapCtrl.controller('mapCtrl', function($scope){
    $scope.initMap = function(){
        var resto = {lat:58.358293, lng: 26.677910};
        var map = new google.maps.Map(document.getElementById('map'), {
           zoom: 14,
           center: resto,
           draggable: false,
           scrollwheel: false,
           styles: [
                    {
                        "featureType": "landscape",
                        "stylers": [
                            {
                                "hue": "#FFAD00"
                            },
                            {
                                "saturation": 50.2
                            },
                            {
                                "lightness": -34.8
                            },
                            {
                                "gamma": 1
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "stylers": [
                            {
                                "hue": "#FFAD00"
                            },
                            {
                                "saturation": -19.8
                            },
                            {
                                "lightness": -1.8
                            },
                            {
                                "gamma": 1
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "stylers": [
                            {
                                "hue": "#FFAD00"
                            },
                            {
                                "saturation": 72.4
                            },
                            {
                                "lightness": -32.6
                            },
                            {
                                "gamma": 1
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "stylers": [
                            {
                                "hue": "#FFAD00"
                            },
                            {
                                "saturation": 74.4
                            },
                            {
                                "lightness": -18
                            },
                            {
                                "gamma": 1
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "stylers": [
                            {
                                "hue": "#00FFA6"
                            },
                            {
                                "saturation": -63.2
                            },
                            {
                                "lightness": 38
                            },
                            {
                                "gamma": 1
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "stylers": [
                            {
                                "hue": "#FFC300"
                            },
                            {
                                "saturation": 54.2
                            },
                            {
                                "lightness": -14.4
                            },
                            {
                                "gamma": 1
                            }
                        ]
                    }
                ]
       });
       var marker = new google.maps.Marker({
          position: resto,
          map: map,

      });
    }
})
