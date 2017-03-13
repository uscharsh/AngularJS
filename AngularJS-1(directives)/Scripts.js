///<eference path="angular.min.js"/>
var myApp=angular
				.module("myModule", [])
				.controller("myController", function ($scope) {
					var Employee = { name:"harsh" };
					$scope.Employee = Employee;
				});