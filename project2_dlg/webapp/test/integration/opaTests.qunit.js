/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["dlg/project2dlg/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
