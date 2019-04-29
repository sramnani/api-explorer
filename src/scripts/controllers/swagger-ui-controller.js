/*
* api-explorer - v0.0.1
*
* (C) 2019 API, all right reserved
*/
//Controller to perform the submit logic
'use strict';

angular
	.module('swaggerUi')
	.controller('swaggerUiController', function($scope,swaggerService) {
		$scope.loading = false;
		$scope.dataObjs = $scope.body;
		$scope.enableForm = true;

		//Function to submit the request to the server
		$scope.submitReq = function(req) {
			$scope.loading = true;

			swaggerService
				.send(req,$scope.url,$scope.method)
				.then(function(result) {
					$scope.loading = false;
					if(result) {
						$scope.result = result;
						$scope.headers = JSON.stringify(result.config.headers, null, 4);
						$scope.response = JSON.stringify(result.data, null, 4);
					}
				}).catch(function(error){
					if(error) {
						$scope.error = error;
					}
				}).finally(function () {
				    $scope.loading = false;
			});
		};
        $scope.standardise = function(str){
			return (str.replace(/_|-/g, " "));

		}

		//Function to Check Method type
		$scope.isPostORPut = function(){
			console.log($scope.method);
			if($scope.method === 'PUT' || $scope.method === 'POST'){
				return true;
			}
			else {
				return false;
			}
		}
		$scope.enableForm = $scope.isPostORPut();
	});