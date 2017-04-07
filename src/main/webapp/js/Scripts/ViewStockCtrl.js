sanjivikaElectronics.controller('ViewStockCtrl', function($scope,
		SessionCheckService, $http) {

	$(document).click(function() {

		SessionCheckService.getSessionToken().success(function(data) {
			$scope.response = data;
			if ($scope.response.status == 200) {
			} else {
				location.assign("login?inactive");
			}
		});
	});

	// get list of available godowns

	$http.get('userController/api/godowns').then(function(response) {

		$scope.viewItem = response.data;
	});

	// ends here

	$http.get('userController/api/items').then(function(response) {

		$scope.viewItem = response.data;
	});

	$scope.sort = function(keyname) {
		$scope.sortKey = keyname; // set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; // if true make it false and vice
											// versa
	}
 
	$scope.updateItemById = function(id) {
		console.log(id);
	
		var index = getSelectedIndex(id);
		var item = $scope.viewItem[index];
		$scope.id = item.id;
		$scope.modelNumber = item.modelNumber;
		$scope.serialNumber = item.serialNumber;
		$scope.mrp = item.mrp;
		$scope.dp = item.dp;
		$scope.godown = item.godown.godownName;
		$scope.brandName = item.brand.brandName;
		$scope.productName = item.product.productname;
		// $scope.modelNumber = item.modelNumber;
		// $scope.modelNumber = item.modelNumber;
		// $scope.modelNumber = item.modelNumber;
		$('#modelAddCustomer').modal('show');
		$scope.godownNameSelected="-1";
//		
		$http.get('userController/api/godowns')
		.then(
				function(response) {

					$scope.godownsDropDown = response.data;
					;
				});

	}
	// update items

	$scope.saveItem = function() {				
		$scope.Final = [];	
		var body = {
				"modelNumber" : $scope.modelNumber,
				"mrp" : $scope.mrp,
				"serialNumber" : $scope.serialNumber,
				"date" : $scope.date,
				"dp" : $scope.dp,
				"status" : 1,
				"product" : {
					"id" : 1//$scope.SelectedProduct
				},
				"brand" : {
					"id" : 1//$scope.SelectedBrand
				},
				"godown" : {
					"id" : 2//$scope.SelectedGodown
				}
			};
		$scope.Final.push(body);
		 
		 console.log(body);
		$http.put("userController/api/items", $scope.Final, {
			headers : {
				"Content-Type" : "application/json"
			},
			transformResponse : function(data) {
				return data;
			}

		}).success(function(data, status, headers, config) {
			$scope.msg = "Item has been added successfully";

			$('#modelAddCustomer').modal('hide');

		}).error(function(data, status, headers, config) {
			$scope.msg = "Unable to save";

		});
		$('#modelAddCustomer').modal('hide');
	};

	// ends here
	function getSelectedIndex(id) {
		for (var i = 0; i < $scope.viewItem.length; i++)
			if ($scope.viewItem[i].id == id)
				return i;
		return -1;
	}
	;

});
