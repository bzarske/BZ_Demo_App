/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nsDemoApp/HTML5Module/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
