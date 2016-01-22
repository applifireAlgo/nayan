Ext.define('Testproject.testproject.shared.com.test.model.defaultdomain.CaseSubmitionModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "caseId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "caseNo",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "caseName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "caseDesc",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "submitionDate",
          "type": "date",
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