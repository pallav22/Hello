sanjivikaElectronics.controller('AddCustomerCtrl',
		function($rootScope, $scope,$http) {
			$scope.mCode = "+91";
			$scope.phoneNumbr = /^\d{10}$/;
			$scope.postalV = /^\d{6}$/;
            $scope.Prefix = "Mr";
			$scope.clearForm = function() {
				$scope.Prefix = "";
				$scope.firstName = "";
				$scope.secondName = "";
				$scope.street = "";
				$scope.street1 = "";
				$scope.city = "";
				$scope.postal = "";
				// $scope.mCode="";
				$scope.mobileNo = "";
				$scope.Email = "";
				$scope.state=null;
				 $scope.form.$setPristine();

			};

			$scope.saveCustomer = function() {

				var body = {
				          "prefix":$scope.Prefix,
				          "firstName":$scope.firstName,
				          "secondName":$scope.secondName,
				          "dob":"22-08-2016",
				          "street":$scope.street,
				          "street1":$scope.street1,
				          "city":$scope.city,
				          "state":"Bihar",
				          "mobile":$scope.mobileNo,
				          "postal":$scope.postal,
				          "email":$scope.Email
				           
				        };
				    // debugger;
				    $http.post("userController/api/customer", body, {
				       headers: {
				        "Content-Type": "application/json"
				        },
				        transformResponse : function(data){
				            return data;
				        }

				    })
				    .success(function(data, status, headers, config) {
				    // $scope.rows1 = JSON.parse(data);
				    	$scope.msg = "Customer has been added successfully";
//				        console.log($scope.msg);
//				        console.log(status);
				         $scope.form.$setPristine();
				   
				    })
				    .error(function(data, status, headers, config) {
				        $scope.msg = "Unable to save";
//				        console.log($scope.msg);
//				        console.log(status);
//				        
				    });
				    $scope.firstName = "";
				$scope.secondName = "";
				$scope.street = "";
				$scope.street1 = "";
				$scope.city = "";
				$scope.postal = "";
				// $scope.mCode="";
				$scope.mobileNo = "";
				$scope.Email = "";
				  $scope.form.$setPristine();
			};

		});
