/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dlg03/project3_dlg/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
