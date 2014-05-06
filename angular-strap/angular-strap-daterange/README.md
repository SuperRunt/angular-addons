date range directive for angular-strap datepicker
==================================================

This directive lets you compare two angular-strap datepicker fields, for use when you have a to- and from-date in same scope.

This directive observes the from-date. The datepicker minDate will always be set to the from-date + 1 day.
If the from-date gets set to after the to-date, the to-date gets updated to from-date + 1 day. If the to-date is updated
by the directive, the field 'flashes' to alert the user to this update.

Easily implemented by adding laterthan="{{fromDate}}" to the to-date form field together with the bs-datepicker directive.
