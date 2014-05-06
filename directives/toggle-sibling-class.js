/**
 * @note Use: <div toggle-sibling-class="class-to-toggle" />
 */
angular.module('myapp').directive('toggleSiblingClass', function(){
	return function(scope, element, attr){
		element.on('click', function(){
			var _myself = angular.element(element);
			var _siblings = _myself.parent().parent().children().children();
			_siblings.toggleClass(attr.toggleSiblingClass);
		});
	};
});