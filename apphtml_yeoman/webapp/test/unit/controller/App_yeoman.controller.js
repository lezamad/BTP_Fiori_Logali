/*global QUnit*/

sap.ui.define([
	"Logali_yeoman/apphtml_yeoman/controller/App_yeoman.controller"
], function (Controller) {
	"use strict";

	QUnit.module("App_yeoman Controller");

	QUnit.test("I should test the App_yeoman controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
