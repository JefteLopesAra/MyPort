sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/m/PDFViewer",
	"sap/ui/model/json/JSONModel"
], function (
	Controller, Device, PDFViewer, JSONModel
) {
	"use strict";

	return Controller.extend("sap.devs.port.myport.controller.Menu", {
		onInit: function () {
			
		},
		onDownloadPDFCurriculum: function () {
			var pdfUrl = "image/PDF/Curriculo.pdf"; 
			var fileName = "Curriculo.pdf";

			var link = document.createElement("a");
			link.href = pdfUrl;
			link.download = fileName;
			link.click();
		},

		onRedirectToLinkedin: function () {
			var linkedinProfileURL = "https://www.linkedin.com/in/jeft%C3%A9-lopes-9288852a9/";
			window.open(linkedinProfileURL);
		},
		onRedirectToGitHub: function () {
			var linkedinProfileURL = "https://github.com/JefteLopesAra";
			window.open(linkedinProfileURL);
		}
	});
});