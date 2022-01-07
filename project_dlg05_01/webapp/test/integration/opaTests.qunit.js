/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["LogaliOdata/projectdlg0501/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
