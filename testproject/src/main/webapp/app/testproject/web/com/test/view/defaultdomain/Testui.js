Ext.define('Testproject.testproject.web.com.test.view.defaultdomain.Testui', {
     "xtype": "testui",
     "name": "Info",
     "items": [{
          "xtype": "datefield",
          "fieldLabel": "Date",
          "name": "tdate",
          "bindable": "tdate",
          "margin": 5,
          "title": "Date",
          "itemId": "jgenkei",
          "isRelatedWith": "lggfibi",
          "submitFormat": "d-m-Y H:m:s"
     }, {
          "xtype": "combo",
          "name": "tName",
          "margin": 5,
          "bindable": "tName",
          "typeAhead": true,
          "queryMode": "local",
          "minChars": 1,
          "fieldLabel": "Name",
          "displayField": "tName",
          "valueField": "testId",
          "title": "Name",
          "itemId": "aanepji",
          "store": {
               "model": "Testproject.testproject.shared.com.test.model.defaultdomain.TestModel",
               "autoLoad": true,
               "autoSync": true,
               "sorters": [{
                    "property": "tName",
                    "direction": "ASC"
               }],
               "proxy": {
                    "type": "ajax",
                    "url": "secure/Test/findAll",
                    "actionMethods": {
                         "read": "GET"
                    },
                    "headers": {
                         "Content-Type": "application/json"
                    },
                    "extraParams": {},
                    "reader": {
                         "type": "json",
                         "rootProperty": "response.data"
                    }
               }
          }
     }, {
          "xtype": "hiddenfield",
          "fieldLabel": "Testid",
          "bindable": "testId",
          "margin": 5,
          "name": "testId",
          "title": "Testid",
          "itemId": "cfpfkhi"
     }],
     "border": true,
     "autoScroll": true,
     "title": "Info",
     "margin": 5,
     "itemId": "ncjfdmi",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "button",
               "name": "Submit",
               "pluginName": "geolocation",
               "isNativeWidget": true,
               "isNativeGeoBtn": true,
               "text": "Submit",
               "margin": 5,
               "isSubmitBtn": true,
               "itemId": "elfmeci",
               "listeners": {
                    "click": "onSubmitclick"
               }
          }],
          "itemId": "cfofmei",
          "dockedItems": []
     }],
     "requires": ["Testproject.testproject.shared.com.test.model.defaultdomain.TestModel", "Testproject.testproject.web.com.test.controller.defaultdomain.TestuiController", "Testproject.testproject.shared.com.test.viewmodel.defaultdomain.TestuiViewModel", "Testproject.testproject.shared.com.test.model.defaultdomain.TestuiModel"],
     "extend": "Ext.form.Panel",
     "listeners": {
          "afterrender": "onInfoafterrender",
          "scope": "controller"
     },
     "viewModel": "TestuiViewModel",
     "controller": "TestuiController"
});