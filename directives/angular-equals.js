/**
 * @note form validation: compare two values
 */
angular.module('myApp').directive('equals', function() {
	return {
		restrict: 'A',
		require: '?ngModel',
		link: function(scope, elem, attrs, ngModel) {
			if(!ngModel) { return; } // do nothing if no ng-model

			// watch own value and re-validate on change
			scope.$watch(attrs.ngModel, function() {
				validate();
			});

			// observe the other value and re-validate on change
			attrs.$observe('equals', function (val) {
				validate();
			});

			var validate = function() {
				// values
				var val1 = ngModel.$viewValue;
				var val2 = attrs.equals;

				// set validity
				ngModel.$setValidity('equals', val1 === val2);
			};
		}
	};
});

/*
Use example
<div class="form-group">
	<label class="control-label">Email</label>
	  <input type="email" name="email" class="form-control" ng-model="person.EmailAddress" placeholder="Email" required oninvalid="this.setCustomValidity('Email is required, and must match.');">
</div>

<div class="form-group">
	<label control-label">Email Confirm</label>
	  <input type="email" class="form-control" ng-model="emailConfirm" placeholder="Email Confirm" equals="{{person.EmailAddress}}" oninvalid="this.setCustomValidity('Email is required, and must match.');">
</div>
*/