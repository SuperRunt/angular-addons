/**
 * Format cc number to partially hidden.
 */
angular.module('myApp').filter('formatHiddenCC', function(){
	return function(input){
		var number = (input + '').trim();
		return 'xxxx-xxxx-xxx-' + number.substr(-4);
	};
});

/**
 * Format as a phone number : "(123) 456-7890".
 */
angular.module('myApp').filter('formatPhone', function(){
	return function(input){
		var number = (input || '').trim().replace(/[^0-9]/g, '');
		return '(' + number.substr(0,3) + ') ' + number.substr(3,3) + '-' + number.substr(6,4);
	};
});

/**
 * Reverse filter
 */
angular.module('myApp').filter('reverse', function(){
	return function (items){
		return (items || []).slice().reverse();
	};
});