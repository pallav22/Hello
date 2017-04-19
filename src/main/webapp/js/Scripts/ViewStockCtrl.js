sanjivikaElectronics.controller('ViewStockCtrl', function($scope,
    SessionCheckService, $http) {

    $(document).click(function() {

        SessionCheckService.getSessionToken().success(function(data) {
            $scope.response = data;
            if ($scope.response.status == 200) {} else {
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
            $http.get('userController/api/godowns').then(function(response) {

                $scope.godownsAvailabe = response.data;

            });
            $http.get('userController/api/brands').then(
                            function(response) {

                                $scope.editbrandsDropDown = response.data;
                                console.log($scope.editbrandsDropDown);
                                ;
                            });
            //      
            // $http.get('userController/api/godowns')
            // .then(
            //      function(response) {

            //          $scope.godownsDropDown = response.data;
            //          ;
            //      });

        }
        $scope.SelectedBrand='';
        $scope.hideEditProduct=false;
        $scope.showEditProduct=true;
        $scope.selectedBrand = function(SelectedBrand) {
   
                        $http.get(
                                'userController/api/products?brandId='
                                        + $scope.SelectedBrand).then(
                                function(response) {
                                    $scope.productDropDown = response.data;
                                    if ($scope.productDropDown!=0){
                                        $scope.hideEditProduct=true;
                                        $scope.showEditProduct=false;
                                    }
                                    // $scope.uploadexceldisableproduct = false;
                                    // $scope.GodownMsg = '';
                                    // $scope.msgStock = '';
                                    $scope.editedSelectedGodown=1;
                                });

                    }
        // update items

    $scope.saveItem = function() {
        $scope.Final = [];
        var body = {
            "id": $scope.id,
            "modelNumber": $scope.modelNumber,
            "mrp": $scope.mrp,
            "serialNumber": $scope.serialNumber,
            "date": $scope.date,
            "dp": $scope.dp,
            "status": 1,
            "product": {
                "id": 1 //$scope.productNameS
            },
            "brand": {
                "id": $scope.SelectedBrand
            },
            "godown": {
                "id": $scope.editedSelectedGodown
            }
        };
        $scope.Final.push(body);

        console.log(JSON.stringify($scope.Final));
        debugger;
        $http.put("userController/api/items", $scope.Final, {
            headers: {
                "Content-Type": "application/json"
            },
            transformResponse: function(data) {
                return data;
            }

        }).success(function(data, status, headers, config) {
            $scope.msg = "Item has been added successfully";

            $('#modelAddCustomer').modal('hide');

        }).error(function(data, status, headers, config) {
            $scope.msg = "Unable to save";

        });
        $('#modelAddCustomer').modal('hide');
         $scope.hideEditProduct=false;
        $scope.showEditProduct=true;
    };

    // ends here
    function getSelectedIndex(id) {
        for (var i = 0; i < $scope.viewItem.length; i++)
            if ($scope.viewItem[i].id == id)
                return i;
        return -1;
    };

});
