sanjivikaElectronics.controller('ViewInvoiceCtrl', function($scope,
        SessionCheckService, $http) {
    $(document).click(function() {
        SessionCheckService.getSessionToken().success(function(data) {
            $scope.response = data;
            if ($scope.response.status != 200) {
                location.assign("login?inactive");
            }
        });
    });

    $http.get('userController/api/invoice').then(function(response){ 

        $scope.viewItem = response.data;
        debugger;
//      console.log($scope.viewItem);
        });
    $scope.invoiceNumber='';
    $scope.Date1='';
    $scope.Prefix='';
    $scope.firstName='';
    $scope.secondName='';
    $scope.street='';
    $scope.street1='';
    $scope.city='';
    $scope.postal='';
    $scope.mobileNo='';
    $scope.costTotal=0;
    $scope.TotalVat=0;
    $scope.Totalamount=0;
    $scope.soldlocation='';
       $scope.tilak = false;
       $scope.palza = false;
       $scope.emall = false;
    $scope.printInvoice=function(x)
    {
        $scope.costTotal=0;
        $scope.TotalVat=0;
        $scope.Totalamount=0;
         $('#PrintInvoceModel').modal('show');
         $http.get('userController/api/invoiceid?id='+x).then(function(response){ 

                $scope.viewInvoicedata = response.data;
                $scope.invoiceNumber=$scope.viewInvoicedata.invoiceId;
                $scope.Date1=$scope.viewInvoicedata.date;
                $scope.Prefix=$scope.viewInvoicedata.customer.prefix;
                $scope.firstName=$scope.viewInvoicedata.customer.firstName;
                $scope.secondName=$scope.viewInvoicedata.customer.secondName;
                $scope.street=$scope.viewInvoicedata.customer.street;
                $scope.street1=$scope.viewInvoicedata.customer.street1;
                $scope.city=$scope.viewInvoicedata.customer.city;
                $scope.postal=$scope.viewInvoicedata.customer.postal;
                $scope.mobileNo=$scope.viewInvoicedata.customer.mobile;
                $scope.dataForItem=$scope.viewInvoicedata.item;
                
                $scope.soldlocation=$scope.viewInvoicedata.soldLocation;
                 if ($scope.soldlocation == "Tilakmaidan") {
                        $scope.tilak = true;
                        $scope.palza = false;
                        $scope.emall = false;
                    };
                    if ($scope.soldlocation == "Plaza") {
                        $scope.tilak = false;
                        $scope.palza = true;
                        $scope.emall = false;
                    };
                    if ($scope.soldlocation== "emall") {
                        $scope.tilak = false;
                        $scope.palza = false;
                        $scope.emall = true;
                    };

            console.log($scope.viewInvoicedata.item.length+""+$scope.viewInvoicedata.length);
            for (var i = 0; i <$scope.viewInvoicedata.item.length; i++) {
                $scope.costTotal=parseFloat(($scope.costTotal+$scope.viewInvoicedata.item[i].unitPrice).toFixed(2));
                $scope.TotalVat=parseFloat(($scope.TotalVat+$scope.viewInvoicedata.item[i].vatAmount).toFixed(2));
                $scope.Totalamount=parseFloat(($scope.costTotal+$scope.TotalVat).toFixed(2));
                
                console.log($scope.costTotal);
                console.log($scope.TotalVat);
                console.log($scope.Totalamount);
            }
                });

    

    }
    
});
