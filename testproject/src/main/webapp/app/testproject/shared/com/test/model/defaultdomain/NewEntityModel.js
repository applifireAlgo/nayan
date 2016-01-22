Ext.define('Testproject.testproject.shared.com.test.model.defaultdomain.NewEntityModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "newId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "nName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "nNo",
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