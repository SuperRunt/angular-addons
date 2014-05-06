	 /**
     * @note form validation (check that from date is before to date)
     */
    angular.module('theApp').directive('laterthan', ["$datepicker", function($datepicker) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, elem, attrs, ngModel) {

                if(!ngModel) { return; }

                attrs.$observe('laterthan', function (val) {
                    elem.removeClass("changeAlert");
                    updateDateSettings(val);
                });

                var updateDateSettings = function ( newVal ) {
                    var _newFromDate;

                    if (typeof newVal === "string" && newVal.match(/^[0-9]+$/) != null) {
                        _newFromDate = new Date(parseInt(newVal, 10));
                    } else {
                        // Hack to deal with angular wrapping the date description in extra set of ""
                        var _string = newVal.replace('"', '').replace('"', '');
                        _newFromDate = new Date(_string);
                    }

                    // always update the minimum to date
                    var _newToMinDate = new Date( _newFromDate.valueOf() + 1 * 864e5 );
                    attrs.$set('minDate', _newToMinDate);

                    if ( ngModel.$viewValue.valueOf() - _newFromDate.valueOf()  > 8640000  )  {
                        return;
                    }

                    ngModel.$render = function() {
                        ngModel.$setViewValue(_newToMinDate);
                        elem.val(OBI.convertToPrettyDate(_newToMinDate));
                        elem.addClass("changeAlert");
                    };

                    ngModel.$modelValue = _newToMinDate;
                    ngModel.$setViewValue(_newToMinDate);
                };
            }
        };
    }]);