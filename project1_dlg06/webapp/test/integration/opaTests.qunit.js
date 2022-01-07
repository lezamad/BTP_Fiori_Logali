/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["Logalisince0/project1dlg06/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
