var app = angular.module("myApp", []);

app.controller('MainCtrl', ['$scope', '$http',function($scope, $http) {

	$scope.fwd = function() {
		
		var request = $http({
			method: "post",
    		url: "/motion/fwd"
		});
 	}

 	$scope.left = function() {
		
		var request = $http({
			method: "post",
    		url: "/motion/left"
		});
 	}

 	$scope.stop = function() {
		
		var request = $http({
			method: "post",
    		url: "/motion/stop"
		});
 	}

 	$scope.right = function() {
		
		var request = $http({
			method: "post",
    		url: "/motion/right"
		});
 	}

 	$scope.bwd = function() {
		
		var request = $http({
			method: "post",
    		url: "/motion/bwd"
		});
 	}

 }]);