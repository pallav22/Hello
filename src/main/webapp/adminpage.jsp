<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="contextPath" value="${pageContext.request.contextPath}" />


<!DOCTYPE html>
<html lang="en">

<head>

<!--     <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content=""> -->

<title>Sanjivika</title>

<!-- Bootstrap Core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- Custom CSS -->
<!-- Custom CSS -->
<link href="css/sb-admin.css" rel="stylesheet">
<link href="css/base.css" rel="stylesheet" type="text/css" />



<!-- NOTHING IN THIS FILE SHOULD BE EDITED EXCEPT THESE PATHS TO YOUR THEME STYLESHEETS  -->

<link href="css/bauhaus.css" rel="stylesheet" type="text/css" />
<link href="css/bauhaus_print.css" media="print" rel="stylesheet"
	type="text/css" />
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">



<!-- Custom Fonts -->
<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet"
	type="text/css">



<!-- Morris Charts CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="http://code.angularjs.org/1.2.13/angular.js"></script>
<script
	src="http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js"></script>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/ng-idle/1.3.2/angular-idle.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.2/angular-ui-router.js"></script>
 <script src='https://rawgit.com/ghostbar/angular-file-model/master/angular-file-model.js'></script>
<script src="http://bootboxjs.com/bootbox.js"></script>


<script src="js/Scripts/MyAppModule.js"></script>
<script src="js/Scripts/Route.js"></script>
<script src="js/Scripts/DashboardCtrl.js"></script>
<script src="js/Scripts/ViewStockCtrl.js"></script>
<script src="js/Scripts/AddStockCtrl.js"></script>
<script src="js/Scripts/UploadExcelCtrl.js"></script>
<script src="js/Scripts/MyService.js"></script>
<script src="js/Scripts/ViewCustomerCtrl.js"></script>
<script src="js/Scripts/ViewStockCtrl.js"></script>
<script src="js/Scripts/AddCustomerCtrl.js"></script>
<script src="js/Scripts/GenerateBillCtrl.js"></script>
<script src="js/Scripts/ViewInvoiceCtrl.js"></script>
<script src="js/Scripts/dirPagination.js"></script>

<script src="js/Scripts/ViewAdminStockCtrl.js"></script>

<!-- Custom Fonts -->


<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<style type="text/css">
.navbar-inverse .navbar-nav>li>a {
	color: white;
	/* border-color: #5cb85c; */
}

.navbar-inverse {
	background-color: #337ab7;
	border-color: #337ab7;
}

.dropdown-menu {
	min-width: 132px;
}

.dropdown-menu>li>a {
	padding: 3px 8px;
}

.navbar-inverse .navbar-brand {
	color: #f5f5f5;
}
.nav .open>a, .nav .open>a:focus, .nav .open>a:hover {
    background-color: #337ab7;
    border-color: #31708f;
}
.nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
    background-color: #31708f;
}
</style>
<script type="text/javascript">
	
</script>

<!-- 
 <head>
	  <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css">
      <script src="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js"></script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  </head> -->
<body ng-app="sanjivika">

	<div id="wrapper" ng-controller="navigation">

		<!-- Navigation -->
		<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target=".navbar-ex1-collapse">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="" style="font-size: 1.8em;">Sanjivika
					Electronics </a> Admin
			</div>
			<!-- Top Menu Items -->
			<ul class="nav navbar-right top-nav">
				<li class="dropdown"><a class="dropdown-toggle" ng-model="userName" style="width: 137px;" data-toggle="dropdown">
				<i class="fa fa-user"></i><span id="loginName"> ${pageContext.request.userPrincipal.name} </span><b class="caret"></b>
						</p>
						<ul class="dropdown-menu">
							<li><a><i class="fa fa-fw fa-user"></i> Profile</a></li>
							<li><a><i class="fa fa-fw fa-envelope"></i> Inbox</a></li>
							<li><a><i class="fa fa-fw fa-gear"></i> Settings</a></li>
							<li class="divider"></li>
							<li><a ng-click=logout();><i class="fa fa-fw fa-power-off"></i> Log Out</a> <%-- <c:if
						test="${pageContext.request.userPrincipal.name != null}">
						<form id="logoutForm" method="POST" action="${contextPath}/logout">
							<input type="hidden" name="${_csrf.parameterName}"
								value="${_csrf.token}" />
						</form>
						<a onclick="document.forms['logoutForm'].submit()"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
						
					</c:if> --%></li>
						</ul></li>
			</ul>
			<!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
			<div class="collapse navbar-collapse navbar-ex1-collapse">
				<ul class="nav navbar-nav side-nav" id="nav" style="left: 0px;">
					<li><a class="active" ui-sref=".Dashboard" style="
    left: 0px;! important"
					><i
							class="fa fa-fw fa-dashboard"></i> Dashboard</a></li>
					<li><a ui-sref=".AddStock"><i class="fa fa-line-chart"
							aria-hidden="true"></i> Add Stock</a></li>
					<li><a ui-sref=".ViewStock"><i class="fa fa-fw fa-table"></i>
							Available Stock</a></li>
					<li><a ui-sref=".ViewAdminStock"><i class="fa fa-fw fa-table"></i>
							All Stock</a></li>
					<li ><a
						ui-sref=".AddCustomer"><i class="fa fa-fw fa-table"></i> Add
							Customer</a></li>
					<li><a
						ui-sref=".ViewCustomer"><i class="fa fa-eye"></i> View
							Customer</a></li>
					<li ><a
						ui-sref=".GenerateBill"><i class="fa fa-file-text-o"></i>
							Generate Bill</a></li>
					<!--   <li>
                        <a href="forms.html"><i class="fa fa-fw fa-edit"></i> Forms</a>
                    </li>
                    <li>
                        <a href="bootstrap-elements.html"><i class="fa fa-fw fa-desktop"></i> Bootstrap Elements</a>
                    </li>
                    <li>
                        <a href="bootstrap-grid.html"><i class="fa fa-fw fa-wrench"></i> Bootstrap Grid</a>
                    </li>
                    <li>
                        <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> Dropdown <i class="fa fa-fw faclass="active"-caret-down"></i></a>
                        <ul id="demo" class="collapse">
                            <li>
                                <a href="#">Dropdown Item</a>
                            </li>
                            <li>
                                <a href="#">Dropdown Item</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="blank-page.html"><i class="fa fa-fw fa-file"></i> Blank Page</a>
                    </li>-->
                    <li>
                        <a ui-sref=".ViewInvoice"><i class="fa fa-file-text-o"></i> View Invoice</a>
                    </li> 
				</ul>

			</div>
			<!-- /.navbar-collapse -->
		</nav>

		<div id="page-wrapper">

			<div class="container-fluid" style="padding-top: 4%;">


				<div ui-view></div>

				<!-- /.row -->

			</div>
			<!-- /.container-fluid -->

		</div>
		<!-- /#page-wrapper -->

	</div>
	<!-- /#wrapper -->

	<!-- jQuery -->


	<!-- Morris Charts JavaScript -->


</body>

</html>
