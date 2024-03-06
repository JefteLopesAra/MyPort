sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/PDFViewer",
	"sap/ui/model/json/JSONModel"
], function (
	Controller, PDFViewer, JSONModel
) {
	"use strict";

	return Controller.extend("sap.devs.port.myport.controller.Menu", {
		onInit: function () {
			var iCheckCarousel = this._getCheckCarouselValue();

			this.oViewModel = new JSONModel({
				CheckCarousel: iCheckCarousel,
				Projects: []

			});
			this.getView().setModel(this.oViewModel);

			var oProjectsModel = new JSONModel("./model/AllProjects.json");
			oProjectsModel.dataLoaded().then(function () {
				this.oViewModel.setProperty("/Projects", oProjectsModel.getData())
			}.bind(this));
		},
		_getCheckCarouselValue: function () {
			if (this._isMobile()) {
				return 1;
			} else if (this._isTablet()) {
				return 2;
			} else {
				return 3;
			}
		},
		_isMobile: function () {
			return window.innerWidth <= 768;
		},
		_isTablet: function () {
			return window.innerWidth <= 1024 && window.innerWidth > 768;
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