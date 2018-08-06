jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 VEHICLE_VIEW_GROUP in the list

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
		"masteruno/test/integration/MasterJourney",
		"masteruno/test/integration/NavigationJourney",
		"masteruno/test/integration/NotFoundJourney",
		"masteruno/test/integration/BusyJourney",
		"masteruno/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});