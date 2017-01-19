/**
 * Prashant
 */

var app = angular.module('app', []);

app.controller('historical', [ '$scope', '$http', function($scope, $http) {

	$scope.add = function() {
		var body = {
			"brandName" : "Samsung"
		};

		$http.get('/api/brands').then(function(response) {

			$scope.test = response.data;
			console.log($scope.test);

		});

	}

	$scope.addPost = function() {
		console.log($scope.brandName);
		var body = {
			productname : "Mobile",
			brandName : "4"
		};
		$http.post("userController/api/products", body, {
			headers : {
				"Content-Type" : "application/json"
			},
			transformResponse : function(data) {
				console.log(data);
				return data;
			}

		})

	}
} ]);
