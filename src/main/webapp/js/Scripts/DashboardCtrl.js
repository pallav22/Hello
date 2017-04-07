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
	
	 $http.get('userController/api/items').then(function(response){ 

		    $scope.countItem = response.data.length;
		    console.log($scope.countItem);
		    
		    });
	 
	$scope.viewGodown = function(){
		
		
		 $http.get('userController/api/godowns').then(function(response){ 

			    $scope.viewGodowns = response.data;
			    
			    }); 
		
	}
	


	 
     });
