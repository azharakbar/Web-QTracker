var app = angular.module ( 'loginForm' , ['ngRoute'] ) ;

app.config( function( $routeProvider ) {
	$routeProvider
	.when( '/' , {
		templateUrl : 'loginPage.html' 
	})
	.when( '/success' , {
		resolve : {
			"check" : function( $location , $rootScope ){
				if ( !$rootScope.loggedIn ){
					$location.path('/') ;
				}
			}
		},
		templateUrl : 'success.html' 
	})	
	.otherwise({
		templateUrl : 'error.html' 
	}) 
})



app.controller('test', function( $scope , $location , $rootScope , $http ){
	$scope.submit = function(){

		var data = {
			userId : $scope.username ,
			password : $scope.password ,
			deviceId : '0'
		}
		
		$http.post ( 'http://54.251.44.26:4009/api/login' , data )
			.then(function(res){
				console.log(res.data.result_code , "   " , res.data.role);

				if ( res.data.result_code === 200 && res.data.role === 'admin' ){
					$rootScope.loggedIn = true ;
					$location.path('/success') ;
				}else{
					$scope.username = '' ;
					$scope.password = '' ;
					$scope.error = "!! INVALID LOGIN CREDENTIALS !!" ;		
				}
			},function(err){
				console.log(err);
			})
	}		
});