//ROUTING
 sanjivikaElectronics.config(function($stateProvider, $urlRouterProvider) {
    
   $urlRouterProvider.otherwise('/Dashboard');

  $stateProvider
  .state('Dashboard', {
           url: '/Dashboard',
           templateUrl:'Templates/Dashboard.html',
           controller:'DashboardCtrl'
        })  
  .state('AddStock', {
           url: '/AddStock',           
           templateUrl:'Templates/AddStock.html',
           controller:'AddStockCtrl'
        })
  .state('AddCustomer', {
           url: '/AddCustomer',           
           templateUrl:'Templates/AddCustomer.html',
           controller:'AddCustomerCtrl'
        })
  // .state('AddStock.AddBrand', {
  //          url: '/AddBrand',           
  //          templateUrl:'Templates/AddBrand.html',
  //          controller:'AddBrandCtrl'
  //       })
    // .state('AddStock.AddProduct', {
    //        url: '/AddProduct',           
    //        templateUrl:'Templates/AddProduct.html',
    //        controller:'AddProductCtrl'
    //     })
     // .state('AddStock.AddGodown', {
     //       url: '/AddGodown',           
     //       templateUrl:'Templates/AddGodown.html',
     //       controller:'AddGodownCtrl'
     //    })
      .state('ViewInvoice', {
            url: '/ViewInvoice',           
            templateUrl:'Templates/ViewInvoice.html',
            controller:'ViewInvoiceCtrl'
         })
  .state('ViewStock', {
           url: '/ViewStock',           
           templateUrl:'Templates/ViewStock.html',
           controller:'ViewStockCtrl'
        })
  .state('ViewCustomer', {
           url: '/ViewCustomer',           
           templateUrl:'Templates/ViewCustomer.html',
           controller:'ViewCustomerCtrl'
        })
   .state('GenerateBill', {
           url: '/GenerateBill',           
           templateUrl:'Templates/GenerateBill.html',
           controller:'GenerateBillCtrl'
        })
  
  

});
