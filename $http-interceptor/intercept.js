/**
 * $http interceptor mixin
 * 
 * An easy way to add or store data that is required to all request
 */
myApp.config(function($httpProvider) {

	$httpProvider.interceptors.push(function($q, $rootScope) {
		return {
			'request': function(config) {
				if (config.method !== "POST") {
					config.params = $rootScope.httpParams; // params that get sent w every request
				}

				// show 'thinking' icon
				if ( config.url.search("file-name-that-should-not-get-icon") === -1 ) {
					$rootScope.$broadcast('loading-started');
				}

				return config || $q.when(config);
			},
			'requestError': function(rejection) {
				$rootScope.$broadcast('request-error');
				return $q.reject(rejection);
			},
			'response': function(response) {
				// session vars etc sent from server, can be captured here
				if ( response.data && response.data.sessionVar ) {
					$rootScope.sessionVar = response.data.sessionVar;
				}
				if ( config.url.search("file-name-that-should-not-get-icon") === -1 ) { 
					$rootScope.$broadcast('loading-complete');
				}
				return response || $q.when(response);
			},
			'responseError': function(rejection) {
				$rootScope.$broadcast('response-error');
				return $q.reject(rejection);
			}
		};
	});
});