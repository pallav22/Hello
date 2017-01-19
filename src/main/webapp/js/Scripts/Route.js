



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
  /*.state('AddStock.AddBrand', {
           url: '/AddBrand',           
           templateUrl:'Templates/AddBrand.html',
           controller:'AddBrandCtrl'
        })
    .state('AddStock.AddProduct', {
           url: '/AddProduct',           
           templateUrl:'Templates/AddProduct.html',
           controller:'AddProductCtrl'
        })
     .state('AddStock.AddGodown', {
           url: '/AddGodown',           
           templateUrl:'Templates/AddGodown.html',
           controller:'AddGodownCtrl'
        })
     .state('AddStock.UploadExcel', {
           url: '/UploadExcel',           
           templateUrl:'Templates/UploadExcel.html',
           controller:'UploadExcelCtrl'
        })*/
  .state('ViewStock', {
           url: '/ViewStock',           
           templateUrl:'Templates/ViewStock.html',
           controller:'ViewStockCtrl'
        })
  
  

});
