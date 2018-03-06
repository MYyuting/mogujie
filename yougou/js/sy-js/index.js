myApp=angular.module("myApp",["ui.router"]);
myApp.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	//重定向
	$urlRouterProvider.when("/b","/b/a1");
	$urlRouterProvider.otherwise("a");
	$urlRouterProvider.when("/d","/d/a1");
	
//	$stateProvider.state({
//		name:"/d",
//		url:"/d/a2",
//		views:{
//			"header":{
//				templateUrl:"index/a2.html"
//			}
//			
//		}
//	})
	

	$stateProvider.state({
		name:"a",
		url:"/a",
		templateUrl:"index/a.html"
	})
	$stateProvider.state({
		name:"b",
		url:"/b",
		templateUrl:"index2/b.html"
	})
	$stateProvider.state({
		name:"b.a1",
		url:"/a1",
		templateUrl:"index2/a1.html"
	})
	$stateProvider.state({
		name:"b.b1",
		url:"/b1",
		templateUrl:"index2/b1.html"
	})
	$stateProvider.state({
		name:"b.c1",
		url:"/c1",
		templateUrl:"index2/c1.html"
	})
	$stateProvider.state({
		name:"c",
		url:"/c",
		templateUrl:"index/c.html"
	})
	$stateProvider.state({
		name:"d",
		url:"/d",
		templateUrl:"index1/d.html"
	})
	$stateProvider.state({
		name:"d.a1",
		url:"/a1",
		templateUrl:"index1/a2.html"
	})
	$stateProvider.state({
		name:"d.b1",
		url:"/b1",
		templateUrl:"index1/b2.html"
	})
	$stateProvider.state({
		name:"d.c1",
		url:"/c1",
		templateUrl:"index1/c2.html"
	})
	$stateProvider.state({
		name:"e",
		url:"/e",
		templateUrl:"index/e.html"
	})
	
}])





