var myApp=angular
				.module("myModule", [])
				.controller("myController", function ($scope) {
					var technologies = [
						{ name: "C#" , likes : 0, dislikes: 0, date : new Date("23, November 2017") } ,
						{ name: "Asp.net" , likes : 0, dislikes: 0, date : new Date("24, November 2017")} ,
						{ name: "Java" , likes : 0, dislikes: 0, date : new Date("26, November 2017") } ,
						{ name: "python" , likes : 0, dislikes: 0, date : new Date("20, November 2017") }
					];
				$scope.technologies=technologies;

				$scope.incrementlikes = function (technology) {
					technology.likes++;
				}
				$scope.incrementdislikes = function (technology) {
					technology.dislikes++;
				}
				$scope.rowlimit = 3;
				$scope.sortColumn = "name";

				});