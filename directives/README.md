Directives
==============

[Toggle Class](toggle-class.js): Toggle a class on another element. Bound to click. <br>
[Hide Parent Elm](hide-parent-element.js): Hide the parent element on click.
[Toggle Sibling Class](toggle-sibling-class.js): Toggle class on sibling elements on click.

[Form Field Equals](angular-equals.js): Compares two form fields
```
<input type="email" name="email" class="form-control" ng-model="person.EmailAddress" placeholder="Email" required oninvalid="this.setCustomValidity('Email is required, and must match.');">
<input type="email" class="form-control" ng-model="emailConfirm" placeholder="Email Confirm" equals="{{person.EmailAddress}}" oninvalid="this.setCustomValidity('Email is required, and must match.');">
```
