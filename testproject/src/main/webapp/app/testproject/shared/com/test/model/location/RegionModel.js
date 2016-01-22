Ext.define('Testproject.testproject.shared.com.test.model.location.RegionModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "regionId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "countryid",
          "reference": "Country",
          "defaultValue": ""
     }, {
          "name": "stateid",
          "reference": "State",
          "defaultValue": ""
     }, {
          "name": "regionName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "regionCode1",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "regionCodeChar2",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "regionDescription",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "regionFlag",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "regionLatitude",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "regionLongitude",
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