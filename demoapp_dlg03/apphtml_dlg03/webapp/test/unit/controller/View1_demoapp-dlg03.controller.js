/*global QUnit*/

sap.ui.define([
	"Logaligroup_dlg03/apphtml_dlg03/controller/View1_demoapp-dlg03.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1_demoapp-dlg03 Controller");

	QUnit.test("I should test the View1_demoapp-dlg03 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
