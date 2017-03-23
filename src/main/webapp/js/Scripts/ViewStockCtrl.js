sanjivikaElectronics.controller('ViewStockCtrl', function ($scope,SessionCheckService,$http) {
	$( document ).click(function() {
    	SessionCheckService.getSessionToken().success(function(data) {
		$scope.response = data;
//		console.log($scope.response.status);
		if($scope.response.status==200){
//			console.log("success");
		}else{
			 location.assign("login?inactive");
		}
	});
});
	
	$http.get('userController/api/items').then(function(response){ 

    $scope.viewItem = response.data;
//    console.log($scope.viewItem);
    });
     });
 