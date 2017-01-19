sanjivikaElectronics.controller('AddStockCtrl', function (SessionCheckService,$scope,$http) {
	$( document ).click(function() {
    	SessionCheckService.getSessionToken().success(function(data) {
		$scope.response = data;
		console.log($scope.response.status);
		if($scope.response.status==200){
			console.log("success");
		}else{
			 location.assign("http://localhost:9091/login");
		}
	});
});
$scope.SelectedBrand=0;

 $scope.brand='';
 $scope.save = function () {

     var body = {
          "brandName":$scope.brand
           
        };
     
    $http.post("http://localhost:9091/userController/api/brands", body, {
       headers: {
        "Content-Type": "application/json"
        },
        transformResponse : function(data){
            return data;
        }

    })
    .success(function(data, status, headers, config) {
    // $scope.rows1 = JSON.parse(data);

   
    })
    .error(function(data, status, headers, config) {
        $scope._error = data;
        
    });
    };

     $http.get('http://localhost:9091/userController/api/brands').then(function(response){ 

    $scope.brandsDropDown = response.data;;
    console.log($scope.brandsDropDown);
    });
  // $scope.data=[{"id":2,"brandName":null},{"id":3,"brandName":null},{"id":4,"brandName":"Samsung"},{"id":5,"brandName":"cashier"}];
// To save new prduct
    $scope.saveProduct = function () {
    // 	console.log($scope.SelectedBrand);

    // console.log($scope.Product)
       
/*var body = {
          
          productname:$scope.Product,
          barnd_id:$scope.SelectedBrand
           
        };*/
  var body =   {
	"productname": $scope.Product,
	"brand": {
		"id": $scope.SelectedBrand,
		"brandname": "Null"
	}

}
    $http.post("userController/api/products", body, {
       headers: {
        "Content-Type": "application/json"
        },
        transformResponse : function(data){
            return data;
        }

    })
    .success(function(data, status, headers, config) {
    // $scope.rows1 = JSON.parse(data);

   
    })
    .error(function(data, status, headers, config) {
        $scope._error = data;
        
    });
    };

 $scope.Godown="";
 $scope.GodownMsg="";
 $scope.saveGodown = function () {

   var body = {
           godownName:$scope.Godown          
        };
    $http.post("userController/api/godowns", body, {
       headers: {
        "Content-Type": "application/json"
        },
        transformResponse : function(data){
            return data;
        }

    }).success(function(data, status, headers, config) {
    	 $scope.GodownMsg = data;
    	console.log(data);

    })
    .error(function(data, status, headers, config) {
        $scope._error = data;
        
    });
 }

 
     });




