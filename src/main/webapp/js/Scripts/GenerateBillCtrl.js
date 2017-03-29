sanjivikaElectronics
		.controller(
				'GenerateBillCtrl',
				function($scope, $rootScope, $http, $window) {
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
								if ((i == 1 && value != 0)
										|| (i == 0 && value != 0 && n_array[i + 1] == 0)) {
									words_string += "Crores ";
								}
								if ((i == 3 && value != 0)
										|| (i == 2 && value != 0 && n_array[i + 1] == 0)) {
									words_string += "Lakhs ";
								}
								if ((i == 5 && value != 0)
										|| (i == 4 && value != 0 && n_array[i + 1] == 0)) {
									words_string += "Thousand ";
								}
								if (i == 6
										&& value != 0
										&& (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
									words_string += "Hundred and ";
								} else if (i == 6 && value != 0) {
									words_string += "Hundred ";
								}
							}
							words_string = words_string.split("  ").join(" ");
						}
						return words_string;
					}

					$scope.Agentname = $rootScope.userName;
					console.log("okkk testing name" + $scope.userName);
					$scope.searchedCustomer = [];
					$scope.searchProductModel = [];
					$scope.searchProdcut1 = "";
					$scope.CustomerId = '';
					$scope.invoiceNumber = null;
					$scope.showsearchicon = false;
					$scope.CustomerNotification = '';
					$scope.d = new Date();
					$scope.month = [ 'Jan', 'Feb', 'March', 'April', 'May',
							'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];
					$scope.Date1 = $scope.d.getDate() + " "
							+ ($scope.month[$scope.d.getMonth()]) + " "
							+ $scope.d.getFullYear();

					$scope.mCode = "+91";
					$scope.phoneNumbr = /^\d{10}$/;
					$scope.postalV = /^\d{7}$/;
					$scope.changedvalue = 0;
					$scope.SelectedValue = [];
					$scope.VAT = "0";
					$scope.addToBill = false;
					$scope.DetailsForBill = [];
					$scope.detailsStoredForId = [];
					$scope.tableData;

					/* document.getElementById("AddtoBill").disabled=true; */

					$scope.clearForm = function() {
						$scope.Prefix = "";
						$scope.firstName = "";
						$scope.secondName = "";
						$scope.street = "";
						$scope.street1 = "";
						$scope.city = "";
						$scope.postal = "";
						$scope.mobileNo = "";
						$scope.Email = "";
					};
					$scope.modelSearch = "";

					$scope.saveCustomer = function() {

						var body = {
							"prefix" : $scope.Prefix,
							"firstName" : $scope.firstName,
							"secondName" : $scope.secondName,
							"dob" : "22-08-2016",
							"street" : $scope.street,
							"street1" : $scope.street1,
							"city" : $scope.city,
							"state" : "Bihar",
							"mobile" : $scope.mobileNo,
							"postal" : $scope.postal,
							"email" : $scope.Email

						};
						// debugger;
						$http
								.post("userController/api/customer", body, {
									headers : {
										"Content-Type" : "application/json"
									},
									transformResponse : function(data) {
										return data;
									}

								})
								.success(
										function(data, status, headers, config) {
											// $scope.rows1 = JSON.parse(data);
											$scope.msg = "Customer has been added successfully";
											console.log($scope.msg);
											console.log(status);

										})
								.error(function(data, status, headers, config) {
									$scope.msg = "Unable to save";

								});
					};

					$scope.customerForm = true;
					$scope.search = false;
					$scope.active = "";
					$scope.searchCustomer = function() {
						$scope.CustomerNotification = '';

						$http
								.get(
										'userController/search/customer?mobile='
												+ $scope.modelSearch)
								.then(
										function(response) {

											debugger;
											$scope.searchedCustomer = response.data;
											$scope.showsearchicon = true;
											if ($scope.searchedCustomer.length != 0) {

												$('#modelSearch').modal('hide');
												$scope.modelSearch = '';
											}

											if ($scope.searchedCustomer.length == 0) {
												$scope.CustomerNotification = "Customer Details Not Found Please Add the customer or Search With Correct mobile Number "
												$scope.customerForm = false;
												$scope.search = true;
												$scope.showsearchicon = false;
												$scope.modelSearch = '';
											}

											$scope.CustomerId = $scope.searchedCustomer[0].id;
											$scope.Prefix = $scope.searchedCustomer[0].prefix;
											$scope.firstName = $scope.searchedCustomer[0].firstName;
											$scope.secondName = $scope.searchedCustomer[0].secondName;
											$scope.street = $scope.searchedCustomer[0].street;
											$scope.street1 = $scope.searchedCustomer[0].street1;
											$scope.city = $scope.searchedCustomer[0].city;
											$scope.postal = $scope.searchedCustomer[0].postal;
											$scope.mobileNo = $scope.searchedCustomer[0].mobile;
											$scope.Email = $scope.searchedCustomer[0].Email;
										});

					};

					$scope.Showtable = false;
					$scope.Hidesearch = true;

					$scope.searchModel = function(searchProdcut1) {
						console.log(searchProdcut1);
						console.log($scope.searchProdcut1);

						$http
								.get(
										'userController/search/items?modelNumber='
												+ searchProdcut1)
								.then(
										function(response) {
											$scope.searchProductModel = response.data;
											console
													.log($scope.searchProductModel);
											if ($scope.searchProductModel.length != 0) {
												$scope.active = "active"
												$scope.move = "move"
												$scope.Showtable = true;
												$scope.Hidesearch = false;
												$('#modelSearch').modal('hide');
											}
											if ($scope.searchProductModel.length == 0) {
												$scope.ModelNotFound = "Searched model is not availabe Please Search Other Model"
											}

										});

						// $scope.searchProdcut = "";
					}
					// function to calculate the the vat and product deatils.
					$scope.Totalamount = 0;
					$scope.TotalVat = 0;
					$scope.costTotal = 0;
					$scope.selectedaddress = "Tilakmaidan";
					$scope.tilak = true;
					$scope.palza = false;
					$scope.emall = false;

					$scope.getAddress = function() {
						if ($scope.selectedaddress == "Tilakmaidan") {
							$scope.tilak = true;
							$scope.palza = false;
							$scope.emall = false;
						}
						;
						if ($scope.selectedaddress == "Plaza") {
							$scope.tilak = false;
							$scope.palza = true;
							$scope.emall = false;
						}
						;
						if ($scope.selectedaddress == "emall") {
							$scope.tilak = false;
							$scope.palza = false;
							$scope.emall = true;
						}
						;
					}
					$scope.addToBill = function() {

						debugger;
						document.getElementById("AddtoBill").disabled = true;
						$('#ModelProductSearch').modal('hide');
						$scope.active = "";
						$scope.move = ""
						$scope.Hidesearch = true;
						$scope.Showtable = false;
						// POST /userController/api/invoice
						var body = [ {
							"invoiceId" : $scope.invoiceNumber,
							"agentName" : $scope.Agentname,
							"soldLocation" : $scope.selectedaddress,
							"customer" : {
								"id" : $scope.CustomerId
							},
							"date" : $scope.Date1,
							"item" : $scope.detailsStoredForId
						} ]
						// debugger;
						$http
								.post("userController/api/invoice", body, {
									headers : {
										"Content-Type" : "application/json"
									},
									transformResponse : function(data) {
										return data;
									}

								})
								.success(
										function(data, status, headers, config) {
											// $scope.rows1 = JSON.parse(data);
											$scope.msg = "Customer has been added successfully";
											$http
													.get(
															'userController/api/invoice')
													.then(
															function(response) {
																$scope.Invoice = response.data;
																$scope.tableData = $scope.Invoice[$scope.Invoice.length - 1].item;
																$scope.invoiceNumber = $scope.Invoice[$scope.Invoice.length - 1].invoiceId;
																$scope.Date1 = $scope.Invoice[$scope.Invoice.length - 1].date;
															});
										})
								.error(function(data, status, headers, config) {
									$scope.msg = "Unable to save";

								});

					}
					$scope.closeModel = function() {
						$scope.active = "";
						$scope.move = ""
						$scope.Hidesearch = true;
						$scope.Showtable = false;
					}

					$scope.getValue = function(x, y, z) {
						$scope.SelectedValue = [];
						$scope.DetailsForBill = [];
						// var flag=false;
						// for(var i=0;i<$scope.SelectedValue.length;i++){
						// //
						// document.getElementById("AddtoBill").disabled=false;
						// if($scope.SelectedValue[i].ProductDetails.id==x.id){
						// $scope.SelectedValue.splice(i,1);
						// flag=true;
						// }
						// }
						// if(flag==false){
						// document.getElementById("AddtoBill").disabled=false;
						$scope.SelectedValue.push({
							'ProductDetails' : x,
							'SP' : y,
							'VAT' : z
						});
						for (var i = 0; i < $scope.SelectedValue.length; i++) {

							// $scope.vatAmount=(($scope.SelectedValue[i].SP)*($scope.SelectedValue[i].VAT)/100);
							// $scope.cost=($scope.SelectedValue[i].SP-$scope.vatAmount)
							$scope.cost = parseFloat((($scope.SelectedValue[i].SP * 100) / (parseInt($scope.SelectedValue[i].VAT) + 100))
									.toFixed(2));
							$scope.vatAmount = parseFloat((($scope.SelectedValue[i].SP) - $scope.cost)
									.toFixed(2));

							// console.log(100 + $scope.SelectedValue[i].VAT);
							$scope.SrNo = i + 1
							$scope.detailsStoredForId
									.push({
										'id' : $scope.SelectedValue[i].ProductDetails.id
									});
							$scope.DetailsForBill
									.push({
										'id' : $scope.SelectedValue[i].ProductDetails.id,
										// 'SrNo' : $scope.SrNo,
										'mrp' : $scope.SelectedValue[i].ProductDetails.mrp,
										'modelNumber' : $scope.SelectedValue[i].ProductDetails.modelNumber,
										'dp' : $scope.SelectedValue[i].ProductDetails.dp,
										'date' : $scope.SelectedValue[i].ProductDetails.date,
										'serialNumber' : $scope.SelectedValue[i].ProductDetails.serialNumber,
										'brand' : $scope.SelectedValue[i].ProductDetails.brand.brandName,
										'vatAmount' : $scope.vatAmount,
										'vatPercent' : $scope.SelectedValue[i].VAT,
										"SP" : $scope.SelectedValue[0].SP,
										'productname' : $scope.SelectedValue[i].ProductDetails.product.productname,
										'unitPrice' : $scope.cost,
										"brand" : {
											"id" : $scope.SelectedValue[i].ProductDetails.brand.id
										},
										"product" : {
											"id" : $scope.SelectedValue[i].ProductDetails.product.id
										},
										"godown" : {
											"id" : $scope.SelectedValue[i].ProductDetails.godown.id
										},
										"status" : 0,
									});

							// console.log($scope.vatAmount);
							// console.log($scope.cost);
							// console.log($scope.SrNo);
							// console.log($scope.DetailsForBill);
							$scope.Totalamount1 = $scope.Totalamount
									+ $scope.cost + $scope.vatAmount;
							$scope.Totalamount = Math
									.round($scope.Totalamount1 * 100) / 100;
							 $scope.InWords=convertNumberToWords($scope.Totalamount);
					            
					            $scope.InWordsTotalamount= $scope.InWords+" Rupees Only"
							$scope.TotalVat1 = $scope.vatAmount
									+ $scope.TotalVat;
							$scope.TotalVat = Math
									.round($scope.TotalVat1 * 100) / 100;
							$scope.costTotal1 = $scope.cost + $scope.costTotal;
							$scope.costTotal = Math
									.round($scope.costTotal1 * 100) / 100;

							var body = [ {
								"id" : $scope.DetailsForBill[0].id,
								"modelNumber" : $scope.DetailsForBill[0].modelNumber,
								"serialNumber" : $scope.DetailsForBill[0].serialNumber,
								"mrp" : $scope.DetailsForBill[0].mrp,
								"dp" : $scope.DetailsForBill[0].dp,
								"date" : $scope.DetailsForBill[0].date,
								"unitPrice" : $scope.DetailsForBill[0].unitPrice,
								"vatAmount" : $scope.DetailsForBill[0].vatAmount,
								"vatPercent" : $scope.DetailsForBill[0].vatPercent,
								"sp" : $scope.DetailsForBill[0].SP,
								"status" : 0,
								"brand" : {
									"id" : $scope.DetailsForBill[0].brand.id
								},
								"godown" : {
									"id" : $scope.DetailsForBill[0].godown.id
								},
								"product" : {
									"id" : $scope.DetailsForBill[0].product.id

								}
							} ]

							// debugger;
							$http
									.post("userController/api/items", body, {
										headers : {
											"Content-Type" : "application/json"
										},
										transformResponse : function(data) {
											return data;
										}

									})
									.success(
											function(data, status, headers,
													config) {
												// $scope.rows1 =
												// JSON.parse(data);
												$scope.msg = "Customer has been added successfully";
												// console.log($scope.msg);
												// console.log(status);

											}).error(
											function(data, status, headers,
													config) {
												$scope.msg = "Unable to save";

											});

						}
						// console.log($scope.DetailsForBill);
						// console.log($scope.detailsStoredForId);

						// }
						if ($scope.SelectedValue.length == 0) {
							document.getElementById("AddtoBill").disabled = true;
						} else if ($scope.SelectedValue.length != 0) {
							document.getElementById("AddtoBill").disabled = false;
						}
						// console.log($scope.SelectedValue);
					}
				});