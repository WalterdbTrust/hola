jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"masteruno/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"masteruno/test/integration/pages/App",
	"masteruno/test/integration/pages/Browser",
	"masteruno/test/integration/pages/Master",
	"masteruno/test/integration/pages/Detail",
	"masteruno/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "masteruno.view."
	});

	sap.ui.require([
		"masteruno/test/integration/NavigationJourneyPhone",
		"masteruno/test/integration/NotFoundJourneyPhone",
		"masteruno/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});