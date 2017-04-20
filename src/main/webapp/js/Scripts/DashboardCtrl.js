sanjivikaElectronics.controller('DashboardCtrl', function ($scope, Idle, Keepalive,$http) {
	sanjivikaElectronics.config(function(IdleProvider, KeepaliveProvider) {
	      IdleProvider.idle(5);
	      IdleProvider.timeout(5);
	      KeepaliveProvider.interval(10);
	    });
	sanjivikaElectronics.run(['Idle', function(Idle) {
		  Idle.watch();
		}]);
	
	$scope.countItem='';
	$scope.outOfStock='';
	
	 $http.get('userController/api/items/count?status=1').then(function(response){ 

		    $scope.countItem = response.data;
		    console.log($scope.countItem);
		    
		    });
	 
	 $http.get('userController/api/items/count?status=0').then(function(response){ 

		    $scope.outOfStock = response.data;
		    console.log($scope.outOfStock);
		    
		    });
	 
	$scope.viewGodown = function(){
		
		
		 $http.get('userController/api/godowns').then(function(response){ 

			    $scope.viewGodowns = response.data;
			    
			    }); 
		
	}
	


	 
     });
