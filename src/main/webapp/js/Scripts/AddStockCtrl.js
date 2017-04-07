sanjivikaElectronics
		.controller(
				'AddStockCtrl',
				function(SessionCheckService, $scope, $http) {
					$(document).click(
							function() {
								SessionCheckService.getSessionToken().success(
										function(data) {
											$scope.response = data;
											// console.log($scope.response.status);
											if ($scope.response.status == 200) {

											} else {
												location.assign("/login");
											}
										});
							});

					$scope.SelectedBrand = "-1";
					$scope.uploadexceldisableproduct = true;

					$scope.brand = '';
					$scope.brandMsg = '';
					$scope.Godown = " ";
					$scope.SelectedProduct = "-1";
					$scope.SelectedGodown = "-1";
					$scope.save = function() {

						var body = {
							"brandName" : $scope.brand

						};

						$http
								.post("userController/api/brands", body, {
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
											$scope.brandMsg = data;
											$scope.uploadexceldisableproduct = true;
											$scope.SelectedBrand = "-1";
											$scope.SelectedProduct = "-1";
											$scope.SelectedGodown = "-1";
											$scope.fileModel = null;
											angular.element(
													"input[type='file']").val(
													null);
											$scope.msgStock = "";
											$scope.productMsg = "";

											$scope.GodownMsg = "";
											$scope.Godown = "";
											$scope.Product = "";
											// $scope.formTest.$setPristine();
											// $scope.formTestExcelUpload.$setPristine();
											$http
													.get(
															'userController/api/brands')
													.then(
															function(response) {

																$scope.brandsDropDown = response.data;
																;
															});
											$http.get('userController/api/godowns')
													.then(
															function(response) {

																$scope.godownsDropDown = response.data;
																;
															});
											$scope.brand = '';

										})
								.error(function(data, status, headers, config) {
									$scope._error = data;

								});
						// $http.get('userController/api/brands').then(
						// function(response) {
						//
						// $scope.brandsDropDown = response.data;;
						// });
						/*
						 * $http.get('userController/api/products').then(
						 * function(response) {
						 * 
						 * $scope.productDropDown = response.data;; //
						 * console.log($scope.productDropDown); });
						 */
						/*
						 * $http.get('userController/api/godowns').then(
						 * function(response) {
						 * 
						 * $scope.godownsDropDown = response.data;; });
						 */
					};
					// on page load api call
					$http.get('userController/api/brands').then(
							function(response) {

								$scope.brandsDropDown = response.data;
								;
							});

					$http.get('userController/api/godowns').then(
							function(response) {

								$scope.godownsDropDown = response.data;
								;
							});

					$scope.saveProduct = function() {
						// clear ng model for upload from Excel

						var body = {
							"productname" : $scope.Product,
							"brand" : {
								"id" : $scope.SelectedBrand,
								"brandname" : "Null"
							}

						}
						$http
								.post("userController/api/products", body, {
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
											$scope.productMsg = data;
											$scope.Product = '';
											$scope.uploadexceldisableproduct = true;
											$scope.SelectedBrand = "-1";
											$scope.SelectedProduct = "-1";
											$scope.SelectedGodown = "-1";
											$scope.fileModel = null;
											angular.element(
													"input[type='file']").val(
													null);

											$scope.msgStock = "";

											$scope.brandMsg = "";
											$scope.GodownMsg = "";
											$scope.Godown = "";
											$scope.Product = "";
											$scope.brand = "";
											$http
													.get(
															'userController/api/brands')
													.then(
															function(response) {

																$scope.brandsDropDown = response.data;
																;
															});
											/*
											 * $http .get(
											 * 'userController/api/products')
											 * .then( function(response) {
											 * 
											 * $scope.productDropDown =
											 * response.data;; });
											 */
											$http
													.get(
															'userController/api/godowns')
													.then(
															function(response) {

																$scope.godownsDropDown = response.data;
																;
															});
										})
								.error(function(data, status, headers, config) {
									$scope._error = data;

								});
						$http.get('userController/api/brands').then(
								function(response) {

									$scope.brandsDropDown = response.data;
									;
								});
						// $http.get('http://localhost:9091/userController/api/products').then(function(response){

						// $scope.productDropDown = response.data;;
						// console.log($scope.productDropDown);
						// });
						$http.get('userController/api/godowns').then(
								function(response) {

									$scope.godownsDropDown = response.data;
									;
								});
					};

					$scope.Godown = "";
					$scope.GodownMsg = "";
					$scope.saveGodown = function() {

						var body = {
							godownName : $scope.Godown
						};
						$http
								.post("userController/api/godowns", body, {
									headers : {
										"Content-Type" : "application/json"
									},
									transformResponse : function(data) {
										return data;
									}

								})
								.success(
										function(data, status, headers, config) {
											$scope.GodownMsg = data;
											$scope.Godown = '';
											$scope.uploadexceldisableproduct = true;
											$scope.SelectedBrand = "-1";
											$scope.SelectedProduct = "-1";
											$scope.SelectedGodown = "-1";
											$scope.fileModel = null;
											angular.element(
													"input[type='file']").val(
													null);
											$scope.brand = "";
											$scope.msgStock = "";
											$scope.productMsg = "";
											$scope.brandMsg = "";

											$scope.Godown = "";
											$scope.Product = "";
											$http
													.get(
															'userController/api/brands')
													.then(
															function(response) {

																$scope.brandsDropDown = response.data;
																;
															});
											// $http
											// .get(
											// 'userController/api/products')
											// .then(
											// function(response) {
											//
											// $scope.productDropDown =
											// response.data;;
											// });
											$http
													.get(
															'userController/api/godowns')
													.then(
															function(response) {

																$scope.godownsDropDown = response.data;
																;
															});
										})
								.error(function(data, status, headers, config) {
									$scope._error = data;

								});

						$http.get('userController/api/godowns').then(
								function(response) {

									$scope.godownsDropDown = response.data;
									;
								});
					}

					$scope.selectedBrand = function(SelectedBrand) {

						$http.get(
								'userController/api/products?brandId='
										+ $scope.SelectedBrand).then(
								function(response) {
									$scope.productDropDown = response.data;
									$scope.uploadexceldisableproduct = false;
									$scope.GodownMsg = '';
									$scope.msgStock = '';

								});

					}
					// -----------------
					$scope.saveStock = function(SelectedBrand, SelectedProduct,SelectedGodown) {
						console.log($scope.fileModel);

						$scope.Final = [];
						$scope.output = JSON.parse($scope.output);
						$scope.output2 = JSON.parse(JSON
								.stringify($scope.output.Sheet1))

						angular.forEach($scope.output2, function(value, key) {

							$scope.Final.push(

							{
								"modelNumber" : value.modelNumber,
								"mrp" : value.mrp,
								"serialNumber" : value.serialNumber,
								"date" : value.date,
								"dp" : value.dp,
								"status" : 1,
								"product" : {
									"id" : $scope.SelectedProduct
								},
								"brand" : {
									"id" : $scope.SelectedBrand
								},
								"godown" : {
									"id" : $scope.SelectedGodown
								}
							}

							)

						});

						// ----Prashant

						$http.post("userController/api/items", $scope.Final, {
							headers : {
								"Content-Type" : "application/json"
							},
							transformResponse : function(data) {
								return data;
							}

						}).success(function(data, status, headers, config) {
							$scope.uploadexceldisableproduct = true;
							$scope.SelectedBrand = "-1";
							$scope.SelectedProduct = "-1";
							$scope.SelectedGodown = "-1";
							$scope.esxcl = 'file';
							$scope.msgStock = "Uploaded Sucessfully"
							$scope.fileModel = null;
							$scope.brand = "";

							$scope.productMsg = "";
							$scope.brandMsg = "";
							$scope.GodownMsg = "";
							$scope.Godown = "";
							$scope.Product = "";
							angular.element("input[type='file']").val(null);
						}).error(function(data, status, headers, config) {
							$scope._error = data;

						});
						// $scope.initFirst();

						// --- Ends here
					}

					var X = XLSX;
					var XW = {
						/* worker message */
						msg : 'xlsx',
						/* worker scripts */
						rABS : '/sanjivika/js/xlsxworker2.js',
						norABS : '/sanjivika/js/xlsxworker1.js',
						noxfer : '/sanjivika/js/xlsxworker.js'
					};

					var rABS = typeof FileReader !== "undefined"
							&& typeof FileReader.prototype !== "undefined"
							&& typeof FileReader.prototype.readAsBinaryString !== "undefined";
					if (!rABS) {
						document.getElementsByName("userabs")[0].disabled = true;
						document.getElementsByName("userabs")[0].checked = false;
					}

					var use_worker = typeof Worker !== 'undefined';
					if (!use_worker) {
						document.getElementsByName("useworker")[0].disabled = true;
						document.getElementsByName("useworker")[0].checked = false;
					}

					var transferable = use_worker;
					if (!transferable) {
						document.getElementsByName("xferable")[0].disabled = true;
						document.getElementsByName("xferable")[0].checked = false;
					}

					var wtf_mode = false;

					function fixdata(data) {
						var o = "", l = 0, w = 10240;
						for (; l < data.byteLength / w; ++l)
							o += String.fromCharCode
									.apply(null, new Uint8Array(data.slice(l
											* w, l * w + w)));
						o += String.fromCharCode.apply(null, new Uint8Array(
								data.slice(l * w)));
						return o;
					}

					function ab2str(data) {
						var o = "", l = 0, w = 10240;
						for (; l < data.byteLength / w; ++l)
							o += String.fromCharCode.apply(null,
									new Uint16Array(data
											.slice(l * w, l * w + w)));
						o += String.fromCharCode.apply(null, new Uint16Array(
								data.slice(l * w)));
						return o;
					}

					function s2ab(s) {
						var b = new ArrayBuffer(s.length * 2), v = new Uint16Array(
								b);
						for (var i = 0; i != s.length; ++i)
							v[i] = s.charCodeAt(i);
						return [ v, b ];
					}

					function xw_noxfer(data, cb) {
						var worker = new Worker(XW.noxfer);
						worker.onmessage = function(e) {
							switch (e.data.t) {
							case 'ready':
								break;
							case 'e':
								console.error(e.data.d);
								break;
							case XW.msg:
								cb(JSON.parse(e.data.d));
								break;
							}
						};
						var arr = rABS ? data : btoa(fixdata(data));
						worker.postMessage({
							d : arr,
							b : rABS
						});
					}

					function xw_xfer(data, cb) {
						var worker = new Worker(rABS ? XW.rABS : XW.norABS);
						worker.onmessage = function(e) {
							switch (e.data.t) {
							case 'ready':
								break;
							case 'e':
								console.error(e.data.d);
								break;
							default:
								xx = ab2str(e.data).replace(/\n/g, "\\n")
										.replace(/\r/g, "\\r");
								console.log("done");
								cb(JSON.parse(xx));
								break;
							}
						};
						if (rABS) {
							var val = s2ab(data);
							worker.postMessage(val[1], [ val[1] ]);
						} else {
							worker.postMessage(data, [ data ]);
						}
					}

					function xw(data, cb) {
						// transferable =
						// document.getElementsByName("xferable")[0].checked;
						if (transferable)
							xw_xfer(data, cb);
						else
							xw_noxfer(data, cb);
					}

					function get_radio_value(radioName) {
						var radios = document.getElementsByName(radioName);
						for (var i = 0; i < radios.length; i++) {
							if (radios[i].checked || radios.length === 1) {
								return radios[i].value;
							}
						}
					}

					function to_json(workbook) {
						var result = {};
						console.log(result);
						workbook.SheetNames
								.forEach(function(sheetName) {
									var roa = X.utils
											.sheet_to_row_object_array(workbook.Sheets[sheetName]);
									if (roa.length > 0) {
										result[sheetName] = roa;

										$scope.test = result[sheetName];

									}
								});
						return result;
					}

					function to_csv(workbook) {
						var result = [];
						workbook.SheetNames.forEach(function(sheetName) {
							var csv = X.utils
									.sheet_to_csv(workbook.Sheets[sheetName]);
							if (csv.length > 0) {
								result.push("SHEET: " + sheetName);
								result.push("");
								result.push(csv);
							}
						});
						return result.join("\n");
					}

					function to_formulae(workbook) {
						var result = [];
						workbook.SheetNames.forEach(function(sheetName) {
							var formulae = X.utils
									.get_formulae(workbook.Sheets[sheetName]);
							if (formulae.length > 0) {
								result.push("SHEET: " + sheetName);
								result.push("");
								result.push(formulae.join("\n"));
							}
						});
						return result.join("\n");
					}

					var tarea = document.getElementById('b64data');

					function b64it() {
						if (typeof console !== 'undefined')
							console.log("onload", new Date());
						var wb = X.read(tarea.value, {
							type : 'base64',
							WTF : wtf_mode
						});
						process_wb(wb);
					}

					function process_wb(wb) {
						$scope.output = "";
						$scope.output = JSON.stringify(to_json(wb), 2, 2);
						// switch(get_radio_value("format")) {
						// case "json":
						// output = JSON.stringify(to_json(wb), 2, 2);
						// break;
						// case "form":
						// output = to_formulae(wb);
						// break;
						// default:
						// output = to_csv(wb);
						// }
						$scope.test = $scope.output;

						// if(out.innerText === undefined) out.textContent =
						// $scope.output;
						// else out.innerText = $scope.output;
						// if(typeof console !== 'undefined')
						// console.log($scope.output, new Date());
					}

					var drop = document.getElementById('drop');

					function handleDrop(e) {
						e.stopPropagation();
						e.preventDefault();
						// rABS =
						// document.getElementsByName("userabs")[0].checked;
						// use_worker =
						// document.getElementsByName("useworker")[0].checked;
						var files = e.dataTransfer.files;
						var f = files[0];
						{
							var reader = new FileReader();
							var name = f.name;
							reader.onload = function(e) {
								if (typeof console !== 'undefined')
									console.log("onload", new Date(), rABS,
											use_worker);
								var data = e.target.result;
								if (use_worker) {
									xw(data, process_wb);
								} else {
									var wb;
									if (rABS) {
										wb = X.read(data, {
											type : 'binary'
										});
									} else {
										var arr = fixdata(data);
										wb = X.read(btoa(arr), {
											type : 'base64'
										});
									}
									process_wb(wb);
								}
							};
							if (rABS)
								reader.readAsBinaryString(f);
							else
								reader.readAsArrayBuffer(f);
						}
					}

					function handleDragover(e) {
						e.stopPropagation();
						e.preventDefault();
						e.dataTransfer.dropEffect = 'copy';
					}

					// if(drop.addEventListener) {
					// drop.addEventListener('dragenter', handleDragover,
					// false);
					// drop.addEventListener('dragover', handleDragover, false);
					// drop.addEventListener('drop', handleDrop, false);
					// }

					var xlf = document.getElementById('xlf');

					function handleFile(e) {
						// rABS =
						// document.getElementsByName("userabs")[0].checked;
						// use_worker =
						// document.getElementsByName("useworker")[0].checked;
						var files = e.target.files;
						var f = files[0];
						{
							var reader = new FileReader();
							// var name = f.name;
							reader.onload = function(e) {
								if (typeof console !== 'undefined')
									console.log("onload", new Date(), rABS,
											use_worker);
								var data = e.target.result;
								if (use_worker) {
									xw(data, process_wb);
								} else {
									var wb;
									if (rABS) {
										wb = X.read(data, {
											type : 'binary'
										});
									} else {
										var arr = fixdata(data);
										wb = X.read(btoa(arr), {
											type : 'base64'
										});
									}
									process_wb(wb);
								}
							};
							if (rABS)
								reader.readAsBinaryString(f);
							else
								reader.readAsArrayBuffer(f);
						}
					}

					if (xlf.addEventListener)
						xlf.addEventListener('change', handleFile, false);

				});