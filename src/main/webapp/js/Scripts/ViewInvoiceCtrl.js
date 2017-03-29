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
    function convertNumberToWords(amount) {
        debugger
        var words = new Array();
        words[0] = '';
        words[1] = 'One';
        words[2] = 'Two';
        words[3] = 'Three';
        words[4] = 'Four';
        words[5] = 'Five';
        words[6] = 'Six';
        words[7] = 'Seven';
        words[8] = 'Eight';
        words[9] = 'Nine';
        words[10] = 'Ten';
        words[11] = 'Eleven';
        words[12] = 'Twelve';
        words[13] = 'Thirteen';
        words[14] = 'Fourteen';
        words[15] = 'Fifteen';
        words[16] = 'Sixteen';
        words[17] = 'Seventeen';
        words[18] = 'Eighteen';
        words[19] = 'Nineteen';
        words[20] = 'Twenty';
        words[30] = 'Thirty';
        words[40] = 'Forty';
        words[50] = 'Fifty';
        words[60] = 'Sixty';
        words[70] = 'Seventy';
        words[80] = 'Eighty';
        words[90] = 'Ninety';
        amount = amount.toString();
        var atemp = amount.split(".");
        var number = atemp[0].split(",").join("");
        var n_length = number.length;
        var words_string = "";
        if (n_length <= 9) {
            var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
            var received_n_array = new Array();
            for (var i = 0; i < n_length; i++) {
                received_n_array[i] = number.substr(i, 1);
            }
            for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
                n_array[i] = received_n_array[j];
            }
            for (var i = 0, j = 1; i < 9; i++, j++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    if (n_array[i] == 1) {
                        n_array[j] = 10 + parseInt(n_array[j]);
                        n_array[i] = 0;
                    }
                }
            }
            value = "";
            for (var i = 0; i < 9; i++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    value = n_array[i] * 10;
                } else {
                    value = n_array[i];
                }
                if (value != 0) {
                    words_string += words[value] + " ";
                }
                if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Crores ";
                }
                if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Lakhs ";
                }
                if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Thousand ";
                }
                if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                    words_string += "Hundred and ";
                } else if (i == 6 && value != 0) {
                    words_string += "Hundred ";
                }
            }
            words_string = words_string.split("  ").join(" ");
        }
        return words_string;
    }

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
            $scope.InWords=convertNumberToWords($scope.Totalamount);
            
            $scope.InWordsTotalamount= $scope.InWords+"Rupees Only"
            
                });

    

    }
    
});
