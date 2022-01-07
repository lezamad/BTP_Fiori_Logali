/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Logali_yeoman/apphtml_yeoman/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
