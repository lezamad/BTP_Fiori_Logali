/*global QUnit*/

sap.ui.define([
	"Logali_Odata/project_dlg05_01/controller/View1_dlg05.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1_dlg05 Controller");

	QUnit.test("I should test the View1_dlg05 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
