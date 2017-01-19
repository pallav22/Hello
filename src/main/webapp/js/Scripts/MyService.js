sanjivikaElectronics.service('SessionCheckService', ['$http', function($http,$scope) {

function getSessionToken() {
		return $http({
			method : 'GET',
			url : '/token'
		});
	}
	return {
		getSessionToken : getSessionToken

	};
} ]);