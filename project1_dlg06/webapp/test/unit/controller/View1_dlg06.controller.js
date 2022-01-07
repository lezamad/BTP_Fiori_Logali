/*global QUnit*/

sap.ui.define([
	"Logali_since0/project1_dlg06/controller/View1_dlg06.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1_dlg06 Controller");

	QUnit.test("I should test the View1_dlg06 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
