sap.ui.controller("ui5_test.UI5_test", {
	
	

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5_test.UI5_test
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5_test.UI5_test
*/
//	onBeforeRendering: function() {
//
//	},
	
	onShowText : function() {
		
		confirm("What is the name of player on picture?");
		
//		var oDunk = this.getView().byId("dunk");
//		var oPass = this.getView().byId("pass");
//		var oCarusel = this.getView().byId("test");
//		var activePage = oCarusel.getActivePage();
//		
//		if(oDunk.sId === activePage){
//			alert("MJ leci jak ptak");
//		}else if(oPass.sId === activePage){
//			alert("MJ dyrygent");//		
//			
//		}
	},
	
	onPageChanged : function(oEvent) {
		
		var carusel = oEvent.getSource().getActivePage();
		
		
	},
	
	checkAnswer : function() {
			
		var oCarusel = this.getView().byId("test");
		var activePage = oCarusel.getActivePage();
		var oPlayer = this.getView().byId(activePage);
		var oPlayerNameFromId = oPlayer.sId;
		var splitName = oPlayerNameFromId.split('--');
		var answer = this.getView().byId("answer").getValue().toLowerCase();
		
		if(answer === splitName[1]){
			alert("Yes sir!!");
		}
		else {
			alert("Nop");
		}
		
		this.getView().byId("answer").setValue("");
		
	},
	
	onAfterRendering: function() {
        var self = this;
        jQuery("input").on("keydown",
          function(evt) {
            if (evt.keyCode == 13) {
            self.checkAnswer();
            }
          });
 },
	

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5_test.UI5_test
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5_test.UI5_test
*/
//	onExit: function() {
//
//	}

});
