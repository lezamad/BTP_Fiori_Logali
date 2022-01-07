/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Logaligroup_dlg03/apphtml_dlg03/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
