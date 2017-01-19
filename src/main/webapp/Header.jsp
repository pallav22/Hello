<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<style>
<!--
.navbar-inverse .navbar-brand {
    color: #FFEB3B;
}
.navbar-inverse .navbar-brand:hover, 
.navbar-inverse .navbar-brand:focus {
  background-color: transparent;
  color:  #FFEB3B;
}
.navbar-inverse .navbar-nav>li>a {
    color: #FFC107;
}
</style>
<body>
<%-- <% if(session.getAttribute("name")==null){
 response.sendRedirect("Homepage.jsp");
 } 
 
 %> --%>
<nav class="navbar navbar-inverse ">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Sanjivika Electronics</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li id="home" ><a href="${contextPath}/welcome"><b>HOME</b></a></li>
        <li id="action" class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><b>Add Brand</b><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li id="addbrand"><a href="/newbBand">Add New Brand</a></li>
            <li id="addproduct"><a href="CashierAddProduct.js">Add New Product</a></li>
            <li id="addgodown"><a href="CashierAddGodown.js">Add New Godown</a></li>
            
          </ul>
        </li>
        <li id="add"><a href="addItem.js"><b>Add Item</b></a></li>
        <li id="view"><a href="CashierViewStock.js"><b>View Stock</b></a></li>
        <li id="addCustomer"><a href="AddCustomer.js"><b>ADD Customer</b></a></li>
        <li id="viewcustomer"><a href="ViewCustomer.js"><b>View Customer</b></a></li>
        <!-- <li id="CreateBill"><a href="CreateBill.js">Create Bill</a></li> -->
      </ul>
      <ul class="nav navbar-nav navbar-right">
         <li><a><span class="glyphicon glyphicon-user"></span> ${pageContext.request.userPrincipal.name}</a></li>
        <li>
       

    <c:if test="${pageContext.request.userPrincipal.name != null}">
        <form id="logoutForm" method="POST" action="${contextPath}/logout">
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        </form>

        <a onclick="document.forms['logoutForm'].submit()">Logout</a>

    </c:if>

</li>
      </ul>
    </div>
  </div>
</nav>
	
	
	</body>
</html>