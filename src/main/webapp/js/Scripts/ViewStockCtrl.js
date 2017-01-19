sanjivikaElectronics.controller('ViewStockCtrl', function ($scope,SessionCheckService) {
	$( document ).click(function() {
    	SessionCheckService.getSessionToken().success(function(data) {
		$scope.response = data;
		console.log($scope.response.status);
		if($scope.response.status==200){
			console.log("success");
		}else{
			 location.assign("http://localhost:9091/login?inactive");
		}
	});
});
     });
 