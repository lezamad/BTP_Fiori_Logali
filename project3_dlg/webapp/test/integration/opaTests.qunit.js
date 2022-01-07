/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["dlg03/project3dlg/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
