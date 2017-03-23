sanjivikaElectronics.controller('ViewStockCtrl', function ($scope,SessionCheckService,$http) {

    $( document ).click(function() {

        SessionCheckService.getSessionToken().success(function(data) {
        $scope.response = data;
        if($scope.response.status==200){
        }else{
             location.assign("login?inactive");
        }
    });
});
    
    $http.get('userController/api/items').then(function(response){ 

    $scope.viewItem = response.data;
    }); 
    
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
   
     });
 