sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TMR.TMR.controller.View1", {
		onInit: function () {
			var oSelect = this.getView().byId("idTypeCombo");
			var newItem = new sap.ui.core.Item({ key: "E", text: "Employee"});
			oSelect.addItem(newItem);
			newItem = new sap.ui.core.Item({ key: "M", text: "Machine"});
			oSelect.addItem(newItem);
			newItem = new sap.ui.core.Item({ key: "R", text: "Routing States"});
			oSelect.addItem(newItem);
		},
		
		
		onPressGo: function (oEvent) {
			var type = this.getView().byId("idTypeCombo").getValue();
	        if(type == "")
	        {
	        	sap.m.MessageToast.show("Please select Type");
	        	return;
	        }
		},
		
		onPressValues: function (oEvent) {
			var type = this.getView().byId("idTypeCombo").getValue();
	        if(type == "")
	        {
	        	sap.m.MessageToast.show("Please select Type");
	        	return;
	        }
		},
		
		
		onChangeType : function (oEvent){
				var oSelect = this.getView().byId("idValues");
				var type = this.getView().byId("idTypeCombo").getSelectedKey();
				oSelect.removeAllItems();
				oSelect.setSelectedKey("");

				 //var b = sap.ui.getCore().getControl('idTypeCombo').getKey();
               //sap.m.MessageToast.show(type);
               if(type == "E"){
               	//sap.m.MessageToast.show(type);
	              var  ddlValues = [
		               	{name:"Prakash",city:"Abc"},
						{name:"Pravin", city:"Abc"},
						{name:"Jackson", city:"Abc"},
						{name:"Mike", city:"Abc"},
					];

					$.each(ddlValues, function(i, value){
						var oItem = new sap.ui.core.ListItem();
						oItem.setText(value.name);
						oSelect.addItem(oItem);
					});
               }
             else if(type == "M"){
               	//sap.m.MessageToast.show(type);
	              var  ddlMachineValues = [
		               	{name:"Machine1",city:"Abc"},
						{name:"Machine2", city:"Abc"},
						{name:"Machine3", city:"Abc"},
						{name:"Machine4", city:"Abc"},
					];

					$.each(ddlMachineValues, function(i, value){
						var oItem = new sap.ui.core.ListItem();
						oItem.setText(value.name);
						oSelect.addItem(oItem);
					});
               }
               else if(type == "R"){
               	//sap.m.MessageToast.show(type);
	              var  ddlRouteValues = [
		               	{name:"Route1",city:"Abc"},
						{name:"Route2", city:"Abc"},
						{name:"Route3", city:"Abc"},
						{name:"Route4", city:"Abc"},
					];

					$.each(ddlRouteValues, function(i, value){
						var oItem = new sap.ui.core.ListItem();
						oItem.setText(value.name);
						oSelect.addItem(oItem);
					});
               }
               
		}
	});
});