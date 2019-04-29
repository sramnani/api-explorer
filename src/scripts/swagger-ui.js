/*
* api-explorer - v0.0.1
*
* (C) 2019 API, all right reserved
*/

'use strict';

angular
	.module('swaggerUi', ['ng'])
	.directive('swaggerUi', function() {

		return {
			restrict: 'A',
			controller: 'swaggerUiController',
			templateUrl: function () {
				return 'templates/parameter.html';
			},
			scope: {
				title: '@title',
				url: '@url',
				method: '@method',
				body: '=body'
			},
			link: function ($scope,$attrs) {
				$scope.title = $attrs.title;
				$scope.url = $attrs.url;
				$scope.method = $attrs.method;
				$scope.body = angular.fromJson($attrs.body);

			}

		};
	});