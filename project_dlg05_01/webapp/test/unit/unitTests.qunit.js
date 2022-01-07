/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Logali_Odata/project_dlg05_01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
