/**
 * @note Use: <div toggle-class="selector,class-to-toggle" />
 */
angular.module('myApp').directive('toggleClass', function(){
	return function(scope, element, attrs){
		element.bind('click', function(){
			var selector_class = attrs.toggleClass.split(',');
			angular.element( document.querySelectorAll(selector_class[0]) )
				.toggleClass(selector_class[1]);
		});
	};
});