sanjivikaElectronics.controller('ViewAdminStockCtrl', function ($scope,SessionCheckService,$http) {

    $( document ).click(function() {

        SessionCheckService.getSessionToken().success(function(data) {
        $scope.response = data;
        if($scope.response.status==200){
        }else{
             location.assign("login?inactive");
        }
    });
});
    
    $http.get('adminController/api/items').then(function(response){ 

    $scope.viewItem = response.data;
    }); 
    
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    
    
   /* $scope.updateItemById = function(id){
     console.log(id);
        var index = getSelectedIndex(id);
        var item = $scope.viewItem[index];
                $scope.id = item.id;
                $scope.modelNumber = item.modelNumber;
                $scope.serialNumber = item.serialNumber;
                $scope.mrp = item.mrp;
                $scope.dp = item.dp;
                $scope.godownName = item.godown.godownName;
                $scope.brandName = item.brand.brandName;
                $scope.productName = item.product.productname;
//                $scope.modelNumber = item.modelNumber;
//                $scope.modelNumber = item.modelNumber;
//                $scope.modelNumber = item.modelNumber;
                $('#modelAddCustomer').modal('show');
                
    }
 
 function getSelectedIndex(id){
                for(var i=0; i<$scope.viewItem.length; i++)
                    if($scope.viewItem[i].id==id)
                        return i;
                    return -1;  
            };*/
   
     });
 