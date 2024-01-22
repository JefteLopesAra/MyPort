/*global QUnit*/

sap.ui.define([
	"sapdevsport/myport/controller/MyPort.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyPort Controller");

	QUnit.test("I should test the MyPort controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
