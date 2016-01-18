Ext.define('Project4.project4.shared.project4.model.sales.UserAccessModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "userid",
          "reference": "User",
          "defaultValue": ""
     }, {
          "name": "region",
          "reference": "SalesRegion",
          "defaultValue": ""
     }, {
          "name": "primaryKey",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "userAccessId",
          "type": "int",
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