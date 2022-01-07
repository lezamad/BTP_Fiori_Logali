/*global QUnit*/

sap.ui.define([
	"Logaligroup_dlg04/apphtml_dlg04/controller/View1_demoapp_dlg04.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1_demoapp_dlg04 Controller");

	QUnit.test("I should test the View1_demoapp_dlg04 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
