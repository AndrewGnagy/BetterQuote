app.controller('quoterPageController', function ($scope, $routeParams) {
	console.log($routeParams);
	if ($routeParams.quoter) {
		$scope.quoter = $routeParams.quoter;
	}

	$scope.data = {
		dumbList: []
	}

	$scope.addThing = function(){
		$scope.data.dumbList.push("Thing"+$scope.data.dumbList.length);
	}
});
