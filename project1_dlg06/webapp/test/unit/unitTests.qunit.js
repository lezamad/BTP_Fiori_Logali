/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Logali_since0/project1_dlg06/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
