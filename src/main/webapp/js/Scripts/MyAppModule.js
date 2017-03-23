var sanjivikaElectronics = angular.module('sanjivika',['ui.router', 'file-model','ngIdle','angularUtils.directives.dirPagination']);

sanjivikaElectronics.controller('navigation', function($scope, $http,$rootScope, SessionCheckService) {
	
	//console.log("mainCtrl");
	$rootScope.userName = "";
	var user=document.getElementById('loginName').innerHTML;
	$rootScope.userName = user;
	//console.log($rootScope.userName );
	//console.log(user );
	
	

$( document ).click(function() {
        SessionCheckService.getSessionToken().success(function(data) {
        $scope.response = data;
        console.log($scope.response.status);
        if($scope.response.status==200){
           // console.log("success--");
        }else{
            location.assign("/sanjivika/login");
        }
    });
});

	$scope.logout = function() {
		$http.post('/sanjivika/logout').success(function() {

			location.assign("/sanjivika/login?logout");

		}).error(function(data) {
		});
	}

});
