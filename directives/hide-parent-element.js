 /**
     * @note Use: to <div hideparent />
     */
 angular.module('myApp').directive("hideparent", function() {
	return function(scope, element) {
		element.bind('click', function(){
			element.parent().addClass("invisible");
		});
	};
});