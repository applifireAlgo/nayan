Ext.define('Project4.project4.shared.project4.model.sales.RetailerModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "retailercode",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "retailername",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "distributorcode",
          "reference": "Distributor",
          "defaultValue": ""
     }, {
          "name": "versionId",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "entityAudit",
          "reference": "EntityAudit"
     }, {
          "name": "primaryDisplay",
          "type": "string",
          "defaultValue": ""
     }]
});