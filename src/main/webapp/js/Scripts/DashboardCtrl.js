sanjivikaElectronics.controller('DashboardCtrl', function ($scope, Idle, Keepalive) {
	sanjivikaElectronics.config(function(IdleProvider, KeepaliveProvider) {
	      IdleProvider.idle(5);
	      IdleProvider.timeout(5);
	      KeepaliveProvider.interval(10);
	    });
	sanjivikaElectronics.run(['Idle', function(Idle) {
		  Idle.watch();
		}]);
     });
