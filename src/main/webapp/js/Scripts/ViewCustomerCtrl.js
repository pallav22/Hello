
sanjivikaElectronics.controller('ViewCustomerCtrl', function ($rootScope,$scope,$http) {

    $http.get('userController/api/customer').then(function(response){ 

    $scope.viewCustomer = response.data;
    console.log($scope.viewCustomer);
    });

    $scope.update = function(id){
//      console.log(id);
        var index = getSelectedIndex(id);
        var customer = $scope.viewCustomer[index];
                $scope.id = customer.id;
                $scope.Prefix = customer.prefix;
                $scope.firstName = customer.firstName;
                $scope.secondName = customer.secondName;
                $scope.street = customer.street;

                $scope.street1 = customer.street1;
                $scope.postal = customer.postal;
                
                $scope.mCode= '+91';
                $scope.city = customer.city;
                $scope.mobileNo = customer.mobile;
                $scope.Email = customer.email;

                $scope.phoneNumbr = /^\d{10}$/;
            $scope.postalV = /^\d{6}$/;
                 $('#modelAddCustomer').modal('show');
    }
 
 function getSelectedIndex(id){
                for(var i=0; i<$scope.viewCustomer.length; i++)
                    if($scope.viewCustomer[i].id==id)
                        return i;
                    return -1;  
            };

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
                          "id": $scope.id,
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
                    $http.put("userController/api/customer", body, {
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
//                      console.log($scope.msg);
//                      console.log(status);
                            $http.get('userController/api/customer').then(function(response){ 

    $scope.viewCustomer = response.data;
//    console.log($scope.viewCustomer);
    });
                         $('#modelAddCustomer').modal('hide');
                   
                    })
                    .error(function(data, status, headers, config) {
                        $scope.msg = "Unable to save";
//                      console.log($scope.msg);
//                      console.log(status);
                        
                    });
                    $('#modelAddCustomer').modal('hide');
            };
            $scope.sort = function(keyname){
                $scope.sortKey = keyname;   //set the sortKey to the param passed
                $scope.reverse = !$scope.reverse; //if true make it false and vice versa
            }

     });