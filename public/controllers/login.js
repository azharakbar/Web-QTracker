var app = angular.module ( 'loginForm' , ['ngRoute'] ) ;

app.run( function( $rootScope ){
	$rootScope.loggedIn = false ; 
})

app.config(['$routeProvider' , function( $routeProvider ) {
	$routeProvider
	.when( '/' , {
		templateUrl : './loginPage.html' 
	})
	.when( '/success' , {
		resolve : {
			check : function( $location ,$rootScope ){
				if ( !$rootScope.loggedIn ){
					$location.path('/') ;
				}
			}
		},
		templateUrl : './success.html' 
	})	
	.otherwise({
		templateUrl : './error.html' 
	}) 
}])

app.controller('test', function( $scope , $location , $rootScope ){
	$scope.submit = function(){
		if ( $scope.username == 'admin' && $scope.password == 'admin' ){
			$rootScope.loggedIn = true ;
			$location.path('/success') ;
		}else{
			$scope.error = "!! INVALID LOGIN CREDENTIALS !!" ;
		}
	}
})