sanjivikaElectronics.service('SessionCheckService', ['$http', function($http,$scope) {

function getSessionToken() {

		return $http({
			method : 'GET',
			url : '/sanjivika/token'
		});
	}
	return {
		getSessionToken : getSessionToken

	};
} ]);