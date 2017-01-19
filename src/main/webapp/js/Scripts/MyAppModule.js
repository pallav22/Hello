var sanjivikaElectronics = angular.module('sanjivika',[ 'ui.router', 'ngIdle' ]);

sanjivikaElectronics.controller('navigation', function($scope, $http,$rootScope, SessionCheckService) {

$( document ).click(function() {
        SessionCheckService.getSessionToken().success(function(data) {
        $scope.response = data;
        console.log($scope.response.status);
        if($scope.response.status==200){
            console.log("success");
        }else{
            location.assign("http://localhost:9091/login");
        }
    });
});

	$scope.logout = function() {
		$http.post('\logout').success(function() {

			location.assign("http://localhost:9091/login?logout");

		}).error(function(data) {
		});
	}

});
