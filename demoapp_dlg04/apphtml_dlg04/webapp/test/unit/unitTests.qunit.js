/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Logaligroup_dlg04/apphtml_dlg04/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
